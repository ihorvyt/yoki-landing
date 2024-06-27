(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();class w{constructor(e={}){this.sections=document.querySelectorAll(".section"),this.phone=document.querySelector(".phone-container"),this.phoneOverflow=document.querySelector("#phoneOverflow"),this.secondaryPhone=document.querySelector(".secondary-phone"),this.animatedText=document.querySelector(".tell_text"),this.currentSectionIndex=0,this.isScrolling=!1,this.touchStartY=0,this.scrollSensitivity=e.scrollSensitivity||1.5,this.scrollDuration=e.scrollDuration||700,this.phoneStyles=e.phoneStyles||[],this.mobilePhoneStyles=e.mobilePhoneStyles||[],this.imageMappings=e.imageMappings||[],this.secondaryPhoneSection=e.secondaryPhoneSection||null,this.animatTextSection=e.animatTextSection||null,this.init()}init(){this.addEventListeners(),this.resizeSections(),this.checkViewport(),this.applyStyles(),this.moveToSection(this.currentSectionIndex)}addEventListeners(){window.addEventListener("wheel",this.debounce(this.handleScroll.bind(this),100),{passive:!1}),window.addEventListener("touchstart",this.handleTouchStart.bind(this),{passive:!0}),window.addEventListener("touchmove",this.debounce(this.handleTouchMove.bind(this),100),{passive:!1}),window.addEventListener("touchend",this.handleTouchEnd.bind(this),{passive:!0}),window.addEventListener("resize",this.debounce(this.resizeSections.bind(this),100)),window.addEventListener("resize",this.debounce(this.checkViewport.bind(this),100))}debounce(e,t){let s;return function(...i){const n=this;clearTimeout(s),s=setTimeout(()=>e.apply(n,i),t)}}smoothScroll(e){const t=window.pageYOffset,s=e-t;let i=null;const n=r=>r<.5?2*r*r:1-Math.pow(-2*r+2,2)/2,h=r=>{i===null&&(i=r);const d=r-i,u=n(d/this.scrollDuration)*s+t;window.scrollTo(0,u),d<this.scrollDuration&&requestAnimationFrame(h)};requestAnimationFrame(h)}moveToSection(e){if(this.isScrolling)return;this.isScrolling=!0;const t=this.sections[e].offsetTop;this.smoothScroll(t),this.updateVisuals(e),setTimeout(()=>{this.isScrolling=!1},this.scrollDuration)}updateVisuals(e){this.animatePhone(e),this.updatePhoneImage(e),this.updateSecondaryPhone(e),this.animateText(e)}animatePhone(e){const t=this.phoneStyles[e]||{x:0,y:0,width:100,od:"dvw",br:0};this.phone.style.transform=`translate(${t.x}%, ${t.y}%)`,this.phone.style.width=`${t.width}${t.od}`,this.phoneOverflow.style.borderRadius=`${t.br}%`}updatePhoneImage(e){document.querySelectorAll(".phone .photo").forEach((s,i)=>{this.imageMappings[e]===i?s.classList.add("active"):s.classList.remove("active")})}updateSecondaryPhone(e){this.secondaryPhoneSection!==null&&e===this.secondaryPhoneSection?this.secondaryPhone.classList.add("active"):this.secondaryPhone.classList.remove("active")}animateText(e){this.animatTextSection!==null&&e===this.animatTextSection?this.animatedText.classList.add("active"):this.animatedText.classList.remove("active")}handleScroll(e){if(e.preventDefault(),this.isScrolling)return;const t=e.deltaY>0?1:-1;(t>0&&this.currentSectionIndex<this.sections.length-1||t<0&&this.currentSectionIndex>0)&&(this.currentSectionIndex+=t,this.moveToSection(this.currentSectionIndex))}handleTouchStart(e){this.touchStartY=e.touches[0].clientY}handleTouchMove(e){e.preventDefault()}handleTouchEnd(e){const t=e.changedTouches[0].clientY,s=this.touchStartY-t>0?1:-1;this.isScrolling||(s>0&&this.currentSectionIndex<this.sections.length-1||s<0&&this.currentSectionIndex>0)&&(this.currentSectionIndex+=s,this.moveToSection(this.currentSectionIndex))}resizeSections(){const e=window.innerHeight;this.sections.forEach(t=>{t.style.height=`${e}px`})}checkViewport(){window.innerWidth<=768?this.currentPhoneStyles=this.mobilePhoneStyles:this.currentPhoneStyles=this.phoneStyles}applyStyles(){this.sections.forEach((e,t)=>{this.updateVisuals(t)})}destroy(){window.removeEventListener("wheel",this.handleScroll),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("resize",this.resizeSections),window.removeEventListener("resize",this.checkViewport)}}window.addEventListener("load",()=>{y()});const l=document.querySelector(".phone-container"),a=window.innerHeight*(l.offsetWidth/l.offsetHeight),o=a-a*.05;function y(){const c=new w({scrollSensitivity:1.5,scrollDuration:700,phoneStyles:[{x:-42,y:4,width:41,od:"dvw"},{x:-30,y:2.5,width:o,od:"px",br:5},{x:-16,y:-12,width:55,od:"dvw"},{x:-30,y:2.5,width:o,od:"px",br:5},{x:-30,y:2.5,width:o,od:"px",br:5},{x:-16,y:2.5,width:55,od:"dvw",br:6.5},{x:-30,y:2.5,width:o,od:"px",br:5},{x:-30,y:2.5,width:o,od:"px"},{x:-16,y:-68,width:55,od:"dvw",br:6.5},{x:-30,y:2.5,width:o,od:"px"},{x:300,y:-2.5,width:o,od:"px"},{x:300,y:-2.5,width:o,od:"px"}],mobilePhoneStyles:[{x:-50,y:55,width:90,od:"dvw"},{x:-20,y:2.5,width:o,od:"px",br:5},{x:-50,y:45,width:90,od:"dvw"},{x:-75,y:40,width:o-o*.35,od:"px",br:5},{x:-50,y:30,width:o-o*.25,od:"px",br:5},{x:-50,y:42,width:90,od:"dvw",br:6.5},{x:-50,y:28,width:o-o*.25,od:"px",br:5},{x:-50,y:35,width:o-o*.25,od:"px"},{x:-50,y:-35,width:90,od:"dvw",br:6.5},{x:-20,y:2.5,width:o,od:"px"},{x:300,y:-2.5,width:90,od:"dvw"},{x:300,y:-2.5,width:90,od:"dvw"}],imageMappings:[0,1,1,1,2,3,4,5,5,6],animatTextSection:2,secondaryPhoneSection:3});window.addEventListener("unload",()=>c.destroy())}
