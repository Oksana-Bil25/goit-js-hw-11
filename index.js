import{a as u,S as d,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="52465106-83256c19c806c121527b257ca",p="https://pixabay.com/api/";async function m(a){return(await u.get(p,{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const o=a.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>${t.likes}</p>
          <p>${t.views}</p>
          <p>${t.comments}</p>
          <p>⬇${t.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function g(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function b(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async a=>{a.preventDefault();const o=a.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Увага",message:"Введіть слово для пошуку!"});return}g(),L();try{const t=await m(o);if(!t.hits.length){n.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(t.hits)}catch{n.error({title:"Помилка",message:"Щось пішло не так"})}finally{b()}});
//# sourceMappingURL=index.js.map
