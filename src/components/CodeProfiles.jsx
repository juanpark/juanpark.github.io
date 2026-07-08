import "./CodeProfiles.css";

export default function CodeProfiles() {
  return (
    <>
      {/* Certifications Section */}
      <section id="certifications" className="code-profiles-section">
        <h2>Certifications</h2>
        <p className="section-subtitle">
          Cloud and professional credentials
        </p>

        <div className="card">
          <a
            href="https://www.credly.com/badges/25dea6dc-580b-413b-b5d1-ee8295f12c67/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.credly.com/size/150x150/images/f2040db3-3904-4240-8966-e87b1510bea0/blob"
              alt="Claude Certified Architect – Foundations"
              className="cert-badge"
            />
          </a>
          <p className="cert-label" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            <a
              href="https://www.credly.com/badges/25dea6dc-580b-413b-b5d1-ee8295f12c67/public_url"
              target="_blank"
              rel="noreferrer"
            >
              Claude Certified Architect – Foundations (CCA-F)
            </a>
          </p>
          <p className="cert-label">Anthropic Education (2026)</p>
        </div>

        <div className="card">
          <a
            href="https://www.credly.com/badges/02e82357-e1c6-46c2-9a9d-148671f9a809/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://images.credly.com/size/150x150/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
              alt="AWS Certified Cloud Practitioner"
              className="cert-badge"
            />
          </a>
          <p className="cert-label">AWS Certified Cloud Practitioner (2025)</p>
        </div>

        <div className="card">
          <p className="cert-label" style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Central Makeus Challenge (CMC)</p>
          <p className="cert-label">1st BUG Cohort — Developer Track (Dec 2025 – Mar 2026)</p>
          <p className="cert-label">Excellence Award (우수상) at Demoday</p>
        </div>
      </section>

      <section id="code" className="code-profiles-section">
        <h2>Coding Profiles</h2>
        <p className="section-subtitle">
          Algorithm practice & developer activity
        </p>

        {/* Baekjoon / solved.ac Card */}
        <div className="card">
          <h3>Baekjoon | solved.ac</h3>
          <p className="card-sub">
            Competitive programming progress and solving streak.
          </p>

          <img
            src="https://mazassumnida.wtf/api/v2/generate_badge?boj=juanpark"
            alt="Solved.ac Tier Badge"
            className="profile-img"
          />

          <h4 className="mini-heading">Coding Streak</h4>
          <p className="streak-note">Automatically updated daily via solved.ac</p>
          <img
            src="https://mazandi.herokuapp.com/api?handle=juanpark&theme=warm"
            alt="Solved.ac Streak Visualization"
            className="profile-img"
          />

          <div className="profile-links">
            <a
              href="https://solved.ac/profile/juanpark"
              target="_blank"
              rel="noreferrer"
            >
              → View solved.ac Profile
            </a>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="card">
          <h3>GitHub Activity</h3>
          <p className="card-sub">Commits, pull requests, and repository stats.</p>

          {/* Self-hosted github-readme-stats (public instance is rate-limited). Runbook: docs/github-stats-widget.md */}
          <img
            src="https://github-readme-stats-juan-parks-projects-67a333e6.vercel.app/api?username=juanpark&show_icons=true&theme=default"
            alt="GitHub Stats"
            className="profile-img"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />

          <div className="profile-links">
            <a
              href="https://github.com/juanpark"
              target="_blank"
              rel="noreferrer"
            >
              → View GitHub Profile
            </a>
          </div>
        </div>

      </section>
    </>
  );
}
