/* ADV2 — Tesamorelin: The Somatopause Bottleneck & Organ Fat Behind the Muscle Wall */
window.QUIZ = {
  NEXT_URL: 'https://myvitallife.fit/tesamorelin-checkout',
  NONE_SIGNS: 'None of the above',
  SIGNS_STEP: 2,

  QS: [
    {
      k: 'Step 1 of 5 — Workout & Nutrition Baseline',
      q: 'How would you describe your current discipline and routine?',
      multi: false,
      o: [
        'I exercise regularly (3-5x/wk) and eat clean, but my stomach won\'t flatten',
        'I train consistently but my results stopped completely in my 40s',
        'I recently started working out and want to target stubborn belly fat',
        'I struggle with low energy and irregular workout routines'
      ]
    },
    {
      k: 'Step 2 of 5 — Age Bracket',
      q: 'What is your current age range?',
      multi: false,
      o: ['Under 35', '35–44', '45–54', '55–64', '65+']
    },
    {
      k: 'Step 3 of 5 — Physical Belly Characteristics',
      q: 'Which of the following describe your midsection?',
      multi: true,
      hint: 'Select all that apply — then hit Continue',
      o: [
        'My stomach feels hard and firm to the touch rather than soft/pinchable',
        'My abdominal wall protrudes outward like an inflated dome or basketball',
        'I carry very little fat on my arms or legs, but store it all in my belly',
        'Crunches and core exercises make my belly push out further, not flatter',
        'My shirts pull tight at the midsection while fitting loosely on my chest',
        'None of the above'
      ]
    },
    {
      k: 'Step 4 of 5 — Biological Symptoms',
      q: 'Do you notice any of these age-related metabolic shifts?',
      multi: false,
      o: [
        'Decreased deep sleep and morning grogginess',
        'Slower recovery from workouts and muscle fatigue',
        'Elevated blood pressure or fasting triglycerides',
        'All of the above'
      ]
    },
    {
      k: 'Step 5 of 5 — Clinical Consultation Goal',
      q: 'What is your primary goal for a clinical peptide protocol?',
      multi: false,
      o: [
        'Selectively oxidize visceral fat behind the abdominal wall',
        'Restore youthful nocturnal growth hormone pulsatility',
        'Reclaim physical momentum, athletic drive, and lean definition'
      ]
    }
  ],

  LOADERS: [
    'Evaluating abdominal fat compartment distribution…',
    'Analyzing Somatopause GHRH pulse decay rate…',
    'Compiling your clinical qualification profile…'
  ],

  result: {
    badge: '✓ QUALIFICATION CONFIRMED',
    title: 'High Probability of Visceral Compartment Entrapment',
    indexLabel: 'Somatopause Visceral Index',
    scaleLeft: 'SUBCUTANEOUS',
    scaleRight: 'DEEP VISCERAL (VAT)',
    note: function(n, total) {
      return '<strong>You matched ' + n + ' clinical VAT indicators.</strong> Your symptoms indicate that your protruding midsection is driven by deep visceral adipose tissue behind the abdominal wall, caused by age-related GHRH secretagogue decline.';
    },
    disclaimer: 'You meet the preliminary medical criteria for the physician-guided Tesamorelin peptide protocol to target deep visceral fat.',
    cta: 'CHECK BATCH AVAILABILITY & RESERVE PROTOCOL →',
    foot: 'Confidential clinical review. Zero obligation.'
  },

  notQualified: {
    title: 'Assessment Results: Low Visceral Risk Indicated',
    paras: [
      'Your reported symptoms do not align with deep visceral fat entrapment behind the abdominal wall.',
      'Your midsection fat appears to be predominantly standard subcutaneous fat, which responds well to conventional caloric adjustments and progressive resistance training.'
    ]
  }
};
