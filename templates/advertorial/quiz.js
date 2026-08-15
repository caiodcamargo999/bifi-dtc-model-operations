
(function(){
  /* >>> SET THE CHECKOUT URL HERE (3-bottle package) <<< */
  var CHECKOUT_URL = '#';

  var IMGDIR = 'images/';
  var PRODUCT_IMG = 'images/image8.webp';
  var NONE_SIGNS = 'None of the above';

  var QS = [
    {k:'Step 1 of 6 \u2014 Your hair today', q:'Which image best represents the condition of your hair today?',
     multi:false, pics:true,
     o:['img:hs-temples.webp|Thinning Temples',
        'img:hs-part-crown.webp|Part & Crown Thinning',
        'img:hs-moderate.webp|Moderate Hair Loss',
        'img:hs-severe.webp|Severe Hair Loss']},
    {k:'Step 2 of 6 \u2014 About you', q:'What is your age range?', multi:false,
     o:['Under 30','30\u201339','40\u201349','50\u201359','60+']},
    {k:'Step 3 of 6 \u2014 Your signs', q:'Which of these do you currently notice?', multi:true,
     hint:'Select all that apply \u2014 then hit Continue',
     o:['More hair on my pillow than there used to be',
        'Hair in the shower drain every time I wash it',
        'My ponytail feels thinner in my hand',
        'I can see my scalp through my part',
        'My part looks wider than it did a year ago',
        'My hairline or temples are thinning',
        'My scalp itches, flakes, or feels tight',
        'I arrange my hair to cover a thin spot',
        NONE_SIGNS]},
    {k:'Step 4 of 6 \u2014 Your hair', q:'When did you first notice it?', multi:false,
     o:['After pregnancy',
        'Around perimenopause or menopause',
        'After starting a GLP-1 (Ozempic, Wegovy, Mounjaro)',
        'After rapid weight loss',
        'After a stressful period, illness or surgery',
        'It came on gradually \u2014 no clear trigger']},
    {k:'Step 5 of 6 \u2014 Your hair', q:'How long has this been going on?', multi:false,
     o:['Less than 6 months','6\u201312 months','1\u20132 years','2\u20135 years','More than 5 years']},
    {k:'Step 6 of 6 \u2014 Your experience', q:'What have you already tried?', multi:true,
     hint:'Select all that apply \u2014 then hit Continue', exclusive:'Nothing yet',
     btn:'SEE IF I QUALIFY FOR CROWNED \u2192',
     o:['Biotin, collagen or hair vitamins',
        'Thickening shampoos or volumizing sprays',
        'Rosemary oil or scalp oils',
        'Minoxidil / Rogaine',
        'A copper peptide serum made for the face',
        'Salon or clinic treatments (PRP, laser, microneedling)',
        'Nothing yet']}
  ];
  QS[2].exclusive = NONE_SIGNS;

  var LOADERS = ['Reviewing your profile\u2026','Calculating your Hair Collapse Index\u2026','Preparing your personalized protocol\u2026'];

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
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;');}

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
      var _vis=_pic?'<img class="pic-img" src="'+IMGDIR+_em.slice(4)+'" alt="">'
                  :(_em?'<span class="emo" aria-hidden="true">'+_em+'</span>':'');
      h+='<button type="button" class="cwq-opt'+(_pic?' pic':'')+(on?' sel':'')+'" data-i="'+i+'"><span class="tick">'+(on?'\u2713':'')+'</span>'+_vis+'<span class="lbl">'+esc(_lb)+'</span></button>';
    });
    h+='</div>';
    if(Q.multi)h+='<button type="button" class="cwq-continue" id="cwqCont"'+(sel.length?'':' disabled')+'>'+(Q.btn||'Continue \u2192')+'</button>';
    if(step>0)h+='<button type="button" class="cwq-back" id="cwqBack">\u2190 Back</button>';
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
          btn.classList.add('sel');btn.querySelector('.tick').textContent='\u2713';
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

  function fmtDate(){
    var d=new Date(); d.setDate(d.getDate()+2);
    var M=['January','February','March','April','May','June','July','August','September','October','November','December'];
    var W=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return W[d.getDay()]+', '+M[d.getMonth()]+' '+d.getDate();
  }
  function joinShort(arr,max){
    var a=arr.slice(0,max);
    var s=a.join(', ');
    if(arr.length>max)s+=' +'+(arr.length-max)+' more';
    return s;
  }

  function result(){
    var signs=answers[2]||[];
    if(signs.length===1 && signs[0]===NONE_SIGNS){ notQualified(); return; }
    var n=Math.min(signs.length,8);
    var pos=Math.round(Math.max(66,Math.min(96,66+(n/8)*30)));
    card.classList.add('res');
    var h='';
    h+='<div class="cwq-badge">\u2713 YOUR RESULT IS READY</div>';
    h+='<h3 class="cwq-rtitle">You\u2019re a perfect match for Crowned</h3>';
    h+='<p class="cwq-sec">Your Hair Collapse Index</p>';
    h+='<div class="cwq-idx"><div class="lbl"><span>HEALTHY</span><span>COLLAPSING</span></div>';
    h+='<div class="bar"><span class="pin" style="left:'+pos+'%"></span></div>';
    h+='<p class="note"><strong>Active Hair Collapse \u2014 but your roots are strangled, not dead.</strong> They still respond. Every morning you wait, fewer do.</p></div>';
    h+='<div class="cwq-prod"><img src="'+PRODUCT_IMG+'" alt="Crowned Hair Regrowth Serum \u2014 3 bottles"></div>';
    h+='<div class="cwq-scarce"><div class="bar"><i></i></div><span>82% of today\u2019s stock has already been claimed</span></div>';
    h+='<p class="cwq-ship">\ud83d\ude9a Order now and it arrives by <strong>'+fmtDate()+'</strong></p>';
    h+='<a class="cwq-cta" href="'+withParams(CHECKOUT_URL)+'">UNLOCK MY 70% DISCOUNT NOW \u2192</a>';
    body.innerHTML=h;
    ov.scrollTop=0;
  }

  function notQualified(){
    card.classList.add('res');
    var h='<div class="cwq-nq">';
    h+='<h3 class="cwq-rtitle">Based on your answers, Crowned isn\u2019t the right fit right now.</h3>';
    h+='<p>Your profile doesn\u2019t show the pattern Crowned was built for \u2014 and we\u2019d rather tell you that than take your money.</p>';
    h+='<p>If the signs start showing up later, come back and take this again. And if you have patchy loss, sudden loss, or loss with pain or scaling, please see a doctor first. Those have different causes and different answers.</p>';
    h+='<button type="button" class="cwq-continue" id="cwqNqClose">Close</button>';
    h+='</div>';
    body.innerHTML=h;
    ov.scrollTop=0;
    document.getElementById('cwqNqClose').onclick=closeQuiz;
  }

  document.addEventListener('click',function(e){
    var a=e.target.closest?e.target.closest('a.cta-btn'):null;
    if(a && !a.closest('.cwq-overlay')){e.preventDefault();e.stopPropagation();openQuiz();}
  },true);
  document.getElementById('cwqClose').onclick=closeQuiz;
  ov.addEventListener('click',function(e){if(e.target===ov)closeQuiz();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeQuiz();});
})();
