/* empty css                      */import{a as u,S as m,i}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="16588925-02413834d9828552035921ade",p="https://pixabay.com/api/",y=async o=>{try{return(await u.get(p,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching data from Pixabay",t),t}},g=o=>o.map(({webformatURL:t,largeImageURL:s,tags:n,likes:e,views:r,comments:a,downloads:d})=>`
      <a class="gallery-item" href="${s}">
        <img src="${t}" alt="${n}" loading="lazy" />
        <div class="info">
          <p>Likes: ${e}</p>
          <p>Views: ${r}</p>
          <p>Comments: ${a}</p>
          <p>Downloads: ${d}</p>
        </div>
      </a>
    `).join(""),h=document.querySelector("#search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let L=new m(".gallery a");const b=()=>l.classList.add("visible"),w=()=>l.classList.remove("visible"),v=()=>{c.innerHTML=""},S=async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query!"});return}b(),v();try{const{hits:s}=await y(t);if(!s.length){i.warning({message:"Sorry, no images found. Try again!"});return}c.insertAdjacentHTML("beforeend",g(s)),L.refresh()}catch{i.error({message:"Something went wrong!"})}finally{w()}};h.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
