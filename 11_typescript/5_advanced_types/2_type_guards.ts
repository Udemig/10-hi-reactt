/*
 ! Type Guards
  
 * Type guardsın amacı belirli bir türdeki değeri kontrol etmmek ve bu türe özgü işlemler gerçekleştirebilmek için kullanılan bir tekniktir.

 * 2 farklı typeGuards yöntemi bulunur (typeOf,instanceOf)
*/

// 1) typeOf operatörü ile typeGuard tekniğini uygulayalım
function log(input: string | number): void {
  if (typeof input === "string") {
    console.log("Girilen değer bir metindir: ", input);
  } else {
    console.log("Girilden değer sayıdı: ", input);
  }
}

log("merhaba");
log(45);

// instanceOf operatörü nedir?
class Bird {}
class Rabbit {}

const tavsan = new Rabbit();

console.log(
  "Tavşan nesnesi Rabbit classs'ın örneği midir?",
  tavsan instanceof Rabbit
);
console.log(
  "Tavşan nesnesi Bird classs'ın örneği midir?",
  tavsan instanceof Bird
);

// 2) insatnceOf operatörü ile typeGuard tekniği uygulayalım
class Cat {
  meow(): void {
    console.log("🐈🐈 miyav miyav");
  }
}

class Dog {
  bark(): void {
    console.log("🐶🐶 hav hav");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const kedi = new Cat();
const kopek = new Dog();

makeSound(kedi);
makeSound(kopek);
