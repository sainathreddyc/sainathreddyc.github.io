"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  Sparkles,
  Mail,
  Linkedin,
  Github,
  Download,
  CheckCircle2,
  Copy,
  ExternalLink,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  GraduationCap,
  Award,
  Globe,
  Briefcase,
  ChevronRight,
} from "lucide-react";

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseCategory, setSelectedCaseCategory] = useState("all");

  const email = "sainathc786@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const caseStudies = [
    {
      id: "preschool",
      category: "lead-gen",
      badge: "Multi-Location / Education",
      badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-400",
      title: "50-Location Hyper-Local Funnel & Admission Scaling",
      company: "Beginners World Preschool",
      period: "Jan 2025 – Present",
      metrics: [
        { label: "Admissions Delivered", val: "450–500" },
        { label: "Enquiry Growth", val: "~6x" },
        { label: "Cost Per Admission", val: "~₹10,500" },
      ],
      description:
        "Architected and managed ₹50L annual paid lead generation across Meta and Google for 50+ preschool centers in a trust-driven, hyper-local radius where parents make decisions within 3–5 km.",
      highlights: [
        "Built and launched 50 center-specific landing pages mapped to local search intent.",
        "Scaled monthly enquiries from <100 to 500–700 (3x in first 3 months, ~6x total).",
        "Used Generative AI to produce and A/B test localized ad variants at massive scale.",
        "Rebuilt 50 Google Business Profiles driving organic map-pack walk-ins.",
        "Integrated Kylas CRM & WhatsApp Business API drip campaigns to eliminate lead drop-off.",
      ],
    },
    {
      id: "rockwell",
      category: "ecommerce",
      badge: "E-Commerce / Amazon Ads",
      badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      title: "Scaling High-Ticket Commercial Refrigeration On Amazon",
      company: "Rockwell Industries Limited",
      period: "Oct 2021 – Jan 2025",
      metrics: [
        { label: "Peak E-com ROAS", val: "35x–50x" },
        { label: "Standard ACOS", val: "~2%" },
        { label: "Scaled Budget", val: "₹6L/mo" },
      ],
      description:
        "Managed ₹3.5L/month Amazon Ads budget, scaling to ₹6L/month during Great Indian Festival, holding ACOS exceptionally lean in a high-consideration commercial category.",
      highlights: [
        "Orchestrated Sponsored Products, Brands, Display, and Video campaigns focused on non-brand terms.",
        "Maintained 2% ACOS during normal trading and 3%–4% at peak festival events.",
        "Rigorous weekly search-term analysis, negative keyword sculpting, and target ACOS bids.",
        "Planned Google & Meta acquisition campaigns for D2C storefront and B2B inquiries.",
        "Partnered with web and UX teams to continuously test e-commerce conversion rate (CRO).",
      ],
    },
    {
      id: "bharatbiotech",
      category: "brand",
      badge: "Pharma / Reputation & SEO",
      badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      title: "COVID-19 Covaxin Digital Communications & SEO Rebrand",
      company: "Bharat Biotech International Limited",
      period: "Dec 2018 – Oct 2021",
      metrics: [
        { label: "LinkedIn Following", val: "100K (from 13K)" },
        { label: "X / Twitter", val: "90K (from <500)" },
        { label: "Daily Organic SEO", val: "10x Growth" },
      ],
      description:
        "Spearheaded digital reputation and social channels through the historic COVID-19 and Covaxin rollout during intense national and global media scrutiny.",
      highlights: [
        "Grew corporate LinkedIn audience to 100K and secured Twitter verification.",
        "Managed 300–400 daily inquiries and 100+ public comments at peak vaccine distribution.",
        "Led full website rebrand and structured SEO program, growing sessions from 500 to 5,000+ daily.",
        "Delivered C-suite reputation and traffic performance reports using GA & Search Console.",
      ],
    },
  ];

  const filteredCases =
    selectedCaseCategory === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selectedCaseCategory);

  const workExperience = [
    {
      role: "Digital Marketing Manager",
      company: "Beginners World Preschool",
      period: "Jan 2025 – Present",
      location: "Hyderabad",
      points: [
        "Own ₹50L annual paid lead gen across Meta and Google for 50+ preschool centers.",
        "Delivered 450–500 student admissions at ~₹10,500 blended cost per admission.",
        "Grew monthly enquiries from under 100 to 500–700 by restructuring funnels.",
        "Built 50 hyper-local landing pages and maintained 50 Google Business Profiles.",
        "Deployed Generative AI for rapid variant testing and managed CRM lead journey.",
      ],
    },
    {
      role: "Assistant Manager Online - Ecommerce",
      company: "Rockwell Industries Limited",
      period: "Oct 2021 – Jan 2025",
      location: "Hyderabad",
      points: [
        "Managed ₹3.5L/mo Amazon Ads budget scaling to ₹6L/mo during Great Indian Festival.",
        "Delivered 35x–50x ROAS with Amazon ACOS held at ~2% in normal trading.",
        "Sculpted negative keywords and managed bid adjustments on acquisition queries.",
        "Planned Google and Meta direct-to-consumer storefront and lead campaigns.",
      ],
    },
    {
      role: "Executive (Corporate Communications)",
      company: "Bharat Biotech International Limited",
      period: "Dec 2018 – Oct 2021",
      location: "Greater Hyderabad Area",
      points: [
        "Managed digital channels and online reputation through COVID-19 and Covaxin rollout.",
        "Grew LinkedIn from 13K to 100K and Twitter from <500 to 90K with platform verification.",
        "Led 2018 website rebrand and SEO, growing organic traffic from 500 to 5,000 daily sessions.",
      ],
    },
    {
      role: "Digital Marketing Analyst",
      company: "DOXTO Technologies Private Limited",
      period: "Aug 2015 – Nov 2018",
      location: "Bangaon",
      points: [
        "Managed Google Ads (Search, Display, Video) across diverse client industries.",
        "Conducted competitor, keyword, and backlink research to shape growth strategies.",
        "Delivered monthly client reports with actionable optimization roadmaps.",
      ],
    },
    {
      role: "IT Recruiter & Customer Service Representative",
      company: "Collaborate Solutions, Inc & redBus",
      period: "2011 – 2015",
      location: "India & US Remote",
      points: [
        "Collaborate Solutions (2014–2015): Technical recruitment across Dice and Indeed.",
        "redBus (2011–2013): High-volume customer support resolution and CRM query logging.",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#070a13]/85 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              SR
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-base tracking-tight leading-snug">
                Sainath Reddy C
              </span>
              <span className="text-xs text-cyan-400 font-medium tracking-wide">
                AI Performance Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#metrics" className="hover:text-white transition-colors">
              Impact
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills & AI
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Sainath_Reddy_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-indigo-500/50 text-sm font-semibold transition-all hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1d] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-slate-300 font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              About
            </a>
            <a
              href="#metrics"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              Impact
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              Case Studies
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              Skills & AI
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              download="Sainath_Reddy_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="hero" className="pt-16 pb-24 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Growth Leadership & Remote / Pan-India Roles</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.15] mb-6">
                Scaling Brands With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                  AI-Powered
                </span>{" "}
                Performance Marketing.
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                I am a performance marketing professional with <strong>11+ years</strong> of hands-on
                experience managing <strong>₹60L+</strong> in annual paid acquisition across Google Ads,
                Meta Ads, and Amazon Ads. I build scalable funnels that maximize ROAS, lower CPL, and drive
                predictable customer growth.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
                >
                  <span>Explore Case Studies</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-sm transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Get In Touch</span>
                </a>
              </div>

              {/* Core Platform Tags */}
              <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-400">
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Google Ads</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Meta Ads</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Amazon Ads</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">GA4 & GTM</span>
                <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">Looker Studio</span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/25 text-purple-300">
                  AI Workflows
                </span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md p-8 rounded-3xl glass-panel relative shadow-2xl border border-white/10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 via-cyan-500 to-emerald-400 p-1 shadow-xl shadow-indigo-500/30">
                      <div className="w-full h-full rounded-full bg-[#0c1222] flex items-center justify-center">
                        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-white to-slate-300">
                          SR
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-1">Sainath Reddy C</h3>
                  <p className="text-sm font-semibold text-cyan-400 mb-3">
                    Performance Marketing Specialist
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/5 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Greater Hyderabad Area · Open to Remote</span>
                  </div>

                  {/* Highlights Floating Box */}
                  <div className="w-full p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-4 text-left">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-emerald-400">35x – 50x ROAS</div>
                      <div className="text-xs text-slate-400">Delivered Across E-Commerce Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS & IMPACT SECTION */}
        <section id="metrics" className="py-20 bg-slate-950/60 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                Quantifiable Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3">
                Measurable Impact in Numbers
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
                Real metrics achieved across education, e-commerce, manufacturing, and pharmaceutical
                landscapes.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-5 rounded-2xl glass-panel text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1 font-display">
                  11<span className="text-cyan-400">+</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Years Exp
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1 font-display">
                  ₹60<span className="text-cyan-400">L+</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Annual Spend
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel text-center border-emerald-500/30 bg-emerald-950/15">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1 font-display">
                  50<span className="text-emerald-300">x</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Peak ROAS
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1 font-display">
                  ~2<span className="text-cyan-400">%</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Amazon ACOS
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1 font-display">
                  3<span className="text-cyan-400">X</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Leads (90 Days)
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-1 font-display">
                  50<span className="text-cyan-400">+</span>
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Locations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-24 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-950/40 border border-indigo-800/40 px-3 py-1 rounded-full">
                Strategic Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3 mb-6">
                Understanding Where Growth Actually Converts
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-4">
                My approach to performance marketing is simple: <em>understand where the business needs growth, identify the right audience, build the right funnel, track what is actually converting, and continuously move the budget towards what works.</em>
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                What interests me most is not simply generating clicks or impressions. I enjoy understanding which campaigns are producing better-quality opportunities, why they are working, and how we can scale them without wasting budget.
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <strong className="text-slate-100">Cross-Team Synergy:</strong> Paid media performs best when creative, web, sales, and CRM teams function seamlessly from ad click to lead conversion.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <strong className="text-slate-100">Modern AI Integration:</strong> Everyday workflows powered by ChatGPT, Gemini, Claude, and Perplexity for rapid market research and high-velocity creative testing.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-300">
                    <strong className="text-slate-100">Data-Driven Reporting:</strong> GA4, Google Tag Manager, and Looker Studio dashboards designed for executive channel and budget clarity.
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Framework Card */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl glass-panel border border-white/10">
                <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-indigo-400" />
                  <span>The 4-Step Performance Engine</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-sm flex items-center justify-center flex-shrink-0 border border-indigo-500/30 font-display">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 mb-1">Audience & Intent Mapping</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Granular audience segmentation by high-intent search queries, geo-catchment radii, and high-converting retargeting pools.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold text-sm flex items-center justify-center flex-shrink-0 border border-cyan-500/30 font-display">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 mb-1">Hyper-Local Funnels & CRO</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Tailoring location-level landing pages paired to ad groups, increasing Quality Score and slashing cost per acquisition (CPL).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold text-sm flex items-center justify-center flex-shrink-0 border border-emerald-500/30 font-display">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 mb-1">CRM Automation & Drip Workflows</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Connecting Kylas CRM and WhatsApp Business API to nurture inquiries instantly and close the loop between enquiry and admission.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 font-bold text-sm flex items-center justify-center flex-shrink-0 border border-purple-500/30 font-display">
                      04
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-200 mb-1">Weekly Spend Sculpting</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Aggressive negative keyword mining and bid adjustments to cut wasteful clicks and redirect capital to top ROAS converters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS / FEATURED CASE STUDIES */}
        <section id="projects" className="py-20 bg-slate-950/70 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                  Real Results
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3">
                  Featured Case Studies
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  In-depth breakdowns of real campaigns, architectures, and outcomes.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <button
                  onClick={() => setSelectedCaseCategory("all")}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                    selectedCaseCategory === "all"
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
                  }`}
                >
                  All Studies
                </button>
                <button
                  onClick={() => setSelectedCaseCategory("lead-gen")}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                    selectedCaseCategory === "lead-gen"
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
                  }`}
                >
                  Lead Gen & Admissions
                </button>
                <button
                  onClick={() => setSelectedCaseCategory("ecommerce")}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                    selectedCaseCategory === "ecommerce"
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
                  }`}
                >
                  E-Commerce & Amazon
                </button>
                <button
                  onClick={() => setSelectedCaseCategory("brand")}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all ${
                    selectedCaseCategory === "brand"
                      ? "bg-indigo-600 text-white border-indigo-500"
                      : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
                  }`}
                >
                  Reputation & SEO
                </button>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filteredCases.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl glass-panel p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:-translate-y-1 transition-all shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 leading-snug mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-400 mb-4">{item.company}</div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Metrics Strip */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/30 border border-white/5 mb-6 text-center">
                      {item.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-sm font-extrabold text-slate-100 font-display">
                            {m.val}
                          </div>
                          <div className="text-[10px] text-slate-400 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Key Strategic Actions:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-400 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold bg-indigo-950/40 border border-indigo-800/40 px-3 py-1 rounded-full">
              Career Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3">
              11+ Years of Hands-on Leadership
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
              Every position verified directly from official career records.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-indigo-500/25 space-y-12">
            {workExperience.map((job, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#070a13] group-hover:scale-125 transition-transform" />

                <div className="p-6 rounded-2xl glass-panel border border-white/10 group-hover:border-indigo-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-lg font-bold text-slate-100">{job.role}</h3>
                    <span className="text-xs text-slate-400 font-semibold">{job.period}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-4">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span className="text-slate-400 font-normal">{job.location}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {job.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & AI TOOLKIT */}
        <section id="skills" className="py-20 bg-slate-950/70 border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                Stack & Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3">
                Platforms, Tools & AI Workflow
              </h2>
              <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
                Cutting-edge tools that empower higher efficiency, faster creative iteration, and lower ad waste.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Category 1 */}
              <div className="p-6 rounded-2xl glass-panel">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-3">Paid Advertising</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Google Search Ads",
                    "Google Display & Video",
                    "Meta Ads (FB & IG)",
                    "Amazon Sponsored Products",
                    "Amazon Sponsored Brands",
                    "Retargeting / Remarketing",
                    "Audience Segmentation",
                    "Bid Optimization",
                  ].map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-6 rounded-2xl glass-panel">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-3">Analytics & CRO</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Google Analytics 4 (GA4)",
                    "Google Tag Manager (GTM)",
                    "Looker Studio",
                    "Conversion Rate Optimization",
                    "Landing Page Architecture",
                    "Search Console",
                    "Kylas CRM",
                    "WhatsApp API Drips",
                  ].map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-6 rounded-2xl glass-panel border-purple-500/25 bg-purple-950/10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-3">AI-Powered Stack</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "ChatGPT",
                    "Google Gemini",
                    "Claude",
                    "Perplexity AI",
                    "Microsoft Copilot",
                    "Google Flow",
                    "Generative Ad Copy",
                    "Competitor Research",
                  ].map((s, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/25"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div className="p-6 rounded-2xl glass-panel">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-3">Strategy & Growth</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Corporate Communications",
                    "Multi-Location Scaling",
                    "Google Business Profiles",
                    "Vendor Management",
                    "Crisis Response & PR",
                    "Project Management",
                    "Lead Quality Governance",
                  ].map((s, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages Bar */}
            <div className="mt-8 p-4 rounded-xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Languages:</span>
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  <strong className="text-white">English:</strong> Professional Working
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  <strong className="text-white">Telugu:</strong> Native / Bilingual
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  <strong className="text-white">Hindi:</strong> Professional Working
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="py-20 max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formal Education */}
            <div className="p-8 rounded-3xl glass-panel">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-6">Formal Education</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-base font-bold text-slate-100">
                    MSCIT — Information Technology
                  </div>
                  <div className="text-xs font-semibold text-cyan-400">
                    Sikkim Manipal University (Distance Education)
                  </div>
                  <div className="text-xs text-slate-400 mt-1">2013 – 2015</div>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <div className="text-base font-bold text-slate-100">
                    Bachelor&apos;s in Electronics
                  </div>
                  <div className="text-xs font-semibold text-cyan-400">Osmania University</div>
                  <div className="text-xs text-slate-400 mt-1">2006 – 2009</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="p-8 rounded-3xl glass-panel">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-6">Certifications</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-base font-bold text-slate-100">
                    Google AdWords Certification
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Accredited in search, display, and video campaign architecture and automated bidding.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div>
                  <div className="text-base font-bold text-slate-100">
                    Performance Marketing Mentorship Program
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Advanced full-funnel attribution models, CRO framework, and multi-channel budget scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 max-w-5xl mx-auto px-6">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[#0c1428] via-[#090e1f] to-[#070a13] border border-indigo-500/30 shadow-2xl relative">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mt-3">
                Let&apos;s Accelerate Your Growth
              </h2>
              <p className="text-slate-300 text-sm mt-2">
                Whether you want to scale paid acquisition, slash acquisition costs, or discuss performance marketing leadership, I am ready to connect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-slate-400 mb-1">Direct Email</div>
                <div className="text-sm font-semibold text-slate-100 mb-4 break-all">{email}</div>

                <div className="flex gap-2 w-full mt-auto">
                  <a
                    href={`mailto:${email}`}
                    className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold text-center transition-colors"
                  >
                    Email Me
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    title="Copy email"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-slate-400 mb-1">LinkedIn</div>
                <div className="text-sm font-semibold text-slate-100 mb-4">sainathreddyc</div>

                <a
                  href="https://www.linkedin.com/in/sainathreddyc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* GitHub Card */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-slate-700/30 text-slate-200 flex items-center justify-center mb-4">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase font-bold text-slate-400 mb-1">GitHub Profile</div>
                <div className="text-sm font-semibold text-slate-100 mb-4">github.com/sainathreddyc</div>

                <a
                  href="https://github.com/sainathreddyc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>View GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6 bg-[#050811]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Sainath Reddy C. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sainathreddyc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sainathreddyc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href="/resume.pdf" download="Sainath_Reddy_Resume.pdf" className="hover:text-white transition-colors">
              Download CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
