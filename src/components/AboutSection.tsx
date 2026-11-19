export default function AboutSection() {
  return (
    <section
      className="portfolio-section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <header className="about-masthead">
        <p>01 / ABOUT ME</p>
      </header>

      <div className="about-introduction">
        <div className="about-intro-heading">
          <h2 id="about-title">
            <span className="about-title-outline">A little</span>
            <span>about me.</span>
          </h2>
        </div>

        <div className="about-biography">
          <p className="about-lead">
            Hi, I&apos;m <strong>Sai Teja Sagari</strong>.
            <br />A technology professional who loves building digital
            experiences and turning ideas into meaningful solutions.
          </p>
          <p>
            I currently work across the Adobe Experience Cloud ecosystem,
            including{" "}
            <strong>
              Adobe Experience Manager (AEM), Edge Delivery Services (EDS),
              Adobe Experience Platform (AEP), and Adobe Journey Optimizer
              (AJO)
            </strong>
            .
          </p>
          <p>
            I enjoy understanding how technologies work together and finding
            ways to improve both functionality and user experience. For me,
            growth means staying curious, embracing challenges, and putting
            what I learn into practice.
          </p>
          <p>
            This is my personal space for my professional journey, projects,
            experiments, learnings, ideas, and the things I&apos;m passionate
            about.
          </p>
        </div>
      </div>

      <div className="about-interests">
        <h3>Technologies I’m drawn to</h3>
        <ul aria-label="Technical interests">
          {[
            "JavaScript",
            "React",
            "Next.js",
            "Java",
            "HTML",
            "CSS",
            "SQL",
            "Adobe technologies",
          ].map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>

      <div className="about-mindset">
        <div className="about-mindset-heading">
          <div>
            <p className="about-eyebrow">The mindset behind the work</p>
            <h3>
              <span>Build.</span>{" "}
              <span className="about-mindset-muted">Explore.</span>{" "}
              <span>Create.</span>
            </h3>
          </div>
          <p className="about-mindset-summary">
            Three words that shape how I approach technology, creativity,
            learning, and life.
          </p>
        </div>

        <div className="about-pillars">
          <article className="about-pillar">
            <div className="about-pillar-label">
              <span>01 / Make it work</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
                <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" />
              </svg>
            </div>
            <h4>Build.</h4>
            <p className="about-pillar-promise">
              Turn an idea into something real.
            </p>
            <p className="about-pillar-description">
              I turn ideas into working digital experiences, applications, and
              practical solutions. Building means understanding a problem,
              connecting the right technologies, and developing something
              useful that improves how people work or interact.
            </p>
          </article>

          <article className="about-pillar">
            <div className="about-pillar-label">
              <span>02 / Stay curious</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="8.5" />
                <path d="m14.7 9.3-1.6 3.8-3.8 1.6 1.6-3.8 3.8-1.6Z" />
                <path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" />
              </svg>
            </div>
            <h4>Explore.</h4>
            <p className="about-pillar-promise">
              Look beyond what you already know.
            </p>
            <p className="about-pillar-description">
              I make room for unfamiliar tools, emerging technologies, and new
              perspectives. Exploring means asking questions, discovering how
              things work together, and challenging myself to learn beyond my
              current knowledge.
            </p>
          </article>

          <article className="about-pillar">
            <div className="about-pillar-label">
              <span>03 / Give ideas form</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2.5c1.1 4.4 3.1 6.4 7.5 7.5-4.4 1.1-6.4 3.1-7.5 7.5-1.1-4.4-3.1-6.4-7.5-7.5 4.4-1.1 6.4-3.1 7.5-7.5Z" />
                <path d="M19 16c.5 2 1.4 2.9 3.5 3.5-2.1.5-3 1.4-3.5 3.5-.5-2.1-1.4-3-3.5-3.5 2.1-.6 3-1.5 3.5-3.5ZM5 2v4M3 4h4" />
              </svg>
            </div>
            <h4>Create.</h4>
            <p className="about-pillar-promise">
              Bring imagination into the experience.
            </p>
            <p className="about-pillar-description">
              I see creativity as more than writing code. Creating means
              experimenting with ideas, shaping meaningful experiences, and
              bringing personal projects to life. It&apos;s where technical
              learning meets imagination and a personal point of view.
            </p>
          </article>
        </div>
      </div>

    </section>
  );
}
