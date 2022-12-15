const userName="alikamil";
//Biz burada parentezlerin arsına boşluk vermeden yazacağız.Biz test edeceğimiz değişkenin değerinide arada boşluk olmadann yazmalıyız.Hata almamak için.


let pattern=/^[a-z]{6,10}$/;
//Biz burada küçük harflerden oluşan başında ve sonunda bir şey olmayan 6 ile 10 karakterli olanları al demiş olduk.

let sonuç=pattern.test(userName);
console.log(sonuç);

if(sonuç==true)
{
    console.log("Başarılı")
}
else
{console.log("Başarısız")}

//Biz bu şekilde de yazabiliriz.

let so=userName.search(pattern);
console.log(so)