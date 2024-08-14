/*
 * Static kelimesi bir sınıfın örneği olmadan özelliğin doğrudan sınıfa ait olduğu anlamına gelir.
 * Direkt sınıf üzerinden erişilebilen özellik ve methodlar tanımlayabiliyoruz
 */

//* Static Method
class Matematik {
  topla(x: number, y: number): void {
    console.log(x + y);
  }

  static carp(a: number, b: number): void {
    console.log(a * b);
  }
}

// static olan methoda erişme
Matematik.carp(30, 40);

// static olmayan methoda erişme
const math = new Matematik();
math.topla(50, 70);

// TODO STATIC DEĞİŞKENLERE BAK
