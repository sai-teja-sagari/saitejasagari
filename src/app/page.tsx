import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import SiteHeader from "@/components/SiteHeader";
import {
  capabilities,
  certifications,
  experience,
  featuredProject,
} from "./portfolio-content";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="portfolio-main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <h1 className="hero-title" id="hero-title">
            <span className="hero-name-outline">Sai Teja</span>{" "}
            <span className="hero-name-solid">Sagari</span>
          </h1>

          <div className="hero-stage">
            <div className="hero-intro">
              <h2>
                Associate Technical Consultant{" "}
                <span className="hero-employer">
                  at <strong>Adobe</strong>
                </span>
              </h2>
              <a className="primary-link" href="#work">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
            </div>

            <figure className="hero-portrait">
              <Image
                className="hero-portrait-image"
                src="/images/portrait-placeholder.png"
                alt="Stock portrait placeholder; replace with a personal portrait"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 700px) 72vw, (max-width: 1100px) 42vw, 34vw"
              />
            </figure>

            <nav className="hero-links" aria-label="Profile and contact links">
              <a
                href="https://www.linkedin.com/in/sai-teja-sagari"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="mailto:saitejasagari2002@gmail.com">
                Email <span aria-hidden="true">↗</span>
              </a>
              <a href="#about">
                About me <span aria-hidden="true">↓</span>
              </a>
              <a href="/resume.pdf" aria-label="Open resume PDF">
                Resume <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>

          <div className="hero-baseline">
            <a className="scroll-cue" href="#about">
              <span aria-hidden="true">↓</span>
              Scroll to discover
            </a>
            <p>Bangalore, India</p>
          </div>
        </section>

        <AboutSection />

        <section
          className="portfolio-section capabilities-section"
          aria-labelledby="capabilities-title"
        >
          <div className="section-heading">
            <p className="section-kicker">02 / CAPABILITIES</p>
            <h2 id="capabilities-title">A practical toolkit.</h2>
            <p className="section-intro">
              Platforms, implementation, and quality work used across my
              experience.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((group) => (
              <article className="capability-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="certifications">
            <h3>Achievements &amp; certifications</h3>
            <ul className="certification-grid">
              {certifications.map((certification) => (
                <li key={certification.title}>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certification.title}`}
                  >
                    <span>{certification.title}</span>
                    <small>{certification.issuer}</small>
                    <span className="certificate-link" aria-hidden="true">
                      View certificate ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="portfolio-section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <p className="section-kicker">03 / EXPERIENCE</p>
            <h2 id="experience-title">Learning through the work.</h2>
          </div>
          <div className="experience-list">
            {experience.map((position) => (
              <article className="experience-entry" key={position.role}>
                <p className="experience-dates">{position.dates}</p>
                <div className="experience-detail">
                  <h3>{position.role}</h3>
                  <p className="experience-organization">
                    {position.organization}
                  </p>
                  {position.responsibilities.length > 0 && (
                    <ul>
                      {position.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="portfolio-section projects-section"
          id="work"
          aria-labelledby="projects-title"
        >
          <div className="project-grid">
            <article className="project-card">
              <div className="project-image">
                <Image
                  src="/veduka-project.jpg"
                  alt="Veduka by Dheeraj wedding photography"
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
                <div className="project-image-overlay" />
                <div className="project-image-copy">
                  <h2 id="projects-title">
                    Veduka
                    <br />
                    by Dheeraj
                  </h2>
                  <p>Wedding photography<br />&amp; event styling</p>
                </div>
              </div>

              <div className="project-details">
                <p className="project-type">Personal Project</p>
                <h3>{featuredProject.title}</h3>
                <p className="project-summary">{featuredProject.summary}</p>
                <ul className="project-technologies" aria-label="Technologies used">
                  {featuredProject.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-actions">
                  <a
                    className="project-site-link"
                    href={featuredProject.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit Website <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    className="project-code-link"
                    href={featuredProject.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.09.65-.21.65-.47v-1.86c-2.65.58-3.21-1.12-3.21-1.12-.43-1.1-1.06-1.39-1.06-1.39-.87-.59.07-.58.07-.58.96.07 1.47.99 1.47.99.85 1.46 2.24 1.04 2.79.79.09-.62.33-1.04.61-1.28-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9.99-2.57-.1-.24-.43-1.22.09-2.54 0 0 .81-.26 2.63 1a9.1 9.1 0 0 1 4.79 0c1.82-1.26 2.63-1 2.63-1 .52 1.32.19 2.3.09 2.54.62.67.99 1.53.99 2.57 0 3.67-2.23 4.47-4.36 4.71.34.3.65.88.65 1.78v2.64c0 .26.17.57.66.47A9.5 9.5 0 0 0 12 2.5Z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className="portfolio-section contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="section-kicker">05 / CONTACT</p>
            <h2 id="contact-title">Let&apos;s start a conversation.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:saitejasagari2002@gmail.com">
              saitejasagari2002@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          <a className="footer-brand" href="#top" aria-label="Sai Teja Sagari home">
            <Image
              src="/brand-kit/svg/logo-horizontal-black.svg"
              alt="Sai Teja Sagari"
              width={206}
              height={61}
            />
          </a>
          <nav className="footer-socials" aria-label="Social media">
            <a
              href="https://www.instagram.com/sai_teja_sagari?obrf=MXVubnkyaWFmdTVo&utm_source=qr"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="footer-social-dot" cx="17.5" cy="6.8" r="1" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sai-teja-sagari/"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5.2 8.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 10h3.4v10H3.5zM9 10h3.2v1.4h.1c.5-.9 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5V20h-3.4v-4.8c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20H9z" />
              </svg>
            </a>
            <a
              href="https://wa.me/917675843002"
              aria-label="WhatsApp"
              title="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3.8 20l1.2-4.1a8.2 8.2 0 1 1 15.2-4.2Z" />
                <path d="M8.2 7.8c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.7 1.2 1.6 2 2.8 2.7.3.2.5.2.7-.1l.8-.9c.2-.2.4-.3.7-.2l1.8.9c.3.2.4.3.4.5 0 .3-.2 1.4-.8 1.9-.5.5-1.2.8-2.1.7-1.1-.1-2.5-.7-4.1-1.9-2-1.5-3.3-3.5-3.6-4.8-.3-1.2 0-2.1.6-2.7Z" />
              </svg>
            </a>
          </nav>
          <p className="footer-copyright">
            © 2026 Sai Teja Sagari. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
