class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

const numbers = new Sorter<number>([1, 2, 9, 8, 6, 3, 7]);

console.log(numbers.sortData());

const names = new Sorter<string>(["mehmet", "furkan", "ahmet"]);

console.log(names.sortData());

// Generic Özellik
// Tipi generic olarak alsakda baen kısıtlama yapmak isteyebiliriz.
// Mesela generic olarak alınan bir tipin sadece string veya boolean tiplerini generic olarak alırken diğer tipleri almasını engelleyebiliriz.

class Container<T extends string | boolean> {
  private value: T;

  constructor(newValue: T) {
    this.value = newValue;
  }

  getValue(): T {
    return this.value;
  }
}

new Container<string>("selamlar");
new Container<number>(3); // generic tip olarak gönderilemez
new Container<boolean>(true);
new Container<object>({}); // generic tip olarak gönderilemez

// T generic tipini tanımlarken extends yardımıyla sadece string veya boolean tiplerini alabilecek şekilde kısıtlama yaptık bundan kaynaklı generic tip olarak bu 2 tip dışarısında değer gönderemiyoruz

//* SORU: En az 1 generic tip alan type / interface / class yazınız.
// * Oluşturduğunuz bu yapıyı en az 1 kez kullanın

type x<T> = {};

interface y<T> {}

class z<T> {}

// CEVAP - 1
type Book<R> = {
  name: R;
  year: number;
  satis: boolean;
};

const exampleBook: Book<string> = {
  name: "Küçük Prens",
  year: 2000,
  satis: true,
};

// CEVAP - 2
type House<T> = {
  name: string;
  motto: string;
  land: number;
  details: T;
};

const stark: House<string> = {
  name: "Stark",
  motto: "Winter is Coming",
  land: 1500000,
  details: "The North Region",
};
