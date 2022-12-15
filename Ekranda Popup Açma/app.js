let button=document.querySelector("button")
let mainpopup=document.querySelector(".main-popup"  )
button.addEventListener("click",()=>{mainpopup.style.display="block"})
let close=document.querySelector(".popup-close")
close.addEventListener("click",()=>{mainpopup.style.display="none";})
//Biz direk mainpopup style display=none diyerekte yapabiliriz.Veya biz alttaki örnekteki gibide yapabiliriz.
mainpopup.addEventListener("click",()=>{
    
    if(e.target.className==="main-popup")
   { mainpopup.style.display="none";}})

