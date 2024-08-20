/*
 * Intersection Types - Kesişim Türler
 * Typescriptde kesişim türler iki veya daha fazla türü birleştirmek için kullanılır.
 */

type typeA = { key1: string };
type typeB = { key2: number };

// 1) Intersection: Her iki tipinde bütün özellikleri miras alınır
type typeAB = typeA & typeB;

let foo: typeAB = {
  key1: "merhaba",
  key2: 45,
};

// 2) Union: Belirlenen türlerin en az birinin bütün özelliklernini tanımlanması yeterli olur.
type typeAorB = typeA | typeB;

let bar: typeAorB = { key1: "naber" };
let baz: typeAorB = { key2: 45 };
let ban: typeAorB = { key1: "naber", key2: 45 };

// Örnek
type BusinessPartner = {
  name: string;
  credit: number;
};

type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Employee = Identity & Contact;
type Customer = Identity & BusinessPartner;
type NewEmployee = Identity & BusinessPartner & Contact;

let e1: Employee = {
  id: 123,
  name: "John",
  email: "john@gmail.com",
  phone: "905654645645",
};

let e2: Customer = {
  id: 342,
  name: "foo",
  credit: 32434534,
};
