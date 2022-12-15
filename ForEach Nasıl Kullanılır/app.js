let öğrencilerim=["can","hakan","elif","tuba"]

//Biz for each döngüsünde kendisi otomatikmen dizinin eleman sayısı kadar döner ve bizim functionda belirtiğimiz şeyi  mesela biz isim dedik buradaki isimleri döner , koyup index numarlarınıda döndürebiliriz.
//Biz burada fonksiyona parametre olarak ne verirsek o türde şeyi döndürür.
//Biz eğer para metre vermessek ve direk bir değeri console yyazdırmaya kalkarsak dizinin eleman sayısı adedince döngü döner ve dört kere selam yazıdrmış oluruz.

öğrencilerim.forEach(function(isim,index) 
{  console.log(isim,index)}




)


//For aechnin çalışma mantığı şöyle ilk başta burada bizim 0.indexteki canı alıyor kişiye atıyor canın sırasını index numarsını da indexe atıyor
// sonra dönüyor sonraki sim hakanı alıyor kişiye sıraki indexi alıyor indexe atıyor bu şekilde işliyor kodlar.
 öğrencilerim.forEach(function(kişi,index){console.log(kişi,index)})
