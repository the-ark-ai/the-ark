#!/usr/bin/env python3
"""Add /no_think to fast model calls and strip <think> tags from responses."""

# --- Patch llm_tasks.py ---
with open("/opt/bitcoin-agent/scripts/llm_tasks.py", "r") as f:
    content = f.read()

# 1. Add /no_think to system prompt for fast model tasks
old = '    system_prompt = ARK_IDENTITY + SYSTEM_PROMPTS[task_type]'
new = '''    system_prompt = ARK_IDENTITY + SYSTEM_PROMPTS[task_type]
    # Disable thinking mode for fast-tier model (Qwen3 outputs <think> tags by default)
    if task_type not in POWER_TASKS:
        system_prompt += " /no_think"'''
if '/no_think' not in content:
    content = content.replace(old, new)

# 2. Strip <think> tags from _call_openai response
old_return = '''    choice = data["choices"][0]["message"]["content"]'''
new_return = '''    choice = data["choices"][0]["message"]["content"]
    # Strip Qwen3 thinking tags if present
    import re as _re_strip
    choice = _re_strip.sub(r"<think>.*?</think>\\s*", "", choice, flags=_re_strip.DOTALL).strip()'''
if '_re_strip' not in content:
    content = content.replace(old_return, new_return)

with open("/opt/bitcoin-agent/scripts/llm_tasks.py", "w") as f:
    f.write(content)
print("OK llm_tasks.py no_think patched")

# --- Patch server.py streaming to add /no_think and strip tags ---
with open("/opt/bitcoin-agent/scripts/server.py", "r") as f:
    srv = f.read()

# Add /no_think to streaming system prompt for fast tasks
old_stream_sys = '''                            json={
                                "model": "Qwen/Qwen3-VL-30B-A3B-Instruct" if req.image else model,
                                "messages": [
                                    {"role": "system", "content": system_prompt},'''
new_stream_sys = '''                            json={
                                "model": "Qwen/Qwen3-VL-30B-A3B-Instruct" if req.image else model,
                                "messages": [
                                    {"role": "system", "content": system_prompt + (" /no_think" if req.task not in POWER_TASKS else "")},'''
if '/no_think' not in srv:
    srv = srv.replace(old_stream_sys, new_stream_sys)
    print("OK server.py streaming /no_think patched")
else:
    print("SKIP server.py already has /no_think")

with open("/opt/bitcoin-agent/scripts/server.py", "w") as f:
    f.write(srv)
print("OK done")
