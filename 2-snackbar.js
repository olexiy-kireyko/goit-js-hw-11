import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as t}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form");o.addEventListener("submit",i=>{i.preventDefault();const s=o.elements.delay.value,m=o.elements.state.value;o.reset(),new Promise((e,l)=>{m==="fulfilled"?e(s):l(s)}).then(e=>{setTimeout(()=>{t.show({message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"#59a10d",messageColor:"white",layout:2,closeOnClick:!0,close:!1,position:"topCenter",messageSize:24,timeout:4e3})},e)}).catch(e=>{setTimeout(()=>{t.show({message:`❌ Rejected promise in ${e}ms`,backgroundColor:"#ef4040",messageColor:"white",layout:2,closeOnClick:!0,close:!1,position:"topCenter",messageSize:24,timeout:4e3})},e)})});
//# sourceMappingURL=2-snackbar.js.map