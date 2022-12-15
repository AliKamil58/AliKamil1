const button=document.querySelector("button");
//BUradaki fonksiyona herhangi bir değer versekte vermesekte bu event listeneri çağırır.
// Event yerine başka isimlerde verilebilir.
//button.addEventListener("click",e=>{console.log(e)})

const liElemanları=document.querySelectorAll("li")

 
    
liElemanları.forEach(eleman=>{

//Biz e.target ile tıkladığımız li etiketinin tamammımna ulaşabiliyoruz.
//Biz burada kodyazarken bütün li elemanlarına aynı özelliği verbilmek için li lerin hepsini seçip yani nod list oluşturup forach döngüsüyle döndük.
    eleman.addEventListener("click",e=>{console.log("Liye tıkladı"); console.log(e)   ; e.target.remove();console.log(e.target); e.target.style.color="red"  } )
  
   

 })

 const ul=document.querySelector("ul")
 button.addEventListener("click",()=>{const li =document.createElement("li");  li.textContent="Java Script" ;ul.prepend(li);})


    
    
    
    





