const ul=document.querySelector(".main")

let öğrencilerim=["can","hakan","elif","tuba"]

let html=""
debugger
öğrencilerim.forEach(isim =>{html+=`<li>${isim}</li>` })
console.log(html)
ul.innerHTML=html;