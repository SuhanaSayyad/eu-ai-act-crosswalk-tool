# EU AI Act × NIST AI RMF × ISO 42001  -  Interactive Compliance Crosswalk Tool

> An open-source tool that maps EU AI Act obligations to their equivalents in NIST AI RMF and ISO 42001, with mapping strength indicators, gap analysis, and source document links. Built for compliance teams, AI governance practitioners, and anyone trying to understand how these three frameworks relate to each other.

**Live demo:** https://suhanasayyad.github.io/eu-ai-act-crosswalk-tool/
**Built by:** [Suhana Sayyad](https://www.linkedin.com/in/suhana35) | MSc Cybersecurity, TUS Athlone 

---

## Why I built this

Every organisation dealing with the EU AI Act is being asked the same questions:

*"We already have NIST AI RMF controls in place. Does that cover our EU AI Act obligations?"*
*"We're pursuing ISO 42001 certification. Does that satisfy the regulation?"*

The honest answer is: sometimes yes, sometimes partially, and sometimes not at all. The problem is that nobody had built a clean, free, interactive tool that showed exactly which controls map to which, how strong those mappings actually are, and where the genuine gaps are.

Consultants were doing this manually in spreadsheets and charging clients for it. I built it as open source so anyone can use it.

---

## What it does

- **Interactive control lookup**  -  select a framework and a specific article or control, instantly see the equivalent in the other two frameworks side by side
- **Mapping strength indicators**  -  every mapping is rated Strong, Partial, Indirect, or No Equivalent so you know which mappings you can rely on and which need additional work
- **30 controls mapped**  -  covering all major EU AI Act obligations including high-risk AI requirements, GPAI obligations, transparency, conformity assessment, and enforcement
- **Gap analysis section**  -  dedicated view showing 5 EU AI Act obligations that have no equivalent in NIST AI RMF or ISO 42001, so you know exactly what requires EU-specific compliance work
- **Source document links**  -  every reference links directly to the official source document so you can read the actual text
- **Three filter controls**  -  filter by EU AI Act chapter, NIST function (Govern/Map/Measure/Manage), or show gaps only
- **Search**  -  search across all controls, article references and descriptions in real time
- **Export to CSV**  -  download the full crosswalk as a spreadsheet for offline work or sharing with clients
- **Export to PDF**  -  download a formatted report including gap analysis summary and all 30 controls with strength indicators
- **Row highlighting**  -  selecting a control in the interactive lookup highlights the corresponding row in the full matrix table

---

## The three frameworks

### EU AI Act (Regulation (EU) 2024/1689)
The EU AI Act is binding law. It applies to any organisation placing AI systems on the EU market or deploying AI systems to EU users. High-risk AI obligations became enforceable from 2 August 2026. Penalties run up to €35 million or 7% of global annual turnover. Non-compliance is not optional.

Key source: [artificialintelligenceact.eu](https://artificialintelligenceact.eu)

### NIST AI RMF
The NIST AI Risk Management Framework is a voluntary US framework published in January 2023. It organises AI risk management into four functions: Govern, Map, Measure, and Manage. It is widely adopted by US federal agencies and increasingly referenced by EU organisations as an operational implementation framework alongside the EU AI Act.

Key source: [airc.nist.gov](https://airc.nist.gov/)

### ISO/IEC 42001:2023
ISO 42001 is the world's first international standard for AI Management Systems, published in December 2023. It is certifiable, follows the standard Plan-Do-Check-Act structure, and is increasingly required in procurement and supply chain assessments. ISO 42001 certification does not equal EU AI Act compliance but provides a strong governance foundation.

Key source: [iso.org/standard/81230.html](https://www.iso.org/standard/81230.html)

---

## Mapping strength explained

One of the key design decisions in this tool was to be honest about how well controls actually map to each other. Many crosswalk tools simply draw a line between two controls and call it equivalent. That is misleading.

| Strength | What it means |
|---|---|
| **Strong** | Direct equivalent. The NIST or ISO control covers the same obligation as the EU AI Act requirement. Implementing this control provides substantive coverage. |
| **Partial** | Covers some but not all aspects. The control addresses part of the EU AI Act obligation but additional work is needed to achieve full compliance. |
| **Indirect** | Related concept but significant gaps exist. The control is thematically related but does not meaningfully cover the EU AI Act requirement. |
| **No Equivalent** | The EU AI Act requires something that has no equivalent in this framework. This is a compliance gap that requires dedicated effort regardless of NIST or ISO implementation. |

---

## The five genuine gaps

These are the EU AI Act obligations where neither NIST AI RMF nor ISO 42001 provides any meaningful coverage. Any organisation relying solely on these voluntary frameworks will not meet these requirements.

**CE Marking (Article 48)**
High-risk AI systems must bear the CE marking before market placement. This is a mandatory legal requirement tied to product safety law in the EU. Neither NIST nor ISO creates this obligation.

**EU AI Database Registration (Article 49)**
High-risk AI systems must be registered in the EU public database before market placement. This is a regulatory registry requirement with no voluntary framework equivalent.

**Notified Body Third Party Assessment (Article 44)**
Certain high-risk AI systems require mandatory conformity assessment by an accredited notified body. ISO 42001 can be voluntarily certified but that is categorically different from mandatory notified body assessment under EU law.

**GPAI Systemic Risk Assessment (Article 55)**
Providers of general-purpose AI models with systemic risk must conduct model evaluations, adversarial testing and report to the EU AI Office. Neither framework addresses societal-scale systemic AI risk from large foundation models.

**Market Surveillance and Enforcement (Article 74)**
The EU AI Act creates legally binding enforcement powers including market withdrawal orders and penalties up to 7% of global turnover. Voluntary frameworks create no legal liability and no enforcement mechanism.

---

## Technical details

### Architecture

This is a deliberately simple tool. No backend, no database, no server, no build pipeline. Three files: `index.html`, `style.css`, `script.js`. All data is embedded in the JavaScript file as a static array.

This was a deliberate choice. The tool is meant to be deployed on GitHub Pages for free, used without any setup, and easily forked and modified by anyone. Adding a backend would have created unnecessary complexity for what is fundamentally a reference tool.

### Data structure

Each control in `crosswalkData` follows this structure:

```javascript
{
    topic: "Risk Management System",
    category: {
        euChapter: "high-risk",       // prohibited | high-risk | transparency | gpai | governance | enforcement
        nistFunction: "govern",       // govern | map | measure | manage | none
        isoClause: "planning"         // context | planning | support | operation | performance | improvement
    },
    euaiact: {
        ref: "Article 9",
        desc: "Full description of the EU AI Act obligation",
        url: "https://artificialintelligenceact.eu/article/9/"
    },
    nist: {
        ref: "GOVERN 1.1",
        desc: "Full description of the NIST AI RMF control",
        url: "https://airc.nist.gov/Docs/1",
        strength: "strong"           // strong | partial | indirect | none
    },
    iso42001: {
        ref: "Clause 6.1",
        desc: "Full description of the ISO 42001 clause",
        url: "https://www.iso.org/standard/81230.html",
        strength: "strong"           // strong | partial | indirect | none
    }
}
```

### Dependencies

| Library | Version | Purpose | Source |
|---|---|---|---|
| jsPDF | 2.5.1 | PDF export | cdnjs.cloudflare.com |

No other external dependencies. No npm, no Node.js, no bundler required.

### Browser compatibility

Works in all modern browsers. The copy function uses the Clipboard API with a `document.execCommand` fallback for older browsers. The PDF export uses jsPDF loaded from CDN.

---

## Running locally

No installation required. Clone the repo and open `index.html` in a browser.

```bash
git clone https://github.com/SuhanaSayyad/eu-ai-act-crosswalk-tool.git
cd eu-ai-act-crosswalk-tool
open index.html
```

Or if you have Python installed:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

---

## Contributing

Contributions are welcome. The most useful contributions are:

- **Data accuracy improvements**  -  if you spot a mapping that is incorrectly rated or a description that could be more precise, open an issue or submit a PR
- **Additional controls**  -  the EU AI Act has 113 articles and this tool currently covers 30. PRs adding well-researched controls with proper strength ratings and sources are welcome
- **New frameworks**  -  ISO 23894, DORA, NIS2, and the upcoming EU AI Liability Directive are natural additions

Please open an issue before submitting a large PR so we can discuss the approach.

---

## Limitations and caveats

This tool is a technical reference guide, not legal advice. A few important caveats:

- Mapping strength assessments represent the author's analysis based on publicly available framework documentation as of 2026. Reasonable practitioners may assess strength differently for specific contexts.
- The EU AI Act is still being implemented. Delegated acts, harmonised standards and guidance from the EU AI Office are continuing to be published. Some mappings may need updating as implementation guidance evolves.
- ISO 42001 access requires purchase of the full standard from ISO. The descriptions in this tool are based on publicly available information about the standard.
- This tool covers the EU AI Act obligations most relevant to providers and deployers of high-risk AI systems. It does not cover every article of the regulation.

---

## License

MIT License. Free to use, fork, and modify. If you use this tool in a commercial product or client engagement, attribution is appreciated but not required.

---

## Contact

Built by [Suhana Sayyad](https://www.linkedin.com/in/suhana35) as part of an open-source EU AI Act compliance tooling project. IAPP member, MSc Cybersecurity at TUS Athlone, Ireland.

If you find an error in the mappings or want to discuss the tool, open a GitHub issue or connect on LinkedIn.
