import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Layers3,
  Lightbulb,
  Mail,
  Phone,
  Target,
} from "lucide-react";
import pagestioLogo from "../assets/pagestio-logo.png";
import pagestioIcon from "../assets/pagestio-icon.png";
import pagestioHeaderLogo from "../imports/Elegant_Metallic_Gold_Angular_Emblem-1.png";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contacts", label: "Contact" },
];

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function Brand({
  compact = false,
  logoSrc = pagestioIcon,
  showName = true,
}: {
  compact?: boolean;
  logoSrc?: string;
  showName?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      className="group flex items-center gap-3"
      aria-label="Go to PAGESTIO home"
    >
      <span
        className={`relative flex items-center justify-center shrink-0 ${
          compact ? "h-10 w-10" : "h-12 w-12"
        }`}
      >
        <img
          src={logoSrc}
          alt="PAGESTIO"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </span>
      {showName && (
        <span
          className={`font-['Poppins:Bold',_sans-serif] tracking-[0.22em] text-[#f8f7f9] ${
            compact ? "text-[16px]" : "text-[20px]"
          }`}
        >
          PAGESTIO
        </span>
      )}
    </button>
  );
}

function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Brand compact logoSrc={pagestioIcon} showName={false} />

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`font-['Poppins:Regular',_sans-serif] text-[14px] transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-[#f4c758]"
                  : "text-white/55 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("contacts")}
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3b64b]/45 text-[#f4c758] transition-colors hover:bg-[#e3b64b] hover:text-[#111]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("contacts")}
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3b64b]/45 text-[#f4c758] transition-colors hover:bg-[#e3b64b] hover:text-[#111]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.18-3.5-8.42ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c-.01 5.44-4.45 9.86-9.91 9.86Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <div className="absolute -right-40 top-20 h-[540px] w-[540px] rounded-full bg-[#d6a438]/10 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#f8d875]/5 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#e3b64b]" />
            <span className="font-['Poppins:Medium',_sans-serif] text-[12px] uppercase tracking-[0.3em] text-[#e3b64b]">
              Company portfolio
            </span>
          </div>

          <h1 className="max-w-4xl font-['Poppins:Bold',_sans-serif] text-[clamp(54px,8vw,112px)] leading-[0.88] tracking-[-0.055em] text-[#f8f7f9]">
            Ideas into
            <span className="block bg-gradient-to-r from-[#c99228] via-[#ffe795] to-[#d5a331] bg-clip-text text-transparent">
              impact.
            </span>
          </h1>

          <p className="mt-8 max-w-xl font-['Poppins:Regular',_sans-serif] text-[17px] leading-8 text-white/55 sm:text-[19px]">
            PAGESTIO is a forward-looking company focused on turning ambitious
            ideas into thoughtful, meaningful digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-[#c9942f] to-[#f5d77f] px-7 py-4 font-['Poppins:Bold',_sans-serif] text-[14px] text-[#17120a] transition-transform hover:-translate-y-0.5"
            >
              Explore our work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="rounded-full border border-white/15 px-7 py-4 font-['Poppins:Medium',_sans-serif] text-[14px] text-white/75 transition-colors hover:border-white/35 hover:text-white"
            >
              Discover PAGESTIO
            </button>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center lg:justify-end">
          <div className="absolute h-[82%] w-[82%] rounded-full border border-[#e3b64b]/20" />
          <div className="absolute h-[64%] w-[64%] rounded-full border border-[#e3b64b]/10" />
          <div className="absolute inset-12 rounded-full bg-[#d6a438]/10 blur-[70px]" />
          <img
            src={pagestioLogo}
            alt="PAGESTIO"
            className="relative w-full max-w-[470px] object-contain drop-shadow-[0_25px_65px_rgba(215,170,57,0.16)]"
          />
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-white/30 md:flex">
        <span className="font-['Poppins:Regular',_sans-serif] text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <span className="h-8 w-px bg-gradient-to-b from-white/35 to-transparent" />
      </div>
    </section>
  );
}

const strengths = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Think",
    description:
      "We begin by understanding the idea, the audience, and the opportunity behind every brief.",
  },
  {
    icon: Target,
    number: "02",
    title: "Shape",
    description:
      "We bring clarity to the direction and shape a focused path from concept to execution.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Build",
    description:
      "We craft considered solutions with a balance of function, detail, and lasting value.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="mb-4 font-['Poppins:Medium',_sans-serif] text-[12px] uppercase tracking-[0.3em] text-[#dcb04c]">
              About PAGESTIO
            </p>
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[clamp(46px,7vw,88px)] leading-none tracking-[-0.05em] text-white">
              Built for what&apos;s next.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl font-['Poppins:Regular',_sans-serif] text-[20px] leading-[1.65] text-white/55 sm:text-[24px]">
              PAGESTIO brings ideas, strategy, and execution together. This space
              will soon tell our complete story, introduce our capabilities, and
              show how we create value for the people and businesses we work
              with.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {strengths.map(({ icon: Icon, number, title, description }) => (
            <article
              key={title}
              className="group bg-[#0c0c0c] p-8 transition-colors duration-300 hover:bg-[#12110e] sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e3b64b]/25 text-[#e3b64b]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="font-['Poppins:Regular',_sans-serif] text-[12px] text-white/25">
                  {number}
                </span>
              </div>
              <h3 className="mt-12 font-['Poppins:Bold',_sans-serif] text-[30px] text-white">
                {title}
              </h3>
              <p className="mt-4 font-['Poppins:Regular',_sans-serif] text-[15px] leading-7 text-white/45">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projectPlaceholders = [
  { index: "01", label: "Featured project", tone: "from-[#30240e] to-[#0d0d0d]" },
  { index: "02", label: "Selected work", tone: "from-[#161616] to-[#090909]" },
  { index: "03", label: "Case study", tone: "from-[#211b10] to-[#0c0c0b]" },
];

function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-['Poppins:Medium',_sans-serif] text-[12px] uppercase tracking-[0.3em] text-[#dcb04c]">
              Our portfolio
            </p>
            <h2 className="font-['Poppins:Bold',_sans-serif] text-[clamp(48px,7vw,88px)] leading-none tracking-[-0.05em] text-white">
              Selected work.
            </h2>
          </div>
          <p className="max-w-sm font-['Poppins:Regular',_sans-serif] text-[14px] leading-6 text-white/40">
            Our project stories and detailed case studies will be added here as
            the portfolio content is finalized.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projectPlaceholders.map((project, index) => (
            <article
              key={project.index}
              className={`group relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.tone} p-7 sm:p-9 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#e3b64b]/10 transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute -right-2 top-16 h-40 w-40 rounded-full border border-[#e3b64b]/10 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins:Regular',_sans-serif] text-[12px] tracking-[0.18em] text-white/35">
                    {project.index}
                  </span>
                  <ArrowDownRight className="h-5 w-5 text-[#e3b64b]/70" />
                </div>
                <div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[11px] uppercase tracking-[0.25em] text-[#dcb04c]">
                    Coming soon
                  </p>
                  <h3 className="mt-3 max-w-md font-['Poppins:Bold',_sans-serif] text-[32px] leading-tight text-white sm:text-[40px]">
                    {project.label}
                  </h3>
                  <p className="mt-4 max-w-md font-['Poppins:Regular',_sans-serif] text-[14px] leading-6 text-white/40">
                    Project name, scope, process, and outcome will be presented
                    here.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="px-5 pb-6 pt-20 sm:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[#e3b64b]/20 bg-[#11100d] px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
        <div className="absolute -right-32 -top-44 h-[520px] w-[520px] rounded-full bg-[#d5a331]/10 blur-[100px]" />
        <div className="relative grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-5 font-['Poppins:Medium',_sans-serif] text-[12px] uppercase tracking-[0.3em] text-[#dcb04c]">
              Start a conversation
            </p>
            <h2 className="max-w-3xl font-['Poppins:Bold',_sans-serif] text-[clamp(48px,7vw,88px)] leading-[0.95] tracking-[-0.05em] text-white">
              Let&apos;s create what comes next.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="font-['Poppins:Regular',_sans-serif] text-[16px] leading-7 text-white/45">
              Have a project or partnership in mind? Reach out to PAGESTIO
              directly.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:pagestio.official@gmail.com"
                className="group flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e3b64b]/45 text-[#f4c758] transition-all duration-300 group-hover:bg-[#e3b64b] group-hover:text-[#111] group-hover:shadow-[0_0_20px_rgba(227,182,75,0.35)]">
                  <Mail className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-['Poppins:Medium',_sans-serif] text-[15px] text-[#e3b64b] transition-colors group-hover:text-[#f5d77f] sm:text-[17px]">
                  pagestio.official@gmail.com
                </span>
              </a>
              <a
                href="tel:6238473127"
                className="group flex items-center gap-4 transition-transform duration-200 hover:translate-x-1"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#e3b64b]/45 text-[#f4c758] transition-all duration-300 group-hover:bg-[#e3b64b] group-hover:text-[#111] group-hover:shadow-[0_0_20px_rgba(227,182,75,0.35)]">
                  <Phone className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-['Poppins:Medium',_sans-serif] text-[15px] text-white/70 transition-colors group-hover:text-white sm:text-[17px]">
                  +91 62384 73127
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-1 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Brand compact />
        <p className="font-['Poppins:Regular',_sans-serif] text-[11px] tracking-wide text-white/30">
          © {new Date().getFullYear()} PAGESTIO. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#090909] text-white selection:bg-[#e3b64b] selection:text-[#111]">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
      </main>
    </div>
  );
}
