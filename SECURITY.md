# Security Policy

## Supported Versions

The following table lists the active release lines and their current security update support status:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | Yes                |
| < 1.0.0 | No                 |

---

## Reporting a Vulnerability

We take the security of Visual House and its users seriously. If you discover a security vulnerability, we appreciate your help in disclosing it to us in a responsible manner.

### Process

1. **Do not create a public GitHub issue.** Public issues disclose vulnerabilities before patches can be deployed.
2. Send an email detailing the vulnerability to `142787056+itzgauravgoswami@users.noreply.github.com`.
3. Include the following details in your report:
   - Type of issue (e.g., cross-site scripting, injection vulnerability, dependency flaw).
   - Component or file affected.
   - Step-by-step instructions or proof of concept to reproduce the issue.
   - Any potential mitigations or remediation steps you recommend.

### Response Timeline

- **Initial Response**: Within 48 hours acknowledging receipt of your report.
- **Triage & Assessment**: Within 5 business days detailing the severity and planned resolution.
- **Fix & Disclosure**: We will coordinate the release of a security patch and public disclosure once resolved.

---

## Security Best Practices for Deployments

When deploying Visual House in production environments:

- Keep all Node.js and npm dependencies up to date by running regular dependency audits (`npm audit`).
- Ensure all environment variables containing secrets, tokens, or API keys are stored securely and never committed to version control.
- Implement strict Content Security Policy (CSP) and HTTP security headers when hosting on Vercel or custom infrastructure.
- Restrict cross-origin resource sharing (CORS) on any exposed backend API routes.
