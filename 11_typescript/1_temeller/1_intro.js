/*
 * Typescript kodları tarayıcı tarafından doğrudan okunamaz. Eğer ts kodunu çalıştırmak istiyorsak önce js'e derlememiz gerekli.

 * TSC: Typescript Compiler
 * Yazılan typescript kodunu js'in istediğimiz sürümüne derler.
 * Kullanabilmek için type'in paketini gloabal olarak kumuş olmamız gerekli.
*/

var y = 10;
console.log("bu değişkenin değeri", y);

const user = {
  name: "ahmet",
  age: 67,
};

console.log(user.email);

let foo;

foo = 20;

foo = 99;

foo = "deneme";
foo = true;
foo = {};
