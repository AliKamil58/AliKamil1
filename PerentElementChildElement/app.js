let section =document.querySelector("section")
///Bizim burada section html collection oluşturuyor bunu arraye çevirmek için bizim Array from dedikten sonra kaynak belirterek arraye çevirmemiz lazım.
//HTML COLLECTİONU FORACH İÇERİSİNDE KULLANAMIYOPRUZ KULLANABİLMEK İÇİN BU ŞEKİLDE YAPTIK.
// Biz bu sectionu diziye çevirmek için ilk başta bunu consola yazdırmamız lazımdır. 
console.log(Array.from(section.children));

Array.from(section.children).forEach(isim=>{console.log(isim.classList.add("section-element"))})

const baslik=document.querySelector("h2")
console.log(baslik.parentElement.parentElement)
//Bir sonrakini basma next element sibling bir öncekini alma previous element siblingtir.
console.log(baslik.nextElementSibling)

//Biz bu şekildede başlıktan bir sonra geleen elementin parent elementini buluyoruz.
console.log(baslik.nextElementSibling.parentElement)

//Biz buradada başlıktan bir sonraki elementin parent elementinin children yani çocukları demiş oluyoruz.
console.log(baslik.nextElementSibling.parentElement.children)