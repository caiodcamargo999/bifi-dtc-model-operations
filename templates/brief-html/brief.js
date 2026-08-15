
function showSection(id, e) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');

  if (e && e.currentTarget) e.currentTarget.classList.add('active');

  const titles = {
    'overview': ['Vis\u00e3o Geral', 'Overview do produto e da oferta'],
    'target': ['Target Audience', 'P\u00fablico-alvo, localiza\u00e7\u00e3o e renda'],
    'avatars': ['Avatares', '10 personas detalhadas com gatilhos de convers\u00e3o'],
    'psychology': ['Won\u0027t Tell / Can\u0027t Tell', 'O que ela esconde e o que ela n\u00e3o sabe que sente'],
    'emotional-code': ['C\u00f3digo Emocional', 'Ethos \u00d7 Pathos \u00d7 Formato por persona'],
    'awareness': ['Est\u00e1gios de Consci\u00eancia', 'Mensagem certa para cada n\u00edvel de awareness'],
    'bigidea': ['Big Idea & Mecanismo', 'Narrativa central, causa raiz e mecanismo da solu\u00e7\u00e3o'],
    'ingredients': ['Ingredientes', 'Ativos e fun\u00e7\u00e3o persuasiva de cada ingrediente'],
    'forces': ['For\u00e7as Vitais & VOC', 'Motores emocionais e linguagem real do p\u00fablico'],
    'objections': ['Obje\u00e7\u00f5es', 'Respostas para as principais obje\u00e7\u00f5es'],
    'estruturas': ['Estruturas Invis\u00edveis', '5 ads dissecados em blocos narrativos \u2014 EN & PT-BR'],
    'hooks': ['\u00c2ngulos & Hooks', '8 \u00e2ngulos com 40 hooks prontos para copiar'],
    'longtext': ['Long Text Ads', '8 an\u00fancios long-form com bot\u00e3o de c\u00f3pia'],
    'metricas': ['M\u00e9tricas de Tr\u00e1fego', 'Faixas de refer\u00eancia por tipo de criativo \u2014 imagem e v\u00eddeo']
  };

  const t = titles[id] || ['', ''];
  document.getElementById('page-title').textContent = t[0];
  document.getElementById('page-subtitle').textContent = t[1];

  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');

  window.scrollTo(0, 0);
}

function toggleAvatar(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg || '\u2713 Copiado!';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

function copyAdText(bodyId) {
  const el = document.getElementById(bodyId);
  if (!el) return;
  // usa apenas o idioma visivel
  let scope = el;
  const langs = el.querySelectorAll('.lang-content');
  if (langs.length) {
    for (let i = 0; i < langs.length; i++) {
      if (window.getComputedStyle(langs[i]).display !== 'none') { scope = langs[i]; break; }
    }
  }
  // um paragrafo por bloco, separados por linha em branco; rotulos de dissecacao ficam de fora
  const paras = scope.querySelectorAll('p');
  let text = '';
  if (paras.length) {
    const arr = [];
    for (let i = 0; i < paras.length; i++) {
      const t = paras[i].innerText.trim();
      if (t) arr.push(t);
    }
    text = arr.join('\n\n');
  } else {
    text = scope.innerText.trim();
  }
  navigator.clipboard.writeText(text).then(() => {
    showToast('\u2713 Ad copiado!');
    const card = el.closest('.ad-card');
    card.querySelectorAll('.copy-btn, .copy-btn-bottom').forEach(btn => {
      btn.classList.add('copied');
      const orig = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Copiado!';
      setTimeout(() => { btn.classList.remove('copied'); btn.innerHTML = orig; }, 2000);
    });
  });
}

function copyHook(hookId) {
  const el = document.getElementById(hookId);
  if (!el) return;
  const text = el.querySelector('p').innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast('\u2713 Hook copiado!');
    const btn = el.querySelector('.copy-btn-sm');
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 2000);
  });
}

function switchLang(cardId, lang, btn) {
  var card = document.getElementById(cardId);
  card.querySelectorAll('.lang-content').forEach(function(el) {
    el.style.display = 'none';
  });
  card.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  card.querySelector('[data-lang="' + lang + '"]').style.display = 'block';
  btn.classList.add('active');
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('show');
}
