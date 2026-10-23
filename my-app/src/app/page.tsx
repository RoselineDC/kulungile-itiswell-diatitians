"use client"

import Image from "next/image";
import logo from '../../public/logo-mark-wide.png';
import { useState } from "react";


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

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`arrow-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}


export default function Home() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kulungile home">
          <Image src={logo} alt="" width={94} height={99} />
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
          Contact Us
        </a>
      </header>

      <section className="hero" id="home">
       
        <div className="hero-copy">
          
          <h1>
            A more
            <br />
            nourishing way
            <br />
            <em>forward.</em>
          </h1>

          <p className="hero-description">
            Thoughtful nutrition care, meaningful education and a
            compassionate approach to wellbeing  centred around you.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#services">
              Explore our services <ArrowIcon />
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
         
      </section>

      <section className="intro-section section-pad" id="about">
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
              Kulungile  It Is Well Dietitians aims to make nutrition
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
            {/* <div className="section-kicker section-kicker-light">
              <span>02</span>
              <span>HOW WE CAN HELP</span>
            </div> */}
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
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-info">
          <h2>
            Your wellbeing
            <br />
            deserves <em>care.</em>
          </h2>
          <p>
            Have a question about the practice or its services? Get in touch to
            find out more about the next steps.
          </p>

          <ul className="contact-details">
            <li>
              <span className="contact-label">EMAIL</span>
              <a href="mailto:info@yourpractice.co.za">info@kulungile.co.za</a>
            </li>
            <li>
              <span className="contact-label">PHONE</span>
              <a href="tel:+27000000000">+27 68 247 0633</a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required autoComplete="name" />
          </label>

          <label>
            Email
            <input type="email" name="email" required autoComplete="email" />
          </label>

          <label>
            Phone <span className="optional">(optional)</span>
            <input type="tel" name="phone" autoComplete="tel" />
          </label>

          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>

          {/* honeypot: hidden from people, bots fill it in */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off"
            className="hp" aria-hidden="true" />

          <button className="button button-light" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"} <ArrowIcon />
          </button>

          {status === "sent" && <p className="form-status">Thank you, we'll be in touch soon.</p>}
          {status === "error" && <p className="form-status">Something went wrong. Please email or call us instead.</p>}
          <p className="form-privacy">
            Please don't include medical details in this form.
          </p>
        </form>
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
          © 2026 Kulungile – It Is Well...
        </span>
      </footer>
    </main>
  );
}
