import { useState, useEffect, useRef } from 'react';
import './Projects.css';
import Modal from './Modal';

const professional = [
  {
    id: 'lokma',
    title: 'Lokma Webtoon Service',
    role: 'Technical Maintainer',
    desc: 'Live iOS/Android webtoon platform — backend, mobile, and infra, maintained solo',
    tags: ['Java', 'Spring Boot', 'Flutter', 'GCP', 'Cloud Run', 'Firebase'],
    details: {
      role: 'Technical Maintainer',
      responsibilities: [
        'Rebuilt the backend as a 43-endpoint Spring Boot API on Cloud Run, replacing the legacy PHP/Drupal stack',
        'Migrated both mobile apps to it (Strangler Fig); now in final testing before release',
        'Building a React/TypeScript admin to retire the last of Drupal',
        'Cut infrastructure cost 39% (from $570 to $347/mo), heading to $111 once Drupal is gone',
        'Restored the iOS payment module and resolved a production outage from a Kubernetes zone misconfig',
      ],
      tech: ['Java', 'Spring Boot', 'Flutter', 'React', 'TypeScript', 'MySQL', 'GCP Cloud Run', 'Cloud SQL', 'GKE', 'Cloudflare', 'Firebase'],
      challenges: 'Sole maintainer of a live platform through an org transition: rebuilt the backend from scratch, kept both mobile apps shipping, and cut cloud cost 39%.',
      links: [
        { label: 'iOS App Store', url: 'https://apps.apple.com/us/app/lokma-webtoon/id1643417039' },
        { label: 'Google Play Store', url: 'https://play.google.com/store/apps/details?id=com.lokmastudio.android' }
      ],
      website: 'https://lokmastudio.com'
    }
  },
  {
    id: 'slough',
    title: 'Slough / Slough Align',
    role: 'Backend & AI Developer',
    desc: 'AI Slack tools for an enterprise client — a RAG persona bot and an MCP server',
    tags: ['Python', 'FastAPI', 'LangGraph', 'pgvector', 'MCP', 'Spring AI', 'AWS'],
    details: {
      role: 'Backend & AI Developer',
      responsibilities: [
        'Built the RAG and persona pipeline (LangGraph, pgvector, GPT-4o) with a two-tier retrieval engine: Slough answers employees from a leader\'s Slack history; Slough Align turns CEO townhalls into alignment quizzes',
        'Built an MCP server (Java, Spring AI, pgvector) serving structured team memory to AI agents, with API-key auth and 330+ tests',
        'Shipped the production MVP: 58 endpoints, Claude and GPT-4o via LiteLLM, on AWS with CloudFormation IaC and GitHub Actions',
        'CMC 1st BUG Cohort, Excellence Award at Demoday',
      ],
      tech: ['Python', 'FastAPI', 'LangGraph', 'pgvector', 'GPT-4o', 'Claude', 'LiteLLM', 'Java', 'Spring AI', 'MCP', 'AWS', 'CloudFormation', 'GitHub Actions'],
      challenges: 'Built in the CMC accelerator, then continued as paid contract work for SoftSquared (Gridge). Chose direct SDK calls over LangChain for control, with a two-tier retrieval design: full townhall transcripts as primary context, summary-routed knowledge base for the rest.',
      links: []
    }
  }
];

const projects = [
  {
    id: 'myce',
    title: 'MYCE',
    desc: 'IaC, CI/CD, and production ops for an exhibition platform',
    tags: ['Terraform', 'Ansible', 'AWS EKS', 'Spring Boot', 'React', 'K6', 'AWS Bedrock'],
    status: 'active',
    media: {
      type: 'pdf',
      src: '/pdfs/myce-presentation.pdf',
      title: 'MYCE Project Slides',
      icon: 'PDF',
      label: 'View Project Slides'
    },
    details: {
      role: 'Infrastructure lead, 8-person team',
      responsibilities: [
        'Owned the full AWS stack as code (Terraform + Ansible): VPC, EKS, RDS, S3, CloudFront, ALB, IAM',
        'Built dual GitHub Actions pipelines: backend containers to EKS, frontend to S3/CloudFront with cache invalidation',
        'Fixed an OAuth2 scaling bug with Redis-backed sessions, making auth stateless across servers',
        'Designed a multi-datasource setup (MySQL, MongoDB, Redis) with Prometheus/Grafana monitoring',
        'Load-tested with K6 and validated Kubernetes HPA at 800 concurrent users',
        'Led the AWS Bedrock AI chat feature and wrote the 100+ page guide the team ran on',
      ],
      tech: ['Spring Boot 3.5', 'React', 'AWS EKS', 'Terraform', 'Ansible', 'GitHub Actions', 'Docker', 'MySQL', 'MongoDB', 'Redis', 'Prometheus', 'Grafana', 'K6', 'AWS Bedrock', 'S3', 'CloudFront'],
      challenges: 'My first IaC project: Terraform and Ansible that rebuild the whole environment from scratch. Debugged real production issues (stateless OAuth2 sessions breaking across servers, ALB health checks failing on an SMTP dependency, multi-datasource conflicts) and kept costs down with deliberate calls like GitHub Actions over Jenkins and scaling down after the demo.',
      website: 'https://myce.live',
      githubRepos: {
        infrastructure: 'https://github.com/LIKE-LION-MYCE/infrastructure-project',
        loadtest: 'https://github.com/LIKE-LION-MYCE/myce-loadtest',
        backend: 'https://github.com/LIKE-LION-MYCE/myce-server',
        frontend: 'https://github.com/LIKE-LION-MYCE/myce-client'
      },
      documentation: 'https://docs.google.com/document/d/1JMvKUZnNZp7ymp53CphnTlzWFBehL01zWHNTYkxG7E0/edit?usp=sharing',
      blogPost: {
        individual: 'https://blog.naver.com/drakor/224069375028',
        series: 'https://blog.naver.com/drakor/224068291052'
      },
      links: []
    }
  },
  {
    id: 'jobdam',
    title: 'JobDam',
    desc: 'Dual-repo CI/CD and OAuth2 auth for a full-stack app',
    tags: ['Jenkins', 'Docker', 'OAuth2', 'JWT', 'React', 'NGINX'],
    status: 'active',
    details: {
      role: 'Auth & infrastructure lead',
      responsibilities: [
        'Built dual-repo CI/CD on one Jenkins: backend (Maven + Docker to EC2) and frontend (Vite to NGINX)',
        'Implemented Google + Kakao OAuth2 with JWT access/refresh tokens',
        'Set up NGINX on a single EC2 as the gateway: /api to Spring Boot, / to the React build, with Let\'s Encrypt SSL',
        'Debugged the production stack: 502s from proxy_pass, CORS, JWT filter conflicts, HikariCP pooling',
        'Built the auth and CI/CD while teammates shipped payments, SNS, and community features',
      ],
      tech: ['Spring Boot 3.5', 'Spring Security', 'OAuth2', 'JWT', 'Java 21', 'React', 'Vite', 'Jenkins', 'Docker', 'AWS EC2', 'AWS RDS', 'MySQL 8', 'NGINX', 'Let\'s Encrypt', 'Prometheus', 'Grafana'],
      challenges: 'My first project with separate frontend and backend repos. Ran two Jenkins pipelines on one EC2 without config clashes, with NGINX as a single gateway. Built on what I learned in UsedLion and KnockSea to land a production-ready dual-repo setup.',
      githubRepos: {
        backend: 'https://github.com/LionPay-LikeLion/jobdam',
        frontend: 'https://github.com/LionPay-LikeLion/jobdam-frontend'
      },
      documentation: 'https://docs.google.com/document/d/1GMdnzRFLuUw4CImdPRRh1QuQSnASnyDUMKE6BldURXw/edit?usp=sharing',
      blogPost: {
        series: 'https://blog.naver.com/drakor/224068291052',
        individual: 'https://blog.naver.com/drakor/224069242269'
      },
      website: 'https://www.jobdams.online',
      links: []
    }
  },
  {
    id: 'knocksea',
    title: 'KnockSea',
    desc: 'DevOps automation and production integration (team project)',
    tags: ['Jenkins', 'Docker', 'AWS', 'RDS', 'Prometheus'],
    status: 'archived',
    media: {
      type: 'video',
      src: '/videos/knocksea-devops.mp4',
      title: 'KnockSea DevOps Presentation',
      icon: '▶️',
      label: 'View Project DevOps Video'
    },
    details: {
      role: 'DevOps & integration lead',
      responsibilities: [
        'Owned integration: merged teammates\' features (OAuth, maps, CRUD, comments) into a working production build',
        'Built the CI/CD pipeline: GitHub webhook to Jenkins (Mac Mini), multi-arch Docker build (M1 to AMD64), DockerHub, auto-deploy to EC2',
        'Set up Prometheus/Grafana monitoring and MongoDB Atlas integration',
        'Handled a production OOM incident: diagnosed it from monitoring, moved MySQL to RDS, added swap and retention policies',
      ],
      tech: ['Java 21', 'Spring Boot', 'Docker', 'Jenkins', 'AWS EC2', 'AWS RDS', 'MySQL 8', 'MongoDB Atlas', 'Prometheus', 'Grafana', 'NGINX'],
      challenges: 'I owned DevOps and integration: making everyone\'s features work together in production, not just merging code. The first OOM incident taught me that integration includes monitoring and incident response.',
      github: 'https://github.com/juanpark/knocksea',
      documentation: 'https://docs.google.com/document/d/1KAIOb-35Ujv163cdrfuISoSp8kiBIOXAsvRpP66pp_M/edit?usp=sharing',
      blogPost: {
        series: 'https://blog.naver.com/drakor/224068291052',
        individual: 'https://blog.naver.com/drakor/224068547333'
      },
      links: []
    }
  },
  {
    id: 'usedlion',
    title: 'Used Lion',
    desc: 'First deployment: team scaffold and early automation on a Mac Mini',
    tags: ['Spring Boot', 'Thymeleaf', 'Mac Mini', 'NGINX', 'OAuth2'],
    status: 'archived',
    details: {
      role: 'Infrastructure & frontend scaffold lead',
      responsibilities: [
        'Built a working scaffold (Thymeleaf + Bootstrap pages) so teammates could see where their features fit',
        'Set up the shared framework: common MySQL, Mac Mini hosting, and a GitHub workflow the team ran from day one',
        'Implemented Google OAuth2 as a working example for the team to build on',
        'Configured NGINX with Let\'s Encrypt SSL, deploy scripts, systemd auto-restart, and cron-renewed certs',
      ],
      tech: ['Java 21', 'Spring Boot', 'Spring Security', 'Google OAuth2', 'Thymeleaf', 'Bootstrap 5', 'MySQL 8', 'Mac Mini', 'NGINX', 'Let\'s Encrypt'],
      challenges: 'My first time building a scaffold for a team. The lesson: visible structure (a working frontend plus infrastructure) helps people see where their work fits, so the whole team moves together.',
      github: 'https://github.com/juanpark/UsedLion-Team4',
      documentation: 'https://docs.google.com/document/d/1gi2X9mQ3Aphj4YB1b42Czkm0zT3-gpWAwwUZg6WIQzg/edit?usp=sharing',
      blogPost: {
        series: 'https://blog.naver.com/drakor/224068291052',
        individual: 'https://blog.naver.com/drakor/224068422419'
      },
      links: []
    }
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    src: null,
    title: null
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openModal = (media) => {
    setModalState({
      isOpen: true,
      type: media.type,
      src: media.src,
      title: media.title
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: null,
      src: null,
      title: null
    });
  };

  // Click outside to collapse + ESC key support
  useEffect(() => {
    if (!expandedId) return;

    const handleClickOutside = (e) => {
      // Check if click is outside any project card
      const clickedCard = e.target.closest('.project-card');
      if (!clickedCard) {
        setExpandedId(null);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setExpandedId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [expandedId]);

  const ProjectCard = ({ project, isProfessional }) => {
    const isExpanded = expandedId === project.id;

    return (
      <div
        className={`project-card ${isExpanded ? 'expanded' : ''}`}
        onClick={() => toggleExpand(project.id)}
      >
        <div className="project-header">
          <div>
            <div className="project-title">
              {project.title}
              {isProfessional && <span className="role-badge">{project.role}</span>}
              {!isProfessional && project.status && (
                <span className={`status-badge status-${project.status}`}>
                  {project.status === 'active' ? '🟢 Live Website' : '📦 Archived'}
                </span>
              )}
              {project.media && (
                <span
                  className={`media-badge ${project.media.type === 'pdf' ? 'media-badge-text' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(project.media);
                  }}
                  title={`View ${project.media.type === 'video' ? 'demo video' : 'slides'}`}
                >
                  {project.media.icon}
                </span>
              )}
            </div>
            <p className="project-desc">{project.desc}</p>
          </div>
          <div className="expand-icon">{isExpanded ? '−' : '+'}</div>
        </div>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>

        {isExpanded && (
          <div className="project-details">
            <div className="detail-section">
              <h4>Role & Responsibilities</h4>
              <ul>
                {project.details.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4>Technologies</h4>
              <div className="tech-list">
                {project.details.tech.map((tech) => (
                  <span className="tech-badge" key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h4>Key Challenges</h4>
              <p>{project.details.challenges}</p>
            </div>

            {project.details.website && (
              <div className="detail-section">
                <h4>Website</h4>
                <a
                  href={project.details.website}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="website-link"
                >
                  {project.status === 'active' && '🟢 '}{project.details.website.replace('https://', '')}
                </a>
              </div>
            )}

            {(project.media || project.details.github || project.details.githubRepos || project.details.documentation || project.details.blogPost) && (
              <div className="detail-section">
                <h4>Resources</h4>
                <div className="resource-links">
                  {project.media && (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openModal(project.media);
                      }}
                      className="resource-link resource-link-media"
                    >
                      {project.media.type === 'pdf' ? '📄' : project.media.icon} {project.media.label}
                    </a>
                  )}
                  {project.details.github && (
                    <a
                      href={project.details.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="resource-link"
                    >
                      GitHub Repository
                    </a>
                  )}
                  {project.details.githubRepos && (
                    <>
                      {project.details.githubRepos.infrastructure && (
                        <a
                          href={project.details.githubRepos.infrastructure}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="resource-link"
                        >
                          GitHub Repository (Infrastructure)
                        </a>
                      )}
                      {project.details.githubRepos.loadtest && (
                        <a
                          href={project.details.githubRepos.loadtest}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="resource-link"
                        >
                          GitHub Repository (Load Testing)
                        </a>
                      )}
                      {project.details.githubRepos.backend && (
                        <a
                          href={project.details.githubRepos.backend}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="resource-link"
                        >
                          GitHub Repository (Backend)
                        </a>
                      )}
                      {project.details.githubRepos.frontend && (
                        <a
                          href={project.details.githubRepos.frontend}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="resource-link"
                        >
                          GitHub Repository (Frontend)
                        </a>
                      )}
                    </>
                  )}
                  {project.details.documentation && (
                    <a
                      href={project.details.documentation}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="resource-link"
                    >
                      Technical Documentation
                    </a>
                  )}
                  {project.details.blogPost && (
                    <>
                      <a
                        href={project.details.blogPost.individual}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="resource-link"
                      >
                        DevOps Blog Post
                      </a>
                      <a
                        href={project.details.blogPost.series}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="resource-link resource-link-secondary"
                      >
                        Complete Blog Series
                      </a>
                    </>
                  )}
                </div>
              </div>
            )}

            {project.details.links.length > 0 && (
              <div className="detail-section">
                <h4>Published On</h4>
                <div className="app-store-badges">
                  {project.details.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="badge-link"
                    >
                      {link.label.includes('iOS') ? (
                        <img
                          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1663632000"
                          alt="Download on the App Store"
                          className="app-badge app-badge-apple"
                        />
                      ) : (
                        <img
                          src="https://raw.githubusercontent.com/steverichey/google-play-badge-svg/master/img/en_get.svg"
                          alt="Get it on Google Play"
                          className="app-badge app-badge-google"
                        />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <section id="experience" className="projects-section">
        <div className="projects-category">
          <h2>Professional Experience</h2>
          <div className="project-grid">
            {professional.map((p) => (
              <ProjectCard key={p.id} project={p} isProfessional={true} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-category">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} isProfessional={false} />
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        src={modalState.src}
        title={modalState.title}
      />
    </>
  );
}
