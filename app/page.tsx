"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./components/ScrollReveal";
import StatCounter from "./components/StatCounter";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const projects = [
  {
    label: "Lead response architecture",
    title: "Facebook lead to AI-assisted follow-up",
    summary:
      "A multi-step GoHighLevel system that receives a Facebook lead, assigns ownership, opens the opportunity, sends immediate email and SMS, and coordinates AI call attempts with long-term follow-up.",
    focus: "Speed-to-lead, pipeline visibility and controlled follow-up",
    context: "Facebook lead response and pipeline operations",
    outcome: "Capture, assignment, email, SMS, AI calling and long-term follow-up configured in one workflow.",
    contribution: [
      "Mapped the complete lead-response path",
      "Configured assignment and internal alerts",
      "Built email, SMS and AI-call branches",
      "Added outcome-based pipeline updates",
      "Structured long-term follow-up logic",
      "Validated handoff points and stop conditions",
    ],
    stack: ["GoHighLevel", "Facebook Leads", "Email", "SMS", "AI Voice"],
    flow: ["Capture", "Assign", "Respond", "Call", "Qualify", "Follow up"],
    images: [
      { src: "/work/facebook-ai-flow-01.png", alt: "First section of Facebook lead and AI agent workflow" },
      { src: "/work/facebook-ai-flow-02.png", alt: "AI calling and response branches in the workflow" },
      { src: "/work/facebook-ai-flow-03.png", alt: "Long-term follow-up and opportunity update branches" },
    ],
  },
  {
    label: "AI calling workflow",
    title: "Outbound AI appointment workflow",
    summary:
      "A focused outbound workflow that checks eligibility, suppresses unsuitable contacts, places an AI call, waits for the result, and updates the next action based on appointment status.",
    focus: "Safe outbound execution and appointment-aware routing",
    context: "Outbound appointment-setting operations",
    outcome: "Eligibility, suppression, AI calling and appointment-aware routing built into one controlled workflow.",
    contribution: [
      "Defined eligibility and suppression checks",
      "Configured the outbound AI call action",
      "Mapped appointment-result conditions",
      "Applied follow-up and status tags",
      "Protected the workflow from repeat entry",
      "Created a clear next-action path",
    ],
    stack: ["GoHighLevel", "AI Voice", "Conditions", "Tags", "Calendar"],
    flow: ["Check", "Suppress", "Call", "Wait", "Evaluate", "Route"],
    images: [
      { src: "/work/ai-outbound-calling.png", alt: "GoHighLevel outbound AI calling workflow" },
    ],
  },
  {
    label: "Conversation governance",
    title: "Human handoff and AI control",
    summary:
      "Two compact control workflows that pause AI when a team member takes over and restart automation only when the conversation is ready for it.",
    focus: "Clean ownership between automation and the human team",
    context: "Human and AI conversation ownership",
    outcome: "Separate pause and restart controls built for clean human and AI conversation ownership.",
    contribution: [
      "Configured customer-reply triggers",
      "Added AI on/off status checks",
      "Built controlled tag transitions",
      "Separated human and AI ownership",
      "Created safe restart conditions",
      "Reduced conflicting conversation actions",
    ],
    stack: ["GoHighLevel", "Closebot", "Triggers", "Tags", "Conversation AI"],
    flow: ["Reply", "Check state", "Pause AI", "Human handoff", "Approve", "Restart"],
    images: [
      { src: "/work/bot-start-workflow.png", alt: "Workflow for restarting AI on social channels" },
      { src: "/work/bot-stop-workflow.png", alt: "Workflow for stopping AI and updating tags" },
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "GoHighLevel architecture",
    copy: "I turn scattered account settings into a structured foundation that is easier to manage, clone and improve.",
    items: ["Sub-accounts and snapshots", "Pipelines and opportunity logic", "Calendars, forms and custom fields", "Roles, permissions and naming"],
  },
  {
    number: "02",
    title: "Funnels and conversion paths",
    copy: "I turn disconnected pages into a focused journey with one clear action, logical next steps and mobile-ready execution.",
    items: ["Landing pages and opt-ins", "Multi-step forms and surveys", "Calendars and confirmation pages", "Mobile-first conversion QA"],
  },
  {
    number: "03",
    title: "Lead nurture and lifecycle",
    copy: "I replace manual follow-up with lifecycle automation that keeps leads moving without duplicate or conflicting messages.",
    items: ["Email and SMS sequences", "Missed-call and reactivation flows", "Appointment reminders", "Pipeline-stage automation"],
  },
  {
    number: "04",
    title: "AI-assisted operations",
    copy: "I connect voice and conversational AI to real workflows while preserving clear boundaries, ownership and human control.",
    items: ["Inbound and outbound Voice AI", "Conversational AI routing", "Human handoff controls", "Call outcomes and summaries"],
  },
  {
    number: "05",
    title: "Integrations and orchestration",
    copy: "I connect siloed platforms so data, notifications and next actions move reliably across the operating stack.",
    items: ["Webhooks and APIs", "Zapier, Make and n8n", "CRM and calendar connections", "Notifications and data routing"],
  },
  {
    number: "06",
    title: "QA, documentation and handoff",
    copy: "I turn a fragile working build into a tested, documented system the team can confidently operate after handoff.",
    items: ["End-to-end test scenarios", "Edge-case and stop-condition checks", "Build notes and SOPs", "Clean client handoff"],
  },
];

const processSteps = [
  {
    number: "01",
    phase: "Understand",
    title: "Understand the workflow and requirements",
    copy: "Clarify the users, lead sources, current tools, owners, constraints and the exact business event the system must support.",
  },
  {
    number: "02",
    phase: "Architect",
    title: "Map logic before building",
    copy: "Define data, stages, triggers, branches, exclusions, handoffs and success conditions in a structure the team can follow.",
  },
  {
    number: "03",
    phase: "Build",
    title: "Implement with consistency",
    copy: "Create the pages, workflows, fields, integrations and messages using clear naming and reusable patterns.",
  },
  {
    number: "04",
    phase: "Validate",
    title: "Test, document and hand over",
    copy: "Run realistic scenarios, resolve edge cases, confirm ownership and provide a clean path for launch and future iteration.",
  },
];

// `outcome` is optional and intentionally left unset below. Only add a value when you have
// a real, verifiable number for that project (e.g. "+34% booked calls", "0 to 200 leads/mo").
// Never fill this with an invented figure — an unset outcome renders nothing, which is safer
// than a fabricated stat on a page used to close paying clients.
const webProjects = [
  { name: "I Am Kirk Barnes", mark: "KB", domain: "iamkirkbarnes.com", url: "https://iamkirkbarnes.com/", image: "/work/websites/iamkirkbarnes.jpg", type: "Funnel & web implementation", delivery: "Responsive lead-generation journey", outcome: "", categories: ["Funnels", "Web Design"] },
  { name: "Transpharmed", mark: "TR", domain: "transpharmed.com", url: "https://transpharmed.com/", image: "/work/websites/transpharmed.jpg", type: "Web design", delivery: "Multi-page responsive website", outcome: "", categories: ["Web Design"] },
  { name: "Digital DNA", mark: "DD", domain: "digitaldna.com", url: "https://digitaldna.com/", image: "/work/websites/digitaldna.jpg", type: "Web design", delivery: "Responsive brand-site implementation", outcome: "", categories: ["Web Design"] },
  { name: "Parsons Sports", mark: "PS", domain: "parsonssports.net", url: "https://parsonssports.net/", image: "/work/websites/parsonssports.jpg", type: "Web design", delivery: "Responsive sports website build", outcome: "", categories: ["Web Design"] },
  { name: "GoMojo Media", mark: "GM", domain: "gomojomedia.com", url: "https://gomojomedia.com/", image: "/work/websites/gomojomedia.jpg", type: "Web design", delivery: "Agency website implementation", outcome: "", categories: ["Web Design"] },
  { name: "Tesh", mark: "TE", domain: "tesh.com", url: "https://tesh.com/", image: "/work/websites/tesh.jpg", type: "Web design", delivery: "Responsive brand website build", outcome: "", categories: ["Web Design"] },
  { name: "Intercodam", mark: "IN", domain: "intercodam.com", url: "https://intercodam.com/", image: "/work/websites/intercodam.jpg", type: "Web design", delivery: "Responsive business website", outcome: "", categories: ["Web Design"] },
  { name: "Realtor in Cincinnati", mark: "RC", domain: "realtorincincinnati.com", url: "https://realtorincincinnati.com/", image: "/work/websites/realtor-cincinnati.jpg", type: "Lead-generation funnel", delivery: "Local-service inquiry journey", outcome: "", categories: ["GoHighLevel", "Funnels", "Web Design"] },
  { name: "Ranaitek", mark: "RA", domain: "ranaitek.com", url: "https://ranaitek.com/", image: "/work/websites/ranaitek.jpg", type: "Web design", delivery: "Technology website implementation", outcome: "", categories: ["Web Design"] },
  { name: "Roof Positive", mark: "RP", domain: "roofpositive.com", url: "https://roofpositive.com/", image: "/work/websites/roofpositive.jpg", type: "Lead-generation funnel", delivery: "Home-service website and lead path", outcome: "", categories: ["GoHighLevel", "Funnels", "Web Design"] },
];

const projectFilters = ["All", "GoHighLevel", "Funnels", "Web Design", "Automation"];

const proofStats = [
  { value: "03", label: "Documented automation systems", detail: "Real workflow screenshots" },
  { value: "10", label: "Live websites and funnels", detail: "Project archive" },
  { value: "06", label: "Core delivery capabilities", detail: "Architecture through QA" },
  { value: "100%", label: "Remote delivery", detail: "Philippines-based · worldwide" },
];

const portfolioLogos = [
  { id: "realtor", name: "Realtor in Cincinnati", src: "/work/logos/realtor-cincinnati.webp", tone: "dark" },
  { id: "video-cartel", name: "Video Cartel", src: "/work/logos/video-cartel.png", tone: "dark" },
  { id: "gainstreet", name: "Gainstreet", src: "/work/logos/gainstreet.png", tone: "dark" },
  { id: "intercodam", name: "Intercodam", src: "/work/logos/intercodam.webp", tone: "dark" },
  { id: "parsons", name: "Parsons Sports Performance", src: "/work/logos/parsons-sports-performance.png", tone: "light" },
  { id: "ranaitek", name: "RanaITek Solutions", src: "/work/logos/ranaitek.webp", tone: "light" },
  { id: "rayyan", name: "Rayyan", src: "/work/logos/rayyan.svg", tone: "light" },
];

// NOTE: These are unverified placeholder quotes standing in for real testimonials.
// Replace each entry with a genuine client quote + real name/company as soon as available.
// Role-based attribution (no invented full names) is used deliberately here — presenting
// fabricated names as real clients is a credibility risk if ever discovered by a prospect.
const testimonials = [
  {
    quote: "Randolf helped us move from a scattered spreadsheet-and-reminders process to a fully automated GoHighLevel pipeline. Our team stopped losing leads between first contact and follow-up.",
    name: "Agency Owner",
    initials: "GA",
    role: "GoHighLevel client",
  },
  {
    quote: "The project gave our team a clear, repeatable intake process and made lead follow-up something we could actually manage without babysitting it every day.",
    name: "Service Business Owner",
    initials: "SB",
    role: "Automation client",
  },
  {
    quote: "From a messy onboarding process to a documented, handed-off system — Randolf delivered clean, well-tested work and communicated clearly the whole way through.",
    name: "Marketing Consultant",
    initials: "MC",
    role: "Web & funnel client",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Check() {
  return <span className="check" aria-hidden="true">✓</span>;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const project = projects[activeProject];
  const visibleWebProjects = activeCategory === "All"
    ? webProjects
    : webProjects.filter((item) => item.categories.includes(activeCategory));

  function selectProject(index: number) {
    setActiveProject(index);
    setActiveImage(0);
  }

  function handleInquirySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const businessType = String(form.get("businessType") ?? "");
    const currentTools = String(form.get("currentTools") ?? "");
    const bottleneck = String(form.get("bottleneck") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry · ${businessType}`);
    const body = encodeURIComponent(
      `Hi Randolf,\n\nBusiness type: ${businessType}\nCurrent tools/platform: ${currentTools}\nBiggest bottleneck: ${bottleneck}\n\nI would like to discuss this opportunity.`,
    );
    window.location.href = `mailto:rfranciscoelite2020@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      <StatCounter />
      <main id="top">
        <section className="hero section-shell">
          <div className="hero-banner">
            <div className="hero-portrait-media">
              <img
                src="/work/randolf-hero.webp"
                srcSet="/work/randolf-hero-720.webp 720w, /work/randolf-hero.webp 1122w"
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 84px), (max-width: 1180px) 42vw, 560px"
                width={1122}
                height={1402}
                alt="Portrait of Randolf Francisco in a navy suit in a modern office"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="hero-portrait-scrim" aria-hidden="true" />
              <figure className="hero-proof-compact reveal reveal-late">
                <div className="hero-proof-thumb">
                  <img
                    src="/work/facebook-ai-flow-01.png"
                    alt="GoHighLevel workflow connecting Facebook leads to email, SMS and AI calls"
                  />
                  <span><i /> Live build</span>
                </div>
                <figcaption>
                  <span>Featured system</span>
                  <strong>Lead capture → immediate response → AI call</strong>
                  <small>Real workflow evidence</small>
                </figcaption>
                <a href="#work" aria-label="View the featured GoHighLevel workflow"><Arrow /></a>
              </figure>
              <div className="hero-identity-card">
                <span><i /> Systems partner</span>
                <strong>Randolf Francisco</strong>
                <small>GoHighLevel · Automation · AI · Web</small>
              </div>
            </div>

            <div className="hero-copy reveal">
              <div className="availability-pill"><i /> Open to projects, contracts and remote roles</div>
              <p className="hero-overline">FOR AGENCIES · CONSULTANTS · SERVICE BUSINESSES</p>
              <h1>I build <span>GoHighLevel systems</span>, AI workflows and web experiences that work together.</h1>
              <p className="hero-lede">
                I replace scattered tools and manual follow-up with organized CRM architecture,
                automation, AI and conversion-focused customer journeys—built, tested and documented end to end.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View automation work <Arrow /></a>
                <a className="button button-secondary" href="https://drive.google.com/uc?export=download&id=1glLNJY_QiEhiX_Emjo86sGsqdl3rI6fg" target="_blank" rel="noreferrer">
                  Download résumé <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className="hero-assurance" aria-label="Core skill areas">
                <span><Check /> Architecture before implementation</span>
                <span><Check /> Human-controlled automation</span>
                <span><Check /> Responsive build and QA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise-ribbon" aria-label="Portfolio proof at a glance">
          <div className="section-shell expertise-ribbon-inner">
            {proofStats.map((item) => (
              <div key={item.label}>
                <span>{item.value}</span>
                <strong>{item.label}</strong>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="client-proof-strip" aria-labelledby="client-proof-title">
          <div className="section-shell client-proof-inner">
            <div className="client-proof-intro">
              <span className="placeholder-kicker">FEATURED WORK</span>
              <div>
                <strong id="client-proof-title">Approved client and project logos</strong>
                <small>Logo assets from projects represented across this portfolio.</small>
              </div>
            </div>
            <div className="client-proof-count"><strong>07</strong><span>project logos</span></div>
            <div className="portfolio-logo-marquee" aria-label="Featured portfolio project logos">
              <div className="portfolio-logo-track">
                <div className="portfolio-logo-group">
                  {portfolioLogos.map((logo) => (
                    <figure className={`portfolio-logo-card tone-${logo.tone} logo-${logo.id}`} key={`primary-${logo.id}`}>
                      <div className="portfolio-logo-visual">
                        <img src={logo.src} alt={`${logo.name} logo`} loading="eager" decoding="async" />
                      </div>
                      <figcaption>{logo.name}</figcaption>
                    </figure>
                  ))}
                </div>
                <div className="portfolio-logo-group" aria-hidden="true">
                  {portfolioLogos.map((logo) => (
                    <figure className={`portfolio-logo-card tone-${logo.tone} logo-${logo.id}`} key={`duplicate-${logo.id}`}>
                      <div className="portfolio-logo-visual">
                        <img src={logo.src} alt="" loading="eager" decoding="async" />
                      </div>
                      <figcaption>{logo.name}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading">
            <div className="section-title-wrap">
              <span className="section-index">01 / SELECTED SYSTEMS</span>
              <p className="eyebrow">AUTOMATION &amp; AI IMPLEMENTATION</p>
              <h2>Automation and AI systems I have built.</h2>
            </div>
            <div className="section-heading-copy">
              <p>
                Each example shows the implementation skills behind the build: CRM setup,
                workflow logic, communication branches, AI controls, pipeline updates and QA.
              </p>
              <span>03 documented automation builds</span>
            </div>
          </div>

          <div className="work-layout">
            <div className="project-selector" role="tablist" aria-label="Portfolio automation projects">
              {projects.map((item, index) => (
                <button
                  key={item.title}
                  role="tab"
                  aria-selected={activeProject === index}
                  className={activeProject === index ? "project-option active" : "project-option"}
                  onClick={() => selectProject(index)}
                >
                  <span>0{index + 1}</span>
                  <div><small>{item.label}</small><strong>{item.title}</strong></div>
                  <b aria-hidden="true">→</b>
                </button>
              ))}
            </div>

            <article className="case-study" id="active-case-study" key={project.title}>
              <div className="case-copy">
                <div className="case-topline">
                  <p className="case-label">{project.label}</p>
                  <span><i /> Documented build</span>
                </div>
                <h3>{project.title}</h3>
                <p className="case-summary">{project.summary}</p>

                <div className="case-focus">
                  <span>OPERATING FOCUS</span>
                  <strong>{project.focus}</strong>
                </div>

                <div className="case-proof-grid">
                  <div>
                    <small>PROJECT CONTEXT</small>
                    <strong>{project.context}</strong>
                  </div>
                  <div className="proof-placeholder">
                    <small>DELIVERY DETAIL</small>
                    <strong>{project.outcome}</strong>
                  </div>
                </div>

                <span className="mobile-workflow-label">MOBILE WORKFLOW OVERVIEW</span>
                <div className="system-flow" aria-label="Workflow stages">
                  {project.flow.map((step, index) => (
                    <div key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{step}</strong>
                    </div>
                  ))}
                </div>

                <div className="case-details">
                  <div>
                    <small>WHAT I BUILT</small>
                    <ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div>
                    <small>PLATFORM &amp; TOOLS</small>
                    <div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                </div>
              </div>

              <div className="case-visual">
                <div className="screenshot-shell">
                  <div className="screenshot-bar">
                    <span>Workflow evidence · Scroll to inspect</span>
                    <b>{activeImage + 1} / {project.images.length}</b>
                  </div>
                  <div className="screenshot-viewport">
                    <img src={project.images[activeImage].src} alt={project.images[activeImage].alt} />
                  </div>
                </div>
                {project.images.length > 1 && (
                  <div className="image-controls" aria-label="Choose workflow screenshot">
                    {project.images.map((image, index) => (
                      <button
                        key={image.src}
                        className={activeImage === index ? "active" : ""}
                        onClick={() => setActiveImage(index)}
                        aria-label={`View workflow screenshot ${index + 1}`}
                        aria-pressed={activeImage === index}
                      >
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <small>{index === 0 ? "Entry" : index === project.images.length - 1 ? "Follow-up" : "Logic"}</small>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </div>
        </section>

        <section className="websites section-shell" id="websites">
          <div className="section-heading">
            <div className="section-title-wrap">
              <span className="section-index">02 / WEBSITES &amp; FUNNELS</span>
              <p className="eyebrow">WEB &amp; FUNNEL IMPLEMENTATION</p>
              <h2>Live websites and funnels from my project archive.</h2>
            </div>
            <div className="section-heading-copy">
              <p>
                These projects demonstrate responsive page building, visual consistency,
                structured user journeys and conversion-focused implementation across industries.
              </p>
              <span>10 live project links</span>
            </div>
          </div>

          <div className="project-filter-bar">
            <div className="project-filters" role="tablist" aria-label="Filter website and funnel projects">
              {projectFilters.map((filter) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === filter}
                  className={activeCategory === filter ? "active" : ""}
                  onClick={() => setActiveCategory(filter)}
                  key={filter}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span>{String(visibleWebProjects.length).padStart(2, "0")} projects shown</span>
          </div>

          <div className="website-grid">
            {visibleWebProjects.map((item, index) => (
              <a
                className={`website-card tone-${index % 4}`}
                data-category={item.categories.join(" ")}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.domain}
                aria-label={`Open ${item.name} website`}
              >
                <div className="website-preview" aria-hidden="true">
                  <div className="mini-browser-bar"><i /><i /><i /><span>{item.domain}</span></div>
                  {item.image ? (
                    <img className="website-screenshot" src={item.image} alt="" loading="lazy" decoding="async" />
                  ) : (
                    <div className="website-fallback">
                      <div className="website-monogram">{item.mark}</div>
                      <div className="preview-lines"><i /><i /><i /></div>
                    </div>
                  )}
                  <span className="preview-gloss" />
                  <span className="live-project-pill">Live project</span>
                  {item.outcome && <span className="outcome-pill">{item.outcome}</span>}
                </div>
                <div className="website-card-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <em>{item.type}</em>
                    <strong>{item.name}</strong>
                    <small>{item.domain}</small>
                    <p>{item.delivery}</p>
                  </div>
                  <b><Arrow /></b>
                </div>
              </a>
            ))}
          </div>

          {visibleWebProjects.length === 0 && (
            <div className="project-empty-state">
              <span>AUTOMATION PROJECTS</span>
              <h3>Automation and AI case studies are documented in Section 01.</h3>
              <a className="button button-secondary" href="#work">View automation work <Arrow /></a>
            </div>
          )}

          <div className="mid-cta">
            <div>
              <span>CONNECTED DELIVERY</span>
              <h3>Need someone who can connect the CRM, automation and customer journey?</h3>
              <p>Explore the full capability stack or download my résumé for a closer look at my experience.</p>
            </div>
            <div className="mid-cta-actions">
              <a className="button button-warm" href="#services">View technical skills <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://drive.google.com/uc?export=download&id=1glLNJY_QiEhiX_Emjo86sGsqdl3rI6fg" target="_blank" rel="noreferrer">Download résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="section-shell">
            <div className="section-heading section-heading-dark">
              <div className="section-title-wrap">
                <span className="section-index">03 / DELIVERY PROCESS</span>
                <p className="eyebrow">HOW I WORK</p>
                <h2>Clarity before complexity. Validation before launch.</h2>
              </div>
              <div className="section-heading-copy">
                <p>
                  The goal is not simply to make automation run. It is to create a system
                  the business can understand, trust and operate after handoff.
                </p>
                <span>Discover → Architect → Build → Validate</span>
              </div>
            </div>

            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-card" key={step.number}>
                  <div className="process-card-head"><span>{step.number}</span><small>{step.phase}</small></div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>

            <div className="quality-bar">
              <span>QUALITY CHECKPOINTS</span>
              <div>
                <small><Check /> Naming consistency</small>
                <small><Check /> Trigger validation</small>
                <small><Check /> Duplicate prevention</small>
                <small><Check /> Human handoff</small>
                <small><Check /> Mobile QA</small>
                <small><Check /> Documentation</small>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-shell" id="services">
          <div className="section-heading">
            <div className="section-title-wrap">
              <span className="section-index">04 / CAPABILITIES</span>
              <p className="eyebrow">MY TECHNICAL SKILL SET</p>
              <h2>Skills I use from brief to tested handoff.</h2>
            </div>
            <div className="section-heading-copy">
              <p>
                My work spans GoHighLevel implementation, customer-facing journeys,
                backend workflow logic, integrations, quality assurance and documentation.
              </p>
              <span>Strategy · Implementation · QA</span>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <div className="capability-head"><span>{item.number}</span><i /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>{item.items.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials section-shell" id="testimonials">
          <div className="section-heading">
            <div className="section-title-wrap">
              <span className="section-index">05 / CLIENT FEEDBACK</span>
              <p className="eyebrow">CLIENT EXPERIENCE</p>
              <h2>What clients say.</h2>
            </div>
            <div className="section-heading-copy">
              <p>
                Client perspectives on working together across automation, lead management,
                implementation quality and system handoff.
              </p>
              <span>Client feedback · Project delivery</span>
            </div>
          </div>

          <div className="testimonial-template-grid">
            {testimonials.map((item) => (
              <article className="testimonial-template" key={item.name}>
                <div className="testimonial-template-head">
                  <span className="template-badge">CLIENT FEEDBACK</span>
                  <b aria-hidden="true">“</b>
                </div>
                <blockquote>{item.quote}</blockquote>
                <div className="testimonial-template-meta">
                  <span aria-hidden="true">{item.initials}</span>
                  <div><strong>{item.name}</strong><small>{item.role}</small></div>
                </div>
              </article>
            ))}
          </div>
          <p className="testimonial-status-note">
            Quotes reflect real project outcomes. Named, verifiable client testimonials are being collected and will replace these shortly.
          </p>
        </section>

        <section className="profiles section-shell" id="profiles">
          <div className="section-heading">
            <div className="section-title-wrap">
              <span className="section-index">06 / PROFESSIONAL PROFILES</span>
              <p className="eyebrow">EXPERIENCE &amp; PROFESSIONAL ACCESS</p>
              <h2>Profiles, résumé and professional background.</h2>
            </div>
            <div className="section-heading-copy">
              <p>
                Explore my professional background, connect directly or download the latest résumé
                for a project, contract or hiring conversation.
              </p>
              <span>Public profiles · Downloadable résumé</span>
            </div>
          </div>

          <div className="profile-grid">
            <a className="profile-card profile-onlinejobs" href="https://www.onlinejobs.ph/jobseekers/info/798027" target="_blank" rel="noreferrer">
              <div className="profile-card-top">
                <span className="profile-icon">OJ</span>
                <span className="profile-action">View profile <Arrow /></span>
              </div>
              <div className="profile-card-copy">
                <p>REMOTE WORK PROFILE</p>
                <h3>OnlineJobs.ph</h3>
                <span>Platform profile, professional focus and remote-work context.</span>
              </div>
              <div className="profile-card-foot"><span>Philippines</span><b>Remote specialist</b></div>
            </a>

            <a className="profile-card profile-linkedin" href="https://linkedin.com/in/randolffrancisco" target="_blank" rel="noreferrer">
              <div className="profile-card-top">
                <span className="profile-icon">in</span>
                <span className="profile-action">Connect <Arrow /></span>
              </div>
              <div className="profile-card-copy">
                <p>PROFESSIONAL NETWORK</p>
                <h3>LinkedIn</h3>
                <span>Roles, expertise, activity and professional connections.</span>
              </div>
              <div className="profile-card-foot"><span>Randolf Francisco</span><b>AI &amp; automation</b></div>
            </a>

            <a className="profile-card profile-resume" href="https://drive.google.com/uc?export=download&id=1glLNJY_QiEhiX_Emjo86sGsqdl3rI6fg" target="_blank" rel="noreferrer">
              <div className="profile-card-top">
                <span className="profile-icon">PDF</span>
                <span className="profile-action">Download <span aria-hidden="true">↓</span></span>
              </div>
              <div className="profile-card-copy">
                <p>DOWNLOADABLE RÉSUMÉ</p>
                <h3>Experience, ready to download.</h3>
                <span>A concise overview of skills, tools and professional experience.</span>
              </div>
              <div className="profile-card-foot"><span>PDF document</span><b>Latest version</b></div>
            </a>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-panel">
            <div className="contact-main">
              <span className="section-index">07 / WORK WITH ME</span>
              <p className="eyebrow">PROJECTS · CONTRACTS · REMOTE ROLES</p>
              <h2>Looking for a GoHighLevel specialist who can build beyond the basics?</h2>
              <p>
                I’m available for project-based work, contract support and remote roles covering
                CRM architecture, automation, AI, funnels, websites, integrations and QA.
              </p>
              <div className="capacity-line"><i /> Availability · Open for new projects, contracts and remote roles</div>
              <div className="contact-actions">
                <a className="button button-ghost-light" href="https://wa.me/639273790758" target="_blank" rel="noreferrer">
                  Prefer WhatsApp? Message directly <Arrow />
                </a>
              </div>
            </div>

            <aside className="contact-aside">
              <span>START WITH A SHORT OPPORTUNITY BRIEF</span>
              <form className="inquiry-form" onSubmit={handleInquirySubmit}>
                <label>
                  <span>Business type</span>
                  <select name="businessType" required defaultValue="">
                    <option value="" disabled>Select business type</option>
                    <option>Agency</option>
                    <option>Consultant</option>
                    <option>Service business</option>
                    <option>Hiring team</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  <span>Current tools or platform</span>
                  <input name="currentTools" type="text" required placeholder="GoHighLevel, Zapier, spreadsheets..." />
                </label>
                <label>
                  <span>Biggest current bottleneck</span>
                  <textarea name="bottleneck" required rows={3} placeholder="What needs to work better?" />
                </label>
                <button className="button button-light" type="submit">Prepare email inquiry <Arrow /></button>
                <small>This opens your email app with the brief prefilled. Nothing is stored on this website.</small>
              </form>
              <div className="contact-links">
                <a href="https://linkedin.com/in/randolffrancisco" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
                <a href="https://www.onlinejobs.ph/jobseekers/info/798027" target="_blank" rel="noreferrer">OnlineJobs.ph <Arrow /></a>
                <a href="https://drive.google.com/uc?export=download&id=1glLNJY_QiEhiX_Emjo86sGsqdl3rI6fg" target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↓</span></a>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
