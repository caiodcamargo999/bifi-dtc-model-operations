/* ADV3 — Klow: Chronic Pain & Inflammatory Cascade Breakthrough */
window.QUIZ = {
  NEXT_URL: '#',
  NONE_SIGNS: 'None of the above',
  SIGNS_STEP: 2,

  QS: [
    {
      k: 'Step 1 of 5 — Clinical Diagnosis & Injury History',
      q: 'Which specific orthopedic or inflammatory condition applies to you?',
      multi: false,
      o: [
        'Chronic tendonitis or tendinopathy (Achilles, rotator cuff, patellar, elbow)',
        'Joint osteoarthritis or cartilage degeneration (knee, hip, spine)',
        'Chronic gastrointestinal inflammation, food sensitivities, or leaky gut from NSAIDs',
        'Multiple chronic pain sites combined with slow healing'
      ]
    },
    {
      k: 'Step 2 of 5 — Age Bracket',
      q: 'What is your current age range?',
      multi: false,
      o: ['Under 35', '35–44', '45–54', '55–64', '65+']
    },
    {
      k: 'Step 3 of 5 — Chronic Pain & Mobility Symptoms',
      q: 'Which of these daily physical limitations do you face?',
      multi: true,
      hint: 'Select all that apply — then hit Continue',
      o: [
        'Sharp or aching pain during first 10-15 minutes of walking or movement',
        'Inability to stand, walk, or exercise without flare-ups and throbbing',
        'Daily reliance on ibuprofen, Advil, or painkillers to function',
        'Digestive discomfort, bloating, or stomach burning from NSAID usage',
        'Pain that awakens you during the night',
        'None of the above'
      ]
    },
    {
      k: 'Step 4 of 5 — Past Interventions Attempted',
      q: 'What treatments have provided little to no permanent relief?',
      multi: false,
      o: [
        'Cortisone injections (helped briefly, returned worse)',
        'PRP (Platelet-Rich Plasma) or stem cell therapy (costly with minimal gain)',
        'Physical therapy and exercise rehab alone',
        'Considering surgery or told surgery is the only option left'
      ]
    },
    {
      k: 'Step 5 of 5 — Regenerative Protocol Readiness',
      q: 'Are you prepared to undergo a physician-monitored 4-peptide repair protocol?',
      multi: false,
      o: [
        'Yes, I want to accelerate blood flow and repair damaged connective tissue',
        'Yes, if it eliminates pain without harmful NSAIDs or surgery',
        'I am reviewing the clinical evidence first'
      ]
    }
  ],

  LOADERS: [
    'Evaluating avascular connective tissue micro-tears…',
    'Analyzing localized VEGF angiogenic potential…',
    'Generating your orthopedic recovery protocol…'
  ],

  result: {
    badge: '✓ HIGH REGENERATIVE QUALIFICATION',
    title: 'Candidate for KLOW Angiogenic Tissue Repair Protocol',
    indexLabel: 'Avascular Connective Tissue Damage Index',
    scaleLeft: 'MILD WEAR',
    scaleRight: 'AVASCULAR TRAP',
    note: function(n, total) {
      return '<strong>You matched ' + n + ' avascular healing trap indicators.</strong> Your chronic pain is perpetuated by a lack of micro-capillary blood supply and runaway cytokine inflammation, which the BPC-157, TB-500, KPV, and GHK-Cu in KLOW directly overcome.';
    },
    disclaimer: 'You meet the preliminary medical intake criteria for the physician-guided KLOW protocol.',
    cta: 'CHECK BATCH AVAILABILITY & CLAIM PROTOCOL →',
    foot: 'Confidential orthopedic evaluation. Licensed medical oversight.'
  },

  notQualified: {
    title: 'Assessment Results: Low Avascular Damage Indicated',
    paras: [
      'Your reported symptoms indicate minor acute strain rather than chronic avascular tissue breakdown.',
      'We recommend conservative rest and physical therapy before initiating advanced peptide therapy.'
    ]
  }
};
