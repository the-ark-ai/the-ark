# PPQ Partnership Meeting Prep
**Date:** March 2026 | **Prepared by:** The Ark ⚡

---

## 1. Who Is PPQ (Pay Per Q)?

- **Website:** ppq.ai | **Stats:** stats.ppq.ai
- Pay-per-query AI platform — no subscriptions, pay-as-you-go
- Supports text, image, and video AI models (OpenAI, Anthropic, Meta, Perplexity, etc.)
- Accepts crypto + credit card payments
- Average user spends ~$4/month, ~2 cents per query
- They're building a **creator marketplace** — outside developers build tools, PPQ serves them, creators get Lightning payouts per use

## 2. What They Want From Us

- Build tools that run on their platform
- They handle users, payments, and distribution
- We get paid per use via Lightning
- **Specific ideas they pitched:**
  1. File converter tool (using Convertio API)
  2. Bitcoin search chat (wrapping chat.bitcoinsearch.xyz)
  3. "Many other ideas"

## 3. What We Bring to the Table

- **120+ AI-powered services** already built and working
- Lightning-native payment infrastructure (L402 protocol)
- Working stack: FastAPI + Phoenixd + LNbits
- Domain expertise in Bitcoin/Lightning + AI intersection
- Services include: translation, code generation, research, summarization, image analysis, and many more

## 4. Key Questions to Ask PPQ

### Volume & Economics
- [ ] How many active users does PPQ have currently?
- [ ] What's the average revenue per tool/creator per month?
- [ ] What's the creator payout split? (What % do they take?)
- [ ] What are the top-performing tools earning right now?
- [ ] How are creator payouts calculated — per query, per token, flat fee?
- [ ] Is there a minimum payout threshold?
- [ ] How often are Lightning payouts sent?

### Technical
- [ ] What's the integration process? API? SDK? Docker containers?
- [ ] Do we host the backend, or do they?
- [ ] What user data do we get access to? (usage stats, feedback, etc.)
- [ ] Can we bring our own AI models/endpoints, or must we use theirs?
- [ ] What's the latency requirement?

### Business Terms
- [ ] Is this exclusive? Can we still run our own platform?
- [ ] Who owns the tools we build? Can we pull them off PPQ anytime?
- [ ] Is there a contract or terms of service for creators?
- [ ] Do they handle support for end users, or do we?
- [ ] Any upfront costs or fees to list tools?

### Strategic
- [ ] How many creators do they have currently?
- [ ] What's their roadmap for the creator program?
- [ ] Are they open to white-labeling or co-branding?
- [ ] Would they be interested in using our L402/Lightning infrastructure?

## 5. Our Negotiating Position

### Strengths
- We already have a working product with 120+ services
- Deep Lightning/Bitcoin expertise — rare in the AI space
- We can move fast — tools are already built, just need integration
- We're not desperate — we have our own platform

### Weaknesses
- We have ~0 paying customers currently (0% conversion in last test)
- arknode.ai is still early-stage
- Limited marketing reach
- Solo operation

### Leverage Points
- They reached out to **us** — they need creators
- Our Bitcoin-native expertise is hard to find
- We could be one of their first/best creators if we move early

## 6. Strategy Options

### Option A: Light Partnership (Recommended to start)
- List 2-3 tools on PPQ to test the waters
- Keep building arknode.ai independently
- Learn from their user base what people actually pay for
- **Risk:** Low | **Upside:** Revenue + market intel

### Option B: Deep Integration
- Port many/all of our 120+ services to PPQ
- Become a major creator on their platform
- **Risk:** We become dependent on PPQ, they own the customer relationship
- **Upside:** Potentially significant revenue if their volume is real

### Option C: Infrastructure Partnership
- Instead of building tools FOR them, offer our Lightning payment infrastructure TO them
- Position ourselves as the payment layer, not just a tool creator
- **Risk:** More complex deal | **Upside:** Higher leverage, recurring revenue

### Option D: Decline
- Focus entirely on arknode.ai
- **Risk:** Miss potential revenue and distribution
- **Upside:** Full control, no distractions

## 7. Tools We Could Offer (Start Small)

| Tool Idea | Effort | Our Edge |
|-----------|--------|----------|
| Bitcoin/Lightning Q&A | Low (already built) | Deep domain knowledge |
| Multi-language translator | Low (already built) | 120+ language pairs |
| Code generator/reviewer | Low (already built) | Already working |
| Document summarizer | Low (already built) | Already working |
| File converter (their idea) | Medium (need Convertio API) | New build needed |

**Recommendation:** Start with tools we've ALREADY built. Don't build new stuff for them until we see real revenue.

## 8. Red Flags to Watch For

🚩 They can't share real creator earnings data
🚩 Exclusive terms or lock-in clauses
🚩 They want us to build first, promise payouts later
🚩 The stats page is empty (we noticed this — could mean no traction yet)
🚩 Vague answers about user volume
🚩 They want access to our backend/infrastructure

## 9. What to Share vs. Keep Private

### Safe to Share
- That we have 120+ AI services
- Our Lightning payment expertise
- General architecture (FastAPI, Lightning-native)
- Our interest in the Bitcoin AI space

### Keep Private
- Our 0% conversion rate
- Specific credentials, API keys, server details
- MEMORY.md contents or operational details
- Our full service list (share selectively)

## 10. Ideal Outcome

Walk away from the meeting knowing:
1. ✅ Is PPQ legit? Do they have real users and real revenue?
2. ✅ What would we actually earn per tool per month?
3. ✅ Can we list tools non-exclusively while keeping arknode.ai?
4. ✅ What's the technical integration effort?
5. ✅ Is Option C (infrastructure partnership) on the table?

**Bottom line:** Be friendly, be curious, but don't commit to anything in the first meeting. Get the data, then decide.

## 11. Sharing Infrastructure Without Giving Away Our Sauce

### What We Can Offer PPQ
We position ourselves as an **API provider**, not a "creator" on their platform. Big difference in leverage.

**The Restaurant Analogy:** We're a restaurant on Uber Eats. They handle customers and delivery (PPQ's frontend). We handle the kitchen (AI services, Lightning payments). They never see our recipes.

### What We Share (The Pipes)
- **Clean REST API endpoints** — PPQ calls our API, gets results back. Simple.
- **L402 Payment Gateway** — our Lightning payment flow as a service. They send requests, we handle invoicing + verification.
- **API documentation** — "POST /task with these params, get this response"
- **White-label SDK/API key** — they integrate us like any third-party service (Stripe, Twilio, etc.)

### What Stays Secret (The Sauce)
- ⛔ System prompts and prompt engineering
- ⛔ Model selection logic (which models for which tasks, and why)
- ⛔ Pricing/cost optimization strategies
- ⛔ Service orchestration (how 120+ services are chained and routed)
- ⛔ L402 protocol implementation details
- ⛔ Server architecture, credentials, configurations
- ⛔ Training data, fine-tuning, or custom model configs

### How It Works Technically
```
PPQ User → PPQ Frontend → Our API (POST /task) → Response
                              ↓
                    Lightning payment verified
                              ↓
                    Our backend does the work
                    (models, prompts, orchestration)
                              ↓
                    Result returned to PPQ
```

### Why This Is Better Than Being a "Creator"
| | Creator Model | API Provider Model |
|---|---|---|
| **Who owns the customer?** | PPQ | PPQ (but we're essential) |
| **Can they replace us?** | Easily | Hard — deep integration |
| **Our leverage** | Low | High |
| **IP exposure** | Risk of leaking sauce | Fully protected |
| **Revenue model** | Per-use payout | Per-API-call (we set pricing) |
| **Exclusivity risk** | High | Low — we can serve anyone |

### Talking Points for the Meeting
- "We'd prefer to integrate as an API provider rather than build tools directly on your platform"
- "We can give you access to 120+ AI services through a single API"
- "You handle the frontend and user experience, we handle the AI and Lightning infrastructure"
- "This way both sides keep their competitive advantages"

---

*Good luck, Navigator. You've got this. ⚡*
