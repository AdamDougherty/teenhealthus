import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { FamEffects } from "./FamEffects";
import "./food-as-medicine.css";

/**
 * This page was previously a standalone file at public/food-as-medicine.html.
 * It keeps its own styling (see food-as-medicine.css, scoped under .fam) rather
 * than the site's shared components, so the design is unchanged — but it is now
 * a real route, so it gets the real Nav and Footer and appears in the sitemap.
 */

// The page's headings use Lora, not the site's Kazimir Text serif. Loaded here
// (self-hosted by next/font) instead of the original Google Fonts <link>.
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food as Medicine",
  description:
    "Teen Health's Food as Medicine initiative assembles clinically validated Medically Tailored Groceries (MTG) boxes and delivers them to Medi-Cal members, homeless youth, and young adults managing chronic illness across Southern California.",
  alternates: { canonical: "/food-as-medicine" },
};

export default function FoodAsMedicinePage() {
  return (
    <div className={`fam ${lora.variable}`}>
      <FamEffects />
      {/* LAUNCH BAR */}
      <div className="launch-bar">
        <div className="pulse-dot"></div>
        <p><strong>Now launching</strong> — Teen Health is enrolling community partners and accepting product donations and financial contributions</p>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-blob blob-blue"></div>
        <div className="hero-blob blob-orange"></div>
        <div className="hero-blob blob-green"></div>
        <div className="hero-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', maxWidth: '72rem', margin: '0 auto', padding: '2.5rem 1.5rem 3rem', width: '100%', position: 'relative', zIndex: '1' }}>
          <div>
            <p className="hero-eyebrow">Food as Medicine Initiative</p>
            <h1>Food is <span className="blue">medicine.</span><br />We <span className="orange">deliver</span> both.</h1>
            <p className="hero-sub">Teen Health is launching a Medically Tailored Groceries (MTG) program — assembling clinically validated food boxes and delivering them to Medi-Cal members, homeless youth, and young adults managing chronic illness across Southern California.</p>
            <div className="hero-btns">
              <a href="#donate" className="btn-sun">Support This Program</a>
              <a href="#how" className="btn-ghost">How It Works</a>
            </div>
          </div>
          <div style={{ opacity: '0', animation: 'reveal .8s .5s forwards' }}>
            <div style={{ background: 'rgba(255,255,255,0.78)', border: '1px solid #e5e7eb', borderRadius: '1.25rem', padding: '.875rem', backdropFilter: 'blur(8px)' }}>
              <p style={{ fontSize: '.6875rem', fontWeight: '700', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--sun)', marginBottom: '1.25rem' }}>Food Insecurity in California</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                <div style={{ paddingBottom: '.5rem', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontFamily: 'var(--font-lora),Georgia,serif', fontSize: '1.125rem', fontWeight: '400', color: 'var(--ink)', lineHeight: '1', marginBottom: '.2rem' }}>1 in 5</p>
                  <p style={{ fontSize: '.9375rem', color: 'rgba(26,26,46,0.65)', lineHeight: '1.45' }}>Californians experience food insecurity — over 8 million people.</p>
                </div>
                <div style={{ paddingBottom: '.5rem', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontFamily: 'var(--font-lora),Georgia,serif', fontSize: '1.125rem', fontWeight: '400', color: 'var(--sky)', lineHeight: '1', marginBottom: '.2rem' }}>2.4M</p>
                  <p style={{ fontSize: '.9375rem', color: 'rgba(26,26,46,0.65)', lineHeight: '1.45' }}>Californians live in food deserts — low-income areas with limited access to healthy food.</p>
                </div>
                <div style={{ paddingBottom: '.5rem', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontFamily: 'var(--font-lora),Georgia,serif', fontSize: '1.125rem', fontWeight: '400', color: 'var(--ink)', lineHeight: '1', marginBottom: '.2rem' }}>32%</p>
                  <p style={{ fontSize: '.9375rem', color: 'rgba(26,26,46,0.65)', lineHeight: '1.45' }}>Of food-insecure Californians are children — disproportionately in communities of color.</p>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-lora),Georgia,serif', fontSize: '1.125rem', fontWeight: '400', color: '#16a34a', lineHeight: '1', marginBottom: '.2rem' }}>58 counties</p>
                  <p style={{ fontSize: '.9375rem', color: 'rgba(26,26,46,0.65)', lineHeight: '1.45' }}>Every California county has communities where nutritious food is inaccessible or unaffordable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec sec-white" id="how">
        <div className="sec-inner">
          <div className="sec-head rv">
            <div className="sun-bar"></div>
            <h2>How the MTG Program Works</h2>
            <p>We partner with natural products companies to source clinically validated food, build medically tailored grocery boxes, and deliver them through Teen Health's established Southern California network.</p>
          </div>
          <div className="grid-4 rv">
            <div className="step-card">
              <div className="step-card-bar" style={{ background: 'var(--sky)' }}></div>
              <div className="step-card-body">
                <div className="step-n">01</div>
                <div className="step-t">Source the products</div>
                <div className="step-b">We partner with natural products industry companies to acquire clinically relevant food — anti-inflammatory oils, high-protein snacks, functional bars, and whole food staples.</div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-bar" style={{ background: 'var(--sun)' }}></div>
              <div className="step-card-body">
                <div className="step-n">02</div>
                <div className="step-t">Build the boxes</div>
                <div className="step-b">Each box is assembled for a specific chronic condition — diabetes, cardiovascular disease, or metabolic syndrome — with guidance from registered dietitians reviewing every inclusion.</div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-bar" style={{ background: '#22c55e' }}></div>
              <div className="step-card-body">
                <div className="step-n">03</div>
                <div className="step-t">Deliver to the community</div>
                <div className="step-b">Boxes reach recipients through Teen Health's existing network: assisted living centers, shelters, outreach programs, and managed care partnerships across San Diego and Los Angeles.</div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-card-bar" style={{ background: '#8b5cf6' }}></div>
              <div className="step-card-body">
                <div className="step-n">04</div>
                <div className="step-t">Build the evidence</div>
                <div className="step-b">Every delivery is logged and every recipient tracked. We build the real-world outcomes data that demonstrates food as medicine works — and positions Teen Health for government reimbursement funding.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOX CONTENTS */}
      <section className="sec sec-mist" id="box">
        <div className="sec-inner">
          <div className="sec-head rv">
            <div className="sun-bar"></div>
            <h2>What Goes in the Box</h2>
            <p>Every product is shelf-stable, clinically formulated, and sourced from mission-aligned natural products companies. No cold chain required.</p>
          </div>
          <div className="grid-3 rv">
            <div className="card"><div className="step-t">Cold-Pressed California Oils</div><div className="step-b">California-grown extra virgin olive oil and pure avocado oil — anti-inflammatory, heart-healthy, and diabetic-friendly.</div></div>
            <div className="card"><div className="step-t">Functional Snacks</div><div className="step-b">High-protein, low-sugar snacks for food-insecure environments. Micronutrient-fortified and clinically validated.</div></div>
            <div className="card"><div className="step-t">Meal Replacement</div><div className="step-b">Premium functional bars with adaptogens and clean macros — designed for chronic condition management.</div></div>
            <div className="card"><div className="step-t">Whole Grains &amp; Seeds</div><div className="step-b">Hemp hearts, quinoa, and ancient grains sourced from natural products partners. High fiber, high protein, and clinically relevant for metabolic health.</div></div>
            <div className="card"><div className="step-t">Plant-Based Essentials</div><div className="step-b">Nut butters, legumes, dried fruits, and plant proteins for glycemic and cardiovascular support.</div></div>
          </div>
        </div>
      </section>

      {/* CALAIM — mist bg */}
      <section className="sec sec-white" id="calaim">
        <div className="sec-inner">
          <div className="sec-head rv">
            <div className="sun-bar"></div>
            <h2>California Has Committed the Funding. We're Building the Delivery.</h2>
            <p>CalAIM — California's Medicaid reform — now pays health plans to deliver medically tailored food as a covered health intervention. Teen Health is positioning to participate as a community partner. Your contributions build the program infrastructure that makes this possible.</p>
          </div>

        </div>
      </section>

      {/* QUOTE — site blockquote style */}
      <section className="sec sec-mist">
        <div className="sec-inner">
          <div className="sec-inner rv">
            <blockquote>
              <p className="quote-nowrap">"Food is not a supplement to healthcare. For millions of Californians, it is the healthcare."</p>
            </blockquote>
            <p style={{ fontSize: '.875rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--ink-50)' }}>Teen Health, Inc. — Food as Medicine Program</p>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="sec sec-white" id="donate">
        <div className="sec-inner">
          <div className="donate-grid">
            <div>
              <div className="sec-head rv">
                <div className="sun-bar"></div>
                <h2 className="tagline">Every dollar feeds a medically tailored box.</h2>
                <p>Teen Health is a California 501(c)3 nonprofit. All donations are fully tax-deductible. Your contribution directly funds product purchasing, box assembly, and distribution across Southern California.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }} className="rv">
                <a href="https://www.zeffy.com/en-US/donation-form/c471ed6d-57e8-41bf-85a6-7afce185e939?amount=50" target="_blank" rel="noopener noreferrer" className="tier"><div><div className="tier-amt">$50</div><div className="tier-lbl">Funds one MTG box — 2 weeks of clinically tailored nutrition</div></div><span className="tier-arr">→</span></a>
                <a href="https://www.zeffy.com/en-US/donation-form/c471ed6d-57e8-41bf-85a6-7afce185e939?amount=250" target="_blank" rel="noopener noreferrer" className="tier"><div><div className="tier-amt">$250</div><div className="tier-lbl">Funds five boxes — one month of nutrition for a family</div></div><span className="tier-arr">→</span></a>
                <a href="https://www.zeffy.com/en-US/donation-form/c471ed6d-57e8-41bf-85a6-7afce185e939?amount=1000" target="_blank" rel="noopener noreferrer" className="tier"><div><div className="tier-amt">$1,000</div><div className="tier-lbl">Sponsors a full month of MTG delivery for 20 individuals</div></div><span className="tier-arr">→</span></a>
                <a href="https://www.zeffy.com/en-US/donation-form/c471ed6d-57e8-41bf-85a6-7afce185e939" target="_blank" rel="noopener noreferrer" className="tier"><div><div className="tier-amt">Custom</div><div className="tier-lbl">Name your contribution — every amount advances the mission</div></div><span className="tier-arr">→</span></a>
              </div>
            </div>
            <div>
              <div className="sec-head rv">
                <div className="sun-bar"></div>
                <h2 className="tagline">Partner with purpose.</h2>
                <p>Corporate partnerships fund program infrastructure and outcomes research — and align your brand with the fastest-growing category in preventive healthcare.</p>
              </div>
              <div className="partner-box rv">
                <div className="partner-box-t">Corporate Partnership Levels</div>
                <div className="ctier"><div className="ctier-n">Founding Partner — $25,000+</div><div className="ctier-d">Named program sponsor · logo on all materials · co-branded impact report · board advisory seat invitation · priority product placement in MTG boxes</div></div>
                <div className="ctier"><div className="ctier-n">Program Partner — $10,000</div><div className="ctier-d">Co-branded materials · quarterly impact reporting · recognition across Teen Health digital and print channels</div></div>
                <div className="ctier" style={{ marginBottom: '1.5rem' }}><div className="ctier-n">Product Partner — In-kind donation</div><div className="ctier-d">Donate product for inclusion in MTG boxes · tax-deductible at fair market value · co-marketed as a clinical nutrition partner</div></div>
                <a href="mailto:info@teenhealth.us?subject=Corporate Partnership Inquiry" className="btn-sun" style={{ fontSize: '.8125rem', padding: '.625rem 1.25rem' }}>Get Partnership Details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PARTNERS */}
      <section className="sec sec-mist" id="partners">
        <div className="sec-inner">
          <div className="sec-head rv">
            <div className="sun-bar"></div>
            <h2>We're Looking for Product Partners</h2>
            <p>We source products from natural products industry companies that align with our clinical mission. If your company makes shelf-stable, clinically relevant food — we want to put it in our boxes and co-market you as a clinical nutrition partner.</p>
          </div>
          <div className="card rv" style={{ maxWidth: '52rem', borderTop: '3px solid var(--sun)' }}>
            <div className="partner-box-t">Product supply partnership — what we're looking for</div>
            <div className="partner-box-b">We work with food companies as product partners. Products are distributed to Medi-Cal members and food-insecure individuals across Southern California, with full distribution documentation and recognition as a clinical nutrition partner. Priority: California-grown, clean-label, shelf-stable, and clinically validated.</div>
            <a href="mailto:info@teenhealth.us?subject=Product Partnership Inquiry" className="btn-sun" style={{ fontSize: '.8125rem', padding: '.625rem 1.25rem' }}>Inquire About Product Partnership →</a>
            <div className="tags">
              <span className="tag">Extra virgin olive oil</span><span className="tag">Avocado oil</span><span className="tag">Protein bars &amp; snacks</span><span className="tag">Hemp hearts &amp; seeds</span><span className="tag">Functional beverages</span><span className="tag">Whole grains</span><span className="tag">Canned wild salmon &amp; sardines</span><span className="tag">Nut butters</span><span className="tag">Plant-based proteins</span><span className="tag">Dried fruits &amp; legumes</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec sec-white" id="about">
        <div className="sec-inner">
          <div className="about-grid">
            <div>
              <div className="sec-head rv">
                <div className="sun-bar"></div>
                <h2 className="tagline">Five years of serving those who need it most.</h2>
              </div>
              <p className="rv" style={{ fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--ink-70)', marginBottom: '1.5rem' }}>Teen Health, Inc. is a California 501(c)3 nonprofit with over five years of direct service to homeless and at-risk youth across San Diego and Los Angeles. We run dignity kit programs, outreach teams, and wraparound services for the populations most overlooked by the healthcare system.</p>
              <p className="rv" style={{ fontSize: '1.125rem', lineHeight: '1.75', color: 'var(--ink-70)', marginBottom: '2rem' }}>The Food as Medicine program is a natural extension of that mission — applying clinical nutrition science to the communities we already serve, through the distribution infrastructure we have already built.</p>
            </div>
            <div className="rv">
              <div className="arow"><div className="anum">5+</div><div className="albl">Years of direct service to homeless and at-risk youth across Southern California</div></div>
              <div className="arow"><div className="anum">SD+LA</div><div className="albl">San Diego and Los Angeles — shelters, assisted living, and outreach programs</div></div>
              <div className="arow"><div className="anum">501c3</div><div className="albl">All donations are tax-deductible. Registered nonprofit in California. EIN: 87-4628884.</div></div>
              <div className="arow" style={{ borderLeft: '3px solid var(--sun)' }}><div className="anum" style={{ color: 'var(--sun)' }}>MTG</div><div className="albl">Launching California's next medically tailored grocery program under an established nonprofit structure — now</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — exact site pattern */}
      <section className="sec sec-mist">
        <div className="sec-inner">
          <div className="cta-block rv">
            <h2>Help Us Launch This Program</h2>
            <p>Every contribution helps us reach more Californians<br className="br-md" />with the medically tailored nutrition they need to thrive.</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.75rem', flexWrap: 'wrap' }}>
              <a href="https://www.zeffy.com/en-US/donation-form/c471ed6d-57e8-41bf-85a6-7afce185e939" target="_blank" rel="noopener noreferrer" className="btn-sun">Donate</a>
              <a href="#partners" className="btn-ghost">Get Involved</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
