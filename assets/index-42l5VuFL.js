(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),(async()=>{let e=[];try{let t=await(await fetch(`http://localhost:3000/menu`)).json();console.log(t),e=t.map(e=>e.dropdown.length>0?`
            <li>
              <details>
                <summary class='capitalize'>${e.name}</summary>
                <ul class="p-2 bg-base-100 w-40 z-1">
                  ${e.dropdown.map(e=>`<li><a class='capitalize' href=${e.link}>${e.name}</a></li>`).join(` `)}
                </ul>
              </details>
            </li>`:`<li><a class='capitalize' href=${e.link}>${e.name}</a></li>`),document.querySelector(`.megaMenu`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),(async()=>{let e=[];try{let t=await(await fetch(`http://localhost:3000/slider`)).json();console.log(t),e=t.map(e=>` <div class="swiper-slide">
                <img src="./src/image/src/image/f837d4422335566819c2ad534c2dd316c4048cab_1776755004.webp" alt="#">
            </div>

            <div class="swiper-slide">
                <img src="./src/image/e2fc3f348912c129e312583df9813896d50bb1ed_1781364388.webp" alt="#">
            </div>

            <div class="swiper-slide">
                <img src="./src/image/693460c45dd2548bf68f885ddaace53586a198fd_1781688239.webp" alt="#">
            </div>

            <div class="swiper-slide">
                <img src="./src/image/517817fa6ff22d9f5615d5a77dac1a1e941ad9c8_1782049672.webp" alt="#">
            </div>`),document.querySelector(`.swiper-wrapper`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),(async()=>{let e=[];try{e=(await(await fetch(`http://localhost:3000/Products`)).json()).map(e=>`
      <div class="card bg-base-100 w-[200px] shadow-sm">
  <figure>
    <img
      src=${e.image}
      class="w-1/2 block mx-auto"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${e.title}</h2>
    <h2 class="card-title">${e.price}</h2>
    <h2 class="card-title">${e.category}</h2>


    <p>
        ${e.description}
    </p>
    <div class="card-actions justify-between">
    <h2 class="card-title">${e.rating.rate}</h2>
    <h2 class="card-title">${e.rating.count}</h2>
    </div>
  </div>
</div>`),document.querySelector(`.products`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),(async()=>{let e=[];try{e=(await(await fetch(`http://localhost:3000/Product`)).json()).map(e=>`
      <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src=${e.image}
      class="w-1/2 block mx-auto"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${e.title}</h2>
    <h2 class="card-title">${e.price}</h2>
    <h2 class="card-title">${e.category}</h2>


    <p>
        ${e.description}
    </p>
    <div class="card-actions justify-between">
    <h2 class="card-title">${e.rating.rate}</h2>
    <h2 class="card-title">${e.rating.count}</h2>
    </div>
  </div>
</div>`),document.querySelector(`.product`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),(async()=>{let e=[];try{e=(await(await fetch(`http://localhost:3000/Products1`)).json()).map(e=>`
      <div class="card bg-base-100 w-[200px] shadow-sm">
  <figure>
    <img
      src=${e.image}
      class="w-1/2 block mx-auto"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${e.title}</h2>
    <h2 class="card-title">${e.price}</h2>
    <h2 class="card-title">${e.category}</h2>


    <p>
        ${e.description}
    </p>
    <div class="card-actions justify-between">
    <h2 class="card-title">${e.rating.rate}</h2>
    <h2 class="card-title">${e.rating.count}</h2>
    </div>
  </div>
</div>`),document.querySelector(`.products1`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),(async()=>{let e=[];try{e=(await(await fetch(`http://localhost:3000/Products2`)).json()).map(e=>`
      <div class="card bg-base-100 w-[200px] shadow-sm">
  <figure>
    <img
      src=${e.image}
      class="w-1/2 block mx-auto"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${e.title}</h2>
    <h2 class="card-title">${e.price}</h2>
    <h2 class="card-title">${e.category}</h2>


    <p>
        ${e.description}
    </p>
    <div class="card-actions justify-between">
    <h2 class="card-title">${e.rating.rate}</h2>
    <h2 class="card-title">${e.rating.count}</h2>
    </div>
  </div>
</div>`),document.querySelector(`.products2`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),(async()=>{let e=[];try{e=(await(await fetch(`http://localhost:3000/Products3`)).json()).map(e=>`
      <div class="card bg-base-100 w-[200px] shadow-sm">
  <figure>
    <img
      src=${e.image}
      class="w-1/2 block mx-auto"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${e.title}</h2>
    <h2 class="card-title">${e.price}</h2>
    <h2 class="card-title">${e.category}</h2>


    <p>
        ${e.description}
    </p>
    <div class="card-actions justify-between">
    <h2 class="card-title">${e.rating.rate}</h2>
    <h2 class="card-title">${e.rating.count}</h2>
    </div>
  </div>
</div>`),document.querySelector(`.products3`).innerHTML=e.join(` `)}catch(e){console.log(e.message)}})(),new Swiper(`.mySwiper`,{loop:!0,centeresSlides:!0,spacebetween:0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:`.swiper-pagination`,clickable:!0},navigation:{nextEl:`.swiper-button-next`,prevEl:`.swiper-button-prev`},effect:`slide`,speed:800});