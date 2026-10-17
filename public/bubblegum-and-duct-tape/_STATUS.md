# BIFI DTC Deliverable Status — Bubblegum and Duct Tape

**Client / Project:** Bubblegum and Duct Tape  
**Formulations:** 
1. **Tesamorelin (GHRH Analog - 44 Amino Acid Secretagogue)**
2. **KLOW Matrix (GHK-Cu 50mg + BPC-157 10mg + TB-500 10mg + KPV 10mg)**
**Reference Architecture:** 
* Advertorials: Magnali Charles Anderson (`https://magnali.com/pages/charlesanderson`)
* Offers: Magnali Fuel (`https://magnali.com/products/fuel`) — "Buy X Get Y Free" Tiered Bundle Pricing, Compare-At Anchors, Telehealth Integration & 60-Day Guarantee.
* **Tesamorelin Destination Offer Link:** `https://tesaoffer.stickywell.com/`
* **Meta Pixel ID:** `1025719000460900` (`PageView` active across all advertorials)

---

## Deliverables Structure

```
public/bubblegum-and-duct-tape/
├── _STATUS.md
├── 02-CRIATIVOS-TOPO/
│   └── tesamorelin/
│       ├── imagens-estaticas/ (conceitos.md, _prompts.txt, AD01.jpg, AD02.jpg, AD03.jpg)
│       └── ad-texts/ (AD01-pos-glp1-rebound.md, AD02-somatopause-visceral.md, AD03-executive-biomarker.md)
├── 03-ADVERTORIAIS/
│   ├── tesamorelin/
│   │   ├── copy.md
│   │   ├── vercel.json (rewrites / -> /01)
│   │   ├── _shared/ (editorial.css, quiz.css, quiz-engine.js, vial.jpg)
│   │   ├── 01/ / pos-glp1/ (index.html, quiz-config.js, imagens/)
│   │   ├── 02/ / somatopause-visceral/ (index.html, quiz-config.js, imagens/)
│   │   └── 03/ / biomarker-executive/ (index.html, quiz-config.js, imagens/)
│   └── klow/
│       ├── copy.md
│       ├── _shared/ (editorial.css, quiz.css, quiz-engine.js, vial.jpg)
│       ├── wolverine-rebuild/ (index.html, quiz-config.js, imagens/)
│       ├── dermal-matrix/ (index.html, quiz-config.js, imagens/)
│       └── inflammation-recovery/ (index.html, quiz-config.js, imagens/)
└── 04-OFFERS/
    ├── OFFER_PROMPT.md                           ← Master prompt + unit economics calculator
    ├── _shared/
    │   ├── offer.css                             ← Conversion-optimized DTC offer stylesheet
    │   └── vial.jpg                              ← High-res clinical product render
    ├── tesamorelin/
    │   ├── offer.md                              ← Complete offer copy & margin breakdown
    │   ├── index.html                            ← Interactive DTC offer landing page
    │   └── imagens/ [vial.jpg]
    └── klow/
        ├── offer.md                              ← Complete offer copy & margin breakdown
        ├── index.html                            ← Interactive DTC offer landing page
        └── imagens/ [vial.jpg]
```

---

## Unit Economics & Tier Summary (OutfitMD Cost Basis)

### 1. Tesamorelin (10mg Lyophilized — Wholesale: $75.00/vial)
* **Tier 1 (Starter - 1 Vial):** $199.00 (COGS: $124.95 | Net Profit: $68.08 | 34.2% Margin)
* **Tier 2 (Buy 2 + GET 1 FREE - 3 Vials):** $398.00 (COGS: $289.90 | Net Profit: $96.16 | Save $349)
* **Tier 3 (Buy 3 + GET 3 FREE - 6 Vials):** $699.00 (COGS: $514.90 | Net Profit: $163.13 | Save $795)

### 2. KLOW Matrix (4-in-1 Lyophilized — Wholesale: $48.00/vial)
* **Tier 1 (Starter - 1 Vial):** $139.00 (COGS: $97.95 | Net Profit: $36.88 | 26.5% Margin)
* **Tier 2 (Buy 2 + GET 1 FREE - 3 Vials):** $299.00 (COGS: $208.90 | Net Profit: $81.13 | Save $211)
* **Tier 3 (Buy 3 + GET 3 FREE - 6 Vials):** $499.00 (COGS: $352.90 | Net Profit: $131.13 | Save $521)
