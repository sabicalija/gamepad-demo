if(!self.define){const e=async e=>{if("require"!==e&&(e+=".js"),!s[e]&&(await new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}),!s[e]))throw new Error(`Module ${e} didn’t register its module`);return s[e]},a=async(a,s)=>{const o=await Promise.all(a.map(e));s(1===o.length?o[0]:o)};a.toUrl=e=>`./${e}`;const s={require:Promise.resolve(a)};self.define=(a,o,d)=>{s[a]||(s[a]=new Promise(async s=>{let i={};const r={uri:location.origin+a.slice(1)},f=await Promise.all(o.map(a=>"exports"===a?i:"module"===a?r:e(a))),t=d(...f);i.default||(i.default=t),s(i)}))}}define("./service-worker.js",["./workbox-7f699e1d"],(function(e){"use strict";importScripts("js/skip-waiting.js"),e.setCacheNameDetails({prefix:"gamepad-demo"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"/gamepad-demo/css/app.b556ffa9.css",revision:"d95288b2a7e4487bf4ea3b631207991e"},{url:"/gamepad-demo/fonts/font-awesome/fa-brands-400.ttf",revision:"9ec698d1a597bff5df337094b71ddaaf"},{url:"/gamepad-demo/fonts/font-awesome/fa-regular-400.ttf",revision:"a0e3ac82940c1998c5977fd4bc1f5ef6"},{url:"/gamepad-demo/fonts/font-awesome/fa-solid-900.ttf",revision:"75f38a159982b6bd1704891332d95fa7"},{url:"/gamepad-demo/index.html",revision:"2284ae8d4597180419d47e703ccf8779"},{url:"/gamepad-demo/js/about.1655a77e.js",revision:"00e530317800320942d5f9988c1eea90"},{url:"/gamepad-demo/js/app.ad2bf54d.js",revision:"4dd74cc45f22a0751ebc27a36c71bf5d"},{url:"/gamepad-demo/js/chunk-vendors.72ff8a99.js",revision:"16bcc6fabfd007c81155fd9d253325d7"},{url:"/gamepad-demo/js/skip-waiting.js",revision:"f9429ef9ae0a075d62ad46995a899d89"},{url:"/gamepad-demo/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
