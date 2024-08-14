/*
 * Herkes içerisinde en az 1
 * string
 * number
 * boolean
 * array
 * object
 * tuple [string,number]
 * union type
 * string literal
 * any
 * tiplerinde veri barındıran bir nesne tipi oluşturun ve bu oluşiturduğunuz tipi en az bir kere kullanının
 */

type kisi = {
  name: string;
  yas: number;
  cinsiyet: "erkek" | "kadın";
  egitim: any;
  il: [string, number];
};

const veri: kisi = {
  name: "ali",
  yas: 45,
  cinsiyet: "erkek",
  egitim: "üniversite",
  il: ["trabzon", 61],
};

// CEVAP  - 2
type Person = {
  name: string;
  age: number;
  medeni_durum: "Evli" | "Bekar";
  cocuk_var_mı: boolean;
  cocuk_isim_yas: [string, number];
  ebeveyn: [
    { anne_isim: string; anne_yas: number },
    { baba_isim: string; baba_yas: number }
  ];
};

const person1: Person = {
  name: "fatma",
  age: 28,
  medeni_durum: "Evli",
  cocuk_var_mı: true,
  cocuk_isim_yas: ["gökçe", 3],
  ebeveyn: [
    { anne_isim: "zeynep", anne_yas: 49 },
    { baba_isim: "ahmet", baba_yas: 50 },
  ],
};

// cevap - 3
type Book = {
  name: string;
  pages: number;
  onSale: boolean;
  authors: string[];
  detail: { publisher: string; year: number };
  genre: "fiction" | "action" | "biography";
  ratings: number | null;
};

const myBook: Book = {
  name: "Son Av",
  pages: 400,
  onSale: true,
  authors: ["Tess Grissen", "Joseph Grissen"],
  detail: { publisher: "timas", year: 2023 },
  genre: "fiction",
  ratings: 4.5,
};

type Person2 = {
  name: string;
  age: number;
  nereli: string;
  calisiyormu: boolean;
  hobiler: string[];
  rating: number | null;
  owner: any;
};

const kisi: Person2 = {
  name: "Gökhan",
  age: 33,
  nereli: "balkans",
  calisiyormu: false,
  hobiler: ["traveling"],
  rating: 7.7,
  owner: null,
};
console.log(kisi);
