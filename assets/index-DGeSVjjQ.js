var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r,i,a,o,s,c,l,u=e((()=>{n=document.querySelector(`.header_themtoggle`),r=document.querySelector(`.Dark_Theem`),i=document.querySelector(`.Task_Items_list`),a=document.querySelector(`.input_button`),o=document.querySelector(`.input_data`),s=()=>document.querySelectorAll(`.taskChecked`),c=()=>document.querySelectorAll(`.deleteTask`),l=document.querySelector(`.taskesapperance_button`)})),d,f,p,m,h,g,_,v,y,b,x=e((()=>{u(),E(),d=(e,t)=>{localStorage.setItem(e,[JSON.stringify(t)])},f=e=>{localStorage.setItem(`isDark`,JSON.stringify(e))},p=e=>JSON.parse(localStorage.getItem(e))||[],m=e=>({task:e,iscompleted:!1}),h=()=>{let e=``;e+=`
    
     <li class="EmptyState">
            <p class="emptyStataText">قائمة المهام فارغة</p>
            <img
              src="assets/icon-empty.svg"
              alt="empty stata imag"
              class="Emptystatsaimage" />
          </li>
    `,i.innerHTML=e},g=e=>{if(!e)return;let t=m(e),n=p(`tasks`);n.push(t),d(`tasks`,n)},_=()=>{let e=p(`tasks`),t=``;e.forEach(e=>{t+=`
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
    `}),i.innerHTML=t,w(),e.length===0&&h()},v=(e,t)=>{if(!confirm(`are you want to delet the task`))return;let n=p(`tasks`);n.splice(t,1),d(`tasks`,n),_()},y=()=>{w(),_()},b=(e,t)=>{let n=p(`tasks`);n[t].iscompleted=!n[t].iscompleted,d(`tasks`,n),_()}})),S,C,w,T,E=e((()=>{u(),x(),S=()=>{a.addEventListener(`click`,e=>{e.preventDefault(),g(o.value),_()})},C=()=>{n.addEventListener(`click`,()=>{let e=JSON.parse(localStorage.getItem(`isDark`));e=!e,f(e),r.classList.toggle(`Dark_Theem`)}),JSON.parse(localStorage.getItem(`isDark`))?r.classList.add(`Dark_Theem`):r.classList.remove(`Dark_Theem`)},w=()=>{fetch(`tasks`),c().forEach((e,t)=>{e.addEventListener(`click`,e=>{v(e,t)})}),s().forEach((e,t)=>{e.addEventListener(`click`,()=>{e.classList.toggle(`completed`),b(e,t)})})},T=()=>{l.addEventListener(`click`,()=>{let e;e=p(`isHideData`)===!0,console.log(e),e=!e,console.log(e),d(`isHideData`,e),e?l.classList.add(`taskesapperance_button_isActive`):l.classList.remove(`taskesapperance_button_isActive`)}),_()}}));t((()=>{u(),E(),x(),y(),S(),C(),T()}))();