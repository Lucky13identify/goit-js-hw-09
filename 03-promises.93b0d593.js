!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector("form");document.querySelector("button");u.addEventListener("submit",(function(n){var t=0,o=Number(u[2].value),i=0,a=Number(u[0].value),l=Number(u[1].value);n.preventDefault();var c=setInterval((function(){if(t!==o){var n,u,f=a+=l,d=i+=1;(n=d,u=f,new Promise((function(e,t){var o=Math.random()>.3;setTimeout((function(){o?e({position:n,delay:u}):t({position:n,delay:u})}),u)}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{timeout:8e3})})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{timeout:8e3})})),t+=1}else clearInterval(c)}),l)}))}();
//# sourceMappingURL=03-promises.93b0d593.js.map