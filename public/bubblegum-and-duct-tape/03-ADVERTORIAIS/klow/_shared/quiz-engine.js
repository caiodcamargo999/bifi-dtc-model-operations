/* Quiz engine — shared by all 3 advertorials
   Config lives in quiz-config.js in each folder (window.QUIZ).
   Supports all CTA buttons: a.cta-btn, .btn-sidebar-cta, .cta-btn-large, .m-btn
*/
(function(){
  var C = window.QUIZ;
  if(!C){ return; }

  var QS = C.QS, LOADERS = C.LOADERS, NONE = C.NONE_SIGNS,
      SIGNS = (C.SIGNS_STEP == null ? 2 : C.SIGNS_STEP);

  QS[SIGNS].exclusive = NONE;

  var ov=document.getElementById('cwqOverlay'), body=document.getElementById('cwqBody'),
      card=document.getElementById('cwqCard'), prog=document.querySelector('#cwqProg i'),
      answers=[], step=0;

  function withParams(u){
    try{
      var qs=location.search.replace(/^\?/,'');
      if(!qs||u==='#')return u;
      return u+(u.indexOf('?')>-1?'&':'?')+qs;
    }catch(e){return u;}
  }
  function openQuiz(){answers=[];step=0;ov.classList.add('open');document.body.style.overflow='hidden';card.classList.remove('res');render();ov.scrollTop=0;}
  function closeQuiz(){ov.classList.remove('open');document.body.style.overflow='';}
  function setProg(p){prog.style.width=p+'%';}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}

  function render(){
    var Q=QS[step], sel=answers[step]||(Q.multi?[]:null);
    setProg(step/QS.length*100);
    var h='<p class="cwq-kicker">'+Q.k+'</p><h3 class="cwq-q">'+Q.q+'</h3>';
    if(Q.hint)h+='<p class="cwq-hint">'+Q.hint+'</p>';
    h+='<div class="cwq-opts'+(Q.pics?' grid':'')+'">';
    Q.o.forEach(function(o,i){
      var on=Q.multi?sel.indexOf(o)>-1:sel===o;
      var _p=String(o).split('|'), _em=_p.length>1?_p.shift():'', _lb=_p.join('|');
      var _pic=_em.indexOf('img:')===0;
      var _vis=_pic?'<img class="pic-img" src="imagens/'+_em.slice(4)+'" alt="">'
                  :(_em?'<span class="emo" aria-hidden="true">'+_em+'</span>':'');
      h+='<button type="button" class="cwq-opt'+(_pic?' pic':'')+(on?' sel':'')+'" data-i="'+i+'"><span class="tick">'+(on?'✓':'')+'</span>'+_vis+'<span class="lbl">'+esc(_lb)+'</span></button>';
    });
    h+='</div>';
    if(Q.multi)h+='<button type="button" class="cwq-continue" id="cwqCont"'+(sel.length?'':' disabled')+'>'+(Q.btn||'Continue →')+'</button>';
    if(step>0)h+='<button type="button" class="cwq-back" id="cwqBack">← Back</button>';
    body.innerHTML=h;
    ov.scrollTop=0;

    Array.prototype.forEach.call(body.querySelectorAll('.cwq-opt'),function(btn){
      btn.onclick=function(){
        var val=Q.o[+btn.getAttribute('data-i')];
        if(Q.multi){
          var arr=answers[step]||[];
          if(val===Q.exclusive){ arr=arr.indexOf(val)>-1?[]:[val]; }
          else{
            var ix=arr.indexOf(val);
            if(ix>-1)arr.splice(ix,1);else arr.push(val);
            var ex=arr.indexOf(Q.exclusive); if(ex>-1)arr.splice(ex,1);
          }
          answers[step]=arr;
          render();
        }else{
          answers[step]=val;
          btn.classList.add('sel');btn.querySelector('.tick').textContent='✓';
          setTimeout(next,200);
        }
      };
    });
    var c=document.getElementById('cwqCont');
    if(c)c.onclick=next;
    var bk=document.getElementById('cwqBack');
    if(bk)bk.onclick=function(){step--;render();};
  }

  function next(){
    step++;
    if(step<QS.length)render();else loader(0);
  }

  function loader(i){
    setProg(100);
    body.innerHTML='<div class="cwq-loader"><div class="cwq-spin"></div><h3 class="cwq-loadtitle">'+LOADERS[i]+'</h3><p class="cwq-wait">Please wait</p></div>';
    ov.scrollTop=0;
    setTimeout(function(){ i+1<LOADERS.length?loader(i+1):result(); },1300);
  }

  function result(){
    var signs=answers[SIGNS]||[];
    if(signs.length===1 && signs[0]===NONE){ notQualified(); return; }
    var R=C.result;
    var total=QS[SIGNS].o.length-1;
    var n=Math.min(signs.length,total);
    var pos=Math.round(Math.max(30,Math.min(92,30+(n/total)*62)));
    card.classList.add('res');
    var h='';
    h+='<div class="cwq-badge">'+R.badge+'</div>';
    h+='<h3 class="cwq-rtitle">'+R.title+'</h3>';
    h+='<p class="cwq-sec">'+R.indexLabel+'</p>';
    h+='<div class="cwq-idx"><div class="lbl"><span>'+R.scaleLeft+'</span><span>'+R.scaleRight+'</span></div>';
    h+='<div class="bar"><span class="pin" style="left:'+pos+'%"></span></div>';
    h+='<p class="note">'+R.note(n,total)+'</p></div>';
    h+='<p class="cwq-ship">'+R.disclaimer+'</p>';
    h+='<a class="cwq-cta" href="'+withParams(C.NEXT_URL)+'">'+R.cta+'</a>';
    h+='<p class="cwq-wait">'+R.foot+'</p>';
    body.innerHTML=h;
    ov.scrollTop=0;
  }

  function notQualified(){
    var N=C.notQualified;
    card.classList.add('res');
    var h='<div class="cwq-nq">';
    h+='<h3 class="cwq-rtitle">'+N.title+'</h3>';
    N.paras.forEach(function(p){ h+='<p>'+p+'</p>'; });
    h+='<button type="button" class="cwq-continue" id="cwqNqClose">Close</button>';
    h+='</div>';
    body.innerHTML=h;
    ov.scrollTop=0;
    document.getElementById('cwqNqClose').onclick=closeQuiz;
  }

  document.addEventListener('click',function(e){
    var a=e.target.closest?e.target.closest('a.cta-btn, .btn-sidebar-cta, .cta-btn-large, .m-btn'):null;
    if(a && !a.closest('.cwq-overlay')){e.preventDefault();e.stopPropagation();openQuiz();}
  },true);
  document.getElementById('cwqClose').onclick=closeQuiz;
  ov.addEventListener('click',function(e){if(e.target===ov)closeQuiz();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeQuiz();});
})();
