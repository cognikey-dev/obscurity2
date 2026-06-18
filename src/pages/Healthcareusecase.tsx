import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Shield, Lock, EyeOff, ArrowRight, Check, X, Stethoscope,
  QrCode, Ban, ServerOff, AlertTriangle, Zap, FileX, ChevronDown,
  Scale, TrendingUp
} from "lucide-react";

function UseCasesDropdown() {
  const [open, setOpen] = useState(false);
  const items = [
    { href: "/use-cases/healthcare", label: "Healthcare", icon: <Stethoscope className="w-4 h-4 text-primary" /> },
    { href: "/use-cases/legal", label: "Legal", icon: <Scale className="w-4 h-4 text-primary" /> },
    { href: "/use-cases/finance", label: "Finance", icon: <TrendingUp className="w-4 h-4 text-primary" /> },
  ];
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-sm text-white hover:text-primary transition-colors flex items-center gap-1">
        Use Cases <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 w-48" style={{ zIndex: 60 }}>
          <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
            {items.map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2.5 px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-primary/10 transition-colors">
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

// ── Shared Nav ────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <span style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#ffffff" }}>Obscurity</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <UseCasesDropdown />
          <a href="/#why" className="text-sm text-white/70 hover:text-white transition-colors">Why Obscurity</a>
          <a href="/#compare" className="text-sm text-white/70 hover:text-white transition-colors">Compare</a>
          <a href="/#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
          <a href="/#about" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
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
  );
}

// ── Use case sub-nav ──────────────────────────────────────────────────────────
// ── Comparison Cell (reused pattern) ──────────────────────────────────────────
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

export default function HealthcareUseCase() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="container mx-auto relative z-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
          >
            <Stethoscope className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-white">Healthcare</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold tracking-tighter leading-tight mb-6 text-white"
          >
            Your staff is already<br />using WhatsApp.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Pagers are slow. Hospital landlines are slow. So clinical teams reach for the fastest tool
            available, and that tool is almost always WhatsApp. Obscurity replaces that specific habit
            with something just as fast and genuinely private.
          </motion.p>
        </div>
      </section>


      {/* ── THE REALITY ── */}
      <section className="py-20 border-y border-border bg-card/20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-widest text-primary mb-4 block">The reality on the ground</span>
              <h2 className="text-2xl font-heading font-bold text-white mb-5 leading-tight">
                Speed wins. It always does.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Stroke teams coordinate over WhatsApp. X-rays get shared, often with patient details cropped
                out in a rush. Code teams activate over group chats. None of this happens because clinicians
                are careless. It happens because traditional pagers and hospital landlines are too slow for
                the pace patient care actually requires.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The problem is not the speed. The problem is that WhatsApp was never built for clinical
                environments. It typically lacks audit trails, role based access, and the privacy agreements
                hospitals are legally required to have in place. Sharing a patient name or chart detail on
                WhatsApp can become a confidentiality breach the moment it is sent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  WhatsApp is, by most accounts, the most widely used messaging app in healthcare globally,
                  used informally because the approved tools are too slow.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
                <FileX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  No audit trail, no role based access, no privacy agreement. A single screenshot can become
                  a reportable breach.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Compliance teams know it is happening. They cannot realistically stop it. They can replace
                  the underlying app.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE ARE AND ARE NOT ── */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-yellow-300">An honest scope</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              We are not trying to replace your EHR integrated platform.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Platforms with built in scheduling, code team activation, and full audit trails exist for a
              reason, and they do that job well. Obscurity solves a narrower, more specific problem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-7"
            >
              <h3 className="text-base font-heading font-bold text-white mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" /> What Obscurity replaces
              </h3>
              <ul className="space-y-3">
                {[
                  "The WhatsApp group chat your stroke team already uses",
                  "Informal texting between clinicians about patient care",
                  "Quick photo sharing of charts, X-rays, and clinical images",
                  "Ad hoc coordination that happens faster than official channels",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-7"
            >
              <h3 className="text-base font-heading font-bold text-white mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-muted-foreground" /> What Obscurity does not do
              </h3>
              <ul className="space-y-3">
                {[
                  "On call scheduling and shift management",
                  "Code team activation with escalation logic",
                  "Message level audit trails for legal defensibility",
                  "Direct EHR integration or structured clinical data",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-20 border-y border-border bg-card/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              WhatsApp versus Obscurity, for clinical teams.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Same speed and convenience. A fundamentally different risk profile.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto overflow-x-auto"
          >
            <div
              className="rounded-2xl border border-primary/20 overflow-hidden min-w-[460px]"
              style={{
                background: "linear-gradient(145deg, rgba(59,191,255,0.06) 0%, rgba(11,20,38,0.97) 100%)",
                boxShadow: "0 0 60px rgba(59,191,255,0.10)",
              }}
            >
              <div className="grid grid-cols-3 border-b border-primary/20">
                <div className="py-5 px-6" />
                <div className="flex items-center justify-center py-5 px-4 bg-primary/10 border-x border-primary/20">
                  <span style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#ffffff" }}>Obscurity</span>
                </div>
                <div className="flex items-center justify-center py-5 px-4">
                  <span className="text-sm font-bold text-white">WhatsApp</span>
                </div>
              </div>
              {[
                { feature: "Speed and ease of use", obs: { label: "Same", good: true }, wa: { label: "Same", good: null } },
                { feature: "Patient data on servers", obs: { label: "Nothing", good: true }, wa: { label: "Cloud backed up", good: false } },
                { feature: "Confidentiality risk", obs: { label: "Nothing to expose", good: true }, wa: { label: "High, by default", good: false } },
                { feature: "Account required", obs: { label: "Never", good: true }, wa: { label: "Phone number", good: false } },
                { feature: "Forwardable", obs: { label: "Never", good: true }, wa: { label: "Yes", good: false } },
              ].map(({ feature, obs, wa }, i) => (
                <div key={feature} className={`grid grid-cols-3 border-b border-border/30 last:border-0 ${i % 2 === 0 ? "bg-white/[0.03]" : ""}`} style={{ minHeight: "60px" }}>
                  <div className="flex items-center pl-6 pr-4 py-4">
                    <span className="text-sm font-semibold text-white whitespace-nowrap">{feature}</span>
                  </div>
                  <div className="flex items-center justify-center px-4 py-4 bg-primary/5 border-x border-primary/10">
                    <Cell val={obs} isObscurity />
                  </div>
                  <div className="flex items-center justify-center px-4 py-4">
                    <Cell val={wa} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT FITS ── */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-white">How this fits your stack</span>
          </motion.div>
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            A small, fast fix. Not a platform migration.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Most hospitals already run a clinical communication platform for structured workflows like
            on call scheduling and code activation. That stays exactly as it is. Obscurity sits next to it,
            specifically for the fast, informal coordination that is currently happening on personal phones
            through a consumer app with no governance at all. There is no IT project, no procurement cycle
            measured in months, and no training required. Staff scan a QR code and the habit they already
            have becomes private instead of exposed.
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
              href="https://calendly.com/mlele-obscurity"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-primary text-primary text-sm font-semibold px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Talk to sales
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-8">
            <Link href="/"><span style={{ fontFamily: "'DM Sans', 'Inter', sans-serif", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#ffffff" }}>Obscurity</span></Link>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-6">
            <a href="/#why" className="text-sm text-muted-foreground hover:text-white transition-colors">Why Obscurity</a>
            <Link href="/use-cases/healthcare" className="text-sm text-muted-foreground hover:text-white transition-colors">Use Cases</Link>
            <a href="/#compare" className="text-sm text-muted-foreground hover:text-white transition-colors">Compare</a>
            <a href="/#pricing" className="text-sm text-muted-foreground hover:text-white transition-colors">Pricing</a>
            <a href="/#about" className="text-sm text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="https://calendly.com/mlele-obscurity" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-white transition-colors">Enterprise</a>
          </nav>
          <p className="text-center text-muted-foreground text-sm font-mono">
            &copy; {new Date().getFullYear()} Obscurity. Zero data. Zero trace. &nbsp;&middot;&nbsp; Android coming Q4 2026
          </p>
        </div>
      </footer>
    </div>
  );
}