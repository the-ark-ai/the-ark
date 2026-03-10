#!/usr/bin/env python3
"""Add model tiering to bitcoin-agent: fast model for cheap tasks, power model for complex ones."""

TIERING_CODE = '''
# ---------------------------------------------------------------------------
# Model Tiering: fast model for cheap tasks, power model for expensive ones
# ---------------------------------------------------------------------------
FAST_MODEL = "Qwen/Qwen3-30B-A3B"
POWER_MODEL = "Qwen/Qwen3-235B-A22B-Instruct-2507"

POWER_TASKS = {
    "code_review", "code_gen", "bug_finder", "unit_test", "security_scan", "secret_scanner",
    "tech_blog", "content_write", "privacy_policy", "terms_gen", "nda_gen", "legal_draft",
    "legal_research", "contract_draft", "contract_gen", "contract_review", "lease_review",
    "business_plan", "pitch_deck", "market_research", "competitive_analysis",
    "medical_summary", "diagnosis_helper", "drug_interaction", "patient_notes",
    "financial_report", "tax_summary", "audit_prep",
    "lesson_plan", "curriculum_design", "study_guide",
    "property_analysis", "listing_write",
    "proposal_write", "proposal_draft", "sow_gen",
    "agent_design", "agent_prompt_eng", "agent_debug",
    "langchain_gen", "langgraph_gen", "multi_agent_gen",
    "data_analyze", "schema_design", "test_plan",
    "api_design", "api_doc", "k8s_gen", "terraform_gen",
    "seo_analysis", "competitor_analysis",
}

def get_model_for_task(task_type, default_model):
    """Return the appropriate model based on task complexity."""
    if task_type in POWER_TASKS:
        return POWER_MODEL
    return FAST_MODEL
'''

# --- Patch llm_tasks.py ---
with open("/opt/bitcoin-agent/scripts/llm_tasks.py", "r") as f:
    content = f.read()

if "FAST_MODEL" not in content:
    lines = content.split("\n")
    insert_idx = 0
    for i, line in enumerate(lines):
        if line.startswith("import ") or line.startswith("from "):
            insert_idx = i + 1
    lines.insert(insert_idx, TIERING_CODE)
    content = "\n".join(lines)

old_model = '    model = llm_config.get("model", "gpt-4o-mini")'
new_model = '    model = get_model_for_task(task_type, llm_config.get("model", "gpt-4o-mini"))'
content = content.replace(old_model, new_model)

with open("/opt/bitcoin-agent/scripts/llm_tasks.py", "w") as f:
    f.write(content)
print("OK llm_tasks.py patched")

# --- Patch server.py ---
with open("/opt/bitcoin-agent/scripts/server.py", "r") as f:
    srv = f.read()

if "get_model_for_task" not in srv:
    old_imp = "from llm_tasks import execute_task as _execute_task_raw, estimate_price, TASK_TYPES, text_to_speech, generate_image, edit_image, african_text_to_speech, african_transcribe, AFRICAN_TTS_VOICES, AFRICAN_TTS_LANGUAGES"
    new_imp = old_imp + "\nfrom llm_tasks import get_model_for_task, FAST_MODEL, POWER_MODEL"
    srv = srv.replace(old_imp, new_imp)

old_stream = '    model = llm_config.get("model", "Qwen/Qwen3-32B")'
new_stream = '    model = get_model_for_task(req.task, llm_config.get("model", "Qwen/Qwen3-32B"))'
srv = srv.replace(old_stream, new_stream)

with open("/opt/bitcoin-agent/scripts/server.py", "w") as f:
    f.write(srv)
print("OK server.py patched")
