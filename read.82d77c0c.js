!function(){var e,t,n;e=document.querySelector(".menu-container"),t=document.querySelector(".menu__button"),n=document.querySelector(".header"),t.addEventListener("click",(function(){var o="true"===t.getAttribute("aria-expanded")||!1;e.classList.toggle("menu-container--open"),t.classList.toggle("menu__button--open"),n.classList.toggle("header--menu-open"),t.setAttribute("aria-expanded",!o),document.body.style.overflow=o?"":"hidden",window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("menu-container--open"),n.classList.remove("header--menu-open"),t.classList.remove("menu__button--open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))}))}();
//# sourceMappingURL=read.82d77c0c.js.map
