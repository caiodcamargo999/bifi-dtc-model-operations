/* ADV2 — Klow: Beyond Retinol & Collagen Powders (Deep Dermal Matrix) */
window.QUIZ = {
  NEXT_URL: '#',
  NONE_SIGNS: 'None of the above',
  SIGNS_STEP: 2,

  QS: [
    {
      k: 'Step 1 of 5 — Skincare History',
      q: 'What anti-aging treatments have you used in the past?',
      multi: false,
      o: [
        'Luxury creams, serums, and hyaluronic acid (temporary surface hydration only)',
        'Prescription retinoids or AHA/BHAs (caused redness/peeling with minimal tightening)',
        'Oral collagen powders and skin supplements (saw zero structural difference)',
        'In-office procedures (lasers, microneedling, Botox/fillers)'
      ]
    },
    {
      k: 'Step 2 of 5 — Age Bracket',
      q: 'What is your current age range?',
      multi: false,
      o: ['Under 35', '35–44', '45–54', '55–64', '65+']
    },
    {
      k: 'Step 3 of 5 — Dermal Symptoms & Cellular Aging',
      q: 'Which structural skin changes do you currently notice?',
      multi: true,
      hint: 'Select all that apply — then hit Continue',
      o: [
        'Skin feels thin, crepey, and has lost its firm youthful bounce',
        'Deep expression lines around eyes, forehead, and mouth becoming permanent',
        'Loss of firmness and jawline/neck sagging',
        'Chronic redness, sensitivity, or dull dehydrated texture',
        'Thinning hair or increased shedding at the hairline',
        'None of the above'
      ]
    },
    {
      k: 'Step 4 of 5 — Primary Aesthetic Goal',
      q: 'What is your main biological beauty priority?',
      multi: false,
      o: [
        'Rebuild true dermal thickness and stimulate deep Type I/III collagen',
        'Erase deep wrinkles and restore natural elastic snap-back',
        'Rejuvenate hair density, skin radiance, and fascial tightness simultaneously'
      ]
    },
    {
      k: 'Step 5 of 5 — Clinical Consultation',
      q: 'Are you ready to try a physician-guided bio-active peptide protocol (KLOW)?',
      multi: false,
      o: [
        'Yes, I want to trigger deep cellular remodeling from within',
        'Yes, if it avoids surface irritation and delivers permanent results',
        'I am exploring the clinical literature first'
      ]
    }
  ],

  LOADERS: [
    'Analyzing dermal fibroblast signaling activity…',
    'Evaluating skin barrier vs deep ECM collagen deficit…',
    'Compiling your customized KLOW assessment…'
  ],

  result: {
    badge: '✓ DERMAL REGENERATION CANDIDATE',
    title: 'High Qualification for Deep Dermal Matrix Protocol',
    indexLabel: 'Dermal Collagen Depletion Index',
    scaleLeft: 'SURFACE AGING',
    scaleRight: 'DEEP ECM COLLAPSE',
    note: function(n, total) {
      return '<strong>You matched ' + n + ' structural dermal deficit markers.</strong> Your skin concerns stem from deep reticular fibroblast dormancy and micro-capillary starvation, which topical creams cannot reach but the KLOW 4-peptide matrix directly re-ignites.';
    },
    disclaimer: 'You meet the preliminary medical criteria for the physician-guided KLOW protocol.',
    cta: 'CHECK BATCH AVAILABILITY & CLAIM PROTOCOL →',
    foot: 'Confidential clinical intake. 100% satisfaction guarantee.'
  },

  notQualified: {
    title: 'Assessment Results: Mild Surface Changes Only',
    paras: [
      'Your reported symptoms reflect early, surface-level skin dryness rather than deep extracellular matrix collapse.',
      'We recommend continuing with standard topical hydration and sun protection before considering advanced peptide protocols.'
    ]
  }
};
