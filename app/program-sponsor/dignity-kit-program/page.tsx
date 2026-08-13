import Image from "next/image";

export const metadata = {
  title: "The Dignity Kit Program",
  description:
    "The Dignity Kit Program assembles hygiene and personal care essentials into kits distributed with dignity to at-risk youth ages 13–24 across Southern California through Teen Health's partner network.",
};

const pageStyles = `
  .dk-page {
    --dk-orange:       #e87820;
    --dk-orange-light: #fef3e8;
    --dk-teal:         #5a7ba8;
    --dk-teal-light:   rgba(90,123,168,0.14);
    --dk-blue:         #4a74d0;
    --dk-blue-light:   rgba(90,123,168,0.14);
    --dk-blue-label:   #3d5e85;
    --dk-navy:         #1c2c3d;
    --dk-text-mid:     rgba(28,44,61,0.85);
    --dk-text-light:   rgba(28,44,61,0.72);
    --dk-border:       rgba(90,123,168,0.18);
    --dk-card-shadow:  0 2px 20px rgba(26,43,60,0.08);
    --dk-serif: 'Playfair Display', Georgia, serif;
    --dk-sans:  'Inter', system-ui, sans-serif;

    font-family: var(--dk-sans);
    color: var(--dk-navy);
    background: #fff;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .dk-hero {
    background: linear-gradient(to right, #3a6ed4 70%, #5682dc);
    padding: 80px 56px 88px;
  }
  .dk-hero-inner {
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    .dk-hero { padding: 60px 20px 64px; }
  }

  .dk-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #ffffff;
    background: rgba(255,255,255,0.20);
    border: 1px solid rgba(255,255,255,0.40);
    padding: 7px 16px 7px 12px;
    border-radius: 100px;
    margin-bottom: 26px;
  }
  .dk-badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #ffffff;
    flex-shrink: 0;
  }

  .dk-hero h1 {
    font-family: var(--dk-serif);
    font-size: clamp(30px, 4vw, 46px);
    font-weight: 400;
    color: #ffffff;
    line-height: 1.12;
    letter-spacing: -0.02em;
    margin-bottom: 22px;
    text-wrap: balance;
  }
  .dk-hero h1 .dk-accent { color: rgba(255,255,255,0.88); }

  .dk-hero-campaign {
    font-size: clamp(20px, 2.6vw, 26px);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.4;
    letter-spacing: -0.01em;
    max-width: 520px;
    margin-bottom: 18px;
    text-wrap: balance;
  }

  .dk-hero-sub {
    font-size: 17px;
    color: rgba(255,255,255,0.92);
    font-weight: 400;
    line-height: 1.65;
    max-width: 600px;
    margin-bottom: 40px;
    text-wrap: pretty;
  }

  .dk-hero-stats {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }
  @media (max-width: 600px) {
    .dk-hero-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }
  .dk-stat-num {
    font-family: var(--dk-serif);
    font-size: 38px;
    color: #ffffff;
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }
  .dk-stat-label {
    font-size: 13px;
    color: rgba(255,255,255,0.85);
    font-weight: 500;
  }

  /* ── GRADIENT BODY ── */
  .dk-gradient-body {
    background: linear-gradient(175deg, #d6eaf8 0%, #f0f6fc 12%, #f8f7f4 40%, #f5ede0 100%);
  }

  /* ── SHARED ── */
  .dk-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 56px;
  }
  @media (max-width: 640px) { .dk-container { padding: 0 20px; } }
  .dk-section { padding: 80px 0; }

  .dk-section-label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--dk-blue-label);
    margin-bottom: 18px;
  }
  .dk-section-label::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: var(--dk-blue-label);
    border-radius: 2px;
    flex-shrink: 0;
  }

  .dk-section-h {
    font-family: var(--dk-serif);
    font-size: clamp(26px, 3vw, 36px);
    font-weight: 400;
    color: var(--dk-navy);
    line-height: 1.18;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
    text-wrap: balance;
  }
  .dk-br-mobile { display: none; }
  @media (max-width: 600px) {
    .dk-br-mobile { display: inline; }
  }
  .dk-section-sub {
    font-size: 17px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.7;
    max-width: 660px;
    margin-bottom: 0;
    text-wrap: pretty;
  }

  /* ── 2-COL ── */
  .dk-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: start;
    margin-top: 32px;
  }
  @media (max-width: 760px) {
    .dk-two-col { grid-template-columns: 1fr; gap: 40px; }
    .dk-two-col > .dk-fade-in + .dk-fade-in::before {
      content: '';
      display: block;
      width: 60px;
      height: 1px;
      background: var(--dk-navy);
      opacity: 0.25;
      margin: 0 auto 32px;
    }
  }
  .dk-col-body {
    font-size: 16px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.75;
  }
  .dk-highlight-box {
    background: rgba(90,123,168,0.10);
    border: 1px solid rgba(90,123,168,0.22);
    border-radius: 12px;
    padding: 18px 20px;
    margin: 18px 0;
    font-size: 15px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.65;
  }
  .dk-highlight-box b { color: var(--dk-navy); font-weight: 700; }

  /* ── STAT CARDS ── */
  .dk-stat-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 56px;
  }
  @media (max-width: 640px) { .dk-stat-cards { grid-template-columns: 1fr; } }
  .dk-stat-card {
    background: #fff;
    border-radius: 18px;
    padding: 30px 26px;
    box-shadow: var(--dk-card-shadow);
  }
  .dk-stat-card-num {
    font-family: var(--dk-serif);
    font-size: 42px;
    line-height: 1;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
    font-weight: 400;
  }
  .dk-num-teal { color: var(--dk-teal); }
  .dk-num-blue { color: var(--dk-blue); }
  .dk-stat-card-heading {
    font-size: 15px;
    font-weight: 700;
    color: var(--dk-navy);
    margin-bottom: 8px;
    line-height: 1.4;
  }
  .dk-stat-card-body {
    font-size: 14.5px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.6;
  }

  /* ── IMPACT 4-TIER ── */
  .dk-impact-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    margin-top: 56px;
  }
  @media (max-width: 860px) { .dk-impact-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .dk-impact-grid { grid-template-columns: 1fr; } }

  .dk-impact-card {
    border-radius: 16px;
    padding: 26px 24px;
    box-shadow: var(--dk-card-shadow);
    transition: transform 0.2s;
  }
  .dk-impact-card:hover { transform: translateY(-4px); }
  .dk-impact-card:nth-child(1) { background: #ffffff; }
  .dk-impact-card:nth-child(2) { background: #d6eaf8; }
  .dk-impact-card:nth-child(3) { background: #6f9bd5; }
  .dk-impact-card:nth-child(3) .dk-impact-amt { color: #ffffff; }
  .dk-impact-card:nth-child(3) .dk-impact-tag { color: rgba(255,255,255,0.85); }
  .dk-impact-card:nth-child(3) .dk-impact-desc { color: rgba(255,255,255,0.92); }
  .dk-impact-card.dk-featured { background: #4a74d0; }
  .dk-impact-tag {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dk-teal);
    margin-bottom: 12px;
    display: block;
  }
  .dk-impact-card.dk-featured .dk-impact-tag { color: rgba(255,255,255,0.85); }
  .dk-impact-amt {
    font-family: var(--dk-serif);
    font-size: 36px;
    color: var(--dk-blue);
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
    font-weight: 400;
  }
  .dk-impact-card.dk-featured .dk-impact-amt { color: #ffffff; }
  .dk-impact-desc {
    font-size: 14.5px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.6;
  }
  .dk-impact-card.dk-featured .dk-impact-desc { color: rgba(255,255,255,0.92); }

  /* ── 2× DOUBLING ── */
  .dk-doubling {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 48px;
    align-items: center;
    background: #fff;
    border-radius: 18px;
    padding: 40px 44px;
    box-shadow: var(--dk-card-shadow);
    margin-top: 48px;
  }
  @media (max-width: 640px) {
    .dk-doubling { grid-template-columns: 1fr; gap: 20px; padding: 28px 22px; }
  }
  .dk-d-num {
    font-family: var(--dk-serif);
    font-size: 76px;
    color: var(--dk-blue);
    line-height: 0.85;
    letter-spacing: -0.03em;
    text-align: center;
    font-weight: 400;
  }
  .dk-d-num span { color: var(--dk-teal); }
  .dk-d-sub {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dk-text-light);
    text-align: center;
    margin-top: 12px;
  }
  .dk-doubling-copy h3 {
    font-family: var(--dk-serif);
    font-size: 24px;
    font-weight: 400;
    color: var(--dk-navy);
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  .dk-doubling-copy h3 .dk-accent { color: var(--dk-teal); }
  .dk-doubling-copy p {
    font-size: 15px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.7;
  }

  /* ── CONTENTS GRID ── */
  .dk-contents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-top: 44px;
  }
  .dk-content-card {
    background: #fff;
    border-radius: 14px;
    padding: 22px 20px;
    box-shadow: var(--dk-card-shadow);
    transition: transform 0.2s;
  }
  .dk-content-card:hover { transform: translateY(-3px); }
  .dk-cc-icon {
    width: 36px; height: 36px;
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 12px;
  }
  .dk-cc-icon svg { width: 16px; height: 16px; }
  .dk-content-card h4 { font-size: 15px; font-weight: 700; color: var(--dk-navy); margin-bottom: 6px; }
  .dk-content-card p  { font-size: 14px; color: var(--dk-text-mid); line-height: 1.6; font-weight: 400; }
  .dk-content-card.dk-featured-content {
    background: #e6f0fa;
    box-shadow: none;
    border: 1px solid rgba(74,116,208,0.25);
  }
  .dk-content-card.dk-featured-content h4 { color: var(--dk-navy); }
  .dk-content-card.dk-featured-content p  { color: var(--dk-text-mid); }

  /* ── CTA ── */
  .dk-cta-wrap {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .dk-cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    align-items: flex-start;
  }
  .dk-button-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .dk-btn-benevity, .dk-btn-donate {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 224px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    padding: 13px 24px;
    border-radius: 100px;
    text-decoration: none;
    transition: filter 0.2s, transform 0.15s, box-shadow 0.2s;
    white-space: nowrap;
    text-align: center;
    box-shadow: 0 4px 14px rgba(26,43,60,0.12);
  }
  .dk-btn-benevity { background: #2E9DF7; }
  .dk-btn-benevity:hover { filter: brightness(0.95); transform: translateY(-1px); }
  .dk-btn-donate { background: #4D9D93; }
  .dk-btn-donate:hover { filter: brightness(0.95); transform: translateY(-1px); }
  .dk-benevity-logo {
    position: relative;
    height: 36px;
    width: 144px;
  }
  @media (min-width: 640px) {
    .dk-benevity-logo { height: 40px; width: 160px; }
  }

  .dk-matching-note {
    margin-top: 18px;
    font-size: 14px;
    color: var(--dk-text-mid);
    font-weight: 400;
    line-height: 1.65;
  }
  .dk-matching-note b { color: var(--dk-navy); font-weight: 700; }

  /* ── ANIMATIONS ── */
  @keyframes dkFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .dk-hero-inner > * {
    animation: dkFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .dk-hero-inner > *:nth-child(1) { animation-delay: 0.05s; }
  @keyframes dkFadeInFallback {
    to { opacity: 1; transform: none; }
  }
  .dk-fade-in {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.65s ease, transform 0.65s ease;
    animation: dkFadeInFallback 0.4s ease 1.2s forwards;
  }
  .dk-fade-in.visible { opacity: 1; transform: none; animation: none; }
`;

const inlineScript = `
  (function() {
    function init() {
      var els = document.querySelectorAll('.dk-fade-in');
      if (!('IntersectionObserver' in window)) {
        els.forEach(function(el){ el.classList.add('visible'); });
        return;
      }
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      els.forEach(function(el){ obs.observe(el); });
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
`;

export default function DignityKitProgramPage() {
  return (
    <div className="dk-page">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO ── */}
      <section className="dk-hero">
        <div className="dk-hero-inner">
          <div>
            <div className="dk-badge-pill">
              <span className="dk-badge-dot" />
              Dignity Kit Program
            </div>
            <h1>
              Every Backpack Is <span className="dk-accent">a Lifeline</span>
            </h1>
            <p className="dk-hero-campaign">
              Join our campaign to distribute 500 backpacks through
              September&nbsp;30, 2026.
            </p>
            <p className="dk-hero-sub">
              Each backpack is filled with healthy snacks, hydration, and
              essential supplies for young people experiencing homelessness
              across Los Angeles.
            </p>
            <div className="dk-hero-stats">
              <div>
                <div className="dk-stat-num">500</div>
                <div className="dk-stat-label">Backpacks to Distribute</div>
              </div>
              <div>
                <div className="dk-stat-num">$25</div>
                <div className="dk-stat-label">Cost Per Kit</div>
              </div>
              <div>
                <div className="dk-stat-num">2×</div>
                <div className="dk-stat-label">Your Dollar, Doubled</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="dk-gradient-body">
        {/* ── IMPACT TIERS ── */}
        <section className="dk-section">
          <div className="dk-container">
            <div className="dk-section-label dk-fade-in">Your Impact</div>
            <h2 className="dk-section-h dk-fade-in">
              Choose How Many Lives You Reach
            </h2>
            <p className="dk-section-sub dk-fade-in">
              Every dollar has a direct, measurable outcome. Here&apos;s exactly
              what your gift delivers on the ground.
            </p>

            <div className="dk-impact-grid">
              <div className="dk-impact-card dk-fade-in">
                <span className="dk-impact-tag">1 Youth</span>
                <div className="dk-impact-amt">$25</div>
                <p className="dk-impact-desc">
                  1 fully stocked backpack with nutritious food, hydration, and
                  essential supplies.
                </p>
              </div>
              <div className="dk-impact-card dk-fade-in">
                <span className="dk-impact-tag">10 Youth</span>
                <div className="dk-impact-amt">$250</div>
                <p className="dk-impact-desc">
                  10 young people receive complete dignity kits with everything
                  they need.
                </p>
              </div>
              <div className="dk-impact-card dk-fade-in">
                <span className="dk-impact-tag">100 Youth</span>
                <div className="dk-impact-amt">$2,500</div>
                <p className="dk-impact-desc">
                  100 backpacks distributed to youth experiencing homelessness
                  across Los Angeles.
                </p>
              </div>
              <div className="dk-impact-card dk-featured dk-fade-in">
                <span className="dk-impact-tag">Full Program</span>
                <div className="dk-impact-amt">$12,500</div>
                <p className="dk-impact-desc">
                  Fully funds the entire program — 500 backpacks, 500 young
                  people, all across Los Angeles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="dk-section" style={{ paddingTop: 0 }}>
          <div className="dk-container">
            <div className="dk-section-label dk-fade-in">The Problem</div>
            <h2 className="dk-section-h dk-fade-in">
              Youth Homelessness Creates
              <br />
              Compounding Basic Needs
            </h2>
            <p className="dk-section-sub dk-fade-in">
              Access — not awareness — is the core issue. Young people experiencing
              homelessness face daily gaps in food, water, and essential supplies
              that affect their health, safety, and ability to move forward.
            </p>

            <div className="dk-stat-cards">
              <div className="dk-stat-card dk-fade-in">
                <div className="dk-stat-card-num dk-num-teal">1 in 5</div>
                <div className="dk-stat-card-heading">
                  Youth Lack Food Security
                </div>
                <p className="dk-stat-card-body">
                  Millions of young people lack reliable access to nutritious
                  food, creating cascading effects on health and stability.
                </p>
              </div>
              <div className="dk-stat-card dk-fade-in">
                <div className="dk-stat-card-num dk-num-blue">4,000+</div>
                <div className="dk-stat-card-heading">
                  Youth Facing Homelessness in LA
                </div>
                <p className="dk-stat-card-body">
                  Los Angeles has one of the highest concentrations of youth
                  homelessness in the country, with consistent unmet basic needs.
                </p>
              </div>
              <div className="dk-stat-card dk-fade-in">
                <div className="dk-stat-card-num dk-num-teal">$0</div>
                <div className="dk-stat-card-heading">
                  Consistent Access for Many
                </div>
                <p className="dk-stat-card-body">
                  Youth without housing often have no reliable source for food,
                  hygiene supplies, or daily essentials — even for a single day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="dk-section" style={{ paddingTop: 0 }}>
          <div className="dk-container">
            <div className="dk-section-label dk-fade-in">About the Program</div>
            <h2 className="dk-section-h dk-fade-in">
              500 Backpacks.
              <br className="dk-br-mobile" /> 500 Young People.
              <br />
              One Powerful Message.
            </h2>
            <p className="dk-section-sub dk-fade-in">
              Teen Health is assembling and distributing dignity kits to youth
              experiencing homelessness across Los Angeles — combining immediate
              nourishment with a lasting sense of care.
            </p>

            <div className="dk-two-col">
              <div className="dk-fade-in">
                <p className="dk-col-body">
                  Each backpack is filled with healthy snacks, hydration, and
                  essential supplies — everything needed to face the day with
                  more stability. These aren&apos;t generic care packages.
                  They&apos;re thoughtfully curated kits to meet real, immediate
                  needs.
                </p>
                <div className="dk-highlight-box">
                  Each backpack costs just <b>$25 to assemble</b> but delivers{" "}
                  <b>$50 in retail value</b> through donated and discounted
                  products — effectively <b>doubling every dollar you give</b>.
                </div>
                <p className="dk-col-body">
                  For youth without consistent access to basic essentials, a
                  dignity kit provides more than supplies. It delivers a message:
                  you matter, and someone sees you.
                </p>
              </div>
              <div className="dk-fade-in">
                <p className="dk-col-body">
                  This program is part of Teen Health&apos;s broader commitment to
                  meeting young people where they are — providing tangible,
                  immediate support that creates the stability needed to engage
                  with longer-term services and resources.
                </p>
                <div className="dk-highlight-box">
                  This program is eligible for{" "}
                  <b>corporate matching gifts</b>. It supports{" "}
                  <b>youth development</b>, <b>homelessness services</b>, and{" "}
                  <b>food security</b> initiatives.
                </div>
                <p className="dk-col-body">
                  Distribution is coordinated directly with partners across Los
                  Angeles to reach the youth who need it most, where they already
                  are.
                </p>
              </div>
            </div>

            <div className="dk-doubling dk-fade-in">
              <div>
                <div className="dk-d-num">
                  2<span>×</span>
                </div>
                <div className="dk-d-sub">your impact</div>
              </div>
              <div className="dk-doubling-copy">
                <h3>
                  Every dollar you give{" "}
                  <span className="dk-accent">goes twice as far</span>
                </h3>
                <p>
                  Through donated products and nonprofit partnerships, each $25
                  backpack delivers $50 in retail value. That means your
                  contribution immediately doubles in impact — reaching more young
                  people with more support than a standard dollar-for-dollar
                  donation could achieve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INSIDE ── */}
        <section className="dk-section" style={{ paddingTop: 0 }}>
          <div className="dk-container">
            <div className="dk-section-label dk-fade-in">
              What&apos;s Inside Each Kit
            </div>
            <h2 className="dk-section-h dk-fade-in">Built for Real Needs</h2>
            <p className="dk-section-sub dk-fade-in">
              Every backpack is thoughtfully packed with items chosen to address
              immediate physical needs and support overall wellbeing.
            </p>

            <div className="dk-contents-grid">
              <div className="dk-content-card dk-fade-in">
                <div
                  className="dk-cc-icon"
                  style={{ background: "var(--dk-teal-light)" }}
                >
                  <svg viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 2C6.5 2 4.5 4 4.5 6.5C4.5 9.5 9 13.5 9 13.5S13.5 9.5 13.5 6.5C13.5 4 11.5 2 9 2Z"
                      fill="#5a7ba8"
                    />
                    <circle cx="9" cy="6.5" r="1.8" fill="white" />
                  </svg>
                </div>
                <h4>Healthy snacks</h4>
                <p>
                  Nutritious, shelf-stable food items for immediate energy and
                  nourishment.
                </p>
              </div>

              <div className="dk-content-card dk-fade-in">
                <div
                  className="dk-cc-icon"
                  style={{ background: "var(--dk-blue-light)" }}
                >
                  <svg viewBox="0 0 18 18" fill="none">
                    <rect x="6" y="2" width="6" height="2.5" rx="1" fill="#5a7ba8" />
                    <path
                      d="M4.5 4.5h9L12 15.5H6L4.5 4.5Z"
                      fill="#5a7ba8"
                      opacity="0.75"
                    />
                  </svg>
                </div>
                <h4>Hydration</h4>
                <p>
                  Water and hydration essentials — a basic need that&apos;s often
                  hardest to access.
                </p>
              </div>

              <div className="dk-content-card dk-fade-in">
                <div
                  className="dk-cc-icon"
                  style={{ background: "var(--dk-orange-light)" }}
                >
                  <svg viewBox="0 0 18 18" fill="none">
                    <rect
                      x="3"
                      y="7.5"
                      width="12"
                      height="8"
                      rx="2"
                      fill="#e87820"
                      opacity="0.8"
                    />
                    <path
                      d="M6 7.5V6a3 3 0 016 0v1.5"
                      stroke="#e87820"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="9" cy="11.5" r="1.5" fill="white" opacity="0.85" />
                  </svg>
                </div>
                <h4>Personal care</h4>
                <p>Hygiene essentials that support dignity and daily wellbeing.</p>
              </div>

              <div className="dk-content-card dk-fade-in">
                <div
                  className="dk-cc-icon"
                  style={{ background: "var(--dk-teal-light)" }}
                >
                  <svg viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1.5l2.5 5.5H17L12.5 10l2 5.5L9 13l-5.5 2.5 2-5.5L1 7h5.5L9 1.5Z"
                      fill="#5a7ba8"
                    />
                  </svg>
                </div>
                <h4>Essential supplies</h4>
                <p>Practical items for safety, stability, and daily life on the go.</p>
              </div>

              <div className="dk-content-card dk-featured-content dk-fade-in">
                <div
                  className="dk-cc-icon"
                  style={{ background: "rgba(74,116,208,0.18)" }}
                >
                  <svg viewBox="0 0 18 18" fill="none">
                    <circle
                      cx="9"
                      cy="9"
                      r="7"
                      stroke="#4a74d0"
                      strokeWidth={1.5}
                    />
                    <path
                      d="M6 9l2.5 2.5 3.5-3.5"
                      stroke="#4a74d0"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>$50 retail value</h4>
                <p>
                  Sourced through donations and partnerships to maximize every
                  dollar given.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="dk-section"
          style={{ paddingTop: 0, paddingBottom: 112 }}
        >
          <div className="dk-container">
            <div className="dk-section-label dk-fade-in">Get Involved</div>
            <div className="dk-cta-wrap">
              <div className="dk-fade-in">
                <h2 className="dk-section-h">Be a Dignity Kit Sponsor</h2>
                <p className="dk-section-sub">
                  This program is funded entirely by donors and sponsors who
                  believe every young person deserves to be seen, nourished, and
                  supported. Join us in reaching 500 youth across Los Angeles.
                </p>
                <p className="dk-matching-note">
                  Eligible for <b>corporate matching gifts</b> · Supports youth
                  development, homelessness services &amp; food security
                </p>
              </div>
              <div className="dk-cta-buttons dk-fade-in">
                <div className="dk-button-col">
                  <a
                    href="https://mygoodness.benevity.org/community/cause/840-874628884/project/5X9ZLPQV7M"
                    className="dk-btn-benevity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sponsor on Benevity
                  </a>
                  <div className="dk-benevity-logo">
                    <Image
                      src="/images/shared/benevity-logo.png"
                      alt="Benevity"
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>
                </div>
                <div className="dk-button-col">
                  <a href="/donate" className="dk-btn-donate">
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
    </div>
  );
}
