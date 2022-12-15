//Biz burada bize ilk p etiketini ver demiş olduk ve console yazdırdık.
let  hata=document.querySelector("p")
console.log(hata)
//Biz buradada ilk classı eror olanı seçtik.
let error=document.querySelector("error")
console.log(error)

//Biz quary selector all dersek o zaman o selectora sahip olan hepsini seç demek .
//Biz böyle yaparsak bize node list veirr bizim bu etiketlerin kendilerini direk bastırmamız için
let p=document.querySelectorAll("p")
console.log(p[0])

//Biz hepsini bastırmak istiyorsakta for eCH DÖNGÜSÜYLE BASTIRABİLİRİ.Z
p.forEach((isim)=>{console.log(isim)})