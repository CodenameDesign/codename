/*
 * Civic Searchlight - Alerts page behaviour (mockup logic, vanilla JS, no dependencies).
 *
 * Expects the markup from components/alerts-card.html on the page, with these ids:
 *   #alert-sort (Filter + Sort bar, two <button>s), #alert-list, #saved-terms, #freq (radio group),
 *   #delete-alert, #mention-list
 * Loads data/alerts-data.json (path is relative to the PAGE, not this file - see DEV-HANDOFF.md for the schema).
 * This is reference behaviour for the UI states - port it to the app's own framework / API calls.
 */
(function () {
  var PLAY = "<button aria-label=\"Watch clip\" class=\"shrink-0 text-blue-500 hover:text-blue-500-hover transition-colors\" title=\"Watch clip\"><svg data-prefix=\"fas\" data-icon=\"circle-play\" class=\"svg-inline--fa fa-circle-play text-2xl\" role=\"img\" viewBox=\"0 0 512 512\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z\"></path></svg></button>"; /* play-button icon markup used in mention rows */
  fetch('data/alerts-data.json').then(function (r) { return r.json(); }).then(function (ALERTS) {
    ALERTS.forEach(function(a,i){
      a.created=i;
      a.recent=Math.max.apply(null,a.items.map(function(m){return Date.parse(m[0]);}));
      if(a.updated)a.recent=Math.max(a.recent,Date.parse(a.updated));
      a.week=parseInt(String(a.stats[0]).replace(/,/g,''),10);
      a.all=parseInt(String(a.stats[2]).replace(/,/g,''),10);
    });
    var CHIP='inline-flex items-center text-sm font-semibold rounded-lg py-xs px-md ';
    function city(t,w){return '<span class="'+CHIP+'bg-gray-100 text-gray-800"'+(w?' style="background:#fff"':'')+'>'+t+'</span>';}
    function topic(t){return '<span class="'+CHIP+'bg-amber-100 text-amber-800">'+t+'</span>';}
    var list=document.getElementById('alert-list'),ments=document.getElementById('mention-list'),
        terms=document.getElementById('saved-terms'),freq=document.getElementById('freq'),sortBar=document.getElementById('alert-sort');
    var BAR='<span aria-hidden="true" style="position:absolute;left:.25rem;top:.2rem;bottom:.2rem;width:2px;background:#111;border-radius:1px"></span>';
    var FREQS=['Instantly','Daily','Weekly','Pause'];
    var SORTS=[['recent','Most Recent'],['created','Created'],['az','A–Z'],['week','Mentions this week'],['all','Mentions all time'],['city','City A–Z']];
    var cur=0,filter={kind:'all',value:'All Alerts'},sortKey='recent';

    function matches(a){return filter.kind==='all'||(filter.kind==='freq'&&a.freq===filter.value)||(filter.kind==='term'&&a.topic===filter.value);}
    function cmp(x,y){
      var a=ALERTS[x],b=ALERTS[y],r=0;
      if(sortKey==='recent')r=b.recent-a.recent;
      else if(sortKey==='created')r=b.created-a.created;
      else if(sortKey==='az')r=a.topic.localeCompare(b.topic);
      else if(sortKey==='week')r=b.week-a.week;
      else if(sortKey==='all')r=b.all-a.all;
      else if(sortKey==='city')r=a.city.localeCompare(b.city);
      return r||(b.created-a.created);
    }
    function view(keepCur){
      var idx=[];
      ALERTS.forEach(function(a,i){if(matches(a)||(keepCur&&i===cur))idx.push(i);});
      return idx.sort(cmp);
    }
    function ensureSelection(){var v=view(false);if(cur<0||!ALERTS[cur]||v.indexOf(cur)<0)cur=v.length?v[0]:-1;}

    function renderList(){
      var v=view(true),h='';
      if(!v.length){list.innerHTML='<li class="text-sm text-gray-500" style="padding:1.25rem 1rem">'+(ALERTS.length?'No alerts match this filter.':'No saved alerts.')+'</li>';return;}
      v.forEach(function(i){
        var a=ALERTS[i],sel=i===cur,st='padding:.9rem 1rem;cursor:pointer;border-bottom:1px solid #e5e7eb;';
        if(sel)st+='background:var(--color-gray-100);position:relative;';
        h+='<li data-i="'+i+'" style="'+st+'">'+(sel?BAR:'')+'<div style="display:flex;gap:.5rem;flex-wrap:wrap">'+city(a.city,sel)+topic(a.topic)+'</div>'+
          '<div class="text-sm '+(a.freq==='Pause'?'text-gray-500':'text-red-500')+'" style="margin-top:.6rem">'+(a.freq==='Pause'?'Paused':a.freq)+'</div>'+
          '<div class="text-sm text-gray-500" style="margin-top:.2rem;white-space:nowrap"><strong class="text-gray-900">'+a.stats[0]+'</strong> this week &nbsp; <strong class="text-gray-900">'+a.stats[1]+'</strong> this month &nbsp; <strong class="text-gray-900">'+a.stats[2]+'</strong> all time</div></li>';
      });
      list.innerHTML=h;
    }
    function renderRight(){
      var a=ALERTS[cur],del=document.getElementById('delete-alert');
      var inputs=[].slice.call(freq.querySelectorAll('input'));
      if(!a){terms.innerHTML='';inputs.forEach(function(r){r.checked=false;r.disabled=true;});if(del)del.disabled=true;
        ments.innerHTML='<li class="text-sm text-gray-500" style="padding:1.25rem">Select an alert to see its mentions.</li>';return;}
      if(del)del.disabled=false;
      terms.innerHTML=city(a.city,1)+topic(a.topic);
      inputs.forEach(function(r){r.disabled=false;r.checked=r.parentNode.textContent.trim()===a.freq;});
      var h='';
      a.items.forEach(function(m){
        h+='<li style="padding:1rem 1.25rem;border-bottom:1px solid #e5e7eb;display:flex;gap:1rem;align-items:flex-start"><div style="flex:1;min-width:0"><time class="text-sm text-gray-400" style="display:block">'+m[0]+'</time>'+
          '<button type="button" class="text-base font-semibold text-gray-800 hover:text-blue-500 transition-colors leading-snug" style="display:block;text-align:left;margin:.6rem 0 .35rem">'+m[1]+'</button>'+
          '<p class="text-sm text-gray-700 leading-snug select-text" style="margin:0">'+m[2]+'</p></div>'+PLAY+'</li>';
      });
      ments.innerHTML=h;ments.scrollTop=0;
    }
    function renderAll(){renderList();renderRight();}

    /* ---- toast */
    var toastEl=null,toastTimer=null;
    function toast(msg,undo){
      if(toastEl){toastEl.remove();clearTimeout(toastTimer);}
      toastEl=document.createElement('div');toastEl.setAttribute('role','status');toastEl.className='text-sm text-white';
      toastEl.style.cssText='position:fixed;left:50%;bottom:1.5rem;transform:translateX(-50%);z-index:60;background:#111;border-radius:.5rem;padding:.75rem 1rem;display:flex;align-items:center;gap:1rem;box-shadow:0 6px 24px rgba(0,0,0,.25)';
      var t=document.createElement('span');t.textContent=msg;toastEl.appendChild(t);
      if(undo){var b=document.createElement('button');b.type='button';b.textContent='Undo';b.className='text-sm font-semibold';b.style.cssText='color:#fff;text-decoration:underline';
        b.addEventListener('click',function(){undo();toastEl.remove();toastEl=null;clearTimeout(toastTimer);});toastEl.appendChild(b);}
      document.body.appendChild(toastEl);
      toastTimer=setTimeout(function(){if(toastEl){toastEl.remove();toastEl=null;}},undo?6000:3000);
    }

    /* ---- list / frequency / delete */
    list.addEventListener('click',function(e){var li=e.target.closest('li');if(!li||li.getAttribute('data-i')===null)return;cur=+li.getAttribute('data-i');renderAll();});
    freq.addEventListener('change',function(e){
      var a=ALERTS[cur];if(!a||e.target.type!=='radio')return;
      a.freq=e.target.parentNode.textContent.trim();renderList();
      toast(a.freq==='Pause'?'Alert paused for '+a.city+' / '+a.topic:'Alert frequency updated to '+a.freq+' for '+a.city+' / '+a.topic);
    });
    document.getElementById('delete-alert').addEventListener('click',function(){
      var a=ALERTS[cur];if(!a)return;
      var idx=cur,pos=view(true).indexOf(cur);
      ALERTS.splice(idx,1);cur=-1;
      var v=view(false);cur=v.length?v[Math.min(pos,v.length-1)]:-1;
      renderAll();
      toast('Alert deleted: '+a.city+' / '+a.topic,function(){ALERTS.splice(idx,0,a);cur=idx;renderAll();});
    });

    /* ---- filter / sort dropdowns */
    var btns=sortBar.querySelectorAll('button'),filterBtn=btns[0],sortBtn=btns[1],panel=null;
    sortBar.style.position='relative';sortBar.style.overflow='visible';
    filterBtn.style.borderTopLeftRadius='calc(.5rem - 1px)';sortBtn.style.borderTopRightRadius='calc(.5rem - 1px)';
    function setLabel(btn,t){btn.querySelectorAll('span')[2].textContent=t;}
    function closePanel(){if(panel){panel.remove();panel=null;}}
    function openPanel(btn,groups,isActive,onPick){
      var again=panel&&panel._btn===btn;closePanel();if(again)return;
      panel=document.createElement('div');panel._btn=btn;
      panel.style.cssText='position:absolute;top:100%;left:'+btn.offsetLeft+'px;z-index:40;min-width:15rem;max-height:20rem;overflow-y:auto;background:#fff;border:1px solid #e5e7eb;border-radius:.5rem;box-shadow:0 8px 24px rgba(0,0,0,.15);padding:.25rem 0;margin-top:2px';
      groups.forEach(function(g,gi){
        if(gi>0){var hr=document.createElement('div');hr.style.cssText='border-top:1px solid #f3f4f6;margin:.25rem 0';panel.appendChild(hr);}
        if(g.heading){var hd=document.createElement('div');hd.className='text-gray-400';hd.style.cssText='font-size:10px;letter-spacing:.05em;text-transform:uppercase;padding:.4rem 1rem .2rem';hd.textContent=g.heading;panel.appendChild(hd);}
        g.items.forEach(function(it){
          var b=document.createElement('button');b.type='button';b.className='text-sm text-gray-800';
          var on=isActive(it);
          b.style.cssText='display:flex;justify-content:space-between;align-items:center;width:100%;text-align:left;padding:.4rem 1rem;cursor:pointer;'+(on?'font-weight:600;':'');
          b.innerHTML='<span>'+it.label+'</span>';
          b.addEventListener('mouseenter',function(){b.style.background='#f9fafb';});b.addEventListener('mouseleave',function(){b.style.background='';});
          b.addEventListener('click',function(e){e.stopPropagation();closePanel();onPick(it);});
          panel.appendChild(b);
        });
      });
      sortBar.appendChild(panel);
    }
    function termList(){var t={};ALERTS.forEach(function(a){t[a.topic]=1;});return Object.keys(t).sort();}
    filterBtn.addEventListener('click',function(e){
      e.stopPropagation();
      openPanel(filterBtn,
        [{items:[{label:'All Alerts',kind:'all',value:'All Alerts'}].concat(FREQS.map(function(f){return {label:f,kind:'freq',value:f};}))},
         {heading:'Search terms',items:termList().map(function(t){return {label:t,kind:'term',value:t};})}],
        function(it){return it.kind===filter.kind&&it.value===filter.value;},
        function(it){filter={kind:it.kind,value:it.value};setLabel(filterBtn,it.label);ensureSelection();renderAll();});
    });
    sortBtn.addEventListener('click',function(e){
      e.stopPropagation();
      openPanel(sortBtn,[{items:SORTS.map(function(s){return {label:s[1],value:s[0]};})}],
        function(it){return it.value===sortKey;},
        function(it){sortKey=it.value;setLabel(sortBtn,it.label);renderList();});
    });
    document.addEventListener('click',closePanel);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});

    (function(){var v=view(false);cur=v.length?v[0]:-1;})();
    renderAll();
  });
})();
