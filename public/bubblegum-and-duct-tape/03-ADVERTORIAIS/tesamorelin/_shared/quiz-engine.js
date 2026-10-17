/* Parameter-Preserving Direct CTA & Quiz Engine
   Synchronizes all CTA buttons (a.cta-btn, .btn-sidebar-cta, .cta-btn-large, .m-btn)
   to directly navigate to the target offer URL with all incoming UTMs & tracking parameters.
*/
(function(){
  var C = window.QUIZ || {};
  var DEST = (C.NEXT_URL && C.NEXT_URL !== '#') ? C.NEXT_URL : 'https://tesaoffer.stickywell.com/';

  function withParams(u){
    try{
      var qs = window.location.search.replace(/^\?/, '');
      if(!qs || u === '#') return u;
      return u + (u.indexOf('?') > -1 ? '&' : '?') + qs;
    }catch(e){ return u; }
  }

  function syncCTAButtons(){
    var targetUrl = withParams(DEST);
    var links = document.querySelectorAll('a.cta-btn, a.btn-sidebar-cta, a.cta-btn-large, a.m-btn, .cwq-cta');
    for (var i = 0; i < links.length; i++) {
      links[i].setAttribute('href', targetUrl);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncCTAButtons);
  } else {
    syncCTAButtons();
  }

  // Handle any remaining button tags or dynamic clicks
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('a.cta-btn, a.btn-sidebar-cta, a.cta-btn-large, a.m-btn, button.cta-btn, button.btn-sidebar-cta, button.cta-btn-large, button.m-btn') : null;
    if (a) {
      if (window.fbq) {
        try { fbq('track', 'InitiateCheckout'); } catch(err){}
      }
      if (a.tagName === 'BUTTON') {
        e.preventDefault();
        window.location.href = withParams(DEST);
      }
    }
  }, false);
})();
