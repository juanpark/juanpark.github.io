# Jeong Hwan Park (박정환 | Juan)
**Backend & Infra Engineer**

juanpark80@gmail.com | [juanpark.github.io](https://juanpark.github.io) | [linkedin.com/in/juanpark80](https://linkedin.com/in/juanpark80)

---

## Profile

Backend and infrastructure engineer running production services on AWS and GCP. I maintain Lokma, a live webtoon platform (rebuilding its backend from PHP/Drupal to Spring Boot, maintaining the Flutter apps, cutting infra cost), and build AI Slack tools with Python/FastAPI for an enterprise client (Slough Align).

Comfortable across Infrastructure as Code (Terraform, Ansible, CloudFormation), Docker/Kubernetes, and CI/CD. I came to engineering from management and international operations, and I'm bilingual in Korean and English.

**Background:** Business Administration → Backend Development Bootcamp (2025) → Production system maintenance, infrastructure projects, and AI platform development

---

## Technical Skills

**Backend:** Java, Spring Boot, Spring Security, Python, FastAPI, OAuth2, REST API, WebSocket, SSE  
**AI/LLM:** LangGraph, RAG, pgvector, OpenAI API, Claude API, LiteLLM  
**DevOps:** Docker, Kubernetes, Terraform, Ansible, Jenkins, GitHub Actions  
**Cloud:** AWS (EC2, RDS, S3, EKS, CloudFront, ALB, VPC, CloudFormation, Bedrock), GCP (Kubernetes, Firebase, Cloud Run)  
**Databases:** MySQL, PostgreSQL, MongoDB, Redis  
**Monitoring:** Prometheus, Grafana, K6 load testing  
**Mobile:** Flutter (iOS/Android maintenance)  
**Continuous Learning:** Active on Baekjoon/solved.ac (Gold tier)

---

## Experience

### Lokma Studio — Technical Maintainer
*June 2025 - Present | Remote (Korea)*

Solo maintainer of live webtoon platform serving iOS and Android users during organizational transition.

- **Backend migration:** Built complete Spring Boot API (43 endpoints) replacing legacy PHP/Drupal backend, deployed on GCP Cloud Run with scale-to-zero
  - 5-layer architecture: Repository → Projection → Mapper → Service → Controller
  - Advisory locking for race conditions (bookmarks, unlocks, FCM tokens)
  - Idempotent endpoints (orders via transaction ID, gifts via INSERT IGNORE)
  - Cloudflare Workers for path-based routing (`/v2/*` → Cloud Run, `/*` → Drupal)
- **Flutter migration:** Migrated iOS/Android clients to the new API using the Strangler Fig pattern — apps in final testing/polish before release (v1.4.0)
  - UUID → Numeric ID conversion, JSON:API → flat JSON parsing
  - Both systems running simultaneously with zero downtime
- **Admin rebuild:** Building a new React/TypeScript admin console (Vite, Tailwind, Shadcn) to replace the remaining Drupal admin
- **Infrastructure optimization:** Reduced cloud costs from $570/mo to $347/mo (39% reduction); projected $111/mo after Drupal retirement
  - Cloud SQL right-sizing (2 vCPU → 1 vCPU, 200GB → 50GB), deleted unused Redis
  - Vendor audit: canceled SendGrid Marketing ($50/mo), downgraded Zendesk ($44/mo saved)
- **iOS app recovery:** Restored payment module and resolved dependency conflicts (v1.2.8, v1.2.9)
- **Kubernetes troubleshooting:** Diagnosed and fixed service outage caused by zone misconfiguration on GCP

**Tech Stack:** Java, Spring Boot, Flutter, React, TypeScript, MySQL, GCP (Cloud Run, Cloud SQL, GKE), Cloudflare, Firebase

*🔗 [iOS App Store](https://apps.apple.com/us/app/lokma-webtoon/id1643417039) • [Google Play](https://play.google.com/store/apps/details?id=com.lokmastudio.android) • [lokmastudio.com](https://lokmastudio.com)*

### Slough / Slough Align — Backend & AI Developer
*Dec 2025 – Present | Central Makeus Challenge → Contract (SoftSquared/Gridge)*

Two AI Slack tools, built in the CMC accelerator and continued as paid contract work for SoftSquared (Gridge).

**Slough — Persona-Based AI Slack Bot:**
- Built RAG + persona pipeline with LangGraph, pgvector, and GPT-4o
- Bot learns from decision-maker's Slack conversation history and answers employee questions in their persona
- 3-layer memory management, safety measures (high-risk keyword detection, prohibited domain blocking)
- Deployed on AWS ECS Fargate with Redis + Celery async task queue

**Slough Align — Organizational Alignment Platform:**
- AI analyzes CEO townhall transcripts, extracts core claims, generates tiered quizzes (MCQ + short-answer + essay)
- Designed two-tier retrieval: full transcript as primary context, summary-routed knowledge base for supplementary docs
- Chose direct SDK calls over LangChain/LangGraph for better control and debuggability
- Claude Sonnet for quiz generation/grading, GPT-4o for document preprocessing via LiteLLM
- Production MVP live, 58 API endpoints
- React dashboard for alignment scores and metacognitive level visualization
- Full CloudFormation IaC, GitHub Actions CI/CD, Slack OIDC authentication

**Team Memory MCP Server:**
- Built an MCP server (Java 21, Spring Boot 3.5, Spring AI, Postgres 16/pgvector) that extracts structured meaning (claims, tasks, relations) from a team's evidence layer via LLM and exposes it to AI agents
- MCP tools over Streamable HTTP (`get_team_memory_snapshot`, `get_current_status_board`, `get_task_context`) plus a REST API for the frontend
- Per-team API-key auth (bcrypt at rest), AOP audit logging, Prometheus metrics; 330+ tests against Testcontainers Postgres

**CMC Program:** 1st BUG Cohort (Busan/Ulsan/Gyeongnam), Developer Track (Dec 2025 – Mar 2026). Excellence Award (우수상) at Demoday.

**Tech Stack:** Python, FastAPI, LangGraph, pgvector, OpenAI GPT-4o, Claude, LiteLLM, Java 21, Spring Boot 3.5, Spring AI, MCP, PostgreSQL, Redis, Celery, Slack Bolt, React, AWS (ECS Fargate, EC2, RDS, CloudFront, CloudFormation), GitHub Actions

---

## Technical Projects

### MYCE — Exhibition Lifecycle Management Platform
*Technical Architect & Infrastructure Lead | Team project (8 members)*

Led infrastructure architecture and DevOps for exhibition management platform.

**Infrastructure as Code (100% Ownership):**
- Built complete AWS infrastructure using Terraform and Ansible: VPC, EKS, RDS, S3, CloudFront, ALB, IAM roles
- Modularized Terraform configurations for reproducibility (terraform apply recreates entire infrastructure)
- Created Ansible playbooks for automated server configuration (Docker, Redis, Prometheus, Grafana)

**CI/CD & Production Operations:**
- Implemented dual GitHub Actions pipelines: backend containers to EKS, frontend to S3/CloudFront
- Configured Prometheus + Grafana monitoring stack for production observability
- Built K6 load testing infrastructure and validated Kubernetes HPA with 800 concurrent users
- Separated ALB health probes (liveness/readiness) following SRE best practices

**Backend Engineering & Architecture:**
- Led AI chatbot implementation using AWS Bedrock Nova Lite
- Solved critical OAuth2 scaling issue by implementing Redis-based session storage for stateless horizontal scaling
- Designed multi-datasource architecture coordinating MySQL (transactional), MongoDB (chat history), and Redis (sessions/pub-sub)
- Fixed Spring Data Repository scanning conflicts in multi-datasource environment

**Cost Optimization & Operations:**
- Selected GitHub Actions over paid CI/CD services (free for public repos, $0 vs Jenkins EC2 ~$10/month)
- Architected frontend with S3 + CloudFront (cheaper than EC2 for static hosting)
- Designed Terraform infrastructure for flexible scaling (variable-based resource counts)
- Post-demo optimization: scaled down from 5 EC2 instances → 1, EKS → Docker Compose, maintaining service availability
- Planned AWS → GCP migration with 98.5% cost reduction analysis ($53.38 → $0.81/month)

**Team Enablement:**
- Created 100+ page technical guide covering infrastructure, CI/CD, troubleshooting, and team workflows
- Managed database access for 8 team members with SSH tunneling and individual accounts
- Documented all architectural decisions with rationale for team reference

**Tech Stack:** Spring Boot 3.5, React, AWS EKS, Terraform, Ansible, GitHub Actions, Docker, MySQL, MongoDB, Redis, S3, CloudFront, Prometheus, Grafana, K6, AWS Bedrock

*🔗 [myce.live](https://myce.live) • [Blog Post](https://blog.naver.com/drakor/224069375028) • [Technical Docs](https://docs.google.com/document/d/1JMvKUZnNZp7ymp53CphnTlzWFBehL01zWHNTYkxG7E0/edit?usp=sharing)*

### JobDam — Job Listing Platform
*Authentication & Full-Stack Infrastructure Lead | Team project*

Built authentication system and full-stack CI/CD infrastructure for dual-repository architecture.

**Dual-Repository CI/CD:**
- Architected single Jenkins managing separate backend (Maven + Docker → EC2) and frontend (Vite → NGINX) pipelines
- Configured NGINX reverse proxy on single EC2: /api → Spring Boot container, / → React static files
- Managed environment variable separation (.env.backend, .env.frontend) preventing config conflicts

**Authentication System:**
- Implemented dual OAuth2 authentication (Google + Kakao) with JWT access/refresh token system
- Built SecurityConfig, CustomOAuth2UserService, and token management endpoints
- Configured CORS handling for cross-origin authentication flows

**Production Troubleshooting:**
- Debugged 502 Bad Gateway errors (proxy_pass misconfiguration in NGINX)
- Resolved CORS blocking issues between dev/prod environments
- Fixed JWT filter conflicts blocking OAuth callback paths
- Stabilized RDS connection pooling with HikariCP configuration

**Team Collaboration:**
- Built auth + CI/CD infrastructure enabling team to focus on features
- Teammates developed: payment integration (rktclgh), SNS features (sunhyun0508), community (구본엽)

**Tech Stack:** Spring Boot 3.5, Spring Security, OAuth2, JWT, Java 21, React, Vite, Jenkins, Docker, AWS EC2, RDS, MySQL 8, MongoDB Atlas, NGINX, Let's Encrypt, Prometheus, Grafana

*🔗 [jobdams.online](https://www.jobdams.online) • [Backend Repo](https://github.com/LionPay-LikeLion/jobdam) • [Frontend Repo](https://github.com/LionPay-LikeLion/jobdam-frontend) • [Blog Post](https://blog.naver.com/drakor/224069242269)*

### KnockSea — Containerized Deployment with Monitoring
*Individual project: AWS deployment with automated pipeline*

Built and deployed dockerized application with complete CI/CD and monitoring setup.

- Implemented Jenkins pipeline automating Docker image builds and EC2 deployments
- Set up Prometheus and Grafana for application and system metrics monitoring
- Debugged production memory issue: identified OOM crash through log analysis, migrated to AWS RDS to resolve

**Tech Stack:** Docker, Jenkins, AWS (EC2, RDS), Prometheus, Grafana, Nginx

### Used Lion — First Deployment Experience
*Individual project: on-premise server setup*

Initial hands-on experience with server configuration and deployment.

- Configured NGINX reverse proxy with automated Let's Encrypt SSL certificate renewal
- Basic server monitoring and log management

**Tech Stack:** Mac Mini, NGINX, Let's Encrypt

---

## Documentation & Communication

Created comprehensive technical documentation for production systems:
- **MYCE**: 100+ page technical guide covering infrastructure setup, CI/CD workflows, troubleshooting procedures, architectural decisions, and team collaboration processes - enabled 8-person team to work independently
- **All Projects**: Maintain detailed docs on setup, deployment, incident postmortems that teammates reference regularly
- **Technical Blog**: Active Naver blog documenting DevOps journey, infrastructure challenges, and problem-solving approaches

Strong technical writing skills demonstrated through architecture decision documentation, cost analysis reports, and migration planning.

---

## Earlier Career

**Background:** Transitioned into backend engineering from management and international communication roles.

**Key Experience:**
- **Republic of Korea Air Force — Interpreter Officer** (2006–2009): Liaison for foreign military officials during international exercises and Seoul ADEX. Delivered real-time translations of technical briefings.
- **Executive & Operations Roles** (2011–2023): Executive Director managing ~60 staff; oversaw compliance, operations, and international collaboration. Consultant and Freelance interpreter for defense, medical, and tech exhibitions (KINTEX, COEX).

**Transferable Skills:** Cross-functional communication, stakeholder management, documentation, operations under pressure, bilingual technical facilitation.

---

## Education

**LikeLion x Ministry of Employment and Labor — Backend Development Bootcamp**
*February 2025 – August 2025 | Korea Digital Training Program*

Intensive full-stack backend training program (6 months, full-time):
- **Core Technologies:** Java, Spring Boot, Spring Security, MySQL, MongoDB, Redis, REST APIs, Git, Docker, CI/CD
- **Team Projects:** Built and deployed 4 production-grade applications to AWS with automated CI/CD pipelines
- **Documentation Practice:** Authored comprehensive technical documentation for every project - setup guides, architecture diagrams, troubleshooting procedures, team onboarding materials
- **DevOps Focus:** Hands-on experience with Jenkins, Docker, AWS (EC2, RDS, S3, EKS), Terraform, Ansible, monitoring tools

**Seoul National University — B.B.A., Business Administration**
*1999–2005*

---

## Certifications & Availability

**Certifications:** Claude Certified Architect – Foundations (CCA-F) — Anthropic Education (2026), AWS Certified Cloud Practitioner (2025), Central Makeus Challenge — 1st BUG Cohort, Developer Track (Dec 2025 – Mar 2026, Excellence Award), Driver's License (Korea)

**Work Authorization:** Korean citizen

**Availability:** Immediate; flexible for weekend/on-call rotations as needed

---

## Additional Information

**Languages:** Korean/English (bilingual)

Known for thorough documentation — teammates reference my technical guides regularly. Came to engineering from management and international operations.
