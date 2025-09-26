import{a as d,S as f,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="52465106-83256c19c806c121527b257ca",m="https://pixabay.com/api/";async function y(a){return(await d.get(m,{params:{key:p,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const o=a.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p>${e.likes}</p>
          <p>${e.views}</p>
          <p>${e.comments}</p>
          <p>⬇${e.downloads}</p>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function b(){l.classList.remove("hidden")}function u(){l.classList.add("hidden")}const v=document.querySelector(".form");u();v.addEventListener("submit",async a=>{a.preventDefault();const o=a.target.elements["search-text"].value.trim();if(!o){n.warning({title:"Увага",message:"Введіть слово для пошуку!"});return}L(),b();try{const e=await y(o);!e||!e.hits||e.hits.length===0?n.error({title:"Помилка",message:"Sorry, there are no images matching your search query. Please try again!"}):g(e.hits)}catch(e){console.error("Помилка при завантаженні:",e),n.error({title:"Помилка",message:"Щось пішло не так"})}finally{u()}});
//# sourceMappingURL=index.js.map
