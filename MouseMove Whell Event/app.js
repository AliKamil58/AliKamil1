const kutu=document.querySelector(".kutu")
//OFFSET Y BİZE YUKARIYA GÖRE POZİSYONUNU VERİRKEN OFFSET Y İSE YATAY KONUMA GÖRE VERİR.bİZ BU ŞEKİLDE KONUMUNU BASTIRABİLİRİZ.bİZ BUNLARI KULLANARAK MOUSE NEREDEYSE BU ARAKADAŞLARIN POZİSYONLARINI BASTIRABİLİRİZ.

// !kutu.addEventListener("mousemove",(e)=>{console.log(e.offsetX,e.offsetY)})

// Mousenin üzeründe gezindiği kordinatları bize verir.

kutu.addEventListener("mousemove",e=>{console.log(kutu.textContent="x kordinatı"+e.offsetX+"y kordinatı"+ e.offsetY)})

// Bizrde wheel var buda bize mousenin orta kaydırma çubuğunu kaydırdığımızda yapılması gereken işlemleri bize verir.

kutu.addEventListener("wheel",e=> {console.log(e.pageX,e.pageY)})