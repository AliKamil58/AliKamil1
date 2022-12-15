//Biz eğer fonksiyonları arrow function şeklinde tanımlamak istiyorsak o zaman biz function yazısını sileceğiz ilk olarak .Sonra parametremizin yanına bir eşitttir daha koyup büyüktür işaretini koyuyoruz.
//Biz eğer sadece bir parametre alıyorsak o zaman bizim kenar parametresinin dışında oolan paranteze ihtiyacımız yok  o zaman bu parantezide kaldırıyoruz.
//Biz eğer birden dazla parametre alıyorsak zaman parantezi kullanmak zorundayız.
//Eğer bizim returnümüz tek bir satırsa o zaman süslüleri kullanmak zorunda değiliyiz.Retunüde kullanmak zorunda değiliz.
//Bizim fonsiyonumuz eğer bir parametre almamışsa o zaman biz parantezi silemeyiz.Sadece bir parametre aldığında parantezi silebiliriz.
//
const karealanı=function(kenar){ return kenar**2;}
let simdi=karealanı(8)
console.log(simdi)




const can =()=>{
return "Can"

}
let sonuç=can();
console.log(sonuç)


//Biz eğer biz burada fonsiyonumuzun functionunu silebiliriz.Çünkü burada arrow function bir function .Sonrada parantezleri açtık içiinde bir parametre yok ve aynı zamanda da return tek satır olduğundan süslü parantezleride kaldırdık returnüde sildik.

// todo const can =()=>"Can"

//  todo   let sonuç=can();

// todo    console.log(sonuç)


const fatura=function (ürünler,vergi){
    let toplam=0;
    for(let i=0; i<ürünler.length; i++)
    { toplam+=ürünler[i]+ürünler[i]*vergi}
    return toplam
}

let cevap=fatura([10,20,30],0.25)
console.log(cevap)



