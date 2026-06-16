"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Users,
  Settings,
  MessageCircle,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  CalendarCheck,
  CreditCard,
  CheckCircle2,
  Clock,
  Shield,
  ChevronLeft,
  Sparkles,
  Download,
  UserPlus,
  Target,
  Briefcase,
  Zap,
  BookOpen,
  BarChart3,
  Lightbulb,
  FileText,
  Headphones,
} from "lucide-react";

/* ─── ORANGE ACCENT COLOR ─── */
const ORANGE = "#F97316";

/* ─── SHARED BACK HEADER ─── */
function BackHeader({ onBack, title }: { onBack: () => void; title: string }) {
  return (
    <header className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity"
        style={{ color: ORANGE }}
      >
        <ChevronLeft size={18} />
        Back
      </button>
      <div className="flex-1 text-center">
        <span className="text-sm font-semibold tracking-[0.25em] uppercase">
          {title}
        </span>
      </div>
      <div className="w-16" />
    </header>
  );
}

/* ═══════════════════════════════════════════
   LANDING PAGE
   ═══════════════════════════════════════════ */
function LandingPage({
  onBookTeam,
  onBookProductivity,
  onBookConsultation,
}: {
  onBookTeam: () => void;
  onBookProductivity: () => void;
  onBookConsultation: () => void;
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-montserrat)]">
      {/* ─── HEADER / LOGO ─── */}
      <header className="flex items-center justify-center pt-8 pb-2">
        <div className="flex items-center gap-3">
          <span
            className="text-3xl font-extrabold tracking-tight"
            style={{ color: ORANGE }}
          >
            JC
          </span>
          <span className="text-sm font-semibold tracking-[0.35em] text-white uppercase">
            Just Churchy
          </span>
        </div>
      </header>

      {/* ─── PROFILE SECTION ─── */}
      <section className="flex flex-col items-center pt-6 pb-4">
        <div
          className="w-32 h-32 rounded-full border-[3px] overflow-hidden"
          style={{ borderColor: ORANGE }}
        >
          <img
            src="/profile.png"
            alt="Just Churchy profile"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ─── HERO TAGLINE ─── */}
      <section className="text-center px-6 pt-2 pb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Faith. Wellness. Purpose. Freedom.
        </h1>
        <div className="accent-line mt-5 mb-5" />
        <p className="text-base sm:text-lg text-neutral-300 max-w-lg mx-auto leading-relaxed">
          Resources and tools to help you heal, grow, build, and live{" "}
          <em className="font-semibold" style={{ color: ORANGE }}>
            on purpose
          </em>
          .
        </p>
      </section>

      {/* ─── RESOURCE / PRODUCT CARDS ─── */}
      <section className="px-5 sm:px-8 pt-8 pb-4 max-w-xl mx-auto space-y-4">
        {/* Card 1: Build Your Team Advantage */}
        <div
          className="flex items-center gap-4 border rounded-lg p-5 hover:bg-white/[0.03] transition-colors cursor-pointer group"
          style={{ borderColor: ORANGE }}
          onClick={onBookTeam}
        >
          <div
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${ORANGE}20` }}
          >
            <Users size={22} style={{ color: ORANGE }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base sm:text-lg text-white">
              Build Your Team Advantage
            </h3>
            <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
              Find the right people. Delegate with clarity. Build a team that
              helps you scale.
            </p>
          </div>
          <button
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: ORANGE }}
            aria-label="Build Your Team Advantage"
          >
            <ArrowRight size={18} className="text-white" />
          </button>
        </div>

        {/* Card 2: Productivity Stack (Free) */}
        <div
          className="flex items-center gap-4 border rounded-lg p-5 hover:bg-white/[0.03] transition-colors cursor-pointer group"
          style={{ borderColor: ORANGE }}
          onClick={onBookProductivity}
        >
          <div
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${ORANGE}20` }}
          >
            <Settings size={22} style={{ color: ORANGE }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base sm:text-lg text-white">
              Productivity Stack{" "}
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full ml-1"
                style={{ backgroundColor: ORANGE, color: "#fff" }}
              >
                FREE
              </span>
            </h3>
            <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
              Get my favorite tools, systems, and AI workflows to save time and
              get more done.
            </p>
          </div>
          <button
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: ORANGE }}
            aria-label="Productivity Stack"
          >
            <ArrowRight size={18} className="text-white" />
          </button>
        </div>

        {/* Card 3: Consultation */}
        <div
          className="flex items-center gap-4 border rounded-lg p-5 hover:bg-white/[0.03] transition-colors cursor-pointer group"
          style={{ borderColor: ORANGE }}
          onClick={onBookConsultation}
        >
          <div
            className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${ORANGE}20` }}
          >
            <MessageCircle size={22} style={{ color: ORANGE }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base sm:text-lg text-white">
              Consultation
            </h3>
            <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
              Need strategy? Let&apos;s build your team, establish your systems,
              and create a plan that moves your vision forward.
            </p>
          </div>
          <button
            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: ORANGE }}
            aria-label="Book Consultation"
          >
            <ArrowRight size={18} className="text-white" />
          </button>
        </div>
      </section>

      {/* ─── SOCIAL MEDIA ICONS ─── */}
      <section className="flex items-center justify-center gap-4 pt-8 pb-4">
        {[
          { Icon: Instagram, label: "Instagram" },
          { Icon: Youtube, label: "YouTube" },
          { Icon: Facebook, label: "Facebook" },
          { Icon: MessageCircle, label: "TikTok" },
          { Icon: Mail, label: "Email" },
        ].map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-transparent transition-colors"
            style={{
              borderColor: ORANGE,
              color: ORANGE,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = ORANGE;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = ORANGE;
            }}
          >
            <Icon size={18} />
          </a>
        ))}
      </section>

      {/* ─── EMAIL / CONTACT ─── */}
      <div className="text-center pb-4">
        <a
          href="mailto:support@justchurchy.com"
          className="text-sm text-neutral-400 hover:text-white transition-colors"
        >
          support@justchurchy.com
        </a>
      </div>

      {/* ─── OPT-IN FORM ─── */}
      <section className="px-5 sm:px-8 pt-6 pb-6 max-w-xl mx-auto">
        <div
          className="border rounded-lg p-6 sm:p-8"
          style={{ borderColor: ORANGE }}
        >
          <div className="flex items-start gap-4">
            <div
              className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center mt-1"
              style={{ backgroundColor: `${ORANGE}20` }}
            >
              <Mail size={22} style={{ color: ORANGE }} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Stay inspired. Grow in{" "}
                <em style={{ color: ORANGE }}>purpose</em>.
              </h2>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Get faith-filled insights, practical tools, and encouragement
                delivered straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white text-black rounded-md px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  style={{ backgroundColor: ORANGE }}
                >
                  YES, SEND IT TO ME!
                  <ArrowRight size={16} />
                </button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm font-medium"
                  style={{ color: ORANGE }}
                >
                  You&apos;re in! Check your inbox soon.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING QUOTE ─── */}
      <section className="text-center px-8 pt-6 pb-16 max-w-lg mx-auto">
        <div className="accent-line mb-6" />
        <p className="text-base sm:text-lg text-neutral-300 leading-relaxed italic">
          &ldquo;God is not finished with your story. There is still{" "}
          <em className="font-semibold not-italic" style={{ color: ORANGE }}>
            purpose
          </em>{" "}
          to discover, healing to experience, and work worth building.&rdquo;
        </p>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════
   BUILD YOUR TEAM ADVANTAGE PAGE
   ═══════════════════════════════════════════ */
function TeamPage({
  onBack,
  onConsultation,
}: {
  onBack: () => void;
  onConsultation: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const steps = [
    {
      icon: <Target size={22} style={{ color: ORANGE }} />,
      title: "Identify Your Needs",
      desc: "Clarify exactly what roles and skills your business needs to grow — no more guessing.",
    },
    {
      icon: <UserPlus size={22} style={{ color: ORANGE }} />,
      title: "Hire With Confidence",
      desc: "Learn the hiring framework that finds the right people — the ones who actually fit your vision.",
    },
    {
      icon: <Briefcase size={22} style={{ color: ORANGE }} />,
      title: "Delegate With Clarity",
      desc: "Set up systems so every team member knows exactly what to do, when, and how well.",
    },
    {
      icon: <BarChart3 size={22} style={{ color: ORANGE }} />,
      title: "Scale Without Burnout",
      desc: "Build a team that runs without you needing to check every single thing. Freedom is the goal.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-montserrat)]">
      <BackHeader onBack={onBack} title="Team Advantage" />

      <div className="px-5 sm:px-8 max-w-xl mx-auto pt-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Hero */}
          <div className="text-center mb-2">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${ORANGE}20` }}
            >
              <Users size={32} style={{ color: ORANGE }} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Build Your Team Advantage
            </h1>
            <div className="accent-line mt-4 mb-4" />
            <p className="text-neutral-300 leading-relaxed">
              You can&apos;t build a vision alone. Whether you&apos;re starting
              your first hire or restructuring your whole team — this resource
              will show you exactly how to find, hire, and lead the right people.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4 mt-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-4 border rounded-lg p-5"
                style={{ borderColor: ORANGE }}
              >
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${ORANGE}20` }}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{step.title}</h3>
                  <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What You Get */}
          <div className="mt-8 space-y-3">
            <h3 className="font-bold text-lg">What You Get</h3>
            {[
              "Team-building roadmap with step-by-step guidance",
              "Hiring templates and interview question guides",
              "Delegation framework to free up your time",
              "Org chart templates for teams of 1 to 20+",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} style={{ color: ORANGE }} />
                <span className="text-sm text-neutral-300">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA: Get Access */}
          <div
            className="border rounded-lg p-6 mt-8"
            style={{ borderColor: ORANGE }}
          >
            <h3 className="text-xl font-bold text-center mb-2">
              Get the Team Advantage Guide
            </h3>
            <p className="text-sm text-neutral-400 text-center mb-5 leading-relaxed">
              Enter your email and get instant access to the full team-building
              resource — plus ongoing tips to grow your team the right way.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <CheckCircle2
                  size={40}
                  style={{ color: ORANGE }}
                  className="mx-auto mb-2"
                />
                <p className="font-bold" style={{ color: ORANGE }}>
                  Check your inbox!
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  Your Team Advantage Guide is on the way.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white text-black rounded-md px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Download size={16} />
                  GET ACCESS
                </button>
              </form>
            )}
          </div>

          {/* Need more? */}
          <div className="text-center mt-8">
            <p className="text-sm text-neutral-400 mb-3">
              Need hands-on help building your team?
            </p>
            <button
              onClick={onConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: ORANGE }}
            >
              Book a Consultation
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   PRODUCTIVITY STACK (FREE) PAGE
   ═══════════════════════════════════════════ */
function ProductivityPage({
  onBack,
  onConsultation,
}: {
  onBack: () => void;
  onConsultation: () => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const tools = [
    {
      icon: <Zap size={22} style={{ color: ORANGE }} />,
      title: "AI Workflows",
      desc: "Automate repetitive tasks with AI — from content creation to email management. Save 10+ hours per week.",
      tag: "AI",
    },
    {
      icon: <BookOpen size={22} style={{ color: ORANGE }} />,
      title: "Content Systems",
      desc: "Plan, create, and schedule your content without the overwhelm. Templates and calendars included.",
      tag: "Content",
    },
    {
      icon: <BarChart3 size={22} style={{ color: ORANGE }} />,
      title: "Project Management",
      desc: "Keep every project on track with tools I personally use to manage multiple streams without chaos.",
      tag: "Projects",
    },
    {
      icon: <Lightbulb size={22} style={{ color: ORANGE }} />,
      title: "Decision Frameworks",
      desc: "Stop overthinking. Use these simple frameworks to make fast, confident decisions in your business.",
      tag: "Strategy",
    },
    {
      icon: <FileText size={22} style={{ color: ORANGE }} />,
      title: "Templates Library",
      desc: "Ready-to-use templates for emails, proposals, SOPs, and more. Copy, customize, done.",
      tag: "Templates",
    },
    {
      icon: <Headphones size={22} style={{ color: ORANGE }} />,
      title: "Tech Stack Picks",
      desc: "The exact apps and tools I recommend — most are free or low-cost. No more tech confusion.",
      tag: "Tools",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-montserrat)]">
      <BackHeader onBack={onBack} title="Productivity Stack" />

      <div className="px-5 sm:px-8 max-w-xl mx-auto pt-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Hero */}
          <div className="text-center mb-2">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: `${ORANGE}20` }}
            >
              <Settings size={32} style={{ color: ORANGE }} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Productivity Stack
            </h1>
            <span
              className="inline-block text-xs font-bold px-3 py-1 rounded-full mt-2"
              style={{ backgroundColor: ORANGE, color: "#fff" }}
            >
              100% FREE
            </span>
            <div className="accent-line mt-4 mb-4" />
            <p className="text-neutral-300 leading-relaxed">
              Stop working harder and start working smarter. This is my personal
              collection of tools, systems, and AI workflows that save me time
              every single day — and now they can do the same for you.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="border rounded-lg p-4 hover:bg-white/[0.02] transition-colors"
                style={{ borderColor: ORANGE }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${ORANGE}20` }}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-white">
                      {tool.title}
                    </h3>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${ORANGE}30`, color: ORANGE }}
                  >
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {tool.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA: Download */}
          <div
            className="border rounded-lg p-6 mt-8"
            style={{ borderColor: ORANGE }}
          >
            <h3 className="text-xl font-bold text-center mb-2">
              Get the Full Stack — Free
            </h3>
            <p className="text-sm text-neutral-400 text-center mb-5 leading-relaxed">
              Enter your email and I&apos;ll send you the complete productivity
              stack with links, setup guides, and my personal tips for each tool.
            </p>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <CheckCircle2
                  size={40}
                  style={{ color: ORANGE }}
                  className="mx-auto mb-2"
                />
                <p className="font-bold" style={{ color: ORANGE }}>
                  It&apos;s on the way!
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  Check your inbox for the full Productivity Stack.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white text-black rounded-md px-4 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Download size={16} />
                  GET IT FREE
                </button>
              </form>
            )}
          </div>

          {/* Need more? */}
          <div className="text-center mt-8">
            <p className="text-sm text-neutral-400 mb-3">
              Want me to set up these systems for you?
            </p>
            <button
              onClick={onConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
              style={{ backgroundColor: ORANGE }}
            >
              Book a Consultation
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CONSULTATION BOOKING PAGE
   ═══════════════════════════════════════════ */
function ConsultationPage({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<
    "overview" | "calendar" | "payment" | "confirm"
  >("overview");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  // Generate available dates (next 7 days)
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter((d) => d.getDay() !== 0); // skip Sundays

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const goToPayment = () => {
    if (selectedDate && selectedTime) setStep("payment");
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && cardNumber && expiry && cvv) {
      setStep("confirm");
    }
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white font-[var(--font-montserrat)]">
      {/* ─── TOP BAR ─── */}
      <header className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity"
          style={{ color: ORANGE }}
        >
          <ChevronLeft size={18} />
          Back
        </button>
        <div className="flex-1 text-center">
          <span className="text-sm font-semibold tracking-[0.25em] uppercase">
            Book a Consultation
          </span>
        </div>
        <div className="w-16" />
      </header>

      {/* ─── PROGRESS STEPS ─── */}
      <div className="flex items-center justify-center gap-2 py-5 px-5">
        {[
          { label: "Overview", key: "overview" },
          { label: "Schedule", key: "calendar" },
          { label: "Payment", key: "payment" },
          { label: "Confirm", key: "confirm" },
        ].map((s, i) => {
          const isActive = s.key === step;
          const isPast =
            (s.key === "overview" && step !== "overview") ||
            (s.key === "calendar" &&
              (step === "payment" || step === "confirm")) ||
            (s.key === "payment" && step === "confirm");
          return (
            <div key={s.key} className="flex items-center gap-2">
              {i > 0 && (
                <div
                  className="w-6 h-0.5"
                  style={{
                    backgroundColor: isPast ? ORANGE : "rgba(255,255,255,0.15)",
                  }}
                />
              )}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  backgroundColor: isActive
                    ? ORANGE
                    : isPast
                      ? ORANGE
                      : "rgba(255,255,255,0.1)",
                  color: isActive || isPast ? "#fff" : "rgba(255,255,255,0.4)",
                }}
              >
                {isPast ? <CheckCircle2 size={16} /> : i + 1}
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-5 sm:px-8 max-w-xl mx-auto pb-16">
        <AnimatePresence mode="wait">
          {/* ─── STEP 1: SERVICE OVERVIEW ─── */}
          {step === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                Strategy Consultation
              </h2>
              <div className="accent-line mt-4 mb-6" />

              <div
                className="border rounded-lg p-5 space-y-4 mb-6"
                style={{ borderColor: ORANGE }}
              >
                <p className="text-neutral-300 leading-relaxed text-sm">
                  Ready to move your vision forward? In this 1-on-1
                  consultation, we&apos;ll work together to build your team,
                  establish your systems, and create a clear action plan tailored
                  to your goals.
                </p>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Clock size={16} style={{ color: ORANGE }} />
                  <span>45 minutes</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Shield size={16} style={{ color: ORANGE }} />
                  <span>100% satisfaction guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <Sparkles size={16} style={{ color: ORANGE }} />
                  <span>Actionable next steps delivered after session</span>
                </div>
              </div>

              {/* What You Get */}
              <div className="space-y-3 mb-8">
                <h3 className="font-bold text-lg">What You Get</h3>
                {[
                  "Personalized team-building strategy",
                  "Systems and workflow recommendations",
                  "Clear action plan with priorities",
                  "Resource guide for ongoing support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: ORANGE }} />
                    <span className="text-sm text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-neutral-400 text-sm">Investment</span>
                <p
                  className="text-3xl font-extrabold mt-1"
                  style={{ color: ORANGE }}
                >
                  $97
                </p>
                <span className="text-xs text-neutral-500">
                  One-time payment
                </span>
              </div>

              <button
                onClick={() => setStep("calendar")}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: ORANGE }}
              >
                Choose Your Time
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* ─── STEP 2: CALENDAR ─── */}
          {step === "calendar" && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-center mb-2">
                Pick a Date &amp; Time
              </h2>
              <div className="accent-line mt-4 mb-6" />

              {/* Dates */}
              <h3 className="font-semibold text-sm text-neutral-400 uppercase tracking-wider mb-3">
                Available Dates
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
                {availableDates.map((d) => {
                  const dateStr = d.toISOString().split("T")[0];
                  const isSelected = selectedDate === dateStr;
                  return (
                    <button
                      key={dateStr}
                      onClick={() => handleDateSelect(dateStr)}
                      className="py-3 rounded-lg text-center transition-all border"
                      style={{
                        borderColor: isSelected
                          ? ORANGE
                          : "rgba(255,255,255,0.15)",
                        backgroundColor: isSelected ? ORANGE : "transparent",
                        color: isSelected ? "#fff" : "#a3a3a3",
                      }}
                    >
                      <div className="text-[10px] uppercase">
                        {d.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      <div className="text-lg font-bold">{d.getDate()}</div>
                      <div className="text-[10px]">
                        {d.toLocaleDateString("en-US", { month: "short" })}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Times */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="font-semibold text-sm text-neutral-400 uppercase tracking-wider mb-3">
                    Available Times
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-6">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          onClick={() => handleTimeSelect(time)}
                          className="py-3 rounded-lg text-sm font-medium text-center transition-all border"
                          style={{
                            borderColor: isSelected
                              ? ORANGE
                              : "rgba(255,255,255,0.15)",
                            backgroundColor: isSelected ? ORANGE : "transparent",
                            color: isSelected ? "#fff" : "#a3a3a3",
                          }}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* Selected summary */}
              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border rounded-lg p-4 mb-6 flex items-center gap-3"
                  style={{ borderColor: ORANGE }}
                >
                  <CalendarCheck size={24} style={{ color: ORANGE }} />
                  <div>
                    <p className="font-bold text-white">
                      {formatDate(selectedDate)} at {selectedTime}
                    </p>
                    <p className="text-xs text-neutral-400">45 min session</p>
                  </div>
                </motion.div>
              )}

              <button
                onClick={goToPayment}
                disabled={!selectedDate || !selectedTime}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg text-base font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: ORANGE }}
              >
                Continue to Payment
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* ─── STEP 3: PAYMENT ─── */}
          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-center mb-2">
                Secure Payment
              </h2>
              <div className="accent-line mt-4 mb-6" />

              {/* Booking Summary */}
              <div
                className="border rounded-lg p-4 mb-6 flex items-center gap-3"
                style={{ borderColor: ORANGE }}
              >
                <CalendarCheck size={20} style={{ color: ORANGE }} />
                <div className="flex-1">
                  <p className="font-bold text-white text-sm">
                    Strategy Consultation
                  </p>
                  <p className="text-xs text-neutral-400">
                    {formatDate(selectedDate)} at {selectedTime}
                  </p>
                </div>
                <span
                  className="font-extrabold text-lg"
                  style={{ color: ORANGE }}
                >
                  $97
                </span>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1.5">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600"
                    />
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full bg-white/5 border border-white/15 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1.5">
                      Expiry
                    </label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-1.5">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                      placeholder="123"
                      maxLength={4}
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] mt-2"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Shield size={18} />
                  Pay $97 &amp; Book Session
                </button>
              </form>

              <p className="text-center text-[11px] text-neutral-600 mt-3">
                Your payment is secure and encrypted. You&apos;ll receive a
                confirmation email immediately.
              </p>
            </motion.div>
          )}

          {/* ─── STEP 4: CONFIRMATION ─── */}
          {step === "confirm" && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center pt-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ backgroundColor: `${ORANGE}20` }}
              >
                <CheckCircle2 size={44} style={{ color: ORANGE }} />
              </motion.div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                You&apos;re All Set!
              </h2>
              <div className="accent-line mt-3 mb-5" />

              <div
                className="border rounded-lg p-5 mb-6 text-left"
                style={{ borderColor: ORANGE }}
              >
                <h3 className="font-bold text-sm text-neutral-400 uppercase tracking-wider mb-3">
                  Booking Details
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Service</span>
                    <span className="text-white font-medium">
                      Strategy Consultation
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Date</span>
                    <span className="text-white font-medium">
                      {formatDate(selectedDate)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Time</span>
                    <span className="text-white font-medium">
                      {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Duration</span>
                    <span className="text-white font-medium">45 minutes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Name</span>
                    <span className="text-white font-medium">{name}</span>
                  </div>
                  <div className="border-t border-white/10 my-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400">Amount Paid</span>
                    <span className="font-extrabold" style={{ color: ORANGE }}>
                      $97.00
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                A confirmation email has been sent with your session details and
                a link to join. Get ready to move your vision forward!
              </p>

              <button
                onClick={onBack}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-lg text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: ORANGE }}
              >
                Back to Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE (Router)
   ═══════════════════════════════════════════ */
type View = "landing" | "team" | "productivity" | "consultation";

export default function Home() {
  const [view, setView] = useState<View>("landing");

  return (
    <main className="font-sans">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingPage
              onBookTeam={() => setView("team")}
              onBookProductivity={() => setView("productivity")}
              onBookConsultation={() => setView("consultation")}
            />
          </motion.div>
        )}
        {view === "team" && (
          <motion.div
            key="team"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TeamPage
              onBack={() => setView("landing")}
              onConsultation={() => setView("consultation")}
            />
          </motion.div>
        )}
        {view === "productivity" && (
          <motion.div
            key="productivity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductivityPage
              onBack={() => setView("landing")}
              onConsultation={() => setView("consultation")}
            />
          </motion.div>
        )}
        {view === "consultation" && (
          <motion.div
            key="consultation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ConsultationPage onBack={() => setView("landing")} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
