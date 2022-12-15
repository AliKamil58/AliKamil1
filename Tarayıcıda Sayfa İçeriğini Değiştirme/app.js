const pdegeri=document.querySelector("p");
//Biz eğer sadece  elementin içindekini yazdırmak istiyorsak o zaman biz innerText yazacağız.
console.log(pdegeri.innerText)

pdegeri.innerText="Can Boz Full Stack Developerdir";

const pdeger=document.querySelectorAll("p")
//İnner texte sadece elementin içindeki metni değiştirebliyorken inner html ilede hem elemntin içindeki yazıyı hemde elementi değiştirebiliyoruz.

pdeger.forEach(isim => {console.log(isim.innerText)
 isim.innerText+=" Yeni Alan"
    
});
const error=document.querySelector(".error")
error.innerHTML+="<p>nasıl </p>"


let öğrenciler=["elif","tuba","can"]


öğrenciler.forEach(ad=>{error.innerHTML+=`<p>${ad}<p>`})

