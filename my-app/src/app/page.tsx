
const services = [
  {
    number: "01",
    title: "Breast health & nutrition",
    description:
      "Explore the relationship between nutrition, overall wellbeing and breast health through evidence-informed education.",
    href: "#breast-health",
  },
  {
    number: "02",
    title: "Personalised nutrition",
    description:
      "Nutrition guidance shaped around individual needs, health goals, lifestyle and professional assessment.",
    href: "#services",
  },
  {
    number: "03",
    title: "Nutrition education",
    description:
      "Practical information to help people make informed food choices and build sustainable habits.",
    href: "#resources",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="arrow-icon"
    >
      <path
        d="M4.75 12h14.5m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kulungile home">
          <span className="brand-mark" aria-hidden="true">
            k.
          </span>
          <span className="brand-name">
            <strong>Kulungile</strong>
            <small>IT IS WELL DIETITIANS</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">Our approach</a>
          <a href="#services">Services</a>
          <a href="#breast-health">Breast health</a>
          <a href="#resources">Resources</a>
        </nav>

        <a className="header-cta" href="#contact">
          Get in touch <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            NUTRITION · WELLNESS · HOPE
          </p>

          <h1>
            A more
            <br />
            nourishing way
            <br />
            <em>forward.</em>
          </h1>

          <p className="hero-description">
            Thoughtful nutrition care, meaningful education and a
            compassionate approach to wellbeing — centred around you.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#services">
              Explore our services <ArrowIcon />
            </a>
            <a className="text-link" href="#about">
              Discover our approach
            </a>
          </div>

          <div className="hero-note">
            <span className="note-symbol" aria-hidden="true">✳</span>
            <p>
              Rooted in faith.
              <br />
              Guided by evidence-informed care.
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
            alt="A colourful, balanced meal made with fresh vegetables and wholesome ingredients"
            fetchPriority="high"
          />
          <div className="image-label">
            <span className="image-label-dot" />
            Nourishment for everyday wellbeing
          </div>
          <div className="hero-stamp" aria-label="Nutrition, wellness and hope">
            <span>NOURISH</span>
            <span className="stamp-flower" aria-hidden="true">✳</span>
            <span>FLOURISH</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>01 / A THOUGHTFUL APPROACH TO NUTRITION</span>
          <a href="#about">
            Scroll to discover <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="section-kicker">
          <span>01</span>
          <span>THE HEART OF KULUNGILE</span>
        </div>

        <div className="intro-grid">
          <h2>
            Wellness begins
            <br />
            with <em>understanding.</em>
          </h2>

          <div className="intro-copy">
            <p>
              Nutrition is personal. Every person brings a different
              story, different needs and a different relationship with
              food.
            </p>
            <p>
              Kulungile – It Is Well Dietitians aims to make nutrition
              guidance more approachable through compassionate care,
              accessible education and respect for each person&apos;s
              journey.
            </p>
            <a className="text-link text-link-green" href="#contact">
              Get to know the practice <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="values-row">
          <article className="value-item">
            <span className="value-number">01</span>
            <h3>Compassion first</h3>
            <p>Care that recognises the person beyond the plate.</p>
          </article>
          <article className="value-item">
            <span className="value-number">02</span>
            <h3>Evidence informed</h3>
            <p>Health education grounded in credible information.</p>
          </article>
          <article className="value-item">
            <span className="value-number">03</span>
            <h3>Faith and hope</h3>
            <p>A welcoming identity shaped by the practice&apos;s values.</p>
          </article>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-heading">
          <div>
            <div className="section-kicker section-kicker-light">
              <span>02</span>
              <span>HOW WE CAN HELP</span>
            </div>
            <h2>
              Nutrition care,
              <br />
              <em>with purpose.</em>
            </h2>
          </div>
          <p>
            Discover the areas of nutrition support and education
            the practice intends to offer.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span>{service.number}</span>
                <span className="service-card-arrow">
                  <ArrowIcon />
                </span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <a href={service.href} className="service-link">
                Learn more <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <p className="content-note">
          Service descriptions are preliminary and must be confirmed by
          the practice before publication.
        </p>
      </section>

      <section className="breast-section section-pad" id="breast-health">
        <div className="breast-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1000&q=85"
            alt="Fresh vegetables and nutritious ingredients arranged for meal preparation"
            loading="lazy"
          />
          <span className="image-caption">NOURISHMENT, WITH KNOWLEDGE</span>
        </div>

        <div className="breast-copy">
          <div className="section-kicker">
            <span>03</span>
            <span>A FOCUS ON WELLBEING</span>
          </div>

          <h2>
            Breast health
            <br />
            &amp; the role of
            <br />
            <em>nutrition.</em>
          </h2>

          <p>
            Understanding nutrition can be an important part of
            understanding overall health. Our aim is to make reliable,
            accessible information easier to explore.
          </p>

          <p>
            Educational content on this topic will be reviewed for
            clinical accuracy and will complement, not replace,
            individual medical advice and appropriate screening.
          </p>

          <a className="button button-outline" href="#resources">
            Explore our resources <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="journey-section section-pad" id="resources">
        <div className="journey-heading">
          <div className="section-kicker">
            <span>04</span>
            <span>YOUR JOURNEY</span>
          </div>
          <h2>
            A little clarity.
            <br />
            <em>A more confident next step.</em>
          </h2>
        </div>

        <div className="journey-grid">
          <article>
            <span>01</span>
            <h3>Explore</h3>
            <p>
              Learn about the practice and the nutrition support
              that may be relevant to you.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Connect</h3>
            <p>
              Contact the practice to ask questions and discuss
              consultation options.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Take your next step</h3>
            <p>
              Where appropriate, work with a qualified professional
              on nutrition goals suited to your needs.
            </p>
          </article>
        </div>
      </section>

      <section className="scripture-section">
        <span className="scripture-flower" aria-hidden="true">✳</span>
        <p className="eyebrow">FAITH · WELLNESS · HOPE</p>
        <blockquote>
          “...and by His stripes we are healed.”
        </blockquote>
        <p className="scripture-reference">ISAIAH 53:5 · KJV</p>
        <p className="scripture-note">
          A reflection of the faith that inspires the practice.
        </p>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div>
          <div className="section-kicker section-kicker-light">
            <span>05</span>
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2>
            Your wellbeing
            <br />
            deserves <em>care.</em>
          </h2>
          <p>
            Have a question about the practice or its services?
            Get in touch to find out more about the next steps.
          </p>
        </div>
        <a className="button button-light" href="mailto:">
          Contact the practice <ArrowIcon />
        </a>
        <p className="contact-note">
          Contact details and appointment arrangements will be added
          once confirmed by the practice.
        </p>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark" aria-hidden="true">k.</span>
          <span className="brand-name">
            <strong>Kulungile</strong>
            <small>IT IS WELL DIETITIANS</small>
          </span>
        </a>
        <p>Nutrition. Wellness. Hope.</p>
        <span className="footer-copyright">
          © {new Date().getFullYear()} Kulungile – It Is Well Dietitians
        </span>
      </footer>
    </main>
  );
}
