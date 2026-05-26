# Jeong Hwan Park (박정환 | Juan)
**Backend & Infra Engineer**

juanpark80@gmail.com | [juanpark.github.io](https://juanpark.github.io) | [linkedin.com/in/juanpark80](https://linkedin.com/in/juanpark80)

---

## Profile

Backend and infrastructure engineer running production services on AWS and GCP. I maintain Lokma, a live webtoon platform (rebuilding its backend from PHP/Drupal to Spring Boot, maintaining the Flutter apps, cutting infra cost), and build AI Slack tools with Python/FastAPI for an enterprise client.

Comfortable across Infrastructure as Code (Terraform, Ansible, CloudFormation), Docker/Kubernetes, and CI/CD. I came to engineering from management and international operations, and I'm bilingual in Korean and English.

---

## Technical Skills

**Backend:** Java, Spring Boot, Spring Security, Python, FastAPI, OAuth2, JWT, REST API, WebSocket, SSE  
**AI/LLM:** LangGraph, RAG, pgvector, OpenAI API, Claude API, LiteLLM  
**DevOps:** Docker, Kubernetes (EKS), Terraform, Ansible, Jenkins, GitHub Actions  
**Cloud:** AWS (EC2, RDS, S3, EKS, CloudFront, ALB, CloudFormation, Bedrock), GCP (Kubernetes, Firebase, Cloud Run)  
**Databases:** MySQL, PostgreSQL, MongoDB, Redis  
**Monitoring:** Prometheus, Grafana, K6 load testing  
**Mobile:** Flutter (iOS/Android maintenance)

---

## Experience

### Lokma Studio — Technical Maintainer
*June 2025 - Present | Remote (Korea)*

Sole maintainer of a live iOS/Android webtoon platform.

- **Backend:** Rebuilt it as a 43-endpoint Spring Boot API on Cloud Run, replacing the legacy PHP/Drupal stack
- **Mobile:** Migrated both apps to the new API (Strangler Fig); now in final testing before release
- **Admin:** Building a React/TypeScript admin to retire the last of Drupal
- **Cost:** Cut infrastructure cost 39% (from $570 to $347/mo), heading to $111 once Drupal is gone
- **Reliability:** Restored the iOS payment module and resolved a production outage from a Kubernetes zone misconfig

**Tech:** Java, Spring Boot, Flutter, React, TypeScript, MySQL, GCP (Cloud Run, Cloud SQL, GKE), Cloudflare, Firebase

*🔗 [iOS App Store](https://apps.apple.com/us/app/lokma-webtoon/id1643417039) • [Google Play](https://play.google.com/store/apps/details?id=com.lokmastudio.android) • [lokmastudio.com](https://lokmastudio.com)*

### Slough / Slough Align — Backend & AI Developer
*Dec 2025 – Present | Central Makeus Challenge → Contract (SoftSquared/Gridge)*

Two AI Slack tools for SoftSquared (Gridge): Slough answers employees from a leader's Slack history; Slough Align turns CEO townhalls into alignment quizzes. Built in the CMC accelerator, continued as paid contract work.

- **Pipeline:** Built the RAG and persona pipeline (LangGraph, pgvector, GPT-4o) with a two-tier retrieval engine
- **MCP server:** Built an MCP server (Java, Spring AI, pgvector) serving structured team memory to AI agents, with API-key auth and 330+ tests
- **Production:** Shipped the MVP — 58 endpoints, Claude + GPT-4o via LiteLLM, on AWS with CloudFormation IaC and GitHub Actions
- **CMC:** 1st BUG Cohort, Excellence Award (우수상) at Demoday

**Tech:** Python, FastAPI, LangGraph, pgvector, OpenAI, Claude, Java 21, Spring AI, MCP, AWS, PostgreSQL, Redis, Celery, Slack Bolt

---

## Key Projects

### MYCE — Exhibition Lifecycle Management Platform
*Technical Architect & Infrastructure Lead | 8-member team*

Infrastructure and DevOps lead for an exhibition management platform.

- **Infrastructure as code:** Owned the full AWS stack in Terraform + Ansible (VPC, EKS, RDS, S3, CloudFront, ALB, IAM) — `terraform apply` rebuilds the whole environment
- **CI/CD:** Dual GitHub Actions pipelines (backend to EKS, frontend to S3/CloudFront)
- **AI + scaling:** Led the AWS Bedrock chat feature; fixed an OAuth2 scaling bug with Redis-backed sessions
- **Team:** Designed the multi-datasource setup (MySQL/MongoDB/Redis) and wrote the 100+ page guide the 8-person team ran on

**Tech:** Spring Boot 3.5, React, AWS EKS, Terraform, Ansible, GitHub Actions, Docker, MySQL, MongoDB, Redis, S3, CloudFront, Prometheus, Grafana, K6, AWS Bedrock

*🔗 [myce.live](https://myce.live) • [Full case study & technical details](https://juanpark.github.io)*

### JobDam — Job Listing Platform
*Authentication & Full-Stack Infrastructure Lead | Team project*

Owned auth and CI/CD for a dual-repo full-stack app.

- **CI/CD:** One Jenkins running both pipelines (backend Maven+Docker to EC2, frontend Vite to NGINX), with NGINX as the gateway (/api to Spring Boot, / to the React build)
- **Auth:** Google + Kakao OAuth2 with JWT access/refresh tokens; debugged 502s, CORS, JWT filter conflicts, and connection pooling in production

**Tech:** Spring Boot 3.5, Spring Security, OAuth2, JWT, Java 21, React, Vite, Jenkins, Docker, AWS (EC2, RDS), MySQL 8, MongoDB Atlas, NGINX, Let's Encrypt, Prometheus, Grafana

*🔗 [jobdams.online](https://www.jobdams.online) • [Full project details](https://juanpark.github.io)*

### Additional Projects

**KnockSea** (DevOps automation), **Used Lion** (first deployment) - See detailed case studies at [juanpark.github.io](https://juanpark.github.io)

---

## Earlier Career

Transitioned into backend engineering from management and international communication roles.

**Republic of Korea Air Force — Interpreter Officer** (2006–2009): Liaison for foreign military officials during international exercises and Seoul ADEX. Delivered real-time translations of technical briefings.

**Executive & Operations Roles** (2011–2023): Executive Director managing ~60 staff; oversaw compliance, operations, and international collaboration. Consultant and Freelance interpreter for defense, medical, and tech exhibitions (KINTEX, COEX).

**Transferable Skills:** Cross-functional communication, stakeholder management, technical documentation, operations under pressure.

---

## Education

**LikeLion x Ministry of Employment and Labor — Backend Development Bootcamp**
*February 2025 – August 2025 | Korea Digital Training Program*

6-month intensive full-stack training: Java, Spring Boot, MySQL, MongoDB, Redis, Docker, AWS, CI/CD. Built and deployed 4 production-grade applications with automated pipelines.

**Seoul National University — B.B.A., Business Administration** (1999–2005)

---

## Certifications

- Claude Certified Architect – Foundations (CCA-F) — Anthropic Education (2026)
- AWS Certified Cloud Practitioner (2025)
- Central Makeus Challenge (CMC) — 1st BUG Cohort, Developer Track (Dec 2025 – Mar 2026), Excellence Award (우수상)

---

## Additional Information

**Languages:** Korean/English (bilingual) | **Work authorization:** Korean citizen | **Availability:** Immediate

Known for thorough documentation — teammates reference my technical guides regularly.

*Full portfolio and blog: [juanpark.github.io](https://juanpark.github.io)*
