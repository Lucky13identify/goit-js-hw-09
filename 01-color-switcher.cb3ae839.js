const e=document.querySelector("body"),t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let n=null;function l(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{t.disabled="true"})),t.addEventListener("click",(()=>{n=setInterval(l,1e3)})),o.addEventListener("click",(function(){t.disabled="",clearInterval(n),e.style.backgroundColor=""})),console.log(o);
//# sourceMappingURL=01-color-switcher.cb3ae839.js.map