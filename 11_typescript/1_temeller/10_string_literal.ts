/*
 * String Literal
 * Bir metnin tipini string olarak tanımlamak yerine alabileceğimzş değer sayısı çok fazla değilse doğrudan bu değerleri yazarak tip kısıtlaması yapabiliyoruz

 * Örn: Spotify benzeri bir projede kullanıcı nesnensinni tpini tanımlamak istiyoruz. Herp türünün tipini yazarken string yazmak yerine sadece 4-5 farklı değer alabiliceği için string literal kullanımı ile daha fazla kısıtlama yapmış oluruz.
 */

type User = {
  id: number;
  name: string;
  account_type: "admin" | "free" | "premium";
};

const newUser: User = {
  id: 45345,
  name: "Faruk",
  account_type: "premium",
};

// Bir araba kiralama sitesi için api'dan gelen araba verilerinin tipini tanımlama. Sahip versinin nasıl geliceğini bilmiyoruz.

type Car = {
  make: string;
  model: string | number;
  gearbox: "otomatik" | "manuel";
  fuel: "benzin" | "dizel" | "elektrik" | "hibrit";
  year: number;
  owner: any;
};

const newCar: Car = {
  make: "BMW",
  model: "M850i",
  gearbox: "otomatik",
  fuel: "benzin",
  year: 2023,
  owner: null,
};
