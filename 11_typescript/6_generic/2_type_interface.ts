// Fonksiyonlarda olduğu gibi generic yapısnı yeniden kullanıalabilir olması için type ve interface'lerde de kullanasibliyoruz.

type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void; // diziye eleman ekleme methodu
  getItem: (i: number) => T; // diziden eleman alma methodu
};

const arr: ArrayType<number | string> = {
  items: [3, 5, 6, "6", 8, "3"],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

// Bir yapı birden fazla generic tip alabilir
interface IPerson<T, Z> {
  name: T;
  age: Z;
}

const foo: IPerson<string, number> = {
  name: "Ali",
  age: 123,
};

const bar: IPerson<object, number> = {
  name: { isim: "Ali" },
  age: 123,
};

// T , R , Z , V, E: Error - Hata tipi,
