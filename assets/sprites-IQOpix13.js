const t={bgTop:"#f4fbfb",bgBottom:"#dceff0",skyTop:"#e3f3ff",skyBottom:"#c7e6f7",floor:"#ecd9b3",floorLine:"#dcc59a",ink:"#27384a",gold:"#FCBE2E",goldDeep:"#d98e0b",good:"#2fb27a",goodSoft:"#7ed3a8",danger:"#e8635f",info:"#4f93d6",card:"rgba(255,255,255,0.94)",cardLine:"rgba(39,56,74,0.12)",muted:"rgba(39,56,74,0.45)",pills:["#FF7B7B","#FF9FE0","#FFC24B","#7ED36A","#4ECDC4","#5BA8E6","#7C7BF0","#9BD6A8"]},b="Comfortaa, Arial, sans-serif";function c(e,l,r,o="room"){const a=e.createLinearGradient(0,0,0,r);o==="sky"?(a.addColorStop(0,t.skyTop),a.addColorStop(1,t.skyBottom)):(a.addColorStop(0,t.bgTop),a.addColorStop(1,t.bgBottom)),e.fillStyle=a,e.fillRect(0,0,l,r)}function f(e,l,r,o,a,i){const s=Math.min(i,o/2,a/2);e.beginPath(),e.moveTo(l+s,r),e.arcTo(l+o,r,l+o,r+a,s),e.arcTo(l+o,r+a,l,r+a,s),e.arcTo(l,r+a,l,r,s),e.arcTo(l,r,l+o,r,s),e.closePath()}function k(e,l,r,o,a,i,s){f(e,l,r,o,a,i),e.fillStyle=s,e.fill()}function y(e,l,r,o,a){e.save(),e.fillStyle="rgba(39,56,74,0.12)",e.beginPath(),e.ellipse(l,r,o,a,0,0,Math.PI*2),e.fill(),e.restore()}function S(e,l,r,o,a,i,s){e.save(),f(e,l,r,o,a,a/2),e.clip(),e.fillStyle=i,e.fillRect(l,r,o/2,a),e.fillStyle=s,e.fillRect(l+o/2,r,o/2,a),e.fillStyle="rgba(255,255,255,0.45)",e.fillRect(l+3,r+3,o-6,a*.28),e.restore(),f(e,l,r,o,a,a/2),e.strokeStyle="rgba(39,56,74,0.18)",e.lineWidth=1.5,e.stroke()}function w(e,l,r,o,a){e.beginPath(),e.arc(l,r,o,0,Math.PI*2),e.fillStyle=a,e.fill(),e.strokeStyle="rgba(39,56,74,0.2)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.moveTo(l,r-o+3),e.lineTo(l,r+o-3),e.strokeStyle="rgba(39,56,74,0.14)",e.lineWidth=1.5,e.stroke(),e.beginPath(),e.arc(l-o*.32,r-o*.32,o*.28,0,Math.PI*2),e.fillStyle="rgba(255,255,255,0.6)",e.fill()}function m(e,l,r,o,a){const i=o*.34;e.fillStyle=a,e.fillRect(l-i/2,r-o/2,i,o),e.fillRect(l-o/2,r-i/2,o,i)}function T(e,l,r,o){const a=Math.min(l-36,320),i=36+o.length*26,s=(l-a)/2,h=r/2-i/2;e.save(),e.shadowColor="rgba(39,56,74,0.18)",e.shadowBlur=18,e.shadowOffsetY=6,k(e,s,h,a,i,16,t.card),e.restore(),f(e,s,h,a,i,16),e.strokeStyle=t.cardLine,e.lineWidth=1,e.stroke(),e.textAlign="center",e.textBaseline="middle",o.forEach((n,p)=>{e.fillStyle=n.color||t.ink,e.font=`${n.bold?"bold ":""}${n.size||16}px ${b}`,e.fillText(n.text,l/2,h+26+p*26)})}function C(e,l,r,o,a=t.ink){e.font=`bold 15px ${b}`;const i=e.measureText(o).width+24;return e.save(),e.shadowColor="rgba(39,56,74,0.12)",e.shadowBlur=8,e.shadowOffsetY=2,k(e,l,r,i,30,10,t.card),e.restore(),e.fillStyle=a,e.textAlign="left",e.textBaseline="middle",e.fillText(o,l+12,r+16),i}const B=""+new URL("click-CP46MJov.wav",import.meta.url).href,v=""+new URL("catch-bsDaITJH.wav",import.meta.url).href;function d(e){const l=new Image;return l.src="data:image/svg+xml;utf8,"+encodeURIComponent(e),l}function u(e){return e&&e.complete&&e.naturalWidth>0}function g(e,l,r){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 96">
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
    <circle cx="${28+r}" cy="30" r="4.5" fill="#27384a"/>
    <circle cx="${44+r}" cy="30" r="4.5" fill="#27384a"/>
    <circle cx="${29+r}" cy="28.5" r="1.6" fill="#fff"/>
    <circle cx="${45+r}" cy="28.5" r="1.6" fill="#fff"/>
    <path d="M30 37 q6 5 12 0" fill="none" stroke="#27384a" stroke-width="2.5" stroke-linecap="round"/>
    <ellipse cx="22" cy="36" rx="3.5" ry="2.4" fill="rgba(232,99,95,0.4)"/>
    <ellipse cx="50" cy="36" rx="3.5" ry="2.4" fill="rgba(232,99,95,0.4)"/>
  </g>
</svg>`}const M=d(g(-7,7,1)),P=d(g(7,-7,1)),F=d(g(-3,3,0)),A=d(g(-2,2,0));function E(e,l,r,o,a){if(!u(l))return!1;const i=l.naturalWidth/l.naturalHeight,s=a*i;return e.drawImage(l,r-s/2,o-a,s,a),!0}export{b as F,F as M,t as P,S as a,m as b,w as c,c as d,T as e,B as f,v as g,M as h,P as i,E as j,C as k,A as l,f as m,k as r,y as s};
