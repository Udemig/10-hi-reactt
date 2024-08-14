/*
 * Union Types (Birleşmiş Tipler)
 * Bir değişkenin tiplerinin alabilceği birden fazla farklı türde veri varsa kullanıllur.

 * Örn: Biir kullanıcı değişkeni var ama kullanıcı adı (string) mi yoksa id(number) si mi gelicek kesin ollarak belli olamaybilir bu noktada değişken tipini tanımlarken kesin olara string veya eksin olarak number diyemiyiz bu noktrada değişken string veya number olmalı
*/

let user: string | number;

user = "Ali";

user = 456734;

// Örn: Bir telefon verisnin tutucaz ama tel android'mi yoksa ios'mu belli değil
type IOS = {
  ios_version: number;
  airdrop_version: number;
  device: string;
};

type Android = {
  android_version: string;
  google_play_version: number;
  device: string;
};

let phone: IOS | Android; // değişkenin tipi IOS veya Android

phone = { ios_version: 13.0, airdrop_version: 3.5, device: "Iphone 15" };

phone = {
  android_version: "Marsmellow",
  google_play_version: 19.7,
  device: "Samsung Note *",
};

// Not: Union TYPES Nesne ile Kullanım KILAVUZU
type AType = { key1: string; key2: string };
type BType = { key3: number; key4: number };

// example değişkeni a veya tipinde olsun
let example: AType | BType;

// ya A tipinin bütün değerlerini almalı
example = { key1: "x", key2: "x" };

// ya B tipinin bütün değerlerini almalı
example = { key3: 35, key4: 35 };

// yada hem A hem B tipinin bütün değerlerini alır
example = { key1: "x", key2: "x", key3: 35, key4: 35 };
