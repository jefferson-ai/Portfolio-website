import { useState, type FormEvent } from "react";
import TextType from "./components/ui/TextType";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Menu,
  X,
  Code2,
  Layers,
  Terminal,
  Check,
  Send,
} from "lucide-react";

const headlines = [
  "experiences that matter.",
  "solutions that scale.",
  "interfaces that delight.",
];

function GuideArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M232 8C145 8 48 25 19 85M10 61L19 85L43 72"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const projects = [
  {
    name: "Patriot",
    category: "EMERGENCY COORDINATION · IOS",
    description: "An incident-reporting prototype designed to route citizen reports into Ghana’s 112 emergency response ecosystem.",
    tags: ["Swift", "iOS", "Location", "Backend integration"],
    outcome: "Image and GPS reports · Severity inputs · Incident routing",
  },
  {
    name: "LLM Cost Autopilot",
    category: "LLM OBSERVABILITY · IN PROGRESS",
    description: "A Python tool for tracking model selection, tokens, latency, and estimated inference costs across OpenAI API requests.",
    tags: ["Python", "OpenAI API", "Usage instrumentation"],
    outcome: "In progress",
  },
  {
    name: "School Enrollment System",
    category: "EDUCATION · WEB APPLICATION",
    description: "A database-driven enrollment platform for student registration and course selection, built with a five-person engineering team.",
    tags: ["JavaScript", "HTML", "CSS", "MySQL"],
    outcome: "Team of 5 · 200+ students",
  },
];
const stack = [
  {
    icon: Code2,
    title: "Frontend Web Development",
    description: "My strongest area: building responsive websites and user interfaces.",
    tools: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Next.js"],
  },
  {
    icon: Layers,
    title: "Python & AI",
    description: "Some experience exploring AI and computer vision with Python.",
    tools: ["Python", "YOLO", "Computer Vision", "OpenAI API"],
  },
  {
    icon: Terminal,
    title: "Mobile Development",
    description: "Some experience building iOS apps and mobile prototypes.",
    tools: ["Swift", "SwiftUI", "iOS", "Supabase"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xzddpabn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="nav-inner">
          <a className="brand" href="#home" aria-label="Jefferson Adda home">
            <span className="monogram">
              ja<span>.</span>
            </span>
            <span>
              Jefferson Adda<span className="brand-dot">.</span>
            </span>
          </a>
          <nav
            id="mobile-menu"
            className={menuOpen ? "navigation open" : "navigation"}
            aria-label="Main navigation"
          >
            {["Projects", "About", "Experience", "Toolkit"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="home">
          <div className="hero-note">
            <span className="status-dot" /> COMPUTER VISION ENGINEERING INTERN
          </div>
          <p className="eyebrow">COMPUTER ENGINEERING · SOFTWARE & AI</p>
          <h1
            aria-label="Hey, I’m Jefferson. Building digital experiences that matter."
          >
            Hey, I’m Jefferson<span className="accent">.</span>
            <br />
            Building digital
            <br />
            <span className="serif rotating-headline" aria-hidden="true">
              {headlines.map((headline) => (
                <span className="headline-sizer" key={headline}>
                  {headline}
                  <span className="ml-1">|</span>
                </span>
              ))}
              <TextType
                text={headlines}
                className="headline-animation"
                typingSpeed={100}
                pauseDuration={2000}
              />
              <span className="headline-static">{headlines[0]}</span>
            </span>
          </h1>
          <p className="hero-description">
            Computer Engineering at the University of Ghana. Building software
            across computer vision, edge AI, iOS, and the web.
          </p>
          <div className="hero-action">
            <div className="primary-action">
              <a className="button dark" href="#projects">
                Explore my work <ArrowRight size={18} />
              </a>
              <a className="hand-guide hero-guide" href="#projects">
                <span>Start here</span>
                <GuideArrow />
              </a>
            </div>
            <a
              className="button resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download resume <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="hero-bottom">
            <span>BSc COMPUTER ENGINEERING · EXPECTED 2027</span>
            <div className="social-links">
              <a
                href="https://github.com/jefferson-ai"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/jeffersonadda"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <a
                href="https://x.com/Princewest_7"
                target="_blank"
                rel="noreferrer"
                aria-label="X social profile"
              >
                <span className="x-icon">𝕏</span>
              </a>
            </div>
          </div>
        </section>
        <section
          className="section projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <a className="hand-guide projects-guide" href="#xkeep">
            <GuideArrow />
            <span>Start with XKEEP</span>
          </a>
          <article className="xkeep-feature" id="xkeep">
            <div className="xkeep-feature-copy">
              <p className="xkeep-kicker">FEATURED PROJECT · IOS APP</p>
              <h2 id="projects-title">XKEEP<span>.</span></h2>
              <p className="xkeep-lead">
                A clearer way to manage everyday money.
              </p>
              <p className="xkeep-summary">
                I built XKEEP to help people track spending, plan budgets, and
                work toward savings goals in one native iOS app.
              </p>
              <div className="xkeep-facts" aria-label="XKEEP project facts">
                <div>
                  <strong>100+</strong>
                  <span>student beta testers</span>
                </div>
                <div>
                  <strong>iOS</strong>
                  <span>available through TestFlight</span>
                </div>
              </div>
              <div className="xkeep-actions">
                <a
                  className="button xkeep-testflight"
                  href="https://testflight.apple.com/join/Vg8xBQ85"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try XKEEP on TestFlight <ArrowUpRight size={18} />
                </a>
                <a className="xkeep-story-link" href="#xkeep-story">
                  Read the case study <ArrowRight size={18} />
                </a>
              </div>
              <p className="xkeep-beta-note">
                TestFlight installs the beta through Apple’s TestFlight app.
              </p>
            </div>
            <figure className="xkeep-visual">
              <img
                className="xkeep-visual-main"
                src="/xkeep-onboarding-dashboard.png"
                alt="XKEEP onboarding artwork showing a balance and recent transactions"
                width="1024"
                height="1024"
              />
              <figcaption>Onboarding artwork from the XKEEP app</figcaption>
            </figure>
          </article>
          <div className="xkeep-story" id="xkeep-story">
            <div>
              <p className="eyebrow">BEHIND THE APP</p>
              <h3>Built to make the numbers useful.</h3>
            </div>
            <div className="xkeep-story-details">
              <p>
                XKEEP brings transactions, category budgets, savings goals,
                and spending reports into one place. The aim is to make it
                easier to see where money went and what is left to plan with.
              </p>
              <p>
                I developed the iOS app with Swift and SwiftUI, using Supabase
                and PostgreSQL for accounts and data. The project also gave me
                hands-on experience with real-time updates, access rules, and
                biometric sign-in.
              </p>
              <div className="xkeep-story-tags" aria-label="Technologies used">
                <span>Swift</span>
                <span>SwiftUI</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
          <section className="xkeep-gallery" aria-labelledby="xkeep-gallery-title">
            <div className="xkeep-gallery-heading">
              <div>
                <p className="eyebrow">A CLOSER LOOK</p>
                <h3 id="xkeep-gallery-title">The app, one moment at a time.</h3>
              </div>
              <p>
                These visual previews come from XKEEP’s onboarding. The beta is
                available to try through TestFlight.
              </p>
            </div>
            <div className="xkeep-gallery-grid">
              <figure className="xkeep-gallery-card">
                <div className="xkeep-gallery-canvas xkeep-gallery-canvas-log">
                  <span className="xkeep-gallery-index">01 / LOG A TRANSACTION</span>
                  <img
                    src="/xkeep-onboarding-logging.png"
                    alt="XKEEP onboarding artwork showing the expense entry screen"
                    width="1024"
                    height="1024"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>Capture the everyday.</strong>
                  <span>Record expenses by category as they happen.</span>
                </figcaption>
              </figure>
              <figure className="xkeep-gallery-card">
                <div className="xkeep-gallery-canvas xkeep-gallery-canvas-plan">
                  <span className="xkeep-gallery-index">02 / PLAN AHEAD</span>
                  <img
                    src="/xkeep-onboarding-budgets.png"
                    alt="XKEEP onboarding artwork showing budgets and savings goals"
                    width="1024"
                    height="1024"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>See what is left.</strong>
                  <span>Keep category budgets and savings goals in view.</span>
                </figcaption>
              </figure>
            </div>
          </section>
          <p className="eyebrow other-projects-label">MORE PROJECTS</p>
          <div className="projects-editorial">
            <div className="project-list" id="project-list">
              {projects.map((project, index) => (
                <article
                  className="project-issue"
                  key={project.name}
                >
                  <span className="issue-category">
                    0{index + 2} / {project.category}
                  </span>
                  <h3>
                    {project.name}
                  </h3>
                  <p>{project.description}</p>
                  <span className="issue-tools">{project.tags.join(" · ")}</span>
                  <span className="project-outcome">{project.outcome}</span>
                </article>
              ))}
              <a
                className="text-link archive-link"
                href="https://github.com/jefferson-ai"
                target="_blank"
                rel="noreferrer"
              >
                See all my work <ArrowRight size={19} />
              </a>
            </div>
            <div className="projects-intro">
              <p className="eyebrow">BEYOND XKEEP</p>
              <h2>
                A few ideas.
                <br />A lot of curiosity.
                <br />
                Real things, built.
              </h2>
              <p>
                From everyday problems to experiments that spark something new.
                Here’s a look at what I’ve been building, one project at a time.
              </p>
              <a
                className="button project-cta"
                href="https://github.com/jefferson-ai"
                target="_blank"
                rel="noreferrer"
              >
                Explore my GitHub <ArrowUpRight size={18} />
              </a>
              <p className="project-footnote">
                <span className="status-dot" /> Always learning. Always a work
                in progress.
              </p>
            </div>
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="section about-grid">
            <div>
              <p className="eyebrow">THE PERSON BEHIND THE CODE</p>
              <h2>
                Curiosity first.
                <br />
                Everything else
                <br />
                <span className="serif">follows.</span>
              </h2>
              <div className="signature">
                Jefferson Adda <span>↗</span>
              </div>
            </div>
            <div className="about-copy" id="about-copy">
              <a className="hand-guide story-guide" href="#about-intro">
                <span>A little about me</span>
                <GuideArrow />
              </a>
              <p className="intro" id="about-intro">
                I study Computer Engineering at the University of Ghana.
                <br />
                I build software for real-world problems.
              </p>
              <p>
                I’m a Computer Vision Engineering Intern in the Department of
                Computer Engineering, working on a Python, YOLO, and Raspberry
                Pi system to detect crop-threatening birds in real time. My
                work includes camera systems, GStreamer pipelines, and
                low-latency edge inference.
              </p>
              <p>
                I also freelance as a web developer, building responsive sites
                and applications for small businesses. I’m interested in
                computer vision, edge AI, iOS development, and practical LLM
                applications.
              </p>
              <div className="availability">
                <span className="status-dot" />
                <p>
                  Looking for my next chapter.
                  <br />
                  <span>BSc Computer Engineering, expected 2027.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WORK & SERVICE</p>
              <h2>Experience<span className="accent">.</span></h2>
            </div>
            <p className="heading-note">
              Engineering, freelance work,
              <br />
              and campus support.
            </p>
          </div>
          <div className="experience-list">
            <article className="experience-row">
              <div>
                <h3>Computer Vision Engineering Intern</h3>
                <p>University of Ghana · Department of Computer Engineering</p>
              </div>
              <time>2026–Present</time>
              <ul>
                <li>
                  Building a real-time bird detection and tracking system with
                  Python, YOLO, and Raspberry Pi for agricultural pest
                  deterrence.
                </li>
                <li>
                  Evaluating global-shutter cameras and GStreamer pipelines to
                  reduce motion artifacts and camera-to-inference latency.
                </li>
              </ul>
            </article>
            <article className="experience-row">
              <div>
                <h3>Freelance Web Developer</h3>
                <p>Small business websites and web applications</p>
              </div>
              <time>Jan 2025–Present</time>
              <ul>
                <li>
                  Build responsive websites, product catalogs, shopping
                  interfaces, and interactive forms with HTML, CSS, and
                  JavaScript.
                </li>
              </ul>
            </article>
            <article className="experience-row">
              <div>
                <h3>Technical Support Volunteer</h3>
                <p>University of Ghana</p>
              </div>
              <time>Mar–Sep 2025</time>
              <ul>
                <li>
                  Resolved hardware, software, connectivity, and system setup
                  issues for students and faculty.
                </li>
                <li>
                  Helped with software installation, network troubleshooting,
                  and cybersecurity practices.
                </li>
              </ul>
            </article>
          </div>
        </section>
        <section className="section toolkit-section" id="toolkit">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY CURRENT TOOLKIT</p>
              <h2>Where I’m building<span className="accent">.</span></h2>
            </div>
            <p className="heading-note">
              Frontend web development is my strength, with some experience in
              Python/AI and iOS.
            </p>
          </div>
          <div className="toolkit-grid">
            {stack.map((group) => (
              <article className="tool-card" key={group.title}>
                <group.icon size={25} strokeWidth={1.4} />
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tool-list">
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="section contact-grid">
            <div>
              <p className="eyebrow">LET’S MAKE SOMETHING GOOD</p>
              <h2>
                Got an idea?
                <br />
                <span className="serif">Let’s talk.</span>
                <span className="accent"> ↗</span>
              </h2>
              <p>
                A project, an opportunity, or just a hello.
                <br />
                I’d love to hear what you’re thinking.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/jeffersonadda"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <ArrowUpRight size={17} />
              </a>
            </div>
            <form onSubmit={sendMessage} className="contact-form">
              <label
                className="hand-guide contact-guide"
                htmlFor="contact-name"
              >
                <span>It starts with a hello</span>
                <GuideArrow />
              </label>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Taylor"
                    required
                    maxLength={120}
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="alex@example.com"
                    required
                  />
                </label>
              </div>
              <label>
                What’s on your mind?
                <textarea
                  name="message"
                  placeholder="Tell me a little about it…"
                  rows={4}
                  required
                  maxLength={5000}
                />
              </label>
              <div aria-live="polite">
                {status === "success" && (
                  <p className="form-message success">
                    <Check size={17} /> Message sent. Thanks for reaching out!
                  </p>
                )}
                {status === "error" && (
                  <p className="form-message">
                    Couldn’t send your message. Please try again or connect on
                    LinkedIn.
                  </p>
                )}
              </div>
              <button
                className="button dark"
                disabled={status === "sending"}
                type="submit"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="brand" href="#home">
          Jefferson Adda<span className="accent">.</span>
        </a>
        <p>Always learning. Always building.</p>
        <span>© {new Date().getFullYear()} Jefferson Adda</span>
      </footer>
    </>
  );
}
export default App;
