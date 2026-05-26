# 박정환 (Jeong Hwan Park | Juan)

**백엔드 & 인프라 엔지니어**

juanpark80@gmail.com | juanpark.github.io | linkedin.com/in/juanpark80

---

## 프로필

운영 중인 서비스를 끝까지 책임지는 백엔드·인프라 엔지니어입니다. 현재 웹툰 플랫폼 Lokma를 단독으로 맡아 레거시 PHP/Drupal 백엔드를 Spring Boot로 재구축하고 iOS/Android 앱과 클라우드 인프라를 함께 운영하고 있습니다. 무중단 운영을 유지하며 인프라 비용을 39% 절감했습니다. 신규 기능도 중요하지만 서비스 안정성과 운영 효율을 우선합니다.

최근에는 기업 고객을 위한 슬랙 기반 AI 도구를 Python/FastAPI로 개발하며 RAG 파이프라인과 MCP 서버를 직접 구현했습니다. Terraform/Ansible로 인프라를 코드화하고 Docker/Kubernetes 환경에서 CI/CD를 운영합니다.

다양한 사회 경험과 조직 운영을 거쳐온 만큼 구현부터 운영 레이어까지 책임지고 고민합니다. 한국어/영어 바이링구얼 실력과 여러 해외 업무 경험을 기반으로 글로벌 협업과 실무는 기본입니다.

---

## 기술 스택

**Backend:** Java, Spring Boot, Spring Security, Python, FastAPI, OAuth2, JWT, REST API, WebSocket, SSE  
**AI/LLM:** LangGraph, RAG, pgvector, OpenAI API, Claude API, LiteLLM  
**DevOps:** Docker, Kubernetes(EKS), Terraform, Ansible, Jenkins, GitHub Actions  
**Cloud:** AWS(EC2, RDS, S3, CloudFront, ALB, CloudFormation, Bedrock), GCP(Kubernetes, Firebase, Cloud Run)  
**Database:** MySQL, PostgreSQL, MongoDB, Redis  
**Monitoring / Testing:** Prometheus, Grafana, K6  
**Mobile:** Flutter(iOS / Android 앱 유지보수)

---

## 경력

### Lokma Studio — 기술 운영 담당 (Technical Maintainer)
*2025.06 – 현재 | 원격 근무*

iOS/Android 웹툰 플랫폼의 프로덕션 운영 전반 단독 담당

- **백엔드:** 레거시 PHP/Drupal을 대체하는 43개 엔드포인트 Spring Boot API를 Cloud Run에 구축
- **모바일:** 두 앱을 신규 API로 마이그레이션 (Strangler Fig). 현재 출시 전 최종 테스트 단계
- **어드민:** 남은 Drupal 어드민을 걷어낼 React/TypeScript 어드민 구축 중
- **비용:** 인프라 비용 39% 절감 ($570 → $347/월), Drupal 제거 후 $111/월 목표
- **안정성:** iOS 결제 모듈 복구, Kubernetes 존 설정 오류로 인한 장애 진단·해결

**기술 스택:** Java, Spring Boot, Flutter, React, TypeScript, MySQL, GCP(Cloud Run, Cloud SQL, GKE), Cloudflare, Firebase

*🔗 [iOS App Store](https://apps.apple.com/us/app/lokma-webtoon/id1643417039) • [Google Play](https://play.google.com/store/apps/details?id=com.lokmastudio.android) • [lokmastudio.com](https://lokmastudio.com)*

### Slough / Slough Align — 백엔드 & AI 개발자
*2025.12 – 현재 | Central Makeus Challenge → 계약 개발 (SoftSquared/Gridge)*

SoftSquared(Gridge) 의뢰로 개발한 슬랙 기반 AI 툴. CMC 액셀러레이터 프로젝트로 시작해 유료 계약 개발로 확장.

- **파이프라인:** LangGraph·pgvector·GPT-4o 기반 RAG·페르소나 파이프라인과 2단계 검색 엔진 구축
- **MCP 서버:** Java·Spring AI·pgvector 기반 MCP 서버 구축. 구조화된 팀 메모리를 AI 에이전트에 제공, API 키 인증과 330개 이상 테스트
- **프로덕션:** MVP 출시 — 58개 엔드포인트, Claude + GPT-4o (LiteLLM), AWS(CloudFormation IaC)·GitHub Actions
- **CMC:** 1기 부울경(BUG) 코호트, 데모데이 우수상

**기술 스택:** Python, FastAPI, LangGraph, pgvector, OpenAI, Claude, LiteLLM, Java 21, Spring AI, MCP, PostgreSQL, Redis, Celery, Slack Bolt, AWS, GitHub Actions

---

## 주요 프로젝트

### MYCE — 박람회 운영 통합 플랫폼
*기술 아키텍트 & 인프라 리드 | 8인 팀*

박람회 예약·결제·정산·AI 상담을 아우르는 풀스택 SaaS 플랫폼. 인프라 설계와 DevOps 구축 담당.

- **인프라 100% 코드화 (Terraform + Ansible):**
AWS 리소스(VPC, EKS, RDS, S3, CloudFront, ALB, IAM) 완전 모듈화 및 자동화.
terraform apply 한 줄로 동일 환경 재현 가능.

- **GitHub Actions 기반 CI/CD 파이프라인:**
백엔드(EKS)와 프론트엔드(S3 + CloudFront) 자동 빌드·배포.
Jenkins 대비 연간 120달러 비용 절감, 유지보수 부담 제로화.

- **AI 챗봇 및 OAuth 스케일링 문제 해결:**
AWS Bedrock Nova Lite 기반 상담 기능 구현,
Redis 세션 스토리지로 OAuth2 수평 확장 안정화.

- **기술 문서화 및 협업 환경 구축:**
100페이지 이상의 개발자용 기술 가이드 작성.
MySQL + MongoDB + Redis 멀티 데이터소스 구조 설계.
AWS → GCP 이전 계획 수립(예상 비용 98.5% 절감).

**기술 스택:** Spring Boot 3.5, React, AWS EKS, Terraform, Ansible, GitHub Actions, Docker, MySQL, MongoDB, Redis, S3, CloudFront, Prometheus, Grafana, K6, AWS Bedrock

*🔗 [myce.live](https://myce.live) • [자세한 사례 보기](https://juanpark.github.io)*

---

### JobDam — 구직 매칭 플랫폼
*인증 및 풀스택 인프라 리드 | 팀 프로젝트*

- **이중 리포지토리 CI/CD 구축:**
Jenkins를 이용해 백엔드(Maven + Docker → EC2)와 프론트엔드(Vite → NGINX) 파이프라인을 통합 관리.
NGINX 리버스 프록시 구성(/api → Spring Boot, / → React).

- **OAuth2 + JWT 인증 시스템 개발:**
Google, Kakao 로그인 통합.
Access/Refresh Token 기반 인증 구조 설계 및 CORS, 502, 세션 충돌 문제 해결.

**기술 스택:** Spring Boot 3.5, Spring Security, OAuth2, JWT, Java 21, React, Vite, Jenkins, Docker, AWS(EC2, RDS), MySQL 8, MongoDB Atlas, NGINX, Let's Encrypt, Prometheus, Grafana

*🔗 [jobdams.online](https://www.jobdams.online) • [자세한 내용](https://juanpark.github.io)*

---

### 추가 프로젝트

- **KnockSea:** DevOps 자동화 및 Docker 기반 배포
- **UsedLion:** 초기 서버 배포 및 MVC 설계 실습

*자세한 사례는 [juanpark.github.io](https://juanpark.github.io) 참고*

---

## 이전 경력

개발자로 전향하기 전에는 조직 경영과 운영 총괄, 컨설팅, 국제 행사·통번역까지 폭넓은 분야에서 일했습니다.

**주요 경험:**
- **공군 통역장교** (2006–2009): 다국적 합동훈련 통역 및 기술 협력 지원
- **컨설팅, 통번역, 경영관리** (2011–2023): 방산·IT·기술 전시회 통역, 약 60명 규모 조직 운영, 규정·프로세스 관리 총괄

**핵심 역량:**
- 부서 간 조율 및 커뮤니케이션
- 기술 문서 작성 및 교육
- 위기 대응 및 운영 의사결정

---

## 교육

**멋쟁이사자처럼 X 고용노동부 — 백엔드 개발자 부트캠프 (K-Digital Training)**
*2025.02 – 2025.08 | 대한민국*

- Java, Spring Boot, MySQL, MongoDB, Redis, Docker, AWS, CI/CD 등 실무 중심 6개월 집중 과정
- 4개의 프로덕션급 서비스 구축 및 자동화 배포

**서울대학교 경영학과 (B.B.A.)**
*1999 – 2005*

---

## 자격사항

- Claude Certified Architect – Foundations (CCA-F) — Anthropic Education (2026)
- AWS Certified Cloud Practitioner (2025)
- Central Makeus Challenge (CMC) — 1기 부울경 코호트, 개발 파트 (2025.12 – 2026.03), 우수상

---

## 추가 정보

**언어:** 한국어 / 영어 바이링구얼
**국적:** 대한민국
**근무 가능 시기:** 즉시 가능

**업무 스타일:**
- 철저한 문서화와 프로세스 중심의 협업
- 스스로 학습하고 문제 해결에 집착하는 개발자
- 기술팀과 비기술 조직 간 커뮤니케이션 조율 능력

*포트폴리오 및 블로그: [juanpark.github.io](https://juanpark.github.io)*
