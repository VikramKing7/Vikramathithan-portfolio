const $=s=>document.querySelector(s);
const root=document.documentElement;
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t}catch(e){}
$('#theme').onclick=()=>{
 const dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
 root.dataset.theme=dark?'light':'dark';
 try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}
};
const links=$('#links'),menu=$('#menu');
menu.onclick=()=>{const o=links.classList.toggle('open');menu.setAttribute('aria-expanded',o)};
links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');menu.setAttribute('aria-expanded',false)}});
function tick(){const t=new Date().toLocaleTimeString('en-GB');$('#heroClock').textContent=t;$('#miniClock').textContent=t}
tick();setInterval(tick,1000);
$('#calc').onclick=()=>{
 const h=parseFloat($('#h').value)/100,w=parseFloat($('#w').value),o=$('#bmiOut');
 if(!(h>0.5&&w>10)){o.textContent='Enter a valid height and weight.';return}
 const b=w/(h*h);
 const c=b<18.5?'Underweight':b<25?'Normal':b<30?'Overweight':'Obese';
 o.textContent='BMI '+b.toFixed(1)+': '+c;
};
$('#copy').onclick=async e=>{
 const b=e.currentTarget;
 try{await navigator.clipboard.writeText('vikramathithan927@gmail.com');b.textContent='Email copied'}catch(x){b.textContent='Copy failed, use Email me'}
 setTimeout(()=>b.textContent='Copy email',2000);
};
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const t=document.getElementById(a.getAttribute('href').slice(1));
 if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}
}));
const secs=[...document.querySelectorAll('main section[id]')];
addEventListener('scroll',()=>{
 let cur='';secs.forEach(s=>{if(s.getBoundingClientRect().top<120)cur=s.id});
 document.querySelectorAll('.links a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur));
},{passive:true});
