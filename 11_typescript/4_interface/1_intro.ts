/*
 ! Interface
 * Bir nesnenin yapısını yani nesnenin hangi tipte özellik ve methodlara sahip oluvağını ifade eder
 
 ! Custom Type | Abstract Class | Interface
 * Birbirine benzer görevler yapmaktadırlar.
 * 3'ününde ortak noktası bir nesnenin  tipini tanımlamak için kullanılabilir olmaları.
  
 ? Abstract Class vs Interface
 * Class'lar aynı anda sadece bir class'ı miras alabilir.
 * Interface'ler tek seferde birden fazla interface'i miras alabilir. 

 ? Type vs Interface
 * Type ile birlikte sadece nesne değil, dizi, string literal, tuple vb. tipler de tanımlanabilir.
 * Ama interface ile sadece nesne tipi tanımlanabilir.
 */

//* Örn: Type ile nesne tipi tanımla
type PersonType = {
  name: string;
};

const kisi1: PersonType = {
  name: "Ali",
};

//* Örn: Interface ile nesne tipi tanımla
interface IPerson {
  name: string;
}
const kisi2: IPerson = {
  name: "Ayşe",
};

// type ile interfaceden farklı olarak nesne dışında tipler tanımlayabilirsiniz
type alphanumeric = string | number;
type arrayType = string[];
type gasType = "elecrtic" | "dizel" | "benzin";
type fn = (a: number) => void;

// Interface ile yukarıdaki tipleri sadece nesne içiersiinde tnaımlayabilirsiniz.

// Örn: ileride oluşturucağumuz bir geometrik şekil nesnesinin hangi özellik ve methodlarını tanımladığıızı interface ile yazalım.
interface IShape {
  width: number;
  height: number;
  radius?: number;
  calculateArea: () => number | string;
}



















// yukarıdaki interface yardımıyla birr nesnenin tipini tanımlayalım
const square: IShape = {
  width: 200,
  height: 200,

  calculateArea() {
    return this.width * this.height;
  },
};

console.log(square.calculateArea());

// farklı bir nesnenin tipini aynı interface ile tanımlayalım
const circle: IShape = {
  width: 40,
  height: 1,
  radius: 20,

  calculateArea() {
    if (this.radius) {
      return Math.PI * this.radius * this.radius;
    } else {
      return "Lütfen yarıçap tanımlayın";
    }
  },
};

console.log(circle.calculateArea());
