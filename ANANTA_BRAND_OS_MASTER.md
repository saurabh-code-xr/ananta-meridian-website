# Ananta Meridian — Brand OS Master Document
## For Claude Code: Complete Context for Full Website Build

---

## 1. COMPANY OVERVIEW

**Ananta Meridian Inc.** is a Canadian company integrating intelligent autonomous systems for mission-critical environments across air, maritime, remote, and critical-infrastructure domains.

**Location:** Toronto, Ontario, Canada
**Registration:** CGP Registered (Canada's Controlled Goods Program)
**Stage:** Active integrator with OEM partnerships, sensor fusion IP in development
**Founder:** Saurabh

### What the company actually is right now:
- A capability integrator — not a product manufacturer
- Holds active OEM partnerships (unnamed on public site)
- Has passive acoustic early warning capability via partner (unnamed on public site)
- Has edge AI + RF fusion hardware via partner (unnamed on public site)
- Has ISR UAV platforms via partner (unnamed on public site)
- Has own sensor fusion IP (Arctic/maritime focus, validated in simulation, hardware integration underway)
- CGP registered for Canadian defence and dual-use work

### What the company is NOT yet:
- Not a manufacturer
- Not a lethal systems integrator (planned for later stage)
- Not deploying systems operationally yet

---

## 2. BRAND IDENTITY

### Core Brand Idea
**Invisible Intelligence. Visible Decisions.**

### Tagline (from logo)
Autonomous Systems • Defending Sovereignty • Securing the Future

### Approved Core Lines
- Invisible Intelligence. Visible Decisions.
- See What Others Can't.
- Intelligence Across Every Domain.
- Sense. Understand. Decide. Act.
- One world. Many signals. One intelligent layer.
- Designed in Canada. Built with allies.

### Brand Personality
Intelligent, precise, calm, confident, youthful, premium, technically curious, Canadian, globally minded, ambitious without exaggeration.

### What Ananta Meridian should feel like:
- Apple × SpaceX × Anduril × Helsing × Arc'teryx × Porsche × Formula One
- Uniquely Canadian
- John Wick energy — precise, deliberate, inevitable
- MotoGP engineering culture — fast, technical, controlled
- NOT a military catalogue
- NOT a brochure
- NOT cyberpunk
- NOT generic defence

### The Founding Design Principle
**"Exciting, not a brochure."**
**"Bold enough that other founders wonder if we should have done that."**

---

## 3. VISUAL IDENTITY

### Colour Tokens (CSS custom properties)
```css
:root {
  --am-carbon:      #070B10;  /* Primary background */
  --am-deep-navy:   #07182E;  /* Section backgrounds */
  --am-midnight:    #0B203A;  /* Form inputs */
  --am-panel:       #101A27;  /* Card backgrounds */
  --am-panel-light: #132030;  /* Card hover */
  --am-white:       #F5F7FA;  /* Primary text */
  --am-steel:       #98A3B3;  /* Body text */
  --am-muted:       #6F7B8A;  /* Labels, metadata */
  --am-ice:         #A9D9FF;  /* Secondary accent */
  --am-cyan:        #45C9FF;  /* Primary accent, data viz */
  --am-red:         #D92332;  /* Precision accent only */
  --am-border:      rgba(169,217,255,0.10);
  --am-border-faint:rgba(169,217,255,0.06);
  --am-glow-cyan:   rgba(69,201,255,0.12);
}
```

### Typography
```css
--font-display: 'Space Grotesk', sans-serif;   /* Headlines */
--font-body:    'Inter', sans-serif;            /* Body text */
--font-mono:    'IBM Plex Mono', monospace;     /* Labels, data, code */
```

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap
```

### Type Scale
- Display XL: clamp(48px, 7vw, 88px) — Space Grotesk 700
- H1: clamp(36px, 5vw, 64px) — Space Grotesk 600
- H2: clamp(26px, 3.5vw, 42px) — Space Grotesk 600
- H3: clamp(18px, 2vw, 24px) — Space Grotesk 600
- Body: clamp(15px, 1.2vw, 17px) — Inter 400, line-height 1.7
- Label: 11px — IBM Plex Mono 500, letter-spacing 0.12em, uppercase, cyan

### Logo
- SVG file: ananta-logo.svg
- Transparent background — works on all dark surfaces
- White architectural A form with metallic silver wings
- Red maple leaf center
- ANANTA in Arial Black 900
- MERIDIAN with red flanking lines
- Tagline in IBM Plex Mono
- NEVER place on white or light backgrounds
- NEVER distort, rotate, add glow, or modify

### Signature Motif
Thin cyan acoustic wavefront, sonar ring, silver orbital arc, red confidence marker.
The wing geometry from the logo echoes in dividers and decorative elements.

---

## 4. DESIGN SYSTEM

### Surfaces
- Dark translucent panels
- 1px borders using --am-border
- Subtle top-edge highlights on hover
- Glass depth without dominating
- No heavy shadows

### Cards / Panels
```css
background: var(--am-panel);          /* #101A27 */
border: 1px solid var(--am-border);   /* rgba(169,217,255,0.10) */
border-radius: 4px;
```

### Buttons
- Primary: white/ice surface, dark text
- Ghost: transparent, --am-border border, white text
- No pill shapes — use 3px border-radius
- Never excessive rounding

### Signal Line (signature motif element)
```css
.signal-line {
  display: block;
  width: 40px;
  height: 1px;
  background: var(--am-red);
  margin-bottom: 16px;
}
.signal-line--cyan { background: var(--am-cyan); }
```

### Grid
- 12-column desktop, 8-column tablet, 4-column mobile
- 8-point spacing system
- Generous whitespace
- Container max-width: 1200px, padding: clamp(24px, 5vw, 80px)

### Motion
- Micro interactions: 150–220ms
- Panels: 300–450ms
- Cinematic reveals: 700–1200ms
- Ambient loops: 8–20s
- ease: cubic-bezier(0.16, 1, 0.3, 1)
- Always include prefers-reduced-motion support

### Data Visualization
- Dark backgrounds, white labels
- Cyan primary data
- Ice secondary data
- Red only for exceptions/alerts
- Confidence shown through opacity, line weight, density

---

## 5. NAVIGATION STRUCTURE

```
Home | Capabilities | Solutions | Technology | Company | Careers | Contact
```

### Nav behavior
- Transparent over hero
- Solid (rgba(7,11,16,0.92) + backdrop-filter blur) on scroll
- Height: 80px
- Logo left, links center, CTAs right
- Mobile: dark full-screen panel

### Logo in nav
- Mark (SVG): 52px × 52px
- ANANTA — Arial Black 900, 16px, letter-spacing 0.14em
- MERIDIAN — Arial 400, 10px, letter-spacing 0.26em, red flanking lines
- AUTONOMOUS SYSTEMS — IBM Plex Mono 8px, muted

---

## 6. CAPABILITY MODEL

The organizing framework for everything:

**Sense → Understand → Decide → Act**

### Sense
Detect signals: acoustic, RF, optical, infrared, radar, sonar, satellite.
Examples: Passive acoustic early warning, RF spectrum monitoring, Multi-spectral EO/IR, AIS maritime tracking, Space-enabled awareness.

### Understand
Process, classify, fuse at the edge.
Examples: Confidence-aware sensor fusion, Edge AI classification, Reliability-weighted processing, Degraded environment operation, Digital twin integration.

### Decide
Surface confidence-weighted outputs to human operators.
Examples: HIGH/MEDIUM/LOW confidence output, Recommended operator actions, C2 cueing and handoff, Alert routing and escalation.

### Act
Deploy autonomous platforms.
Examples: Micro & tactical ISR UAVs, Persistent fixed-wing platforms, Counter-UAS interceptors, Jam-proof fiber-optic tethered ISR, Heavy-lift payload platforms.

---

## 7. OPERATING DOMAINS

1. **Air & Counter-UAS** — Detection-first awareness for low-altitude threats
2. **Maritime & Underwater** — Port awareness and offshore monitoring
3. **Arctic & Remote** — Persistent awareness where infrastructure ends
4. **Critical Infrastructure** — Site security for high-consequence assets
5. **Space-Enabled Awareness** — Orbital connectivity for terrestrial missions

---

## 8. PARTNER PORTFOLIO (unnamed on public site)

### Partner 1 — UAV Platforms & Edge AI
ISR platforms available:
- Micro ISR coaxial UAV (50g, 2km range, 12min flight)
- Micro ISR coaxial UAV with thermal (135g, 2.5km, 25min, EO/IR)
- Persistent fixed-wing ISR VTOL (7.3m wingspan, 8h endurance, 60kg payload)
- Fixed-wing ISR VTOL lite (3.8m wingspan, 5h endurance, 15kg payload)
- Fiber-optic tethered drone (jam-proof, zero RF emission, 30x zoom, 640×512 thermal)
- Counter-UAS interceptors: Delta 5 (1.5kg, 500+km/h), Delta 8 (3kg), Delta 11 (4kg, 40min, 40km)
- Heavy-lift multirotor 10kg payload, 60min flight
- Heavy-lift multirotor 50kg payload, 70min flight

Edge AI hardware:
- Jamming Resilient Edge AI & RF Fusion Node (NVIDIA Ampere GPU + Xilinx Zynq FPGA, 67 TOPS, 1050g)
- Light Edge AI & RF Fusion Node (Nvidia Maxwell GPU + Xilinx Zynq FPGA, 0.5 TOPS, 740g)

Both nodes feature: MIMO Mesh, Split-Frequency FDD, Frequency Hopping, Spectrum Awareness.

### Partner 2 — Passive Acoustic Early Warning
- ZVOOK passive acoustic sensing for C-UAS
- Listen → Detect → Cue → Protect framework
- No active RF emission
- Supports fixed, mobile, distributed deployments
- Integrates with C2, EO/IR, RF/EW, response workflows
- Target environments: military sites, airfields, borders, ports, critical infrastructure

### Ananta Meridian Own IP — Sensor Fusion Engine
- Confidence-aware sensor fusion for Arctic and maritime environments
- Fuses: acoustic, RF, AIS, environmental inputs
- Handles: dropout, spoofing, stale data, catastrophic sensor failure
- Output: HIGH/MEDIUM/LOW confidence + recommended operator actions
- Reliability memory — per-sensor historical performance tracking
- Adversarial detection — spoofing and miscalibration flags
- Hardware-agnostic — designed to integrate with allied edge AI nodes
- Validated in simulated degraded sensing scenarios
- Hardware integration underway
- DO NOT mention TRL anywhere on the site

---

## 9. COPYWRITING RULES

### Voice
Calm technical confidence. Clear, intelligent, direct, credible, ambitious, restrained.

### Audience tones
- Government/defence: precise, evidence-based, operationally relevant
- Critical infrastructure: practical, risk-aware, resilience-focused
- OEM partners: commercially credible, collaborative
- Investors: disciplined about stage, wedge, scaling path
- Engineers/talent: ambitious, technically curious, honest about build journey

### Language to use
integrate, evaluate, develop, engineer, localize, support, sustain, connect, fuse, interpret, enable, mission-relevant, allied technology, Canadian capability, in development, building toward, partner-enabled, validated, hardware integration underway

### Language to NEVER use
world-leading, revolutionary, battle-proven, deployed, operational, manufactured in Canada, game-changing, unmatched, TRL (never use this), loitering munition, dropper, turbojet (these are not on the site)

### Honest framing rules
- Never claim deployed systems
- Never claim existing customers
- Always distinguish: current capability vs in development vs future direction
- Sensor fusion: "validated in simulated degraded sensing scenarios, hardware integration underway"
- Partner platforms: describe capability without naming partner
- CGP registration: always state it — it's real and credible

### Copy test
Is it true, specific, understandable, confident without exaggeration, relevant to customer value, appropriate to current maturity?

---

## 10. WHAT TO NEVER SHOW ON PUBLIC SITE

- Partner names (SKHY, ZVOOK) — controlled discussion only
- Loitering munition (Delta 8B)
- Dropper systems (60mm, 80mm, 82mm, 120mm)
- Micro turbojet engines
- TRL numbers anywhere
- Specific pricing
- Fabricated metrics or deployment claims
- Weapons glamour of any kind

---

## 11. HERO VIDEO

File: Hero_bike.mp4 (4.08 seconds, loops seamlessly)
Content: Three sport motorcycles in MotoGP formation on Gardiner Expressway at night, CN Tower in background, wet asphalt reflections, cold blue-white palette.
Usage: Muted, autoplay, loop, playsinline. Dark gradient overlay on top.
Overlay stack: video → dark overlay (52% opacity) → directional vignette → cold blue grade (28% rgba(7,24,46)) → signal SVG → grid texture → content

---

## 12. SECTION IMAGES NEEDED

Generate these in Picsart (Happy Horse 1.1, NOT cyberpunk, 16:9):

1. **arctic.jpg** — Remote Canadian Arctic coastline, sea ice, sensor mast, faint aurora, cold moonlight, no people, deep navy tones
2. **maritime.jpg** — Modern Canadian port at night, container terminal, rain mist, wet concrete, cold blue, no people
3. **air-cuas.jpg** — Small fixed-wing ISR UAV at dusk, Canadian terrain, no weapons, deep navy sky, cinematic
4. **toronto.jpg** — Toronto waterfront blue hour from water, CN Tower, Lake Ontario foreground, deep navy, no people
5. **operations.jpg** — Clean modern operations room, small technical team, dark screens with sensor data, cold blue lighting, no holograms

---

## 13. PARTNER CTA PATHWAYS

Four ways to engage Ananta Meridian:
1. **Bring a Technology to Canada** — OEM partners seeking Canadian market access
2. **Evaluate a Capability** — Government/defence buyers assessing against operational requirement
3. **Build a Joint Capability** — Research institutions and industrial partners
4. **Discuss a Market Opportunity** — Investors and strategic partners

Contact form fields: First Name, Last Name, Organisation, Email, Nature of Enquiry (dropdown), Brief Context (textarea)
Footer note: "All enquiries are handled under controlled discussion. Technical and commercial details are shared only with qualified stakeholders."

---

## 14. EVIDENCE BAR (factual claims only)

1. CGP Registered — Canada's Controlled Goods Program
2. Active OEM Partnerships — Allied platforms · Edge AI · Acoustic sensing
3. Sensor Fusion IP — In development · Arctic & maritime focus
4. Evaluation Pathways — Controlled capability discussions available

---

## 15. FILE STRUCTURE FOR GITHUB

```
ananta-meridian-website/
├── index.html
├── capabilities.html
├── solutions.html
├── technology.html
├── company.html
├── careers.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── ananta-logo.svg
│       ├── arctic.jpg
│       ├── maritime.jpg
│       ├── air-cuas.jpg
│       ├── toronto.jpg
│       └── operations.jpg
└── video/
    └── Hero_bike.mp4
```

---

## 16. DEPLOYMENT

- GitHub repository: ananta-meridian-website (public)
- Netlify: connect to GitHub repo, auto-deploy on push
- Custom domain: anantameridian.ca → point to Netlify when ready
- WordPress: current site at anantameridian.ca — keep live until Netlify version is ready

---

## 17. LONG-TERM VISION (inform tone, don't overclaim)

- Canadian IP ownership in sensing and autonomous systems
- Canadian manufacturing and sustainment capability
- Lethal systems integration (future stage, compliance dependent)
- From Toronto to the Arctic — one intelligent layer
- Globally respected Canadian defence and dual-use technology company

---

## 18. TORONTO IDENTITY

Toronto is the emotional origin of the brand:
- Gardiner Expressway — hero visual, motion, engineering culture
- CN Tower — skyline anchor, appears in hero video
- Lake Ontario — maritime connection
- Financial District — intelligence, infrastructure, AI
- Waterfront / Port Lands — maritime and critical infrastructure
- Billy Bishop Airport — aviation domain
- Blue hour and rain — visual palette

Toronto is inspiration, not limitation. The company operates Arctic to orbit.

---

*This document represents the complete Brand OS as built through the founding brand session. All decisions have been reviewed and approved by the founder. Use this as the single source of truth for all website pages, design decisions, and copy.*

*Last updated: July 2026*
*Version: 1.0*
