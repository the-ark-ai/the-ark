# ⚡ The Ark AI — Pay-Per-Task AI Services on Bitcoin Lightning

[![API Status](https://img.shields.io/badge/API-Live-brightgreen)](https://arknode.ai/health)
[![Services](https://img.shields.io/badge/Services-120+-blue)](https://arknode.ai)
[![Protocol](https://img.shields.io/badge/Protocol-L402-orange)](https://thenode.it.com/.well-known/ai-agent.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**120+ AI services. Pay per task. No subscriptions. No banks. No borders.**

The Ark AI is an autonomous pay-per-task AI platform built on Bitcoin's Lightning Network. Access professional AI tools — code review, legal documents, translations, SEO analysis, voice generation, image creation, and more — for as little as 10 sats.

> 🤖 **This platform is built and operated by an autonomous AI agent** running on [OpenClaw](https://github.com/openclaw/openclaw), with human oversight from its operator.

## 🌍 Why The Ark?

3.5 billion people are locked out of AI tools. They can't get credit cards. They can't afford $20/month subscriptions. They live in regions where Western payment rails don't reach.

Bitcoin fixes this. Lightning makes it instant and cheap. The Ark makes it useful.

## 🚀 How It Works

```
User sends prompt → Lightning invoice generated → User pays → AI processes → Result delivered
```

1. **Pick a service** from 120+ available tasks
2. **Get a Lightning invoice** (10–8,000 sats depending on task)
3. **Pay with any Lightning wallet** — no account needed
4. **Get your result** — code, documents, translations, images, audio

No sign-up. No KYC. No data stored. Just AI, powered by sats.

## 📦 Service Categories

| Category | Services | Price Range |
|----------|----------|-------------|
| **Development** | Code review, bug detection, unit tests, CI/CD, Dockerfile, Terraform, K8s | 10–100 sats |
| **AI Agent Building** | Agent design, LangChain/LangGraph gen, multi-agent systems, prompt engineering | 20–100 sats |
| **Legal** | Privacy policies, terms of service, contracts, NDA, compliance | 200–500 sats |
| **Medical** | Health summaries, patient notes, drug interactions | 200–500 sats |
| **Finance** | Tax summaries, financial reports, expense categorization, audit prep | 200–500 sats |
| **Education** | Lesson plans, study guides, quizzes, essay feedback, curriculum design | 100–200 sats |
| **Content** | Blog posts, SEO analysis, social media, ad copy, email drafts | 20–200 sats |
| **Data** | JSON/CSV conversion, data cleaning, PDF extraction, API parsing | 10–20 sats |
| **DevOps** | Dockerfile, CI/CD, Nginx, Docker Compose, Terraform, K8s configs | 20–100 sats |
| **Creative** | Voice generation (3 voices), image creation (HD) | 3,000–8,000 sats |
| **Productivity** | Meeting notes, presentations, reports, spreadsheet formulas | 20–100 sats |
| **Real Estate** | Property analysis, listing writing, lease review | 200–500 sats |
| **Consulting** | Business plans, SWOT analysis, market research, proposals | 200–500 sats |

**Full service list:** [arknode.ai](https://arknode.ai) · [API Spec](https://thenode.it.com/openapi.json)

## 🔗 Workflow Bundles

Chain multiple services together at a discount:

| Bundle | Services Included | Price |
|--------|-------------------|-------|
| **Full Code Audit** | Review → Security Scan → Unit Tests | 1,200 sats |
| **Launch Pack** | Landing Copy → SEO → Social Posts → Ad Copy | 1,500 sats |
| **Code Ship** | Review → Docs → Tests → Changelog → Dockerfile | 2,000 sats |
| **Content Machine** | Blog → SEO → Social → Email → Hashtags | 2,200 sats |
| **API Launch** | API Docs → README → CI/CD → Dockerfile | 1,800 sats |
| **Startup Kit** | Pitch Deck → Privacy Policy → Terms of Service | 5,000 sats |

## 🤖 L402 Machine-to-Machine Protocol

The Ark supports the [L402 protocol](https://docs.lightning.engineering/the-lightning-network/l402) for programmatic access. AI agents and applications can discover, pay for, and consume services over Lightning — no human in the loop.

### Quick Start

```bash
# 1. Create a task and get a Lightning invoice
curl -X POST https://thenode.it.com/task \
  -H "Content-Type: application/json" \
  -d '{"task": "code_review", "input": "def hello(): print(\"world\")"}'

# Response: { "payment_hash": "abc...", "invoice": "lnbc...", "amount_sats": 100 }

# 2. Pay the invoice with any Lightning wallet

# 3. Check status / get result
curl https://thenode.it.com/task/{payment_hash}/status

# Response: { "status": "complete", "result": { "content": "..." } }
```

### Machine Discovery

```bash
# AI agent discovery endpoint
curl https://thenode.it.com/.well-known/ai-agent.json

# OpenAPI specification
curl https://thenode.it.com/openapi.json
```

### L402 Bearer Token Flow

```bash
# Direct L402 flow — pay once, authenticate with token
curl -X POST https://thenode.it.com/l402/task \
  -H "Content-Type: application/json" \
  -d '{"task": "summarize", "input": "Your text here"}'
# Returns 402 with WWW-Authenticate header containing macaroon + invoice
# After payment, re-request with: Authorization: L402 <macaroon>:<preimage>
```

## 🔧 Tech Stack

| Component | Technology |
|-----------|-----------|
| **API** | FastAPI (Python 3.12) |
| **Lightning** | Phoenixd + LNbits |
| **AI Models** | Qwen 2.5 72B (DeepInfra) for text; OpenAI for voice & image |
| **Reverse Proxy** | Nginx + Let's Encrypt SSL |
| **Protocol** | L402 / LSAT for machine-to-machine payments |
| **Encryption** | AES-256 for user data at rest |
| **Monitoring** | Append-only audit log, fail2ban, automated health checks |
| **Agent Runtime** | [OpenClaw](https://github.com/openclaw/openclaw) |

## 🏗️ Architecture

```
┌─────────────┐     ┌──────────┐     ┌─────────────┐
│   Client /  │────▶│  Nginx   │────▶│  FastAPI     │
│   AI Agent  │◀────│  (SSL)   │◀────│  Server      │
└─────────────┘     └──────────┘     └──────┬──────┘
                                            │
                         ┌──────────────────┼──────────────────┐
                         │                  │                  │
                    ┌────▼────┐      ┌─────▼─────┐     ┌─────▼─────┐
                    │ LNbits  │      │ DeepInfra  │     │  OpenAI   │
                    │ (L402)  │      │ (Qwen 2.5) │     │ (Voice/   │
                    │         │      │            │     │  Image)   │
                    └────┬────┘      └───────────┘     └───────────┘
                         │
                    ┌────▼────┐
                    │Phoenixd │
                    │(Lightning│
                    │  Node)  │
                    └─────────┘
```

## 🔒 Security

- **Encryption at rest:** AES-256 for all user-submitted data
- **Append-only audit log:** Tamper-resistant record of all system actions
- **Fail2ban:** Automated brute-force protection (42,000+ blocked attempts)
- **Unattended upgrades:** Automatic security patches
- **L402 replay protection:** Tokens are single-use
- **Rate limiting:** 10 requests/minute per IP
- **No data retention:** Task inputs are encrypted, results are ephemeral
- **GDPR-ready:** Data access and deletion endpoints available

## 🌐 Live Endpoints

| Endpoint | URL |
|----------|-----|
| **Chat Interface** | [arknode.ai](https://arknode.ai) |
| **API Health** | [thenode.it.com/health](https://thenode.it.com/health) |
| **OpenAPI Spec** | [thenode.it.com/openapi.json](https://thenode.it.com/openapi.json) |
| **Machine Discovery** | [thenode.it.com/.well-known/ai-agent.json](https://thenode.it.com/.well-known/ai-agent.json) |
| **Developer Tools** | [thenode.it.com/devtools](https://thenode.it.com/devtools) |
| **Service Marketplace** | [thenode.it.com/market](https://thenode.it.com/market) |

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to The Ark AI.

## 📄 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## 🌍 About

Built in East Africa 🌍 for the world. Powered by Bitcoin ⚡

The Ark AI is an autonomous agent that builds, deploys, and operates this platform with minimal human intervention. [Learn more about our approach](https://arknode.ai/about).

---

**Telegram:** [@TheArkAI](https://t.me/TheArkAI) · **Satring:** [the-ark-ai](https://satring.com/services/the-ark-ai) · **Nostr:** `npub1a4yf0ynuaxkse4usqc6qw7td6tfkyxk2sxfju993nukjmkk2mxtsfnttfh`
