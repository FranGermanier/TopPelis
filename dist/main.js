!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var a=()=>'\n            <div class="Header-main">\n                <div class="Header-logo">\n                    <h1 />\n                        <a href="/">\n                        Inicio\n                        </a>  \n                    </h1>\n                </div>\n                <h1> \n                    Cueva del Cinefilo\n                </h1>\n                <div class="Header-nav">\n                    <a href="#/about">\n                        About\n                    </a>\n\n                </div>\n            </div>\n    ';const r="14e2162d9cfb015043bb9c0ffa318b50",o=`https://api.themoviedb.org/3/trending/movie/week?api_key=${r}&language=es`;var i=async n=>{const e=n?`\n    https://api.themoviedb.org/3/movie/${n}?api_key=${r}&language=es`:o;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error..!!",n)}};var s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var l=()=>'\n        <div class="Error404">\n            <h2> Error 404 </>\n         </div>   \n    ';var c=n=>{if(console.log(n),n.length<=10){let e="/"===n?n:"/:id";return console.log(e),e}return console.log(n),"/"+n};const d={"/":async()=>`\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"><\/script>\n            <div class="subHeader">\n                <h1>\n                    TOP 20 PELICULAS MAS POPULARES DE LA SEMANA\n                </h1>\n            </div>\n        <div class="movies">\n            ${(await i()).results.map(n=>`\n            <article class="movies-item">\n                <a href="#/${n.id}">\n                <img src="https://image.tmdb.org/t/p/original${n.poster_path}" align="left" alt="${n.title}">\n                <h2> ${n.title} </h2>\n                <h3> \n                    Estreno: ${n.release_date}\n                    <br>\n                    <br>\n                    Calificacion: ${n.vote_average}★ \n\n                </h3>\n                </a>\n            </article>\n                    `).join("")}\n        </div  \n            `,"/:id":async()=>{const n=s();console.log(n);const e=await i(n);return`\n        <div class="movies-inner">\n                <article class="movies-card">\n                    <img src="https://image.tmdb.org/t/p/original${e.poster_path}" alt="${e.title}">\n                    <h2>${e.title}</h2>\n                </article>\n                    \n                <article class="movies-card">\n                    <h3><b>Titulo original:</b> <span>${e.original_title}</span></h3>\n                    <h3><b>Premisa:</b> <span>${e.overview}</span></h3>\n                    <h3><b>Genero:</b> <span>${e.genres[0].name}</span></h3>\n                    <h3><b>Estreno:</b> <span>${e.release_date}</span></h3>\n                    <h3><b>Calificacion:</b> <span>${e.vote_average}★</span></h3>\n                    <h3><b>Cantidad de votos:</b> <span>${e.vote_count}</span></h3>\n                    <h3>Podes verla <b> <a href="${e.homepage}" target="_blank"> aqui </a></b></h3>\n                </article>  \n        </div> \n    `},"/contact":"Contact"};var h=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await a();let t=s(),r=await c(t);console.log(r);let o=d[r]?d[r]:l;e.innerHTML=await o()};window.addEventListener("load",h),window.addEventListener("hashchange",h)}]);