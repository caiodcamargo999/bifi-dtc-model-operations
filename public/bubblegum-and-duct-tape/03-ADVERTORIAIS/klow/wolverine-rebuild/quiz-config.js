/* ADV1 — Klow: The Wolverine Cellular Rebuild & Total Biological Matrix */
window.QUIZ = {
  NEXT_URL: '#',
  NONE_SIGNS: 'None of the above',
  SIGNS_STEP: 2,

  QS: [
    {
      k: 'Step 1 of 5 — Physical Wear & Tear History',
      q: 'Which best describes your physical activity and injury history?',
      multi: false,
      o: [
        'Former/current athlete or active professional dealing with chronic joint wear',
        'Suffering from tendonitis, ligament strains, or slow tissue healing',
        'Experiencing accelerated aging in joints, skin density, and vitality',
        'Recovering from a past injury or orthopedic surgery'
      ]
    },
    {
      k: 'Step 2 of 5 — Age Bracket',
      q: 'What is your current age range?',
      multi: false,
      o: ['Under 35', '35–44', '45–54', '55–64', '65+']
    },
    {
      k: 'Step 3 of 5 — Specific Biological Symptoms',
      q: 'Which of the following symptoms do you currently experience?',
      multi: true,
      hint: 'Select all that apply — then hit Continue',
      o: [
        'Persistent joint pain or stiffness in knees, shoulders, hips, or lower back',
        'Morning mobility delay (takes 15-30 minutes to "warm up" joints)',
        'Tendon pain (Achilles, rotator cuff, patellar, tennis elbow)',
        'Noticeable thinning of skin, loss of elasticity, or facial fine lines',
        'Sluggish physical recovery after workouts or active days',
        'None of the above'
      ]
    },
    {
      k: 'Step 4 of 5 — Treatments Previously Attempted',
      q: 'What solutions have you already tried?',
      multi: false,
      o: [
        'Oral collagen, glucosamine, or joint supplements (mild/no relief)',
        'Cortisone injections or NSAIDs (temporary relief, returned worse)',
        'Physical therapy or massage (helps temporarily)',
        'Have not attempted structured medical protocols yet'
      ]
    },
    {
      k: 'Step 5 of 5 — Clinical Protocol Readiness',
      q: 'Are you looking for a physician-guided bio-regenerative peptide protocol?',
      multi: false,
      o: [
        'Yes, I want the full synergistic 4-peptide matrix (KLOW)',
        'Yes, if it repairs joints, skin, and connective tissue simultaneously',
        'I am evaluating clinical research first'
      ]
    }
  ],

  LOADERS: [
    'Evaluating extracellular matrix degradation score…',
    'Calculating avascular tissue repair index…',
    'Compiling your regenerative peptide report…'
  ],

  result: {
    badge: '✓ BIO-REGENERATIVE CANDIDATE',
    title: 'High Match for Quad-Peptide Cellular Reconstruction',
    indexLabel: 'Extracellular Matrix Exhaustion Index',
    scaleLeft: 'INTACT REPAIR',
    scaleRight: 'ECM EXHAUSTION',
    note: function(n, total) {
      return '<strong>You matched ' + n + ' key tissue exhaustion markers.</strong> Your symptoms indicate chronic micro-inflammation and avascular repair failure, which respond directly to the synergistic 4-peptide KLOW matrix (GHK-Cu + BPC-157 + TB-500 + KPV).';
    },
    disclaimer: 'You meet preliminary qualification guidelines for the physician-guided KLOW protocol.',
    cta: 'CHECK BATCH AVAILABILITY & CLAIM PROTOCOL →',
    foot: 'Confidential clinical intake. Direct physician telehealth.'
  },

  notQualified: {
    title: 'Assessment Results: Low Tissue Exhaustion Indicated',
    paras: [
      'Based on your answers, your connective tissues and joints do not display severe extracellular matrix degradation.',
      'We recommend standard physical therapy and mobility routines without specialized peptide secretagogues.'
    ]
  }
};
