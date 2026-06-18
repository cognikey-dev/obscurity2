import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Shield, Lock, EyeOff, ArrowRight, Check, X, TrendingUp,
  FileX, Ban, AlertTriangle, Eye, ChevronDown, Stethoscope, Scale
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

export default function FinanceUseCase() {
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
            <TrendingUp className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-white">Finance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold tracking-tighter leading-tight mb-6 text-white"
          >
            A leak doesn't have<br />to be a hack.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Most deal leaks aren't sophisticated breaches. They're a screenshot forwarded once,
            a metadata trail that confirms a meeting happened, or a server that simply had more
            than it should. Obscurity removes all three.
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
                The deal team is the attack surface.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Term sheets get discussed over WhatsApp. Cap table questions move through iMessage.
                A junior analyst forwards a screenshot to a colleague who isn't supposed to know the
                deal exists yet. None of this requires a hacker. It just requires a tool that allows it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Even when the content itself never leaks, metadata can. Knowing that two specific people
                were in frequent contact during a specific window can be enough for a counterparty,
                a journalist, or a competitor to draw the right conclusion before a deal is ready to be
                public.
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
                <Eye className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Metadata alone, who talked to whom and when, can confirm a deal is happening before
                  a single document leaks.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
                <FileX className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  A single forwarded screenshot is enough to move a stock price or collapse a negotiation.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">
                  A closed network with no forwarding and no metadata removes both risks at once.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What a deal team should never have to wonder.
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Whether this conversation could be confirmed by someone who shouldn't know it happened.
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
                  <span className="text-sm font-bold text-white">WhatsApp and Slack</span>
                </div>
              </div>
              {[
                { feature: "Conversation confirmable", obs: { label: "No metadata exists", good: true }, wa: { label: "Yes, via metadata", good: false } },
                { feature: "Screenshot forwarding", obs: { label: "Disabled", good: true }, wa: { label: "Always possible", good: false } },
                { feature: "Public directory", obs: { label: "None, invisible", good: true }, wa: { label: "Searchable by org", good: false } },
                { feature: "Data on servers", obs: { label: "Nothing", good: true }, wa: { label: "Stored", good: false } },
                { feature: "Network visibility", obs: { label: "Fully closed", good: true }, wa: { label: "Org wide by default", good: false } },
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

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-20 border-y border-border bg-card/20 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-white">Where this matters most</span>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Deal teams", body: "Negotiation strategy and valuation discussions before a deal is signed, where confirmation alone moves markets." },
              { title: "Venture capital", body: "Term sheet conversations and diligence notes that shouldn't be visible to other firms in a competitive round." },
              { title: "Private equity", body: "Target evaluation and board level conversations that need to stay inside a small, genuinely closed group." },
            ].map(({ title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="text-base font-heading font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            A network that cannot be confirmed.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            No directory, no metadata, no forwarding. For deal teams, the safest conversation is one
            that cannot be proven to have happened at all.
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