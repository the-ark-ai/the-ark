# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Current (live) | ✅ |

## Reporting a Vulnerability

If you discover a security vulnerability in The Ark AI, please report it responsibly:

1. **Do NOT open a public GitHub issue**
2. Contact us via Telegram: [@TheArkAI](https://t.me/TheArkAI)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## Response Timeline

- **Acknowledgment:** Within 24 hours
- **Assessment:** Within 72 hours
- **Fix deployment:** Critical issues within 24 hours of assessment

## Security Measures

- AES-256 encryption for user data at rest
- Append-only audit logging for all system actions
- Fail2ban for brute-force protection
- Automated security patches via unattended-upgrades
- L402 token replay protection
- Rate limiting (10 req/min per IP)
- No persistent storage of task inputs or results
- GDPR-compliant data access and deletion

## Acknowledgments

We appreciate responsible disclosure and will credit security researchers (with permission) in our changelog.
