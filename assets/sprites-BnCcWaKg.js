const f={bgTop:"#f4fbfb",bgBottom:"#dceff0",skyTop:"#e3f3ff",skyBottom:"#c7e6f7",floor:"#ecd9b3",floorLine:"#dcc59a",ink:"#27384a",gold:"#FCBE2E",goldDeep:"#d98e0b",good:"#2fb27a",goodSoft:"#7ed3a8",danger:"#e8635f",info:"#4f93d6",card:"rgba(255,255,255,0.94)",cardLine:"rgba(39,56,74,0.12)",muted:"rgba(39,56,74,0.45)",pills:["#FF7B7B","#FF9FE0","#FFC24B","#7ED36A","#4ECDC4","#5BA8E6","#7C7BF0","#9BD6A8"]},h="Comfortaa, Arial, sans-serif";function y(e,l,o,r="room"){const a=e.createLinearGradient(0,0,0,o);r==="sky"?(a.addColorStop(0,f.skyTop),a.addColorStop(1,f.skyBottom)):(a.addColorStop(0,f.bgTop),a.addColorStop(1,f.bgBottom)),e.fillStyle=a,e.fillRect(0,0,l,o)}function t(e,l,o,r,a,i){const s=Math.min(i,r/2,a/2);e.beginPath(),e.moveTo(l+s,o),e.arcTo(l+r,o,l+r,o+a,s),e.arcTo(l+r,o+a,l,o+a,s),e.arcTo(l,o+a,l,o,s),e.arcTo(l,o,l+r,o,s),e.closePath()}function k(e,l,o,r,a,i,s){t(e,l,o,r,a,i),e.fillStyle=s,e.fill()}function S(e,l,o,r,a){e.save(),e.fillStyle="rgba(39,56,74,0.12)",e.beginPath(),e.ellipse(l,o,r,a,0,0,Math.PI*2),e.fill(),e.restore()}function c(e,l,o,r,a,i,s){e.save(),t(e,l,o,r,a,a/2),e.clip(),e.fillStyle=i,e.fillRect(l,o,r/2,a),e.fillStyle=s,e.fillRect(l+r/2,o,r/2,a),e.fillStyle="rgba(255,255,255,0.45)",e.fillRect(l+3,o+3,r-6,a*.28),e.restore(),t(e,l,o,r,a,a/2),e.strokeStyle="rgba(39,56,74,0.18)",e.lineWidth=1.5,e.stroke()}function w(e,l,o,r,a){e.beginPath(),e.arc(l,o,r,0,Math.PI*2),e.fillStyle=a,e.fill(),e.strokeStyle="rgba(39,56,74,0.2)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.moveTo(l,o-r+3),e.lineTo(l,o+r-3),e.strokeStyle="rgba(39,56,74,0.14)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.arc(l-r*.32,o-r*.32,r*.28,0,Math.PI*2),e.fillStyle="rgba(255,255,255,0.6)",e.fill()}function T(e,l,o,r,a){const i=r*.34;e.fillStyle=a,e.fillRect(l-i/2,o-r/2,i,r),e.fillRect(l-r/2,o-i/2,r,i)}function B(e,l,o,r){const a=Math.min(l-36,320),i=36+r.length*26,s=(l-a)/2,b=o/2-i/2;e.save(),e.shadowColor="rgba(39,56,74,0.18)",e.shadowBlur=18,e.shadowOffsetY=6,k(e,s,b,a,i,16,f.card),e.restore(),t(e,s,b,a,i,16),e.strokeStyle=f.cardLine,e.lineWidth=1,e.stroke(),e.textAlign="center",e.textBaseline="middle",r.forEach((n,p)=>{e.fillStyle=n.color||f.ink,e.font=`${n.bold?"bold ":""}${n.size||16}px ${h}`,e.fillText(n.text,l/2,b+26+p*26)})}function C(e,l,o,r,a=f.ink){e.font=`bold 15px ${h}`;const i=e.measureText(r).width+24;return e.save(),e.shadowColor="rgba(39,56,74,0.12)",e.shadowBlur=8,e.shadowOffsetY=2,k(e,l,o,i,30,10,f.card),e.restore(),e.fillStyle=a,e.textAlign="left",e.textBaseline="middle",e.fillText(r,l+12,o+16),i}function d(e){const l=new Image;return l.src="data:image/svg+xml;utf8,"+encodeURIComponent(e),l}function u(e){return e&&e.complete&&e.naturalWidth>0}function g(e,l,o){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 96">
  <ellipse cx="36" cy="90" rx="20" ry="5" fill="rgba(39,56,74,0.12)"/>
  <!-- ноги -->
  <g stroke="#3a4c5e" stroke-width="6" stroke-linecap="round">
    <line x1="28" y1="74" x2="${28+e}" y2="86"/>
    <line x1="44" y1="74" x2="${44+l}" y2="86"/>
  </g>
  <ellipse cx="${28+e}" cy="87" rx="7" ry="4" fill="#2fb27a"/>
  <ellipse cx="${44+l}" cy="87" rx="7" ry="4" fill="#2fb27a"/>
  <!-- руки -->
  <line x1="14" y1="48" x2="6" y2="40" stroke="#e6a92a" stroke-width="6" stroke-linecap="round"/>
  <line x1="58" y1="48" x2="66" y2="40" stroke="#f2f2f2" stroke-width="6" stroke-linecap="round"/>
  <!-- тело-капсула -->
  <g>
    <path d="M14 36a22 22 0 0 1 44 0v6H14z" fill="#FCBE2E"/>
    <path d="M14 42h44v18a22 22 0 0 1-44 0z" fill="#ffffff"/>
    <rect x="14" y="14" width="44" height="66" rx="22" fill="none" stroke="#cf9a25" stroke-width="2.5"/>
    <line x1="14" y1="42" x2="58" y2="42" stroke="#cf9a25" stroke-width="2"/>
    <!-- блик -->
    <ellipse cx="26" cy="26" rx="7" ry="10" fill="rgba(255,255,255,0.45)"/>
  </g>
  <!-- зелёный крест на животе -->
  <g fill="#2fb27a">
    <rect x="32" y="52" width="8" height="20" rx="2"/>
    <rect x="26" y="58" width="20" height="8" rx="2"/>
  </g>
  <!-- лицо -->
  <g>
    <circle cx="${28+o}" cy="30" r="4.5" fill="#27384a"/>
    <circle cx="${44+o}" cy="30" r="4.5" fill="#27384a"/>
    <circle cx="${29+o}" cy="28.5" r="1.6" fill="#fff"/>
    <circle cx="${45+o}" cy="28.5" r="1.6" fill="#fff"/>
    <path d="M30 37 q6 5 12 0" fill="none" stroke="#27384a" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="22" cy="36" rx="3.5" ry="2.4" fill="rgba(232,99,95,0.4)"/>
    <ellipse cx="50" cy="36" rx="3.5" ry="2.4" fill="rgba(232,99,95,0.4)"/>
  </g>
</svg>`}const m=d(g(-7,7,1)),v=d(g(7,-7,1)),M=d(g(-3,3,0)),P=d(g(-2,2,0));function F(e,l,o,r,a){if(!u(l))return!1;const i=l.naturalWidth/l.naturalHeight,s=a*i;return e.drawImage(l,o-s/2,r-a,s,a),!0}export{h as F,M,f as P,c as a,T as b,w as c,y as d,B as e,m as f,v as g,F as h,C as i,P as j,t as k,k as r,S as s};
