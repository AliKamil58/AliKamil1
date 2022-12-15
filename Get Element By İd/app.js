const baslik =document.getElementById("can")
console.log(baslik);

// İd seçiminde zaten bir id ye sahip bir eleman olduğundan collection olmuyor.O yüzden forach döngüsüde yapılmıyor.
//Classnameye gelecek olursak classname ve tag name ler html collection oluşturduğundan node list collecttion oluşturmadığından dolayı bunlarda da foraech döngüsüne almak olmuyor.


//Get element by class name de for each ile döndürmeyok html collection olduğundan dolayı nod list olanlarda for aech oluyor.

const hatalar=document.getElementsByClassName("error")
console.log(hatalar);
//Classlar html collection olduğundan bütün aynı classa sahip elementleri yazdıramıyoruz.

const hatalar1=document.getElementsByTagName("p")
// Aynı şekilde bu tagnamede de html collection oluşturduğundan dolayı bundada biz aynı şekilde for ach döngüsüyle bütün p etiketine sahip olanları yazdıramıyoruz.