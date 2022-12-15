const li=document.querySelectorAll("li")
const ul=document.querySelector("ul")
console.log(li)
//li.forEach(isim=>{isim.addEventListener("click",(e)=>{e.target.remove()})})
//Biz burada linin tag name ilede yapabiliriz.

ul.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.tagName==="LI")
    e.target.remove()})

const button=document.querySelector("button")

button.addEventListener("click",(e)=>{let li=document.createElement("li") ;li.textContent="JavaScript"; ul.append(li)})

//Buradaki e targetın ikisindede çalışmasını istemiyorsak birinde çalışmasını istiyorsak o zaman li ye gelip stop propagation diyeceğiz.
li.forEach(eleman=>{eleman.addEventListener("click",e=>{ e.stopPropagation();  console.log(e.target) })})