const içerik=document.querySelector("p")
console.log(içerik.classList)
//BUrada biz classlist dediğimizde p etikenin içerisindeki classları bize verir.

//Bu şekilde classlara biz ekleme yapabiliyoruz.
içerik.classList.add("Kamil")

//Biz classlistten class kaldırmadada bunu kullanıyoruz.
içerik.classList.remove("Kamil")
console.log(içerik.classList)

const pdegeri=document.querySelectorAll("p")

pdegeri.forEach(isim=>{
    
   if(isim.textContent.includes("success"))
{

isim.classList.add("success")
}
if (isim.textContent.includes("error"))
 {
isim.classList.add("error")
}

})
