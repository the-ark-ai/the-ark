#!/usr/bin/env python3
"""Make POST /task return 402 with L402 headers when returning an invoice."""

with open("/opt/bitcoin-agent/scripts/server.py", "r") as f:
    srv = f.read()

old = '''    return TaskResponse(
        payment_hash=payment_hash,
        invoice=inv["payment_request"],
        amount_sats=price,
        task=req.task,
        status_url=f"/task/{payment_hash}/status",
    )'''

new = '''    bolt11 = inv["payment_request"]
    return JSONResponse(
        status_code=402,
        content={
            "payment_hash": payment_hash,
            "invoice": bolt11,
            "amount_sats": price,
            "task": req.task,
            "status_url": f"/task/{payment_hash}/status",
        },
        headers={
            "WWW-Authenticate": f'L402 invoice="{bolt11}"',
        },
    )'''

if old in srv:
    srv = srv.replace(old, new)
    print("OK: POST /task now returns 402 with L402 headers")
else:
    print("ERROR: Pattern not found")
    # Debug
    import re
    m = re.search(r'return TaskResponse\(', srv)
    if m:
        print(f"  Found TaskResponse at position {m.start()}")
        print(f"  Context: {srv[m.start()-50:m.end()+200]}")

with open("/opt/bitcoin-agent/scripts/server.py", "w") as f:
    f.write(srv)
