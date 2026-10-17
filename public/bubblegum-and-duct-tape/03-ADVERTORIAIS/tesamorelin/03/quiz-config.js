/* ADV3 — Tesamorelin: Executive Wake-Up Call & Cardiovascular Biomarker Recovery */
window.QUIZ = {
  NEXT_URL: 'https://tesaoffer.stickywell.com/',
  NONE_SIGNS: 'None of the above',
  SIGNS_STEP: 2,

  QS: [
    {
      k: 'Step 1 of 5 — Professional & Health Context',
      q: 'How would you describe your lifestyle and work demands?',
      multi: false,
      o: [
        'Demanding career with high stress, long hours, and creeping waistline',
        'Executive/management role where fatigue and visceral fat impact performance',
        'Active professional seeking proactive longevity and metabolic optimization',
        'Looking to reverse recent bloodwork warnings (triglycerides/liver)'
      ]
    },
    {
      k: 'Step 2 of 5 — Age Bracket',
      q: 'What is your current age range?',
      multi: false,
      o: ['Under 35', '35–44', '45–54', '55–64', '65+']
    },
    {
      k: 'Step 3 of 5 — Clinical & Physical Symptoms',
      q: 'Which of these health markers or physical signs apply to you?',
      multi: true,
      hint: 'Select all that apply — then hit Continue',
      o: [
        'Waist measurement above 37 inches (men) or 32 inches (women)',
        'Elevated fasting triglycerides or elevated liver enzymes (ALT/AST)',
        'Afternoon energy slump and disrupted non-restorative sleep',
        'Midsection fullness that makes dress clothes and belts uncomfortable',
        'Doctor expressed concern about fatty liver or cardiovascular risk',
        'None of the above'
      ]
    },
    {
      k: 'Step 4 of 5 — Priority Outcome',
      q: 'What is your primary clinical objective?',
      multi: false,
      o: [
        'Reduce dangerous visceral fat and normalize liver/cardiovascular markers',
        'Reclaim executive physical drive, deep sleep, and all-day stamina',
        'Shrink waistline by 3+ inches while maintaining athletic muscle mass',
        'All of the above'
      ]
    },
    {
      k: 'Step 5 of 5 — Physician Telehealth Consultation',
      q: 'Would you like to review your bloodwork with an accredited longevity physician?',
      multi: false,
      o: [
        'Yes, I want a physician-guided clinical protocol',
        'Yes, if the protocol fits seamlessly into my busy schedule',
        'I am gathering research first'
      ]
    }
  ],

  LOADERS: [
    'Analyzing cardiovascular and hepatic biomarker indicators…',
    'Reviewing visceral fat metabolic risk score…',
    'Generating executive clinical protocol report…'
  ],

  result: {
    badge: '✓ EXECUTIVE EVALUATION READY',
    title: 'High Qualification for Clinical Visceral Fat Protocol',
    indexLabel: 'Hepato-Visceral Metabolic Load',
    scaleLeft: 'OPTIMIZED',
    scaleRight: 'ELEVATED VAT',
    note: function(n, total) {
      return '<strong>You matched ' + n + ' executive metabolic risk factors.</strong> Your profile demonstrates significant visceral fat accumulation and hormonal blunting that respond directly to nighttime GHRH peptide administration.';
    },
    disclaimer: 'You meet clinical intake guidelines for the physician-monitored Tesamorelin protocol.',
    cta: 'CHECK BATCH AVAILABILITY & CLAIM CONSULTATION →',
    foot: 'Confidential clinical review. Compliant with HIPAA privacy standards.'
  },

  notQualified: {
    title: 'Assessment Results: Low Metabolic Risk Profile',
    paras: [
      'Based on your answers, you do not exhibit the critical biomarkers or waistline indicators associated with severe visceral organ fat accumulation.',
      'We recommend maintaining your current lifestyle and repeating this assessment during your next annual physical.'
    ]
  }
};
