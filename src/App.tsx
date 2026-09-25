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
    name: "Personal Expense Tracker",
    category: "WEB APPLICATION",
    description:
      "A little more clarity for everyday finances. Track income, understand spending, and see the bigger picture.",
    image: "/expense-tracker-preview.png",
    tags: ["React", "Firebase", "Recharts"],
    url: "https://github.com/jefferson-ai/Expense-Tracker",
    className: "expense",
  },
  {
    name: "Developer Portfolio",
    category: "DESIGN & DEVELOPMENT",
    description:
      "My corner of the internet. A home for the things I build, what I’m learning, and what comes next.",
    image: "/portfolio-preview.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    url: "https://github.com/jefferson-ai/Portfolio-website",
    className: "portfolio",
  },
  {
    name: "E-Commerce Dashboard",
    category: "PRODUCT CONCEPT",
    description:
      "A dashboard concept for managing products, orders, inventory, and sales insights.",
    tags: ["React", "TypeScript", "Data visualization"],
  },
  {
    name: "Task Management App",
    category: "PRODUCT CONCEPT",
    description:
      "A productivity app concept for organizing tasks, team workspaces, and shared projects.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
  },
];
const stack = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Interfaces and interactions for the web.",
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Framer Motion",
      "HTML5/CSS3",
    ],
  },
  {
    icon: Layers,
    title: "Backend",
    description: "APIs, data, and the systems behind products.",
    tools: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    icon: Terminal,
    title: "Tools & DevOps",
    description: "Tools I use to build, ship, and collaborate.",
    tools: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Figma"],
  },
  {
    icon: Check,
    title: "Soft Skills",
    description: "How I approach the work and work with others.",
    tools: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Agile/Scrum",
      "Fast Learner",
    ],
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
            {["Projects", "About", "Toolkit"].map((item) => (
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
            <span className="status-dot" /> OPEN TO OPPORTUNITIES
          </div>
          <p className="eyebrow">DEVELOPER. ENGINEER. ALWAYS CURIOUS.</p>
          <h1 aria-label="Hey, I’m Jefferson. Building digital experiences that matter.">
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
            A computer engineering student building thoughtful web
            <br className="desktop-break" /> experiences and exploring what’s
            possible with AI.
          </p>
          <div className="hero-action">
            <a className="button dark" href="#projects">
              Explore my work <ArrowRight size={18} />
            </a>
            <a className="hand-guide hero-guide" href="#projects">
              <span>Start here</span>
              <GuideArrow />
            </a>
          </div>
          <div className="hero-bottom">
            <span>CODE WITH PURPOSE. BUILD WITH CARE.</span>
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
          <a className="hand-guide projects-guide" href="#project-list">
            <GuideArrow />
            <span>Explore my latest projects</span>
          </a>
          <div className="projects-editorial">
            <div className="project-list" id="project-list">
              {projects.map((project, index) => (
                <article
                  className={`project-issue ${project.url ? "project-link" : "project-concept"}`}
                  key={project.name}
                >
                  <span className="issue-category">
                    0{index + 1} / {project.category}
                  </span>
                  <h3>
                    {project.name}
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name} on GitHub`}
                      >
                        <ArrowUpRight size={19} />
                      </a>
                    ) : (
                      <span className="concept-mark">✳</span>
                    )}
                  </h3>
                  <p>{project.description}</p>
                  <span className="issue-tools">
                    {project.tags.join(" · ")}
                  </span>
                  {!project.url && (
                    <span className="concept-note">Concept · in progress</span>
                  )}
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
              <p className="eyebrow">SELECTED PROJECTS</p>
              <h2 id="projects-title">
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
                I like understanding how things work.
                <br />
                Even more, I like making them work better.
              </p>
              <p>
                I’m Jefferson, a Computer Engineering student with a love for
                web development and applied AI. I’m drawn to the space where
                good engineering meets a genuinely useful experience.
              </p>
              <p>
                That usually means experimenting with an idea, connecting the
                right APIs, and getting deep into the backend until everything
                clicks. I care about the small details, the big picture, and
                learning something new along the way.
              </p>
              <div className="availability">
                <span className="status-dot" />
                <p>
                  Looking for my next chapter.
                  <br />
                  <span>Open to internships and full-time opportunities.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section toolkit-section" id="toolkit">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY EVERYDAY TOOLKIT</p>
              <h2>
                Good tools. Better ideas<span className="accent">.</span>
              </h2>
            </div>
            <p className="heading-note">
              The technologies I reach for
              <br />
              to bring an idea to life.
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
