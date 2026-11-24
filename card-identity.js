// Category identity is conveyed by pictogram, label and copy, never color alone.
const identities={
 '주거·복지':['housing','편안한 보금자리','집과 생활의 부담을 덜어주는 지원'],
 '취업·교육':['career','내일을 위한 준비','배움에서 일자리까지 이어지는 기회'],
 '생활·교통':['mobility','더 가벼운 이동','일상 속 이동 비용과 불편을 줄이는 지원'],
 '농업·생활':['farm','든든한 농촌 생활','농사와 정착에 필요한 생활 지원'],
 '경제·생활':['business','우리 동네 경제','가게의 성장과 알뜰한 소비를 돕는 혜택'],
 '문화·체육':['culture','일상의 즐거움','가까운 곳에서 즐기는 문화와 체육'],
 '돌봄·건강':['care','서로 돌보는 일상','건강과 돌봄이 필요할 때 만나는 서비스'],
 '환경·안전':['nature','안전한 내일','우리 생활과 환경을 지키는 참여']};
function policyScene(p){return `<svg viewBox="0 0 200 110" fill="none" aria-hidden="true"><ellipse cx="107" cy="96" rx="67" ry="7" fill="currentColor" opacity=".08"/><circle cx="110" cy="50" r="44" fill="currentColor" opacity=".07"/><rect x="45" y="26" width="58" height="66" rx="10" fill="white" transform="rotate(-12 45 26)"/><rect x="74" y="19" width="70" height="76" rx="13" fill="white" stroke="currentColor" stroke-opacity=".17"/><g transform="translate(91 31) scale(1.5)" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${glyphs[p.id]||glyphs.pay}</g><path d="M90 79h37M90 85h23" stroke="currentColor" stroke-opacity=".25" stroke-width="3" stroke-linecap="round"/><circle cx="153" cy="72" r="15" fill="currentColor" opacity=".13"/><path d="m147 72 4 4 8-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 44h8m-4-4v8M160 30h6m-3-3v6" stroke="currentColor" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/></svg>`}
const plainPolicyCard=card;
card=function(p){const [type,label]=identities[p.cat];return plainPolicyCard(p).replace('class="card policy-card"',`class="card policy-card identity-${type}"`).replace('<div class="card-top">',`<div class="policy-visual" aria-hidden="true"><span>${label}</span>${policyScene(p)}</div><div class="card-top">`).replace('<span>지원 규모 · 예시</span>','<span>혜택 한눈에 · 시연 예시</span>')};
const identityRender=render;
render=function(){identityRender();const results=app.querySelector('#results');if(results){const section=results.closest('section');section.classList.add('recommendation-section');const row=section.querySelector('.row');row.classList.add('recommendation-heading');row.insertAdjacentHTML('beforeend',`<div class="section-art" aria-hidden="true">${policyScene(policies.find(p=>p.id===(state.persona==='rural'?'machine':'rent')))}</div>`)} };
render();
