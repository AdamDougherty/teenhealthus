export const metadata = {
  title: "The California Regenerative Youth Land Initiative",
};

const pageStyles = `
  .li-page {
    --cream:      #faf7f2;
    --cream-dark: #f4f0e8;
    --li-ink:     #231F20;
    --ink-mid:    rgba(35,31,32,0.85);
    --ink-light:  rgba(35,31,32,0.72);
    --gold:       #c8a86a;
    --gold-light: #ddc48e;
    --rust:       #c87858;
    --sage:       #8ab898;
    --sage-deep:  #6a9e7a;
    --sage-pale:  rgba(138,184,152,0.14);
    --soil:       #8a7868;
    --li-white:   #ffffff;
    --card-shadow: 0 2px 20px rgba(26,23,16,0.05);
    --li-serif: 'Playfair Display', Georgia, serif;
    --li-sans: 'Inter', system-ui, sans-serif;
    --li-border: rgba(26,23,16,0.08);

    font-family: var(--li-sans);
    color: var(--li-ink);
    background: var(--cream);
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .li-hero {
    position: relative;
    overflow: hidden;
    background: var(--cream);
    padding: 0;
  }
  .li-hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 75% 40%, rgba(106,148,112,0.18) 0%, transparent 65%),
      radial-gradient(ellipse 40% 60% at 20% 70%, rgba(184,146,74,0.10) 0%, transparent 60%);
    pointer-events: none;
  }
  .li-hero-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235c4a34' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  .li-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 90px 48px 80px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 820px) {
    .li-hero-inner { grid-template-columns: 1fr; gap: 48px; padding: 60px 20px; }
  }
  .li-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--sage-deep);
    margin-bottom: 24px;
  }
  .li-hero-eyebrow::before {
    content: '';
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--sage-deep);
    flex-shrink: 0;
  }
  .li-hero h1 {
    font-family: var(--li-serif);
    font-size: clamp(28px, 3.6vw, 46px);
    font-weight: 400;
    color: var(--li-ink);
    line-height: 1.12;
    letter-spacing: -0.01em;
    margin-bottom: 28px;
  }
  .li-hero h1 em {
    font-style: italic;
    color: var(--sage-deep);
  }
  .li-hero-sub {
    font-size: 17px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 40px;
    max-width: 520px;
  }
  .li-hero-sub strong { color: var(--li-ink); font-weight: 500; }
  .li-hero-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
  }
  .li-btn-hero-primary {
    background: var(--rust);
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 14px 32px;
    border-radius: 100px;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(192,90,42,0.30);
  }
  .li-btn-hero-primary:hover { background: #a04820; transform: translateY(-2px); box-shadow: 0 6px 28px rgba(192,90,42,0.35); }
  .li-btn-hero-outline {
    background: transparent;
    color: var(--li-ink);
    font-size: 14px;
    font-weight: 400;
    padding: 13px 28px;
    border-radius: 100px;
    border: 1.5px solid var(--li-border);
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s;
  }
  .li-btn-hero-outline:hover { border-color: var(--li-ink); background: rgba(26,23,16,0.04); }

  .li-hero-card {
    background: var(--li-white);
    border-radius: 20px;
    border: 1px solid var(--li-border);
    box-shadow: var(--card-shadow);
    overflow: hidden;
  }
  .li-hero-card-header {
    background: var(--sage-deep);
    padding: 22px 28px;
  }
  .li-hero-card-title {
    font-family: var(--li-serif);
    font-size: 20px;
    font-weight: 400;
    color: white;
    letter-spacing: 0.01em;
    margin-bottom: 4px;
  }
  .li-hero-card-sub {
    font-size: 12px;
    color: rgba(255,255,255,0.65);
    font-weight: 300;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .li-hero-progress {
    padding: 24px 28px 20px;
    border-bottom: 1px solid var(--li-border);
  }
  .li-progress-label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
  }
  .li-progress-raised {
    font-family: var(--li-serif);
    font-size: 26px;
    color: var(--li-ink);
    font-weight: 400;
  }
  .li-progress-goal {
    font-size: 13px;
    color: var(--ink-light);
    font-weight: 500;
  }
  .li-progress-track {
    height: 7px;
    background: var(--cream-dark);
    border-radius: 100px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .li-progress-fill {
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--sage) 0%, var(--sage-deep) 100%);
    border-radius: 100px;
    transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .li-progress-meta {
    display: flex;
    justify-content: space-between;
    font-size: 12.5px;
    color: var(--ink-light);
    font-weight: 500;
  }
  .li-progress-meta strong { color: var(--li-ink); font-weight: 500; }
  .li-hero-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .li-hero-stat {
    padding: 18px 24px;
    border-right: 1px solid var(--li-border);
    border-bottom: 1px solid var(--li-border);
  }
  .li-hero-stat:nth-child(even) { border-right: none; }
  .li-hero-stat:nth-last-child(-n+2) { border-bottom: none; }
  .li-hero-stat-value {
    font-family: var(--li-serif);
    font-size: 22px;
    font-weight: 400;
    color: var(--li-ink);
    margin-bottom: 2px;
  }
  .li-hero-stat-label {
    font-size: 12px;
    color: var(--ink-light);
    font-weight: 500;
    letter-spacing: 0.04em;
  }

  /* ── SHARED SECTION STYLES ── */
  .li-section { padding: 88px 0; }
  .li-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 48px;
  }
  @media (max-width: 600px) { .li-container { padding: 0 20px; } .li-section { padding: 64px 0; } }
  .li-section-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--sage-deep);
    margin-bottom: 16px;
    justify-content: center;
  }
  .li-section-eyebrow.left { justify-content: flex-start; }
  .li-section-eyebrow::before {
    content: '';
    display: block;
    width: 20px;
    height: 1.5px;
    background: var(--sage-deep);
  }
  .li-sh {
    font-family: var(--li-serif);
    font-size: clamp(26px, 3vw, 36px);
    font-weight: 400;
    color: var(--li-ink);
    line-height: 1.18;
    letter-spacing: -0.01em;
    text-align: center;
    margin-bottom: 16px;
  }
  .li-sh em { font-style: italic; color: var(--sage-deep); }
  .li-section-lead {
    font-size: 17px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.7;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
  }

  /* ── ABOUT ── */
  .li-section-about { background: var(--li-white); }
  .li-about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    margin-top: 60px;
    align-items: start;
  }
  @media (max-width: 760px) { .li-about-grid { grid-template-columns: 1fr; gap: 40px; } }
  .li-col-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--sage-deep);
    margin-bottom: 16px;
  }
  .li-col-tag::before { content: ''; display: block; width: 14px; height: 1.5px; background: var(--sage-deep); }
  .li-col-body {
    font-size: 16px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.75;
    margin-bottom: 20px;
  }
  .li-callout {
    border-radius: 12px;
    padding: 20px 22px;
    font-size: 15px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.7;
    margin: 22px 0;
  }
  .li-callout strong { color: var(--li-ink); font-weight: 500; }
  .li-callout-green { background: rgba(138,184,152,0.16); border-left: 3px solid var(--sage); }
  .li-callout-blue  { background: rgba(120,160,210,0.12); border-left: 3px solid #90b0d8; }

  /* ── IMPACT ── */
  .li-section-impact { background: var(--cream); }
  .li-impact-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 52px;
  }
  @media (max-width: 700px) { .li-impact-cols { grid-template-columns: 1fr; } }
  .li-impact-card {
    background: var(--li-white);
    border-radius: 16px;
    padding: 30px 26px;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--li-border);
    position: relative;
    overflow: hidden;
  }
  .li-impact-num {
    font-family: var(--li-serif);
    font-size: 52px;
    font-weight: 300;
    color: var(--sage-deep);
    line-height: 1;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }
  .li-impact-label {
    font-size: 16px;
    font-weight: 700;
    color: var(--li-ink);
    margin-bottom: 8px;
  }
  .li-impact-desc {
    font-size: 14.5px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.65;
  }

  /* ── REVENUE STREAMS ── */
  .li-section-streams { background: var(--li-white); }
  .li-streams-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 52px;
  }
  @media (max-width: 760px) { .li-streams-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 460px) { .li-streams-grid { grid-template-columns: 1fr; } }
  .li-stream-card {
    background: var(--li-white);
    border-radius: 14px;
    border: 1px solid var(--li-border);
    box-shadow: var(--card-shadow);
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .li-stream-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(26,23,16,0.10); }
  .li-stream-head {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .li-stream-name { font-size: 15px; font-weight: 600; color: var(--li-ink); }
  .li-stream-body { padding: 16px 20px 20px; }
  .li-stream-tag {
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .li-stream-desc {
    font-size: 14px;
    color: var(--ink-mid);
    line-height: 1.62;
    font-weight: 400;
  }
  .li-s-veg  { background: #e4f0e0; } .li-c-veg { color: #5a8860; }
  .li-s-orch { background: #e8f2d4; } .li-c-orch { color: #6a8040; }
  .li-s-csa  { background: #f2ead8; } .li-c-csa  { color: #9a7848; }
  .li-s-agri { background: #dceee8; } .li-c-agri { color: #4a8868; }
  .li-s-val  { background: #f4e4d4; } .li-c-val  { color: #b06840; }
  .li-s-live { background: #ede0d4; } .li-c-live { color: #a06050; }

  /* ── WHY IT WORKS ── */
  .li-section-why { background: linear-gradient(to right, #eff4f6 0%, #f4f6f4 40%, #f8f4f0 70%, #fdfaf6 100%); }
  .li-why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
    margin-top: 52px;
  }
  @media (max-width: 700px) { .li-why-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 480px) { .li-why-grid { grid-template-columns: 1fr; } }
  .li-why-card {
    background: var(--li-white);
    border-radius: 16px;
    padding: 28px 24px;
    box-shadow: 0 2px 16px rgba(26,23,16,0.08);
    border: 1px solid rgba(26,23,16,0.06);
  }
  .li-why-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--li-ink);
    margin-bottom: 10px;
    line-height: 1.3;
  }
  .li-why-desc {
    font-size: 14.5px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.65;
  }

  /* ── ASK ── */
  .li-section-ask { background: #ffffff; box-shadow: inset 0 1px 0 rgba(26,23,16,0.06); }
  .li-ask-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    margin-bottom: 56px;
  }
  @media (max-width: 760px) { .li-ask-header { grid-template-columns: 1fr; gap: 24px; margin-bottom: 40px; } }
  .li-ask-h {
    font-family: var(--li-serif);
    font-size: clamp(26px, 3.2vw, 42px);
    font-weight: 400;
    color: var(--li-ink);
    line-height: 1.12;
    letter-spacing: -0.01em;
  }
  .li-ask-h em { font-style: italic; color: var(--sage-deep); }
  .li-ask-body {
    font-size: 17px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.7;
  }
  .li-ask-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 760px) { .li-ask-cards { grid-template-columns: 1fr; } }
  .li-ask-card {
    background: var(--li-white);
    border: 1px solid var(--li-border);
    border-radius: 18px;
    padding: 32px 28px 36px;
    box-shadow: var(--card-shadow);
    position: relative;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .li-ask-card:hover { transform: translateY(-4px); box-shadow: 0 10px 36px rgba(26,23,16,0.09); }
  .li-ask-num {
    position: absolute;
    top: 16px;
    right: 20px;
    font-family: var(--li-serif);
    font-size: 68px;
    font-weight: 300;
    color: var(--cream-dark);
    line-height: 1;
    letter-spacing: -0.03em;
    pointer-events: none;
    user-select: none;
  }
  .li-ask-card:nth-child(1) .li-ask-num { color: rgba(138,184,152,0.28); }
  .li-ask-card:nth-child(2) .li-ask-num { color: rgba(200,168,106,0.28); }
  .li-ask-card:nth-child(3) .li-ask-num { color: rgba(200,120,88,0.28); }
  .li-ask-card-top {
    height: 4px;
    border-radius: 100px;
    margin-bottom: 28px;
    width: 40px;
  }
  .li-ask-card:nth-child(1) .li-ask-card-top { background: var(--sage); }
  .li-ask-card:nth-child(2) .li-ask-card-top { background: var(--gold); }
  .li-ask-card:nth-child(3) .li-ask-card-top { background: var(--rust); }
  .li-ask-card-title {
    font-size: 19px;
    font-weight: 700;
    color: var(--li-ink);
    margin-bottom: 12px;
    line-height: 1.25;
    position: relative;
  }
  .li-ask-card-desc {
    font-size: 15px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.65;
    position: relative;
  }

  /* ── SPONSOR ── */
  .li-section-sponsor { background: #ffffff; position: relative; overflow: hidden; }
  .li-sponsor-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 52px;
  }
  @media (max-width: 760px) { .li-sponsor-grid { grid-template-columns: 1fr; } }
  .li-sponsor-card {
    background: #faf6f0;
    border: 1px solid rgba(26,23,16,0.07);
    border-radius: 18px;
    padding: 36px 28px;
    position: relative;
    overflow: hidden;
    transition: box-shadow 0.2s, transform 0.2s;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 16px rgba(26,23,16,0.05);
  }
  .li-sponsor-card:hover { box-shadow: 0 8px 32px rgba(26,23,16,0.09); transform: translateY(-4px); }
  .li-sponsor-card.featured {
    background: #f4f8f5;
    border-color: rgba(106,158,122,0.22);
  }
  .li-sponsor-badge {
    display: inline-block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 100px;
    margin-bottom: 20px;
    width: fit-content;
  }
  .li-badge-community { background: rgba(200,168,106,0.15); color: var(--gold); }
  .li-badge-program   { background: rgba(106,158,122,0.15); color: var(--sage-deep); }
  .li-badge-founding  { background: rgba(200,120,88,0.13);  color: var(--rust); }
  .li-sponsor-tier {
    font-family: var(--li-serif);
    font-size: 24px;
    font-weight: 400;
    color: var(--li-ink);
    margin-bottom: 6px;
  }
  .li-sponsor-range {
    font-size: 14px;
    font-weight: 600;
    color: var(--ink-light);
    margin-bottom: 18px;
    letter-spacing: 0.02em;
  }
  .li-sponsor-perks {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0 0 28px;
    padding: 0;
  }
  .li-sponsor-perks li {
    font-size: 14.5px;
    color: var(--ink-mid);
    font-weight: 400;
    display: flex;
    align-items: flex-start;
    gap: 9px;
    line-height: 1.5;
  }
  .li-sponsor-perks li::before {
    content: '✓';
    color: var(--sage-deep);
    font-weight: 600;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .li-sponsor-cta {
    display: inline-block;
    text-align: center;
    padding: 13px 26px;
    border-radius: 100px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    border: 1.5px solid var(--li-border);
    color: var(--li-ink);
    background: transparent;
  }
  .li-sponsor-cta:hover { background: var(--cream-dark); border-color: var(--ink-light); color: var(--li-ink); }
  .li-sponsor-cta.primary { background: var(--sage-deep); border-color: var(--sage-deep); color: white; }
  .li-sponsor-cta.primary:hover { background: #588866; transform: translateY(-1px); }
  .li-sponsor-note {
    text-align: center;
    margin-top: 40px;
    font-size: 14.5px;
    color: var(--ink-mid);
    font-weight: 400;
    line-height: 1.7;
  }
  .li-sponsor-note a { color: var(--sage-deep); text-decoration: underline; text-underline-offset: 3px; }
  .li-sponsor-note a:hover { color: var(--li-ink); }

  /* ── ANIMATIONS ── */
  @keyframes liFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .li-hero-inner > * {
    animation: liFadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .li-hero-inner > *:nth-child(1) { animation-delay: 0.05s; }
  .li-hero-inner > *:nth-child(2) { animation-delay: 0.15s; }
  .li-fade-in {
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .li-fade-in.visible { opacity: 1; transform: none; }
`;

const inlineScript = `
  (function() {
    function init() {
      var fill = document.getElementById('liProgressFill');
      if (fill) { setTimeout(function(){ fill.style.width = '18%'; }, 600); }
      var els = document.querySelectorAll('.li-fade-in');
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

export default function LandInitiativePage() {
  return (
    <div className="li-page">
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      {/* ── HERO ── */}
      <section className="li-hero">
        <div className="li-hero-bg" />
        <div className="li-hero-inner">
          <div>
            <div className="li-hero-eyebrow">Signature Campaign — Fundraising Now</div>
            <h1>
              The California<br />
              <em>Regenerative</em><br />
              Youth Land Initiative
            </h1>
            <p className="li-hero-sub">
              We&apos;re raising funds to acquire working farm properties in Southern
              California where unhoused young adults ages 18–29 can{" "}
              <strong>
                live on-site, earn wages, build real skills, and prepare for
                permanent housing
              </strong>{" "}
              — at their own pace, with real support behind them.
            </p>
            <div className="li-hero-actions">
              <a
                href="https://mygoodness.benevity.org/community/cause/840-874628884"
                className="li-btn-hero-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate on Benevity
              </a>
              <a href="mailto:info@teenhealth.us" className="li-btn-hero-outline">
                Become a Sponsor
              </a>
            </div>
          </div>
          <div>
            <div className="li-hero-card">
              <div className="li-hero-card-header">
                <div className="li-hero-card-title">Land Initiative Campaign</div>
                <div className="li-hero-card-sub">
                  Fundraising in progress · Teen Health
                </div>
              </div>
              <div className="li-hero-progress">
                <div className="li-progress-label">
                  <span className="li-progress-raised">Help us get there</span>
                  <span className="li-progress-goal">Land acquisition goal</span>
                </div>
                <div className="li-progress-track">
                  <div className="li-progress-fill" id="liProgressFill" />
                </div>
                <div className="li-progress-meta">
                  <span>Every gift moves us closer to the land</span>
                  <span>Donate today</span>
                </div>
              </div>
              <div className="li-hero-stats">
                <div className="li-hero-stat">
                  <div className="li-hero-stat-value">100</div>
                  <div className="li-hero-stat-label">Acres planned</div>
                </div>
                <div className="li-hero-stat">
                  <div className="li-hero-stat-value">18–28</div>
                  <div className="li-hero-stat-label">Ages served</div>
                </div>
                <div className="li-hero-stat">
                  <div className="li-hero-stat-value">Year 5</div>
                  <div className="li-hero-stat-label">Self-sustaining target</div>
                </div>
                <div className="li-hero-stat">
                  <div className="li-hero-stat-value">6</div>
                  <div className="li-hero-stat-label">Revenue streams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="li-section li-section-about">
        <div className="li-container">
          <div className="li-section-eyebrow li-fade-in">The Vision</div>
          <h2 className="li-sh li-fade-in">
            Not a shelter. <em>A working farm.</em>
          </h2>
          <p className="li-section-lead li-fade-in">
            A self-sustaining farm ecosystem that creates a real pathway for
            unhoused and at-risk youth — from survival to stability to purpose.
          </p>

          <div className="li-about-grid">
            <div className="li-fade-in">
              <div className="li-col-tag">The Problem</div>
              <p className="li-col-body">
                Youth experiencing homelessness need more than a bed — they need
                structure, skills, income, and community. Housing instability among
                ages 18–29 is frequently cyclical. Transitional shelters address
                the symptom, not the root cause.
              </p>
              <div className="li-callout li-callout-green">
                Land provides something shelters cannot:{" "}
                <strong>a role, a rhythm, and a reason to stay.</strong> Existing
                programs address shelter but not the root causes of instability.
              </div>
            </div>
            <div className="li-fade-in">
              <div className="li-col-tag">The Solution</div>
              <p className="li-col-body">
                A regenerative working farm where young people live on-site, earn
                wages, and build real-world skills. Residents are not waiting to be
                placed — they are{" "}
                <strong style={{ color: "var(--li-ink)", fontWeight: 500 }}>
                  employees building a track record
                </strong>
                : wages, skills, references, and savings that make permanent
                housing a realistic next step.
              </p>
              <div className="li-callout li-callout-blue">
                The farm is designed as a{" "}
                <strong>self-sustaining enterprise</strong> — physical production,
                value-added processing, and agritourism reinforce one another. By
                Year 5, six revenue streams cover operational costs, reducing
                philanthropic dependency over time.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT ── */}
      <section className="li-section li-section-impact">
        <div className="li-container">
          <div className="li-section-eyebrow li-fade-in">Why It Matters</div>
          <h2 className="li-sh li-fade-in">
            Impact at every <em>level</em>
          </h2>
          <p className="li-section-lead li-fade-in">
            This model creates ripple effects — for the young people it serves,
            for the surrounding community, and for the long-term health of the
            organizations behind it.
          </p>
          <div className="li-impact-cols" style={{ marginTop: 48 }}>
            <div
              className="li-impact-card li-fade-in"
              style={{ borderTop: "3px solid var(--sage-deep)" }}
            >
              <div
                className="li-impact-num"
                style={{ fontSize: 32, marginBottom: 16 }}
              >
                🌿
              </div>
              <div className="li-impact-label">Youth Impact</div>
              <div
                className="li-impact-desc"
                style={{ textAlign: "left", marginTop: 14 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span>✓ &nbsp;Job readiness &amp; employability</span>
                  <span>✓ &nbsp;Confidence and self-worth</span>
                  <span>✓ &nbsp;Stability and independence</span>
                  <span>✓ &nbsp;Trauma healing and growth</span>
                </div>
              </div>
            </div>
            <div
              className="li-impact-card li-fade-in"
              style={{ borderTop: "3px solid var(--rust)" }}
            >
              <div
                className="li-impact-num"
                style={{ fontSize: 32, marginBottom: 16, color: "var(--rust)" }}
              >
                🏘️
              </div>
              <div className="li-impact-label">Community Impact</div>
              <div
                className="li-impact-desc"
                style={{ textAlign: "left", marginTop: 14 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span>✓ &nbsp;Increased access to healthy food</span>
                  <span>✓ &nbsp;Community engagement &amp; education</span>
                  <span>✓ &nbsp;Local economic development</span>
                  <span>✓ &nbsp;Stronger support networks</span>
                </div>
              </div>
            </div>
            <div
              className="li-impact-card li-fade-in"
              style={{ borderTop: "3px solid var(--gold)" }}
            >
              <div
                className="li-impact-num"
                style={{ fontSize: 32, marginBottom: 16, color: "var(--gold)" }}
              >
                📈
              </div>
              <div className="li-impact-label">Organizational Impact</div>
              <div
                className="li-impact-desc"
                style={{ textAlign: "left", marginTop: 14 }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <span>✓ &nbsp;Reduced reliance on donations</span>
                  <span>✓ &nbsp;Long-term financial sustainability</span>
                  <span>✓ &nbsp;Replicable program model</span>
                  <span>✓ &nbsp;Multi-org collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATION ── */}
      <section className="li-section" style={{ background: "var(--li-white)" }}>
        <div className="li-container">
          <div className="li-section-eyebrow li-fade-in">Why This Works</div>
          <h2 className="li-sh li-fade-in">
            Each pillar is <em>proven.</em>
            <br />
            The integration is the innovation.
          </h2>
          <p className="li-section-lead li-fade-in">
            Each element is individually validated. The breakthrough is bringing
            them together into one integrated, economically self-sustaining
            enterprise.
          </p>

          <div
            className="li-why-grid"
            style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 48 }}
          >
            <div
              className="li-why-card li-fade-in"
              style={{
                borderTop: "3px solid var(--sage-deep)",
                background: "rgba(138,184,152,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--sage-deep)",
                  marginBottom: 12,
                }}
              >
                Proven
              </div>
              <div className="li-why-title">
                Workforce development works for trauma-affected youth.
              </div>
              <p className="li-why-desc">
                Structured employment, skill-building, and mentorship create
                durable outcomes for young people who have experienced
                homelessness and instability.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{
                borderTop: "3px solid var(--gold)",
                background: "rgba(200,168,106,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 12,
                }}
              >
                Proven
              </div>
              <div className="li-why-title">
                Regenerative agriculture builds lasting economic &amp; ecological
                returns.
              </div>
              <p className="li-why-desc">
                Diversified farms with regenerative practices generate stable,
                multi-channel revenue while improving soil health and land value
                over time.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{
                borderTop: "3px solid var(--rust)",
                background: "rgba(200,120,88,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--rust)",
                  marginBottom: 12,
                }}
              >
                Growing
              </div>
              <div className="li-why-title">
                Agritourism &amp; local food demand are expanding rapidly.
              </div>
              <p className="li-why-desc">
                Consumer appetite for farm experiences, CSA subscriptions, and
                locally produced food continues to grow — creating a strong market
                for what this farm will produce.
              </p>
            </div>
          </div>

          <div
            className="li-callout li-callout-green li-fade-in"
            style={{
              maxWidth: 780,
              margin: "36px auto 0",
              textAlign: "center",
              fontSize: 16,
              lineHeight: 1.75,
              padding: "28px 32px",
            }}
          >
            The innovation is integrating all three into one self-sustaining
            ecosystem — where{" "}
            <strong>youth, farm, food, nature, healing, and revenue</strong> each
            strengthen the others.
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section
        className="li-section"
        style={{
          background:
            "linear-gradient(to right, #eff4f6 0%, #f4f6f4 40%, #f8f4f0 70%, #fdfaf6 100%)",
        }}
      >
        <div className="li-container">
          <div className="li-section-eyebrow li-fade-in">Partners in This Work</div>
          <h2 className="li-sh li-fade-in">
            Three organizations. <em>One mission.</em>
          </h2>
          <p className="li-section-lead li-fade-in">
            A coalition of proven operators, each contributing the discipline
            required to make the whole greater than the sum of its parts.
          </p>

          <div className="li-impact-cols" style={{ marginTop: 48 }}>
            <div className="li-impact-card li-fade-in" style={{ textAlign: "left" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--sage-deep)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14,
                  marginBottom: 16,
                  flexShrink: 0,
                }}
              >
                TH
              </div>
              <div className="li-impact-label">Teen Health</div>
              <div className="li-impact-desc" style={{ marginTop: 8 }}>
                Regenerative Farm &amp; Revenue Engine — leading land acquisition,
                farm operations, and the six-stream revenue model that makes the
                program self-sustaining.
              </div>
            </div>
            <div className="li-impact-card li-fade-in" style={{ textAlign: "left" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--rust)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14,
                  marginBottom: 16,
                  flexShrink: 0,
                }}
              >
                SH
              </div>
              <div className="li-impact-label">Safe Harbor Solutions</div>
              <div className="li-impact-desc" style={{ marginTop: 8 }}>
                Workforce Development &amp; Life Pathways — providing case
                management, employment support, and the structured programming
                that moves residents toward permanent housing.
              </div>
            </div>
            <div className="li-impact-card li-fade-in" style={{ textAlign: "left" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 14,
                  marginBottom: 16,
                  flexShrink: 0,
                }}
              >
                OC
              </div>
              <div className="li-impact-label">Outside the City</div>
              <div className="li-impact-desc" style={{ marginTop: 8 }}>
                Nature-Based Healing &amp; Youth Development — delivering
                therapeutic programming that uses the land itself as a tool for
                trauma recovery and personal growth.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIX STREAMS ── */}
      <section className="li-section li-section-streams">
        <div className="li-container">
          <div className="li-section-eyebrow li-fade-in">Revenue Architecture</div>
          <h2 className="li-sh li-fade-in">
            Six interconnected <em>revenue streams</em>
          </h2>
          <p className="li-section-lead li-fade-in">
            The farm is diversified by design. Each stream contributes to the
            whole while protecting the model against single-source risk.
          </p>

          <div className="li-streams-grid">
            <div className="li-stream-card li-fade-in">
              <div className="li-stream-head li-s-veg">
                <span className="li-stream-name">Diversified Vegetables</span>
              </div>
              <div className="li-stream-body">
                <div className="li-stream-tag li-c-veg">Largest Revenue Driver</div>
                <p className="li-stream-desc">
                  35 acres of intensive vegetable production — leafy greens,
                  tomatoes, peppers, herbs — sold across CSA, farm stand,
                  restaurant, and wholesale channels.
                </p>
              </div>
            </div>
            <div className="li-stream-card li-fade-in">
              <div className="li-stream-head li-s-orch">
                <span className="li-stream-name">Mixed Orchards</span>
              </div>
              <div className="li-stream-body">
                <div className="li-stream-tag li-c-orch">Perennial Production</div>
                <p className="li-stream-desc">
                  15 acres of avocados, citrus, and stone fruit providing reliable
                  annual yields with strong per-pound realization through
                  diversified channels.
                </p>
              </div>
            </div>
            <div className="li-stream-card li-fade-in">
              <div className="li-stream-head li-s-csa">
                <span className="li-stream-name">CSA Subscriptions</span>
              </div>
              <div className="li-stream-body">
                <div className="li-stream-tag li-c-csa">Guaranteed Revenue Floor</div>
                <p className="li-stream-desc">
                  Seasonal subscriptions from community members provide a
                  predictable, high-realization revenue base — while building a
                  network of local advocates.
                </p>
              </div>
            </div>
            <div className="li-stream-card li-fade-in">
              <div className="li-stream-head li-s-agri">
                <span className="li-stream-name">Agritourism</span>
              </div>
              <div className="li-stream-body">
                <div className="li-stream-tag li-c-agri">Premium Experiential</div>
                <p className="li-stream-desc">
                  Corporate events, farm dinners, educational workshops, and cabin
                  lodging leverage the beauty of the land for high-margin
                  experiential revenue.
                </p>
              </div>
            </div>
            <div className="li-stream-card li-fade-in">
              <div className="li-stream-head li-s-val">
                <span className="li-stream-name">Value-Added Products</span>
              </div>
              <div className="li-stream-body">
                <div className="li-stream-tag li-c-val">Shelf-Stable Margin</div>
                <p className="li-stream-desc">
                  Raw agricultural surplus is converted into premium olive oil,
                  avocado oil, and honey — turning perishable excess into
                  year-round, high-margin inventory.
                </p>
              </div>
            </div>
            <div className="li-stream-card li-fade-in">
              <div className="li-stream-head li-s-live">
                <span className="li-stream-name">Livestock</span>
              </div>
              <div className="li-stream-body">
                <div className="li-stream-tag li-c-live">Ecological Engine</div>
                <p className="li-stream-desc">
                  Rotational grazing drives soil fertility for the entire
                  operation while generating revenue from poultry, eggs, lamb, and
                  beef — low-margin, high ecological impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IT WORKS ── */}
      <section className="li-section li-section-why">
        <div className="li-container">
          <div className="li-section-eyebrow li-fade-in">The Difference</div>
          <h2 className="li-sh li-fade-in">
            Why this model <em>works</em>
          </h2>
          <p className="li-section-lead li-fade-in">
            Three principles make the Regenerative Youth Land Initiative distinct
            from traditional transitional housing programs.
          </p>

          <div className="li-why-grid">
            <div
              className="li-why-card li-fade-in"
              style={{ borderTop: "3px solid var(--sage-deep)" }}
            >
              <div className="li-why-title">Dignity through work, not charity</div>
              <p className="li-why-desc">
                Residents are employees and contributors — earning wages,
                developing skills, and building a work history. The farm provides
                structure, purpose, and a role that shelter programs cannot
                replicate.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{ borderTop: "3px solid var(--gold)" }}
            >
              <div className="li-why-title">Self-sustaining by design</div>
              <p className="li-why-desc">
                The diversified revenue model is engineered to reduce philanthropic
                dependency over time. By Year 5, six interconnected streams
                generate a run-rate that covers operational costs and program
                delivery.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{ borderTop: "3px solid var(--rust)" }}
            >
              <div className="li-why-title">A real path to permanence</div>
              <p className="li-why-desc">
                On-site living, consistent income, and structured support combine
                to create what no shelter can offer: time. Residents build
                savings, references, and readiness for permanent housing — with
                accountability built in.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{ borderTop: "3px solid #90b0d8" }}
            >
              <div className="li-why-title">Community embedded</div>
              <p className="li-why-desc">
                CSA memberships, farm dinners, and educational workshops connect
                the surrounding community directly to the mission — creating
                advocates, customers, and neighbors with a stake in the
                program&apos;s success.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{ borderTop: "3px solid #b494d2" }}
            >
              <div className="li-why-title">Rigorously modeled</div>
              <p className="li-why-desc">
                Every revenue stream is benchmarked against real agricultural
                data, conservative yield assumptions, and diversified channel
                pricing. The financial model is built from the ground up — not
                optimistic projections.
              </p>
            </div>
            <div
              className="li-why-card li-fade-in"
              style={{ borderTop: "3px solid var(--sage-deep)" }}
            >
              <div className="li-why-title">Replicable at scale</div>
              <p className="li-why-desc">
                The 100-acre blueprint is designed as a replicable model. Southern
                California is the first site — but the framework is transferable
                to other regions and properties as the initiative grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE ASK ── */}
      <section className="li-section li-section-ask">
        <div className="li-container">
          <div className="li-ask-header">
            <div>
              <div className="li-section-eyebrow left li-fade-in">The Ask</div>
              <h2 className="li-ask-h li-fade-in">
                We are <em>seeking.</em>
              </h2>
            </div>
            <div>
              <p className="li-ask-body li-fade-in">
                The model is ready. The partners are aligned. We are now building
                the coalition of landowners, funders, and strategic partners who
                will bring this ecosystem to life.
              </p>
            </div>
          </div>

          <div className="li-ask-cards">
            <div className="li-ask-card li-fade-in">
              <div className="li-ask-num">01</div>
              <div className="li-ask-card-top" />
              <div className="li-ask-card-title">
                Land Partnership or Acquisition
              </div>
              <p className="li-ask-card-desc">
                A site where the full ecosystem model can be built, farmed, and
                operated at scale — two working ranch properties in Southern
                California.
              </p>
            </div>
            <div className="li-ask-card li-fade-in">
              <div className="li-ask-num">02</div>
              <div className="li-ask-card-top" />
              <div className="li-ask-card-title">Charitable Donations</div>
              <p className="li-ask-card-desc">
                As a 501(c)(3) nonprofit, Teen Health accepts tax-deductible
                donations to fund land acquisition, infrastructure, and early
                youth workforce programming. Every gift directly builds this
                model.
              </p>
            </div>
            <div className="li-ask-card li-fade-in">
              <div className="li-ask-num">03</div>
              <div className="li-ask-card-top" />
              <div className="li-ask-card-title">Strategic Partners</div>
              <p className="li-ask-card-desc">
                Housing organizations, workforce agencies, healthcare providers,
                and youth-serving organizations who can deepen the impact of the
                program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSOR TIERS ── */}
      <section className="li-section li-section-sponsor">
        <div className="li-container" style={{ position: "relative", zIndex: 1 }}>
          <div className="li-section-eyebrow li-fade-in">
            Corporate &amp; Institutional Partners
          </div>
          <h2 className="li-sh li-fade-in">
            Pick your <em>partnership.</em>
          </h2>
          <p className="li-section-lead li-fade-in">
            We welcome mission-aligned organizations at every level of commitment.
            All partnerships include direct impact reporting and a relationship
            with our team.
          </p>

          <div className="li-sponsor-grid">
            <div className="li-sponsor-card li-fade-in">
              <div className="li-sponsor-badge li-badge-community">
                Community Sponsor
              </div>
              <div className="li-sponsor-tier">Community Sponsor</div>
              <div className="li-sponsor-range">$5,000 – $25,000 / year</div>
              <ul className="li-sponsor-perks">
                <li>
                  Use of the Teen Health supporter logo and select photo/video
                  assets
                </li>
                <li>Named recognition on teenhealth.us and campaign materials</li>
                <li>Social media acknowledgment</li>
                <li>Standard reporting on funded program activity</li>
                <li>Invitation to annual partner update</li>
              </ul>
              <a href="mailto:info@teenhealth.us" className="li-sponsor-cta">
                Get in Touch
              </a>
            </div>

            <div className="li-sponsor-card featured li-fade-in">
              <div className="li-sponsor-badge li-badge-program">
                Program Partner
              </div>
              <div className="li-sponsor-tier">Program Partner</div>
              <div className="li-sponsor-range">$25,000 – $75,000 / year</div>
              <ul className="li-sponsor-perks">
                <li>Co-branding and co-marketing opportunities</li>
                <li>Potential for co-creation of content</li>
                <li>Social media opportunities</li>
                <li>Support on fundraising events</li>
                <li>Quarterly impact updates and custom reporting</li>
                <li>Private farm site visit invitation</li>
              </ul>
              <a
                href="mailto:info@teenhealth.us"
                className="li-sponsor-cta primary"
              >
                Get in Touch
              </a>
            </div>

            <div className="li-sponsor-card li-fade-in">
              <div className="li-sponsor-badge li-badge-founding">
                Founding Partner
              </div>
              <div className="li-sponsor-tier">Founding Partner</div>
              <div className="li-sponsor-range">$75,000+ / year</div>
              <ul className="li-sponsor-perks">
                <li>All Program Partner benefits</li>
                <li>Naming rights consideration</li>
                <li>Direct access to executive leadership</li>
                <li>Input on program design and expansion</li>
                <li>Opportunities for leadership to visit the farm</li>
                <li>Bespoke partnership structure available</li>
              </ul>
              <a href="mailto:info@teenhealth.us" className="li-sponsor-cta">
                Get in Touch
              </a>
            </div>
          </div>

          <p className="li-sponsor-note">
            All gifts are tax-deductible. Teen Health, Inc. · EIN: 87-4628884 ·
            501(c)(3)
            <br />
            Questions or custom partnership inquiries:{" "}
            <a href="mailto:info@teenhealth.us">info@teenhealth.us</a>
          </p>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
    </div>
  );
}
