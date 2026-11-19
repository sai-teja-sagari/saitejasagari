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
          <div className="section-heading projects-heading">
            <p className="section-kicker">04 / FEATURED WEBSITE</p>
            <h2 id="projects-title">{featuredProject.title}</h2>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-meta">
                <span>{featuredProject.type}</span>
              </div>
              <p>{featuredProject.summary}</p>
              <a
                className="project-site-link"
                href={featuredProject.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit vedukabydheeraj.in <span aria-hidden="true">↗</span>
              </a>
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
