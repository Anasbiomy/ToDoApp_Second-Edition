var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=e((()=>{})),r,i,a,o,s,c,l,u,d=e((()=>{r=document.querySelector(`.header_themtoggle`),i=document.querySelector(`.Dark_Theem`),a=document.querySelector(`.Task_Items_list`),o=document.querySelector(`.input_button`),s=document.querySelector(`.input_data`),c=()=>document.querySelectorAll(`.taskChecked`),l=()=>document.querySelectorAll(`.deleteTask`),u=document.querySelector(`.taskesapperance_button`)})),f,p,m,h,g,_,v,y,b,x,S=e((()=>{d(),D(),f=(e,t)=>{localStorage.setItem(e,[JSON.stringify(t)])},p=e=>{localStorage.setItem(`isDark`,JSON.stringify(e))},m=e=>JSON.parse(localStorage.getItem(e))||[],h=e=>({task:e,iscompleted:!1}),g=()=>{let e=``;e+=`
    
     <li class="EmptyState">
            <p class="emptyStataText">قائمة المهام فارغة</p>
            <img
              src="assets/icon-empty.svg"
              alt="empty stata imag"
              class="Emptystatsaimage" />
          </li>
    `,a.innerHTML=e},_=e=>{if(!e)return;let t=h(e),n=m(`tasks`);n.push(t),f(`tasks`,n)},v=()=>{let e=m(`tasks`),t=``;e.forEach(e=>{t+=`
     <li class="Task_Item  ">
            <div class="deleteTask">
              <img
                src="assets/icon-basket.svg"
                alt="icon-basket"
                class=" basketIcon" />
            </div>
            <div class="task_value taskChecked  ${e.iscompleted?` completed`:``}">
              <p class="task_value">
                <span class="text_valu"> ${e.task}</span>
              </p>
              <img
                src="assets/icon-checkmark.svg"
                alt="shckmarkicon "
                class="checkmark" />
            </div>
          </li>
    `}),a.innerHTML=t,T(),e.length===0&&g()},y=(e,t)=>{if(!confirm(`are you want to delet the task`))return;let n=m(`tasks`);n.splice(t,1),f(`tasks`,n),v()},b=()=>{T(),v()},x=(e,t)=>{let n=m(`tasks`);n[t].iscompleted=!n[t].iscompleted,f(`tasks`,n),v()}})),C,w,T,E,D=e((()=>{d(),S(),C=()=>{o.addEventListener(`click`,e=>{e.preventDefault(),_(s.value),v()})},w=()=>{r.addEventListener(`click`,()=>{let e=JSON.parse(localStorage.getItem(`isDark`));e=!e,p(e),i.classList.toggle(`Dark_Theem`)}),JSON.parse(localStorage.getItem(`isDark`))?i.classList.add(`Dark_Theem`):i.classList.remove(`Dark_Theem`)},T=()=>{fetch(`tasks`),l().forEach((e,t)=>{e.addEventListener(`click`,e=>{y(e,t)})}),c().forEach((e,t)=>{e.addEventListener(`click`,()=>{e.classList.toggle(`completed`),x(e,t)})})},E=()=>{u.addEventListener(`click`,()=>{let e;e=m(`isHideData`)===!0,console.log(e),e=!e,console.log(e),f(`isHideData`,e),e?u.classList.add(`taskesapperance_button_isActive`):u.classList.remove(`taskesapperance_button_isActive`)}),v()}}));t((()=>{n(),d(),D(),S(),b(),C(),w(),E()}))();