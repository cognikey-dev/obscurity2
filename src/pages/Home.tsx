import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  Shield, EyeOff, QrCode, Download, Fingerprint, Lock, Users, Phone,
  Ban, BookX, WifiOff, Check, X, ArrowRight, Stethoscope, Scale, TrendingUp,
  MessageSquare, Mic, Video, ChevronRight, ServerOff, FileX, Globe, ChevronDown
} from "lucide-react";
import appScreen from "@assets/IMG_7556_1778557149784.PNG";
// Logo replaced with text wordmark — SVG import removed

// ── Floating CTA Widget ───────────────────────────────────────────────────────
function FloatingWidget() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 w-72 rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1a2e 0%, #0B1426 100%)",
        boxShadow: "0 0 0 1px rgba(59,191,255,0.2), 0 20px 60px rgba(0,0,0,0.6)",
      }}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-bold text-white">Try Obscurity free</span>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-muted-foreground hover:text-white transition-colors text-xs"
          >✕</button>
        </div>
        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
          Get your team on zero-knowledge communications. No PII required to start.
        </p>
        <p className="text-sm text-white font-medium mb-3">Free 30 min. consultation</p>
        <a
          href="https://calendly.com/mlele-obscurity" target="_blank" rel="noopener noreferrer"
          className="block w-full text-center bg-primary text-primary-foreground text-sm font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Book a call
        </a>
      </div>
    </motion.div>
  );
}

// ── iPhone Mockup ─────────────────────────────────────────────────────────────
function IPhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative select-none flex justify-center"
    >
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-60px",
          background: "radial-gradient(ellipse at 50% 55%, rgba(59,191,255,0.18) 0%, rgba(255,215,0,0.05) 45%, transparent 70%)",
          filter: "blur(24px)",
          zIndex: 0,
        }}
      />
      <div className="relative" style={{ width: "200px", height: "432px", zIndex: 1 }}>
        <div className="absolute flex flex-col gap-1.5" style={{ left: "-3px", top: "74px", transform: "translateX(-100%)" }}>
          <div style={{ width: "3px", height: "22px", background: "linear-gradient(to right, #303030, #222)", borderRadius: "2px 0 0 2px" }} />
          <div style={{ width: "3px", height: "32px", background: "linear-gradient(to right, #303030, #222)", borderRadius: "2px 0 0 2px", marginTop: "5px" }} />
          <div style={{ width: "3px", height: "32px", background: "linear-gradient(to right, #303030, #222)", borderRadius: "2px 0 0 2px" }} />
        </div>
        <div className="absolute" style={{ right: "-3px", top: "104px", transform: "translateX(100%)" }}>
          <div style={{ width: "3px", height: "50px", background: "linear-gradient(to left, #303030, #222)", borderRadius: "0 2px 2px 0" }} />
        </div>
        <div
          className="w-full h-full"
          style={{
            borderRadius: "2.2rem",
            background: "linear-gradient(145deg, #3c3c3c 0%, #1c1c1e 50%, #2c2c2e 100%)",
            boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.10), inset 0 0 0 2px rgba(0,0,0,0.6), 0 40px 80px rgba(0,0,0,0.85), 0 0 60px rgba(59,191,255,0.12), 0 0 0 1px rgba(0,0,0,0.9)`,
            padding: "4px",
          }}
        >
          <div className="w-full h-full overflow-hidden relative" style={{ borderRadius: "calc(2.2rem - 4px)" }}>
            <img src={appScreen} alt="Obscurity app" className="w-full h-full object-cover object-top" draggable={false} />
            <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "9px", width: "92px", height: "27px", background: "#000", borderRadius: "14px", zIndex: 10 }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%)", zIndex: 5 }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Feature Card ──────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, description, delay, glowColor }: {
  icon: React.ReactNode; title: string; description: string; delay: number; glowColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="relative bg-background border border-border p-7 rounded-xl shadow-lg hover:border-primary/40 transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{ background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent 70%)` }} />
      <div className="relative z-10">
        <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center border border-border bg-card group-hover:border-primary/30 transition-colors">
          {icon}
        </div>
        <h3 className="text-base font-heading font-bold mb-2 text-white">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// ── Solution Card ─────────────────────────────────────────────────────────────
function SolutionCard({ icon, title, subtitle, bullets, featured, delay, linkTo }: {
  icon: React.ReactNode; title: string; subtitle: string;
  bullets: string[]; featured?: boolean; delay: number; linkTo?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-xl p-6 border flex flex-col ${featured
        ? "border-primary/40 bg-primary/5"
        : "border-border bg-card/40"
      }`}
      style={featured ? { boxShadow: "0 0 40px rgba(59,191,255,0.08)" } : {}}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-heading font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{subtitle}</p>
      <ul className="space-y-2.5 mb-6 flex-1">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
      {linkTo ? (
        <Link
          href={linkTo}
          className="flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Learn more <ArrowRight className="w-4 h-4" />
        </Link>
      ) : (
        <a
          href="https://apps.apple.com/us/app/obscurity-chat/id6745473494"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 text-sm font-semibold py-2.5 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Try it now <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

// ── Comparison Cell ───────────────────────────────────────────────────────────
function Cell({ val, isObscurity }: { val: { label: string; good: boolean | null }; isObscurity?: boolean }) {
  const textColor = isObscurity ? "text-white" : val.good === false ? "text-red-400" : "text-white/60";
  const icon = val.good === true
    ? <Check className="w-4 h-4 shrink-0" />
    : val.good === false
      ? <X className="w-4 h-4 shrink-0" />
      : null;
  return (
    <div className={`flex items-center gap-1.5 justify-center ${textColor}`}>
      {icon}
      <span className="text-sm font-medium leading-snug">{val.label}</span>
    </div>
  );
}

// ── Use Cases Dropdown ───────────────────────────────────────────────────────
function UseCasesDropdown() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "/use-cases/healthcare", label: "Healthcare", icon: <Stethoscope className="w-4 h-4 text-primary" /> },
    { href: "/use-cases/legal", label: "Legal", icon: <Scale className="w-4 h-4 text-primary" /> },
    { href: "/use-cases/finance", label: "Finance", icon: <TrendingUp className="w-4 h-4 text-primary" /> },
  ];
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1">
        Use Cases <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 pt-2 w-48"
          style={{ zIndex: 60 }}
        >
          <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2.5 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-primary/10 transition-colors"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const [annual, setAnnual] = useState(true);
  const monthlyPrice = 8;
  const annualPrice = 72;
  const annualMonthly = Math.round(annualPrice / 12);

  // Load DM Sans from Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;800&family=Inter:wght@400;500;700;800&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">

      {/* ── NAV ── */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="group" data-testid="link-home-nav">
            <span style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#ffffff" }}>Obscurity</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7">
            <UseCasesDropdown />
            <a href="#how" className="text-sm text-white/70 hover:text-white transition-colors">How it works</a>
            <a href="#compare" className="text-sm text-white/70 hover:text-white transition-colors">Compare</a>
            <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
          </nav>
          <a
            href="https://apps.apple.com/us/app/obscurity-chat/id6745473494"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-1.5"
          >
            Try it now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl font-heading font-extrabold tracking-tighter leading-tight mb-3 text-white"
              >
                Zero identity.<br />
                <span className="text-primary">Zero trace.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-white text-xl font-medium mb-4"
              >
                Totally private chats
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-base mb-6 leading-relaxed"
              >
                Download. Scan a QR code. Build your private network. No email, no phone, no account — ever.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 mb-8"
              >
                <a
                  href="https://apps.apple.com/us/app/obscurity-chat/id6745473494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(59,191,255,0.2)]"
                >
                  Try it now <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#how"
                  className="text-white text-sm font-medium px-5 py-2.5 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  See how it works
                </a>
              </motion.div>


            </div>

            <div className="flex items-center justify-center py-8">
              <IPhoneMockup />
            </div>
          </div>
        </div>
      </section>



      {/* ── STATS STRIP ── */}
      <section className="border-y border-border bg-card/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: "0", label: "No PII Collected", icon: <EyeOff className="w-4 h-4 text-primary" /> },
              { value: "QR", label: "Invitation Only", icon: <QrCode className="w-4 h-4 text-yellow-400" /> },
              { value: "E2E", label: "Encrypted Messages", icon: <Lock className="w-4 h-4 text-primary" /> },
              { value: "∞", label: "Anonymous Groups", icon: <Users className="w-4 h-4 text-yellow-400" /> },
            ].map(({ value, label, icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center py-8 px-4 gap-2 text-center"
              >
                <div className="flex items-center gap-2 mb-1">
                  {icon}
                  <span className="text-2xl lg:text-3xl font-heading font-black text-white">{value}</span>
                </div>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SWITCH ── */}
      <section id="why" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-300">Why teams switch</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white"
            >
              Every message on Slack<br />lives on a server.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              That server can be breached, subpoenaed, or sold. Obscurity works differently. We store nothing, so there is nothing to expose.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                value: "0",
                label: "Records on our servers",
                sub: "No PII, no metadata, no message logs",
                icon: <EyeOff className="w-5 h-5 text-primary" />,
                delay: 0.1,
              },
              {
                value: "∞",
                label: "Private team networks",
                sub: "QR only invite. No directory, no exposure",
                icon: <Users className="w-5 h-5 text-yellow-400" />,
                delay: 0.2,
              },
              {
                value: "E2E",
                label: "Encrypted, always",
                sub: "Keys never leave your devices",
                icon: <Lock className="w-5 h-5 text-primary" />,
                delay: 0.3,
              },
            ].map(({ value, label, sub, icon, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="bg-card border border-border rounded-xl p-6 text-center"
                style={{ boxShadow: "0 0 30px rgba(0,0,0,0.3)" }}
              >
                <div className="flex justify-center mb-3">{icon}</div>
                <div className="text-4xl font-heading font-black text-white mb-1">{value}</div>
                <div className="text-sm font-semibold text-white mb-2">{label}</div>
                <div className="text-sm text-muted-foreground">{sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section id="solutions" className="py-24 relative z-10 border-y border-border bg-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white">If your conversations have consequences</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white"
            >
              Obscurity is for you.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-lg mx-auto text-base"
            >
              Any team that communicates in environments where exposure has a cost. Here is what that looks like in practice.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <SolutionCard
              icon={<Stethoscope className="w-5 h-5 text-primary" />}
              title="Healthcare teams"
              subtitle="Your staff is already using WhatsApp. We replace that, not your EHR."
              bullets={[
                "Same speed and ease your team already uses",
                "No patient data ever touches our servers",
                "Clinical staff onboard by QR, no IT setup",
                "Nothing to report because nothing was stored",
              ]}
              featured
              delay={0.1}
              linkTo="/use-cases/healthcare"
            />
            <SolutionCard
              icon={<Scale className="w-5 h-5 text-primary" />}
              title="Legal"
              subtitle="Your client's freedom shouldn't depend on a server's security."
              bullets={[
                "Nothing to hand over in discovery, ever",
                "No phone or email linked to any user",
                "Messages cannot be forwarded or screenshotted",
                "Closed network, clients join by QR only",
              ]}
              delay={0.2}
              linkTo="/use-cases/legal"
            />
            <SolutionCard
              icon={<TrendingUp className="w-5 h-5 text-primary" />}
              title="Finance"
              subtitle="A single leaked deal conversation can move markets or kill a transaction worth millions."
              bullets={[
                "Deal team operates as a fully closed private network",
                "No metadata, the conversation cannot even be confirmed",
                "Invisible to outsiders, no directory, no search",
                "Nothing forwarded, nothing stored, nothing exposed",
              ]}
              delay={0.3}
              linkTo="/use-cases/finance"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURE GRID ── */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white"
            >
              Built to leave no trail.
            </motion.h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Every feature exists for one reason. Your communications cannot be exposed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            <FeatureCard icon={<EyeOff className="w-5 h-5 text-primary" />} title="Zero Identity" description="No email. No phone number. No server side account. Nothing to identify you." delay={0.1} glowColor="rgba(59,191,255,0.15)" />
            <FeatureCard icon={<QrCode className="w-5 h-5 text-yellow-400" />} title="QR Invites Only" description="The only way to add someone is a QR code scan. No contact syncing, ever." delay={0.15} glowColor="rgba(250,204,21,0.1)" />
            <FeatureCard icon={<Phone className="w-5 h-5 text-primary" />} title="Voice Calls, No Number" description="Call anyone in your network directly. No phone number required, ever." delay={0.2} glowColor="rgba(59,191,255,0.15)" />
            <FeatureCard icon={<WifiOff className="w-5 h-5 text-yellow-400" />} title="Invisible to the Internet" description="No public profile, no directory, no external endpoints. You do not exist to outsiders." delay={0.25} glowColor="rgba(250,204,21,0.1)" />
            <FeatureCard icon={<Ban className="w-5 h-5 text-primary" />} title="No Forwarding" description="Messages cannot be forwarded inside or outside your network. Period." delay={0.3} glowColor="rgba(59,191,255,0.15)" />
            <FeatureCard icon={<Shield className="w-5 h-5 text-yellow-400" />} title="Your Network, Your Rules" description="Only you can add people to a chat. No algorithms, no outsiders, no exceptions." delay={0.35} glowColor="rgba(250,204,21,0.1)" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-24 relative z-10 border-y border-border bg-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white">How it works</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white"
            >
              From download to<br />fully private, in minutes.
            </motion.h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              No IT project. No identity setup. No server config. Your team is secure from the first QR scan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                n: "01",
                title: "Download and ask nothing",
                body: "Install from the App Store. No account is created. No email, no phone number, no password. You are anonymous from the first second.",
                delay: 0.1,
              },
              {
                n: "02",
                title: "Build your private network by QR",
                body: "The only way to join your network is to scan your QR code. No one can find you, search for you, or contact you without your explicit invitation.",
                delay: 0.2,
              },
              {
                n: "03",
                title: "Communicate with zero trace",
                body: "Text, voice call, group chat. Encrypted end to end, stored only on devices, with nothing on any server.",
                delay: 0.3,
              },
            ].map(({ n, title, body, delay }) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
              >
                <div className="text-6xl font-heading font-black text-white/30 mb-4 leading-none">{n}</div>
                <h3 className="text-xl font-heading font-bold mb-3 text-white">{title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section id="compare" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-300">Privacy comparison</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white">
              The tools your team uses today are a liability.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base">
              Slack, Teams, and WhatsApp all store your messages on servers that can be breached, audited, and subpoenaed. Obscurity has nothing to hand over.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-5xl mx-auto overflow-x-auto"
          >
            <div
              className="rounded-2xl border border-primary/20 overflow-hidden min-w-[680px]"
              style={{
                background: "linear-gradient(145deg, rgba(59,191,255,0.06) 0%, rgba(11,20,38,0.97) 100%)",
                boxShadow: "0 0 80px rgba(59,191,255,0.10), 0 30px 80px rgba(0,0,0,0.6)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Column headers */}
              <div className="grid grid-cols-5 border-b border-primary/20">
                <div className="col-span-1 py-5 px-6" />
                <div className="flex items-center justify-center py-5 px-4 bg-primary/10 border-x border-primary/20">
                  <span style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.02em", color: "#ffffff" }}>Obscurity</span>
                </div>
                <div className="flex items-center justify-center py-5 px-4 border-r border-border/40">
                  <span className="text-sm font-bold text-white text-center leading-tight">Slack and Teams</span>
                </div>
                <div className="flex items-center justify-center py-5 px-4 border-r border-border/40">
                  <span className="text-sm font-bold text-white">WhatsApp</span>
                </div>
                <div className="flex items-center justify-center py-5 px-4">
                  <span className="text-sm font-bold text-white">Telegram</span>
                </div>
              </div>

              {/* Rows */}
              {[
                {
                  feature: "Data on servers",
                  obs: { label: "Nothing", good: true },
                  st: { label: "Stored, searchable", good: false },
                  wa: { label: "Cloud backed up", good: false },
                  tg: { label: "IP, device, contacts", good: false },
                },
                {
                  feature: "Subpoena response",
                  obs: { label: "Nothing to give", good: true },
                  st: { label: "Has complied", good: false },
                  wa: { label: "Has complied", good: false },
                  tg: { label: "Has complied", good: false },
                },
                {
                  feature: "Metadata collected",
                  obs: { label: "None", good: true },
                  st: { label: "Extensive", good: false },
                  wa: { label: "IP, device, contacts", good: false },
                  tg: { label: "Extensive by default", good: false },
                },
                {
                  feature: "E2E encrypted",
                  obs: { label: "Always", good: true },
                  st: { label: "No", good: false },
                  wa: { label: "Yes, but backup voids it", good: null },
                  tg: { label: "Not by default", good: false },
                },
                {
                  feature: "Forwardable",
                  obs: { label: "Never", good: true },
                  st: { label: "Yes", good: false },
                  wa: { label: "Yes", good: false },
                  tg: { label: "Yes", good: false },
                },
              ].map(({ feature, obs, st, wa, tg }, i) => (
                <div key={feature} className={`grid grid-cols-5 border-b border-border/30 last:border-0 ${i % 2 === 0 ? "bg-white/[0.03]" : ""}`} style={{ minHeight: "68px" }}>
                  <div className="flex items-center pl-6 pr-4 py-5">
                    <span className="text-sm font-semibold text-white whitespace-nowrap">{feature}</span>
                  </div>
                  <div className="flex items-center justify-center px-3 py-5 bg-primary/5 border-x border-primary/10">
                    <Cell val={obs} isObscurity />
                  </div>
                  <div className="flex items-center justify-center px-3 py-5 border-r border-border/30">
                    <Cell val={st} />
                  </div>
                  <div className="flex items-center justify-center px-3 py-5 border-r border-border/30">
                    <Cell val={wa} />
                  </div>
                  <div className="flex items-center justify-center px-3 py-5">
                    <Cell val={tg} />
                  </div>
                </div>
              ))}

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 relative z-10 border-y border-border bg-card/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white">Pricing</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold mb-4 text-white"
            >
              Simple pricing that scales<br />with your team.
            </motion.h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Start free. Upgrade when your team grows. No per click fees, no surprises.
            </p>
          </div>

          {/* Pricing toggle */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center gap-4 bg-card border border-border rounded-full px-6 py-3">
              <button
                onClick={() => setAnnual(false)}
                className={`text-sm font-semibold transition-colors ${!annual ? "text-white" : "text-muted-foreground"}`}
              >
                Monthly
              </button>

              {/* Toggle track */}
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex flex-shrink-0 w-12 h-6 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${annual ? "bg-primary" : "bg-muted"}`}
              >
                <span
                  className={`inline-block w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ${annual ? "translate-x-6" : "translate-x-0"}`}
                />
              </button>

              <button
                onClick={() => setAnnual(true)}
                className={`text-sm font-semibold transition-colors ${annual ? "text-white" : "text-muted-foreground"}`}
              >
                Annual
              </button>

              <span className="text-xs bg-yellow-400/20 text-yellow-300 font-bold px-2.5 py-1 rounded-full">
                Save 25%
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Free */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-7 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-1 text-white">Free</h3>
                <div className="text-4xl font-heading font-black mb-1 text-white">$0</div>
                <p className="text-sm text-muted-foreground">Basic secure messaging, always free</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "No account created on download",
                  "No email or phone required, ever",
                  "QR code invites only",
                  "Up to 5 connections",
                  "Encrypted messaging",
                ].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com/us/app/obscurity-chat/id6745473494"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-primary text-primary text-sm font-semibold py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Try it now
              </a>
            </motion.div>

            {/* Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-primary/5 border border-primary/40 rounded-xl p-7 flex flex-col"
              style={{ boxShadow: "0 0 40px rgba(59,191,255,0.08)" }}
            >
              <div className="absolute -top-3 left-6">
                <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most popular
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-1 text-white">Team</h3>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-heading font-black text-white">
                    ${annual ? annualMonthly : monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm mb-1.5">per seat / mo</span>
                </div>
                {annual ? (
                  <p className="text-sm text-yellow-300 font-medium">Billed ${annualPrice}/seat/yr, save 25%</p>
                ) : (
                  <p className="text-sm text-muted-foreground">Billed monthly, cancel anytime</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">Up to 100 seats</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Free",
                  "Unlimited connections, your private network",
                  "Group channels with QR access control",
                  "Priority support",
                ].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/mlele-obscurity"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary text-primary-foreground text-sm font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(59,191,255,0.2)]"
              >
                Talk to sales
              </a>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-7 flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold mb-1 text-white">Enterprise</h3>
                <div className="text-4xl font-heading font-black mb-1 text-white">Let's talk</div>
                <p className="text-sm text-muted-foreground">Hospitals, large firms, PE funds</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Team",
                  "Central backup option",
                  "Dedicated onboarding",
                  "Custom SLA",
                  "MSA and procurement support",
                  "Unlimited seats",
                ].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-yellow-400/70 shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/mlele-obscurity" target="_blank" rel="noopener noreferrer"
                className="block text-center border border-primary text-primary text-sm font-semibold py-2.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Talk to sales
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-yellow-400/5 blur-[80px] rounded-full" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-8"
              style={{ boxShadow: "0 0 40px rgba(59,191,255,0.2)" }}>
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-heading font-bold mb-4 text-white">
              Stop negotiating<br className="hidden md:block" /> for your privacy.
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Your team deserves communications that cannot be breached, audited, or handed over.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/us/app/obscurity-chat/id6745473494"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary text-primary-foreground text-base font-bold px-8 py-4 rounded-lg hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,191,255,0.25)]"
              >
                Try it now <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://calendly.com/mlele-obscurity" target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto border border-primary text-primary text-sm font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Talk to enterprise sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="py-24 border-y border-border bg-card/20 relative z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">

          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white">Our story</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
            >
              Privacy isn't a feature.<br />
              <span className="text-primary">It's the whole point.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Obscurity was built on one conviction: the most secure data is data that was never stored.
            </motion.p>
          </div>

          {/* Founding story */}
          <div className="grid md:grid-cols-2 gap-14 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">How we got here</span>
              <h3 className="text-2xl font-heading font-bold text-white mb-5 leading-tight">
                The breach isn't the problem. The server is.
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every year the same headlines. Healthcare networks exposed. Law firm communications handed over.
                Deal conversations leaked. And every year the same response — better passwords, longer privacy policies,
                new certifications. None of it fixes the real problem.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The real problem is that every platform your team uses stores your conversations on a server.
                That server can be breached, subpoenaed, or sold. Always. Even the platforms built specifically
                for compliance solve this by logging everything more carefully, not by eliminating the risk.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We built Obscurity to eliminate the server entirely. No messages stored. No metadata logged.
                No account created. When there is nothing on our servers, there is nothing to take.
                That is not a privacy policy. It is an architecture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div
                className="rounded-xl border border-primary/20 p-6"
                style={{ background: "linear-gradient(145deg, rgba(59,191,255,0.06) 0%, rgba(11,20,38,0.97) 100%)" }}
              >
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">The problem</p>
                <p className="text-white font-semibold text-base leading-relaxed">
                  Every secure messaging platform still has servers. Those servers hold your metadata,
                  your contact graph, your message timestamps. That is enough to do real damage.
                </p>
              </div>
              <div
                className="rounded-xl border border-yellow-400/20 p-6"
                style={{ background: "linear-gradient(145deg, rgba(250,204,21,0.04) 0%, rgba(11,20,38,0.97) 100%)" }}
              >
                <p className="text-xs font-mono uppercase tracking-widest text-yellow-300 mb-3">Our answer</p>
                <p className="text-white font-semibold text-base leading-relaxed">
                  Zero knowledge isn't a marketing claim. It's an architecture decision.
                  We built a system where we genuinely have nothing to give, nothing to sell,
                  and nothing to lose in a breach.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "0", label: "PII collected" },
                  { value: "0", label: "Server records" },
                  { value: "0", label: "Metadata logs" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-heading font-black text-white mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values grid */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-300">What we believe</span>
            </motion.div>
            <h3 className="text-3xl font-heading font-bold text-white mb-2">The principles we build from.</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {[
              { icon: <ServerOff className="w-5 h-5 text-primary" />, title: "Nothing stored, nothing stolen", body: "The most secure data is data that was never written to a server. We built the architecture around this fact, not around better locks on the same broken model.", delay: 0.1 },
              { icon: <EyeOff className="w-5 h-5 text-yellow-400" />, title: "Anonymity is a right", body: "You should be able to communicate professionally without linking your identity to a phone number, an email, or an account that can be seized or sold.", delay: 0.15 },
              { icon: <Lock className="w-5 h-5 text-primary" />, title: "Encryption is table stakes", body: "End-to-end encryption is not a differentiator, it is the minimum. We go further: no metadata, no contact graphs, no timestamps leave your devices.", delay: 0.2 },
              { icon: <FileX className="w-5 h-5 text-yellow-400" />, title: "No data to give", body: "When a regulator, a court, or a bad actor comes looking, we are genuinely, provably unable to help them. Not unwilling. Unable. There is nothing here.", delay: 0.25 },
              { icon: <Globe className="w-5 h-5 text-primary" />, title: "Closed networks protect people", body: "QR-only invitations mean your network is genuinely closed. No directory, no phishing surface, no way in without your explicit invitation.", delay: 0.3 },
              { icon: <Fingerprint className="w-5 h-5 text-yellow-400" />, title: "Privacy by design, not policy", body: "A privacy policy is a promise. A zero-data architecture is a proof. We don't ask you to trust our intentions. We built a system where our intentions are irrelevant.", delay: 0.35 },
            ].map(({ icon, title, body, delay }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h4 className="text-base font-heading font-bold text-white mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <a href="/"><span style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#ffffff" }}>Obscurity</span></a>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-6">
            {[
              { href: "#why", label: "Why Obscurity" },
              { href: "/use-cases/healthcare", label: "Healthcare" },
              { href: "/use-cases/legal", label: "Legal" },
              { href: "/use-cases/finance", label: "Finance" },
              { href: "#how", label: "How it works" },
              { href: "#features", label: "Features" },
              { href: "#compare", label: "Compare" },
              { href: "#pricing", label: "Pricing" },
              { href: "#about", label: "About" },
              { href: "https://calendly.com/mlele-obscurity", label: "Enterprise" },
            ].map(({ href, label }) =>
              href.startsWith("/") ? (
                <Link key={label} href={href} className="text-sm text-muted-foreground hover:text-white transition-colors">{label}</Link>
              ) : (
                <a key={label} href={href} className="text-sm text-muted-foreground hover:text-white transition-colors">{label}</a>
              )
            )}
          </nav>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://apps.apple.com/us/app/obscurity-chat/id6745473494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download for iOS
            </a>
          </div>
          <p className="text-center text-muted-foreground text-sm font-mono">
            &copy; {new Date().getFullYear()} Obscurity. Zero data. Zero trace. &nbsp;·&nbsp; Android coming Q4 2026
          </p>
        </div>
      </footer>

      {/* ── FLOATING WIDGET ── */}
      <FloatingWidget />

    </div>
  );
}