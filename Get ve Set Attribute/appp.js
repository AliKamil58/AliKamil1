const link=document.querySelector("a");

console.log(link.getAttribute("href"));

//Eğer biz attributede güncelleme yapacaksak buradaki gibi attributeden sonra güncelleme yapacağımız attributenin ismini griyoruz sonrada bu attributenin yerine girmek istediğimiz yeni değeri yazıyoruz.
console.log(link.setAttribute("href","https://www.sadikturan.com"))

//Biz link .textContent propörtisi ile bunu güncelleyebiliriz.Bu sayesede google yazan yere bizi kendi adresimizi yazabiliriz.
console.log(link.textContent="boztraining")

const pdegeri=document.querySelector("p");


let can=document.querySelector("#can");
//Biz burada set attributesini kullanarak id yi değiştirdik.

can.setAttribute("id","bonomo");

can.setAttribute("style","color:blue")















