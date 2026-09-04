const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

const CONFIG = {
  registrationEndpoint: "https://script.google.com/macros/s/AKfycbw1BW4kL1cq5DDQ36RoVO75xlOXkIlMHNNnM2Xp0H7BKEBez8BCpoyAb55-nm-j-ggQXQ/exec", // Replace with your deployed /exec URL.
  musicAutoplay: true,
  whatsapp: "https://chat.whatsapp.com/IaBJyTRhZcACMFKUOrYndg"
};

const EVENTS = {
algorithm:{code:"01 / CODE",title:"Algorithm",strap:"LOGIC UNDER PRESSURE",summary:"A focused algorithmic challenge for students who can think clearly, code cleanly and solve under a clock.",format:"Single-round online competition",tags:["GRADE 6–13","INDIVIDUAL","HACKERRANK"],rules:[
"Open to students from Grade 6–13 of Dharmaraja College and other schools.",
"Individual participation only. Team entries are not permitted.",
"Registration for the competition must be completed before the announced deadline.",
"All solutions must be the participant's own work. Code plagiarism, sharing solutions, or copying another participant's work will result in immediate disqualification.",
"Hosted online through the HackerRank platform.",
"Five algorithmic problems will be released simultaneously.",
"Each problem carries 100 points, for a total of 500 points.",
"Participants will have four hours to solve as many problems as possible.",
"Submissions are accepted in C++, Python, Java, or JavaScript.",
"Multiple attempts may be submitted for each problem; only the highest-scoring submission for that problem will count.",
"There is no penalty for incorrect submissions. Partial scoring will be available.",
"In the event of a tie, the participant who achieved their final total score earliest will rank higher.",
"All solutions must be submitted through HackerRank. No separate submission through the SYNC '26 website is required."
]},
web:{code:"02 / BUILD",title:"Web Development",strap:"BUILD THE DIGITAL COMMAND CENTRE",summary:"Design and build a functional web platform that solves a real communication problem with a clean, creative user experience.",format:"Single-round build challenge",tags:["GRADE 6–13","INDIVIDUAL","FULL STACK"],rules:[
"Students from Grade 6–13 of Dharmaraja College and other schools are eligible to participate.",
"Individual participation only; team entries are not accepted.",
"Registration must be completed by the specified deadline.",
"All submissions must represent original work. Copying existing solutions or plagiarizing content will result in disqualification.",
"Develop a digital command centre for school events with announcements/event pages, interactive calendars/countdowns and online registrations or ticketing; live updates are optional.",
"Participants are required to develop a fully functional web application.",
"Solutions may use HTML/CSS/JS, React, Angular, Vue.js or another suitable programming environment.",
"The final web application must be hosted online using GitHub Pages, Netlify, Vercel or a similar platform.",
"A README.md must document project purpose, technologies/frameworks and steps to run or access the application.",
"Evaluation includes functionality, design & user experience, creativity & innovation, code structure & quality and bonus value from backend functionality.",
"Multiple submissions are not allowed. Only the first submitted version will be evaluated."
]},
poster:{code:"03 / VISUAL",title:"Poster Design",strap:"HAPPENING NOW",summary:"Create a bold futuristic graphic poster that captures the dynamic identity of SYNC '26 and feels ready for a real event announcement.",format:"Single poster submission",tags:["GRADE 6–13","INDIVIDUAL","DESIGN"],rules:[
"Students from Grade 6–13 of Dharmaraja College and other schools are eligible to participate.",
"Individual entries only; team participation is not permitted.",
"Schools may send any number of participants.",
"Registration must be completed by the specified deadline.",
"Each participant is limited to one poster submission.",
"Theme: “Happening Now: A Futuristic Call to BTUI'26”.",
"Design around the current identity of BTUI'26 — a digital frontier of light, innovation and immersive technology.",
"Participants may use Adobe Photoshop, Illustrator, or any professional graphic design software.",
"Designs must represent a 'Happening Now' SYNC '26 poster concept.",
"Submissions must be original; plagiarism or stock templates will lead to disqualification.",
"A3 or A4 portrait is recommended.",
"Final poster: PNG or JPG. Editable source: PSD, AI or equivalent.",
"Archive naming format: Poster_SchoolName_YourName.rar and upload the Google Drive link through the official SYNC '26 website."
]},
photo:{code:"04 / ART",title:"Photo Manipulation",strap:"THE FUTURE-TECH REALM",summary:"Step into a neon digital frontier and build a visually striking artwork using light, colour, cybernetic detail and imaginative storytelling.",format:"Single artwork submission",tags:["GRADE 6–13","PHOTOSHOP","ART"],rules:[
"Students from Grade 6–13 of Dharmaraja College and other schools are eligible.",
"Individual participation only; no team submissions.",
"Schools may have multiple participants.",
"Registration must be completed by the specified deadline.",
"Each participant may submit only one entry.",
"Theme: “The Future-Tech Realm: A Digital Frontier”.",
"Designs should reflect a futuristic digital realm characterized by glowing grids, sleek cybernetic elements and immersive high-tech environments.",
"Only Adobe Photoshop may be used for creating the artwork.",
"Participants must capture regular process screenshots to document their workflow.",
"Templates or pre-made designs are not allowed; originality is mandatory.",
"Any dimensions may be used for the final artwork.",
"Evaluation covers concept & relevance, creativity, visual appeal, technical skill and audience impact.",
"Project files should include all layers, textures and assets in a .rar archive plus the final PNG/JPG."
]},
logo:{code:"05 / IDENTITY",title:"Logo Design",strap:"DESIGN THE FUTURE MARK",summary:"Create a futuristic technology-inspired logo that communicates innovation, digital transformation and boundary-breaking creativity.",format:"Logo + design note",tags:["GRADE 6–13","IDENTITY","DESIGN"],rules:[
"Students from Grade 6–13 of Dharmaraja College and other schools are eligible.",
"Individual participation only; no team submissions.",
"Schools may have multiple participants.",
"Registration must be completed by the specified deadline.",
"Each participant may submit only one entry.",
"Logos must be created digitally using professional design tools such as Adobe Illustrator, Photoshop, Figma or equivalent.",
"Submissions must include both a full-colour version and a simplified monochrome version.",
"The design should be scalable for small digital icons and large posters.",
"All work must be original; plagiarism and stock logo templates are prohibited.",
"A short design note must accompany the logo explaining the inspiration and concept.",
"Evaluation covers concept & relevance, creativity, simplicity & memorability, versatility and visual impact.",
"Export PNG and JPG formats (colour + monochrome) and package according to the required naming format."
]},
uiux:{code:"06 / EXPERIENCE",title:"UI/UX Design",strap:"BEYOND THE SCREEN",summary:"Imagine a future-facing interface that is immersive, fluid and intuitive, merging visual innovation with user-centred thinking.",format:"Concept + prototype",tags:["GRADE 6–13","FIGMA / XD","UX"],rules:[
"Students from Grade 6–13 of Dharmaraja College and other schools are eligible.",
"Individual participation only; no team submissions.",
"Schools may have multiple participants.",
"Registration must be completed by the specified deadline.",
"Each participant may submit only one entry.",
"Theme: “Beyond the Screen: Envisioning Interactive Futures”.",
"Participants may use recognized UI/UX tools such as Figma, Adobe XD or Sketch.",
"The design must include at least one primary interface screen such as a homepage/dashboard/app main screen.",
"Provide a short user flow or wireframe sketch with at least 2–3 connected screens.",
"No plagiarism or pre-made templates; designs must be original.",
"Evaluation covers concept & innovation, user experience, visual design, functionality & consistency, and impact & engagement.",
"Submit PNG/JPG interface screens, interactive prototype link if available, and a PDF with concept note, wireframes/user flow and screenshots of the design process."
]},
quiz:{code:"07 / KNOWLEDGE",title:"Inter School Quiz",strap:"THE KNOWLEDGE CIRCUIT",summary:"A knowledge-driven ICT challenge across two online rounds and a final physical round at the main event.",format:"Team competition / 3 rounds",tags:["GRADES 10–13","TEAM OF 5","3 ROUNDS"],logo:"assets/quiz-logo.png",rules:[
"Students of Grades 10–13 from schools across Sri Lanka are allowed to participate.",
"Eligible for teams only; no individual or mixed-school entries are allowed.",
"Maximum of 5 members are allowed for each team.",
"All team members must be enrolled in the specific participating school.",
"Registration for the quiz competition must be completed by the specified deadline.",
"Only two teams per school.",
"Round 1 – Online Preliminary: MCQs and short-answer challenges through the official SYNC '26 quiz portal. Top 8 teams advance to the semifinal.",
"Round 2 – Online Semifinal: advanced MCQs and scenario-based questions. Top 2 teams qualify for the final.",
"Final Round – Physical at the main SYNC '26 event.",
"Final questions cover ICT concepts, programming logic and problem-solving, and general technology & innovation knowledge.",
"Online rounds require reliable access to Zoom and the SYNC '26 quiz portal. Cameras and microphones must remain on.",
"Any form of cheating or using external sources leads to immediate disqualification.",
"Only registered team members may communicate within breakout rooms; organizers may monitor rooms.",
"Each question has a preset time; late answers will not be counted. Late access may lead to disqualification."
]},
aspect:{code:"08 / ESPORTS",title:"ASPECT",strap:"GAMING COMPETITION",summary:"A competitive gaming arena for reaction, strategy and teamwork. Enter the gaming protocol and sync with the pressure.",format:"Gaming competition / Call of Duty — official format announced by organizers",tags:["GAMING","ASPECT","CALL OF DUTY"],logo:"assets/aspect-logo.png",rules:[
"ASPECT is the gaming competition of SYNC '26.",
"The competition is a competitive gaming event with the official game, match format and schedule communicated through event channels.",
"Call of Duty is the stated game focus for the competition.",
"Registration must be completed by the official deadline.",
"Only registered participants/teams may enter the competition.",
"Players must follow official lobby, match, scoring and fair-play procedures.",
"Game-specific rules and the confirmed schedule will be communicated before the event.",
"Any official organizer rule update takes precedence over this front-end summary."
]}
};

function genericVisual(title,i){return `<div class="generic-emblem"><span>${String(i+1).padStart(2,"0")}</span><b>${title.split(" ")[0]}</b></div>`}
function renderCards(){
 const grid=$("#competitionGrid");
 grid.innerHTML=Object.entries(EVENTS).map(([key,d],i)=>{
   const art=d.logo?`<img src="${d.logo}" alt="${d.title}">`:genericVisual(d.title,i);
   return `<article class="competition-card glass reveal tilt" data-key="${key}">
     <div class="card-top"><span>${d.code}</span><span class="open-state">● OPEN</span></div>
     <div class="card-visual">${art}<div class="card-cross cc1"></div><div class="card-cross cc2"></div><div class="card-cross cc3"></div></div>
     <div class="card-body"><div class="card-line"></div><h3>${d.title}<span>${d.strap}</span></h3><p>${d.summary}</p><div class="tags">${d.tags.map(t=>`<span>${t}</span>`).join("")}</div></div>
     <button class="card-open" data-event="${key}" type="button"><span>OPEN EVENT DOSSIER</span><b>↗</b></button>
   </article>`
 }).join("");
 $$("[data-event]").forEach(b=>b.addEventListener("click",()=>openEvent(b.dataset.event)));
 $$(".reveal").forEach(e=>io.observe(e));
 $$(".tilt").forEach(card=>{
  card.addEventListener("pointermove",e=>{
    const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(1200px) rotateY(${x*4.5}deg) rotateX(${y*-4.5}deg) translateY(-3px)`;
  });
  card.addEventListener("pointerleave",()=>card.style.transform="");
 });
}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in")}),{threshold:.12});
renderCards();

const leaderData=[["01","CYBER MINDS","QUIZ","980"],["02","NEXUS","ASPECT","940"],["03","QUANTUM","QUIZ","915"],["04","VOID WALKERS","ASPECT","890"],["05","CODEFORGE","ALGORITHM","862"],["06","PIXEL SHIFT","POSTER","840"]];
$("#leaderRows").innerHTML=leaderData.map(r=>`<div class="leader-row"><span class="rank">${r[0]}</span><span>${r[1]}</span><span>${r[2]}</span><strong class="score">${r[3]}</strong></div>`).join("");
$$(".reveal").forEach(e=>io.observe(e));

function openEvent(key){
 const d=EVENTS[key], logo=d.logo?`<img src="${d.logo}" alt="${d.title}">`:`<div class="dossier-generic"><span>${d.code.split(" ")[0]}</span><b>${d.title}</b></div>`;
 $("#eventContent").innerHTML=`<div class="dossier-head"><div class="dossier-logo">${logo}</div><div><p class="kicker">${d.code}</p><h2>${d.title}</h2><p>${d.summary}</p></div></div>
 <div class="dossier-meta"><div class="meta-box"><b>FORMAT</b><span>${d.format}</span></div><div class="meta-box"><b>REGISTRATION</b><span>Open through the SYNC '26 registration layer.</span></div></div>
 <div class="rule-title">RULES / COMPETITION PROTOCOL</div>
 <div class="rules">${d.rules.map((r,i)=>`<div class="rule"><i>${String(i+1).padStart(2,"0")}</i><span>${r}</span></div>`).join("")}</div>
 <div class="dossier-actions"><button class="action-btn primary" data-register="${key}" type="button">REGISTER NOW <b>↗</b></button><a class="action-btn secondary" href="${CONFIG.whatsapp}" target="_blank" rel="noopener">JOIN WHATSAPP <b>↗</b></a></div>`;
 $("#eventModal").classList.add("open");$("#eventModal").setAttribute("aria-hidden","false");
 $("[data-register]").addEventListener("click",()=>openRegister(key));sfx(620,.08);
}
function closeEvent(){$("#eventModal").classList.remove("open");$("#eventModal").setAttribute("aria-hidden","true")}
function openRegister(key){
 closeEvent();$("#registerHeading").textContent=`REGISTER / ${EVENTS[key].title.toUpperCase()}`;$("#registrationForm").reset();$("#registrationEvent").value=EVENTS[key].title;
 $("#registrationSuccess").classList.remove("show");$("#registrationForm").style.display="block";$("#registrationModal");$("#registerModal").classList.add("open");$("#registerModal").setAttribute("aria-hidden","false");sfx(720,.08);
}
function closeRegister(){$("#registerModal").classList.remove("open");$("#registerModal").setAttribute("aria-hidden","true")}
$("#closeEvent").addEventListener("click",closeEvent);$("#closeRegister").addEventListener("click",closeRegister);
$$(".modal-backdrop").forEach(b=>b.addEventListener("click",()=>{closeEvent();closeRegister()}));

const form=$("#registrationForm");

async function sendRegistration(payload){
  const endpoint = CONFIG.registrationEndpoint;
  if(!endpoint || endpoint.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")){
    throw new Error("Google Apps Script endpoint is not configured.");
  }

  // URLSearchParams creates application/x-www-form-urlencoded data.
  // This avoids the JSON preflight/CORS problem that can prevent Apps Script from receiving the POST.
  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key,value])=>body.append(key, value == null ? "" : String(value)));

  await fetch(endpoint,{
    method:"POST",
    mode:"no-cors",
    body
  });

  // With no-cors the response body is intentionally unreadable in the browser,
  // but the request has been sent to Apps Script.
  return true;
}

form.addEventListener("submit",async e=>{
  e.preventDefault();

  const payload=Object.fromEntries(new FormData(form).entries());
  const btn=form.querySelector(".submit-registration");

  btn.disabled=true;
  $("#registrationNote").textContent="TRANSMITTING / SAVING TO GOOGLE SHEETS...";

  try{
    await sendRegistration({
      event: payload.event || "",
      participationType: payload.participationType || "",
      fullName: payload.fullName || "",
      grade: payload.grade || "",
      email: payload.email || "",
      contactNumber: payload.contactNumber || "",
      school: payload.school || ""
    });

    form.style.display="none";
    $("#registrationSuccess").classList.add("show");
    $("#successTitle").textContent=
      `THANK YOU, ${String(payload.fullName||"CONTESTANT").toUpperCase()}`;

    toast("Registration sent to Google Sheets");
    sfx(810,.1);
  }catch(err){
    console.error(err);
    $("#registrationNote").textContent=
      "GOOGLE SHEETS CONNECTION FAILED — CHECK THE WEB APP /exec URL";
    toast("Registration could not be sent");
  }finally{
    btn.disabled=false;
  }
});

const music=$("#bgMusic"),audioState=$("#audioState"),musicVol=$("#musicVolume"),sfxVol=$("#sfxVolume");
let started=false,audioCtx=null,sfxGain=null;
function initAudio(){if(audioCtx)return;audioCtx=new(window.AudioContext||window.webkitAudioContext)();sfxGain=audioCtx.createGain();sfxGain.gain.value=.7;sfxGain.connect(audioCtx.destination)}
function sfx(freq=480,duration=.05){initAudio();if(audioCtx.state==="suspended")audioCtx.resume();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type="sine";o.frequency.value=freq;g.gain.setValueAtTime(.0001,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.055*Number(sfxVol.value),audioCtx.currentTime+.007);g.gain.exponentialRampToValueAtTime(.0001,audioCtx.currentTime+duration);o.connect(g);g.connect(sfxGain);o.start();o.stop(audioCtx.currentTime+duration+.02)}
async function startMusic(){music.volume=Number(musicVol.value);try{await music.play();started=true;audioState.textContent="MUSIC / LIVE";$("#soundToggle").innerHTML="SOUND <b>ON</b>"}catch{audioState.textContent="CLICK TO START";$("#soundToggle").innerHTML="SOUND <b>READY</b>"}}
musicVol.addEventListener("input",()=>music.volume=Number(musicVol.value));sfxVol.addEventListener("input",()=>{if(sfxGain)sfxGain.gain.value=Number(sfxVol.value)});
$("#soundToggle").addEventListener("click",()=>{initAudio();if(music.paused){startMusic()}else{music.pause();audioState.textContent="MUSIC / OFF";$("#soundToggle").innerHTML="SOUND <b>OFF</b>"}sfx(280,.08)});
["pointerdown","keydown","touchstart"].forEach(ev=>document.addEventListener(ev,()=>{initAudio();if(audioCtx.state==="suspended")audioCtx.resume();if(CONFIG.musicAutoplay&&!started)startMusic()},{once:true}));

$$("button,a").forEach(el=>el.addEventListener("click",()=>sfx(440,.045)));

const glow=$("#cursorGlow"),ret=$("#reticle");document.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";ret.style.left=(e.clientX-11)+"px";ret.style.top=(e.clientY-11)+"px"});
$$("[data-depth]").forEach(el=>document.addEventListener("pointermove",e=>{const x=(e.clientX-innerWidth/2)/innerWidth,y=(e.clientY-innerHeight/2)/innerHeight,d=Number(el.dataset.depth||.04);el.style.transform=`translate3d(${x*55*d}px,${y*40*d}px,0)`}));
$$(".magnetic").forEach(el=>{el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),dx=(e.clientX-(r.left+r.width/2))*.06,dy=(e.clientY-(r.top+r.height/2))*.06;el.style.transform=`translate(${dx}px,${dy}px)`});el.addEventListener("pointerleave",()=>el.style.transform="")});

const aiLauncher=$("#aiLauncher"),aiPanel=$("#aiPanel"),aiMessages=$("#aiMessages"),aiInput=$("#aiInput");
$("#closeAI").addEventListener("click",()=>aiPanel.classList.remove("open"));aiLauncher.addEventListener("click",()=>{aiPanel.classList.toggle("open");if(aiPanel.classList.contains("open"))aiInput.focus();sfx(640,.07)});
$$(".ai-chips button").forEach(b=>b.addEventListener("click",()=>askAI(b.dataset.question)));
$("#aiForm").addEventListener("submit",e=>{e.preventDefault();const q=aiInput.value.trim();if(q)askAI(q);aiInput.value=""});
function addAI(text,who="bot"){const d=document.createElement("div");d.className=`ai-message ${who}`;d.textContent=text;aiMessages.appendChild(d);aiMessages.scrollTop=aiMessages.scrollHeight}
function askAI(q){
 addAI(q,"user");const s=q.toLowerCase();
 let a="I can help with every SYNC '26 competition, rules, registration, leaderboard, contacts, WhatsApp and navigation.";
 const entries=Object.entries(EVENTS);
 const matched=entries.find(([key,d])=>s.includes(key)||s.includes(d.title.toLowerCase())||s.includes(d.strap.toLowerCase().split(" ")[0]));
 if(s.includes("home")||s.includes("hero")){ a="Taking you to the SYNC '26 Home portal."; setTimeout(()=>location.hash="home",350); }
 else if(s.includes("leaderboard")||s.includes("ranking")){ a="Opening the live leaderboard section."; setTimeout(()=>location.hash="leaderboard",350); }
 else if(s.includes("contact")||s.includes("phone")||s.includes("email")||s.includes("whatsapp")){ a="The official contacts are in the Contact section. WhatsApp is available there and from every event dossier."; setTimeout(()=>location.hash="contact",350); }
 else if(matched && (s.includes("register")||s.includes("registration")||s.includes("join"))){ a=`Opening registration for ${matched[1].title}.`; setTimeout(()=>openRegister(matched[0]),350); }
 else if(matched && (s.includes("rule")||s.includes("details")||s.includes("about")||s.includes("tell me"))){ a=`Opening the full ${matched[1].title} event dossier with its rules and format.`; setTimeout(()=>openEvent(matched[0]),350); }
 if(s.includes("compet")||s.includes("event"))a="SYNC '26 has 8 competition areas: Algorithm, Web Development, Poster Design, Photo Manipulation, Logo Design, UI/UX Design, Inter School Quiz and ASPECT Gaming.";
 else if(s.includes("register")){a="Open a competition dossier and press REGISTER NOW. Choose Inter-School or Intra-School, then complete your name, grade, email and contact details.";setTimeout(()=>openRegister("algorithm"),350)}
 else if(s.includes("aspect")||s.includes("gaming")||s.includes("call of duty"))a="ASPECT is the gaming competition. The site lists it as a Call of Duty-focused event; official match format and schedule come from the organizers.";
 else if(s.includes("quiz"))a="The Inter School Quiz is for Grades 10–13, team-only, maximum 5 members, with two online rounds and a physical final. Only two teams per school.";
 else if(s.includes("algorithm"))a="Algorithm is an individual Grade 6–13 HackerRank competition: five 100-point problems, four hours, C++/Python/Java/JavaScript.";
 else if(s.includes("web"))a="Web Development asks participants to build a functional digital command centre. Hosting and a README are required.";

 setTimeout(()=>addAI(a,"bot"),260);sfx(560,.06);
}

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("toast-show");clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove("toast-show"),2300)}

const cvs=$("#space"),ctx=cvs.getContext("2d");let stars=[];
function resize(){cvs.width=innerWidth*devicePixelRatio;cvs.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);stars=Array.from({length:150},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.35+.2,v:Math.random()*.2+.03,a:Math.random()*.75+.08}))}
resize();addEventListener("resize",resize);
function starsLoop(){ctx.clearRect(0,0,innerWidth,innerHeight);for(const p of stars){p.y-=p.v;if(p.y<0)p.y=innerHeight;ctx.globalAlpha=p.a;ctx.fillStyle="#8CF7FF";ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(starsLoop)}starsLoop();

window.addEventListener("load",()=>setTimeout(()=>{const l=$("#loader");l.style.opacity="0";l.style.pointerEvents="none";setTimeout(()=>l.remove(),850);startMusic()},1050));
