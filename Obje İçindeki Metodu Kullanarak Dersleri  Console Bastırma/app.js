let öğrenci = { ad: "Can", yas: 29, email: "canboz@hotmail.com", sinif: 12, dersler: ["matematik", "fizik", "kimya"] ,
login(){console.log("Öğrenci giriş yaptı")},
logout(){console.log("Öğrenci giriş yaptı")},
printLessons(){console.log(this.dersler)},



}
öğrenci.printLessons()
//Obje içersinde malaesef arrrow functionu kullanamıyoruz => kullanılmıyor.Sadece arrow function dada olan function yazısını yazmama var ve arada ki iki noktayıda siliyoruz.
//Burada biz direk dersler yazarsak hata alırız.Çünkü derslerin hangi konumda olduğunu bildirmemiz lazım onuda biz this ile yapıyoruz.
//Biz bu şekilde dersleri önüne this atarak ta bulabiliriz. yada biz dersleri dizinin ismini öğrenciyi yazıktan sonra dersleri yazarakta derslere erişebiliriz.

