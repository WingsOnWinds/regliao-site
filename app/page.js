"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeIn = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 800ms ease ${delay}ms, transform 800ms ease ${delay}ms`,
  });

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        backgroundColor: "#f5f1e8",
        color: "#1a1814",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=JetBrains+Mono:wght@400;500&family=Inter:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; }
        body { margin: 0; }

        .grain::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.35;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.05 0 0 0 0.15 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .display { font-family: 'Fraunces', Georgia, serif; font-feature-settings: 'ss01'; letter-spacing: -0.02em; }
        .mono { font-family: 'JetBrains Mono', monospace; }

        .link-hover { position: relative; transition: color 200ms; }
        .link-hover::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 0; height: 1px;
          background: currentColor;
          transition: width 250ms ease;
        }
        .link-hover:hover::after { width: 100%; }

        .btn-primary {
          background: #1a1814;
          color: #f5f1e8;
          padding: 14px 28px;
          border: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: all 200ms ease;
          font-family: inherit;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .btn-primary:hover {
          background: #8b1a1a;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: #1a1814;
          padding: 14px 28px;
          border: 1px solid #1a1814;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 200ms ease;
          font-family: inherit;
        }
        .btn-secondary:hover {
          background: #1a1814;
          color: #f5f1e8;
        }

        .arrow { transition: transform 200ms ease; }
        .btn-primary:hover .arrow { transform: translateX(4px); }

        .rule {
          border: none;
          border-top: 1px solid rgba(26, 24, 20, 0.15);
          margin: 0;
        }

        .eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8b1a1a;
        }

        .num-badge {
          font-family: 'Fraunces', serif;
          font-size: 14px;
          font-style: italic;
          color: #8b1a1a;
        }

        input:focus, textarea:focus { outline: none; border-color: #1a1814 !important; }

        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; }
          .hero-headline { font-size: 44px !important; line-height: 1.05 !important; }
          .section-headline { font-size: 32px !important; }
          .hero-padding { padding: 100px 24px 80px !important; }
          .section-padding { padding: 80px 24px !important; }
          .nav-padding { padding: 16px 24px !important; }
        }
      `}</style>

      <div className="grain" style={{ position: "relative", zIndex: 2 }}>
        {/* NAV */}
        <nav
          className="nav-padding"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: "20px 56px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: scrolled ? "rgba(245, 241, 232, 0.92)" : "transparent",
            backdropFilter: scrolled ? "blur(12px)" : "none",
            borderBottom: scrolled ? "1px solid rgba(26, 24, 20, 0.08)" : "1px solid transparent",
            transition: "all 300ms ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                background: "#1a1814",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 10,
                  height: 10,
                  background: "#8b1a1a",
                }}
              />
            </div>
            <span className="display" style={{ fontSize: 20, fontWeight: 600 }}>
              Regliao
            </span>
          </div>
          <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
            <a href="#what" className="link-hover" style={{ color: "#1a1814", textDecoration: "none", fontSize: 14 }}>
              What it does
            </a>
            <a href="#how" className="link-hover" style={{ color: "#1a1814", textDecoration: "none", fontSize: 14 }}>
              How it works
            </a>
            <a href="#why" className="link-hover" style={{ color: "#1a1814", textDecoration: "none", fontSize: 14 }}>
              Why us
            </a>
            <a href="https://calendly.com/hello-regliao" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none", padding: "10px 20px", fontSize: 14 }}>
              Book a call
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section
          className="hero-padding"
          style={{
            padding: "180px 56px 120px",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div style={fadeIn(0)}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span className="eyebrow">Built in Canada</span>
              <span style={{ width: 24, height: 1, background: "#8b1a1a" }} />
              <span className="mono" style={{ fontSize: 12, color: "#6b6760" }}>FINTRAC-aligned</span>
            </div>
          </div>

          <h1
            className="display hero-headline"
            style={{
              fontSize: 88,
              fontWeight: 400,
              lineHeight: 0.98,
              margin: "0 0 40px",
              maxWidth: 1100,
              ...fadeIn(150),
            }}
          >
            Your analysts shouldn&apos;t spend{" "}
            <em style={{ fontStyle: "italic", color: "#8b1a1a", fontWeight: 500 }}>
              90 minutes
            </em>{" "}
            writing every STR narrative.
          </h1>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              maxWidth: 680,
              color: "#3a362e",
              margin: "0 0 48px",
              fontWeight: 300,
              ...fadeIn(300),
            }}
          >
            Regliao works alongside your existing transaction monitoring system to draft FINTRAC-ready STR narratives, triage alerts, and consolidate case context — so your analysts spend less time writing and more time investigating. Hosted in Canada. Human always reviews and submits.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", ...fadeIn(450) }}>
            <a href="https://calendly.com/hello-regliao" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
              Book a 20-minute call
              <span className="arrow">→</span>
            </a>
            {/* Re-enable when STR checklist PDF is ready
            <a href="#checklist" className="btn-secondary" style={{ textDecoration: "none" }}>
              Get the STR quality checklist
            </a>
            */}
          </div>
        </section>

        <hr className="rule" style={{ maxWidth: 1280, margin: "0 auto" }} />

        {/* THE PROBLEM */}
        <section
          id="problem"
          className="section-padding"
          style={{ padding: "120px 56px", maxWidth: 1280, margin: "0 auto" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }} className="responsive-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>01 / The problem</div>
              <h2 className="display section-headline" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.05, margin: 0 }}>
                Detection isn&apos;t the bottleneck anymore. <em style={{ color: "#8b1a1a" }}>Documentation is.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "#3a362e", margin: "0 0 40px", fontWeight: 300 }}>
                Most Canadian credit unions and MSBs already invested in transaction monitoring — Verafin, Actimize, in-house rules engines. The alerts are getting generated. The problem is what happens next.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Analysts spend 60–90 minutes per STR writing the Part F narrative",
                  "False positive rates above 90% mean most analyst time goes to alerts that won't become STRs",
                  "Case context lives across KYC, sanctions, and prior alert systems — analysts tab between five screens",
                  "Narrative quality varies by analyst, and FINTRAC examiners notice",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 24,
                      padding: "20px 0",
                      borderTop: i === 0 ? "1px solid rgba(26,24,20,0.15)" : "none",
                      borderBottom: "1px solid rgba(26,24,20,0.15)",
                      fontSize: 16,
                      lineHeight: 1.5,
                    }}
                  >
                    <span className="num-badge" style={{ minWidth: 24 }}>{`0${i + 1}`}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "#1a1814", marginTop: 40, fontWeight: 400 }}>
                Regliao sits downstream of your detection system and accelerates the work your analysts actually do.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" style={{ maxWidth: 1280, margin: "0 auto" }} />

        {/* WHAT IT DOES */}
        <section
          id="what"
          className="section-padding"
          style={{ padding: "120px 56px", maxWidth: 1280, margin: "0 auto" }}
        >
          <div style={{ marginBottom: 80, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>02 / What it does</div>
            <h2 className="display section-headline" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.05, margin: 0 }}>
              Three workflows. <em style={{ color: "#8b1a1a" }}>One integration.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "rgba(26,24,20,0.15)" }} className="responsive-grid">
            {[
              {
                num: "I",
                title: "STR narrative drafting",
                body: "Send us a case bundle — alert details, flagged transactions, customer KYC. We return a drafted Part F narrative and structured STR fields, formatted to FINTRAC's expectations. Your analyst reviews, edits, and submits.",
              },
              {
                num: "II",
                title: "Alert triage assistance",
                body: "For every alert, we pull historical context, prior dispositions, and KYC data, then return a recommendation with reasoning — escalate, dismiss, or needs more information. Your analyst always decides.",
              },
              {
                num: "III",
                title: "Case workup consolidation",
                body: "One structured view of everything an analyst needs: transaction patterns, KYC, sanctions hits, prior alerts, beneficial ownership. Pulled from your systems, returned in one payload.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#f5f1e8",
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  minHeight: 360,
                }}
              >
                <div
                  className="display"
                  style={{
                    fontSize: 56,
                    fontStyle: "italic",
                    color: "#8b1a1a",
                    fontWeight: 300,
                    marginBottom: 32,
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </div>
                <h3 className="display" style={{ fontSize: 24, fontWeight: 500, margin: "0 0 20px", lineHeight: 1.2 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#3a362e", margin: 0, fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule" style={{ maxWidth: 1280, margin: "0 auto" }} />

        {/* HOW IT WORKS */}
        <section
          id="how"
          className="section-padding"
          style={{ padding: "120px 56px", maxWidth: 1280, margin: "0 auto" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64 }} className="responsive-grid">
            <div style={{ position: "sticky", top: 100, alignSelf: "start" }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>03 / How it works</div>
              <h2 className="display section-headline" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.05, margin: 0 }}>
                Built for how Canadian compliance teams <em style={{ color: "#8b1a1a" }}>actually work.</em>
              </h2>
            </div>
            <div>
              {[
                {
                  title: "API-first",
                  body: "Your detection system sends us a case. We send back drafted narratives and recommendations. You stay in control of submission to FINTRAC.",
                },
                {
                  title: "Hosted in Canada",
                  body: "AWS ca-central-1. Data stays in Canada. Full audit trail of every model input, output, and version.",
                },
                {
                  title: "Human in the loop, always",
                  body: "Regliao never submits an STR. It drafts, recommends, and consolidates — your team reviews and decides.",
                },
                {
                  title: "Works with your existing stack",
                  body: "Sits downstream of Verafin, Actimize, Oracle FCCM, or in-house systems. We don't replace detection.",
                },
                {
                  title: "Configurable per institution",
                  body: "Narrative tone, required sections, terminology, and disposition rules adapt to your team's conventions.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1fr",
                    gap: 32,
                    padding: "32px 0",
                    borderTop: "1px solid rgba(26,24,20,0.15)",
                    borderBottom: i === 4 ? "1px solid rgba(26,24,20,0.15)" : "none",
                  }}
                >
                  <span className="mono" style={{ fontSize: 13, color: "#8b1a1a", fontWeight: 500, paddingTop: 4 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 10px" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 16, lineHeight: 1.6, color: "#3a362e", margin: 0, fontWeight: 300 }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="rule" style={{ maxWidth: 1280, margin: "0 auto" }} />

        {/* WHY US */}
        <section
          id="why"
          className="section-padding"
          style={{ padding: "120px 56px", maxWidth: 1280, margin: "0 auto" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="responsive-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>04 / Why us</div>
              <h2 className="display section-headline" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.05, margin: "0 0 32px" }}>
                Built by someone who&apos;s been on <em style={{ color: "#8b1a1a" }}>your side</em> of the table.
              </h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "#3a362e", fontWeight: 300, marginBottom: 16 }}>
                Regliao is built by Shawn Liao, a former bank solutions architect with deep experience in financial services technology. The product is designed around FINTRAC&apos;s actual guidance and the real workflows of Canadian compliance teams — not a generic AML tool retrofitted for Canada.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b6760", fontWeight: 300, fontStyle: "italic" }}>
                Regliao (<span className="mono" style={{ fontStyle: "normal" }}>reg-lee-ow</span>) — regulatory clarity, built by Liao.
              </p>
            </div>
            <div style={{ background: "#1a1814", color: "#f5f1e8", padding: 48 }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Canadian-built, Canadian-hosted",
                  "Direct access to the founder during pilot and rollout",
                  "Built specifically for credit unions and MSBs — not enterprise banks",
                  "SOC 2 readiness in progress",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "20px 0",
                      borderBottom: i < 3 ? "1px solid rgba(245,241,232,0.15)" : "none",
                      fontSize: 16,
                      display: "flex",
                      gap: 16,
                    }}
                  >
                    <span style={{ color: "#c84545" }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr className="rule" style={{ maxWidth: 1280, margin: "0 auto" }} />

        {/* WHAT WE DON'T DO */}
        <section
          className="section-padding"
          style={{ padding: "120px 56px", maxWidth: 1280, margin: "0 auto" }}
        >
          <div style={{ marginBottom: 64, maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>05 / Honest scope</div>
            <h2 className="display section-headline" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.05, margin: 0 }}>
              What Regliao <em style={{ color: "#8b1a1a" }}>isn&apos;t.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(26,24,20,0.15)" }} className="responsive-grid">
            {[
              { title: "Not a replacement for transaction monitoring.", body: "We work alongside your existing detection system." },
              { title: "Not an autonomous decision-maker.", body: "Every STR submitted is reviewed by a human analyst." },
              { title: "Not a sanctions screening tool.", body: "We integrate with the one you already use." },
              { title: "Not a black box.", body: "Every recommendation includes the reasoning and source data behind it." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#f5f1e8", padding: 40 }}>
                <div className="mono" style={{ fontSize: 12, color: "#8b1a1a", marginBottom: 16 }}>
                  ✕ {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="display" style={{ fontSize: 22, fontWeight: 500, margin: "0 0 12px", lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#3a362e", margin: 0, fontWeight: 300 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="rule" style={{ maxWidth: 1280, margin: "0 auto" }} />

        {/* CTA */}
        <section
          id="contact"
          className="section-padding"
          style={{ padding: "140px 56px", maxWidth: 1280, margin: "0 auto", textAlign: "center" }}
        >
          <div className="eyebrow" style={{ marginBottom: 24 }}>06 / Next step</div>
          <h2
            className="display"
            style={{
              fontSize: 64,
              fontWeight: 400,
              lineHeight: 1.05,
              margin: "0 auto 32px",
              maxWidth: 900,
            }}
          >
            See if Regliao fits <em style={{ color: "#8b1a1a" }}>your workflow.</em>
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#3a362e", maxWidth: 580, margin: "0 auto 48px", fontWeight: 300 }}>
            A 20-minute call. No slides. We&apos;ll talk about where your analysts spend time and whether Regliao can help. If it&apos;s not a fit, we&apos;ll tell you.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://calendly.com/hello-regliao" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: "none" }}>
              Book a call
              <span className="arrow">→</span>
            </a>
            {/* Re-enable when STR checklist PDF is ready
            <a href="#" id="checklist" className="btn-secondary" style={{ textDecoration: "none" }}>
              Download the STR checklist
            </a>
            */}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            borderTop: "1px solid rgba(26,24,20,0.15)",
            padding: "48px 56px 32px",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 48,
              marginBottom: 48,
            }}
            className="responsive-grid"
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 24, height: 24, background: "#1a1814", position: "relative" }}>
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 8, height: 8, background: "#8b1a1a" }} />
                </div>
                <span className="display" style={{ fontSize: 18, fontWeight: 600 }}>Regliao</span>
              </div>
              <p style={{ fontSize: 14, color: "#6b6760", margin: 0, lineHeight: 1.5, maxWidth: 320 }}>
                AI-assisted compliance for Canadian credit unions and MSBs.
              </p>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16, fontSize: 11 }}>Product</div>
              <a href="#what" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none", marginBottom: 8 }}>What it does</a>
              <a href="#how" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none", marginBottom: 8 }}>How it works</a>
              <a href="#why" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none" }}>Why us</a>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16, fontSize: 11 }}>Contact</div>
              <a href="mailto:hello@regliao.ca" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none", marginBottom: 8 }}>hello@regliao.ca</a>
              <a href="https://www.linkedin.com/in/regliao/" target="_blank" rel="noopener noreferrer" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none" }}>LinkedIn</a>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16, fontSize: 11 }}>Legal</div>
              <a href="#" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none", marginBottom: 8 }}>Privacy</a>
              <a href="#" className="link-hover" style={{ display: "block", fontSize: 14, color: "#1a1814", textDecoration: "none" }}>Terms</a>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(26,24,20,0.15)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <span className="mono" style={{ fontSize: 12, color: "#6b6760" }}>
              © 2026 Regliao · A product of Wings On Winds Corporation · Burlington, ON
            </span>
            <span className="mono" style={{ fontSize: 12, color: "#6b6760" }}>
              Hosted in 🍁 ca-central-1
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
