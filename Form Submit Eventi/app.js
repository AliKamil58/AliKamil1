//Biz forma submit eventini vermeliyiz inputa değil çünkü inputaverirsek biz enter yaptığımızda event gerçekleşmez sadece mouse ile tıklama yapıldığında işlem gerçekleşir.
/* Biz submit eventini forma vereceğiz imputa değil forma vereceğiz sebebi ise inputa verirsek o zaman bir action almayız entera bastığımızda */

const form=document.querySelector(".signup-form")
const userName=document.querySelector("#username")
//Biz submitte yaptığımızda form gönderildi yazısı yazar hızla geri kaybolur bunun sebebi sayfanın yenilenmesidir.Sayfanın yenilenmesini istemiyorsak o zaman prevent defaul kullanacağız.

form.addEventListener("submit",e=>{ e.preventDefault();
    //Biz burada direk inputun idsiyle inputa ulaşabilir. 
    //console.log("Form gönderildi");

    //Biz yada form deriz nokta deriz sonrada inputun namesini girerek bu şekilde de inputa ulaşabiliriz.
    //console.log(userName.value)

    console.log(form.username.value)
})