/*
 * Typescript, js'İn bazı önemli açıklarını düzeltmek için microsoft tarafından geliştirilen bir programlama dilidir.

 * Açıklar:
 * * JS'de tanımladığımız bir dğeişkenin daha sonra değerini değiştirirken farklı tipte bir veri atayabiliyoruz. Bu, projede beklenemdik ve tepit edilmesi güç sorunlar ortaya çıkarabilir. Ts ise bu tarz durumlarda daha kodu derlemeden vscode içerisnde ts bizi uyarır.
  
 * js'de otomatik tamamlama desteği bulunmuyor.ts'de ise type'ını tanımlarsak api'dan gelen verilerde bile oto. tamamlama devreye girer

* js' de editörde hata tespiti yok ancak runtime da birçok hatayı görürüz

 * Typescript kodları tarayıcı tarafından doğrudan okunamaz. Eğer ts kodunu çalıştırmak istiyorsak önce js'e derlememiz gerekli.

 * TSC: Typescript Compiler
 * Yazılan typescript kodunu js'in istediğimiz sürümüne derler.
 * Kullanabilmek için type'in paketini gloabal olarak kumuş olmamız gerekli.
*/

let x: number = 10;

console.log("bu değişkenin değeri", x);

const user2 = {
  name: "ahmet",
  age: 67,
};

console.log(user2.email)
