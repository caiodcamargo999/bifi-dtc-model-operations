/* ADV1 — Tesamorelin: Post-GLP-1 Muscle Loss & Visceral Rebound */
window.QUIZ = {
  NEXT_URL: 'https://tesaoffer.stickywell.com/',
  NONE_SIGNS: 'None of the above',
  SIGNS_STEP: 2,

  QS: [
    {
      k: 'Step 1 of 5 — Your Weight History',
      q: 'Have you used a GLP-1 medication (e.g., Semaglutide/Tirzepatide) or strict calorie restriction?',
      multi: false,
      o: [
        'Yes, currently taking a GLP-1 medication',
        'Yes, previously took a GLP-1 and stopped',
        'No, but I have done severe low-calorie/keto diets',
        'No, I rely strictly on exercise and standard dieting'
      ]
    },
    {
      k: 'Step 2 of 5 — Age Bracket',
      q: 'What is your current age range?',
      multi: false,
      o: ['Under 35', '35–44', '45–54', '55–64', '65+']
    },
    {
      k: 'Step 3 of 5 — Midsection & Body Symptoms',
      q: 'Which of these physical changes do you currently experience?',
      multi: true,
      hint: 'Select all that apply — then hit Continue',
      o: [
        'My stomach feels hard, firm, and pushed out like a dome',
        'I lost weight on the scale, but my waistline barely shrank',
        'I notice visible muscle loss in my arms, legs, and shoulders',
        'My energy levels crash by mid-afternoon',
        'Traditional crunches and cardio do not flatten my stomach',
        'None of the above'
      ]
    },
    {
      k: 'Step 4 of 5 — Primary Health Goal',
      q: 'What is your main biological objective right now?',
      multi: false,
      o: [
        'Target stubborn deep visceral belly fat while protecting muscle',
        'Rebuild lost muscle density and athletic energy',
        'Normalize cardiovascular and metabolic blood markers',
        'All of the above'
      ]
    },
    {
      k: 'Step 5 of 5 — Clinical Readiness',
      q: 'Are you open to a physician-guided peptide protocol if qualified?',
      multi: false,
      o: [
        'Yes, I want a targeted clinical solution',
        'Yes, if it preserves my natural hormone production',
        'I want to learn more about the scientific research first'
      ]
    }
  ],

  LOADERS: [
    'Analyzing your body composition pattern…',
    'Checking visceral vs subcutaneous indicators…',
    'Generating your clinical evaluation summary…'
  ],

  result: {
    badge: '✓ CLINICAL ASSESSMENT READY',
    title: 'High Correlation with Deep Visceral Fat Entrapment',
    indexLabel: 'Visceral-to-Lean Tissue Imbalance Index',
    scaleLeft: 'BALANCED',
    scaleRight: 'HIGH VAT RISK',
    note: function(n, total) {
      return '<strong>You matched ' + n + ' key clinical indicators.</strong> Your answers indicate a classic post-weight-loss or age-related Somatopause pattern: visceral fat stored behind the abdominal wall with concurrent lean muscle depletion.';
    },
    disclaimer: 'Based on your reported symptoms, you qualify for a physician-guided review of the targeted Tesamorelin GHRH peptide protocol.',
    cta: 'CHECK BATCH AVAILABILITY & CLAIM CONSULTATION →',
    foot: 'Confidential clinical assessment. Reviewed by licensed medical team.'
  },

  notQualified: {
    title: 'Assessment Results: Low Visceral Risk Indicated',
    paras: [
      'Based on your answers, your midsection does not display the classic signs of deep visceral fat entrapment.',
      'Your concerns appear more related to standard subcutaneous fat or lifestyle adjustments, which do not require specialized GHRH secretagogue protocols.',
      'We recommend continuing with standard resistance training and whole-food nutritional protocols.'
    ]
  }
};
