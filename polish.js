const categoryIcons={
'문화·체육':'<path d="M4 4h16v12H4zM8 20h8M12 16v4M8 8l8 4-8 2z"/>',
'돌봄·건강':'<path d="M20 5c-3-3-6-1-8 1-2-2-5-4-8-1s-1 7 8 15c9-8 11-12 8-15Z"/><path d="M8 11h8m-4-4v8"/>',
'환경·안전':'<path d="m12 2 8 3v6c0 5-8 11-8 11S4 16 4 11V5zM8 12l3 3 5-6"/>'};
const copyByCategory={
'주거·복지':'주거비와 생활환경의 부담을 덜어주는 지원을 살펴보세요. 거주 형태에 따라 필요한 조건과 서류를 안내합니다.',
'취업·교육':'새로운 일을 준비하는 과정에 필요한 교육과 경험을 연결합니다. 참여 대상과 교육 내용을 먼저 확인해 보세요.',
'생활·교통':'일상 속 이동을 더 편리하게 만드는 지원입니다. 이용 지역과 대상에 맞는 혜택을 확인해 보세요.',
'농업·생활':'농촌에서 일하고 생활하는 시민을 위한 지원입니다. 영농 여건과 이용 목적에 맞는 절차를 안내합니다.',
'경제·생활':'지역에서 시작하고 성장하는 경제활동을 응원합니다. 사업 단계와 이용 조건에 맞는 지원을 살펴보세요.',
'문화·체육':'가까운 곳에서 배움과 여가를 즐길 수 있도록 돕습니다. 프로그램의 참여 방법과 이용 조건을 확인해 보세요.',
'돌봄·건강':'돌봄과 건강한 일상을 위한 서비스를 안내합니다. 필요한 도움을 찾고 상담과 이용 절차를 확인해 보세요.',
'환경·안전':'더 안전하고 지속가능한 생활을 위한 참여 기회입니다. 일상에서 실천할 수 있는 활동을 살펴보세요.'};
policies.forEach(p=>{if(categoryIcons[p.cat])glyphs[p.id]=categoryIcons[p.cat];if(p.id.startsWith('example-'))p.desc=copyByCategory[p.cat]});
const uiIcon=(path)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
const quickItems=[['전체 정책','catalog','<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>'],['분야별 탐색','categories','<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'],['혜택 계산','calculator','<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 11h1m6 0h1M8 15h1m6 0h1M8 19h1m6 0h1"/>'],['우리동네','local','<path d="M19 10c0 6-7 12-7 12S5 16 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="9" r="2"/>'],['마이포켓','pocket','<path d="M4 5h16v14H4zM8 5V3h8v2M4 11h16m-10 0v3h4v-3"/>'],['이용 도움말','faq','<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3m0 3h.01"/>']];
const polishRender=render;render=function(){polishRender();const r=location.hash.slice(1)||'home';if(r==='home'){const hero=app.querySelector('.hero');hero.insertAdjacentHTML('afterend',`<nav class="quick-services" aria-label="자주 찾는 서비스">${quickItems.map(([t,url,path])=>`<a href="#${url}"><span>${uiIcon(path)}</span><b>${t}</b></a>`).join('')}</nav>`);const notice=app.querySelector('#results');if(notice)notice.setAttribute('aria-live','polite')}app.querySelectorAll('form label').forEach((label,i)=>{const next=label.nextElementSibling;if(next&&/INPUT|SELECT|TEXTAREA/.test(next.tagName)&&!label.querySelector('input')){if(!next.id)next.id='field-'+i;label.htmlFor=next.id}});document.querySelectorAll('.gnb-toggle').forEach((b,i)=>{const routes=menus[i][1].map(x=>x[1]);b.classList.toggle('current-section',routes.includes(r)||((r.startsWith('detail/')||r.startsWith('category/'))&&i===0));b.innerHTML=b.textContent+uiIcon('<path d="m7 10 5 5 5-5"/>')});};
const backTop=document.createElement('button');backTop.className='back-top';backTop.setAttribute('aria-label','페이지 맨 위로');backTop.innerHTML=uiIcon('<path d="m6 12 6-6 6 6M12 6v15"/>');backTop.onclick=()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});document.body.append(backTop);window.addEventListener('scroll',()=>backTop.classList.toggle('shown',window.scrollY>600),{passive:true});
const skip=document.createElement('a');skip.href='#main-content';skip.textContent='본문 바로가기';skip.className='skip-link';skip.onclick=e=>{e.preventDefault();app.tabIndex=-1;app.focus();app.scrollIntoView()};document.body.prepend(skip);
render();
