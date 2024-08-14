/*
 * Typescript'de bir fonksiyonun tipini doğrudan fonksiyonu tanımlarken parametrelerin sağına yazaraka tanımlayabilirir. Ama bazı durumlarda fonksiyonlardan bağımsız bir şekilde tipinin tanımlı olması onu bir çok yerde kullanılabilir yapar ve kod tekrarından kurtuluru
 */

// 1.yol: Fonksiyon Üzerinde Tanım
let func1 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı" + par1 + par2;
};

let func2 = (par1: string, par2: number): string => {
  return "Fonksiyon Çalıştı" + par1 + par2;
};

// 2.yol: Ayrı tip tanımı
type FuncType = (par1: string, par2: number) => object;

let func3: FuncType = (par1, par2) => {
  return { text: "selamlar" };
};

// * Yukarıdaki tipi ayrıca tanımladığımız örnekte olduğu gibi bir fonksiyon yazınız bu fonksiyon:
// * kişinin bulunduğu konumu ve o konumdaki hava derecesini alsın
// * derece 30 dana fazlaysa "... konumu oldukça sıcak"
// * derece 30 dana azsa "... konumu oldukça soğuk"
// * şeklinde bir metin return eden fonksiyon yazınız

type FuncType1 = (konum: String, derece: number) => Object;

let func5: FuncType1 = (konum, derece) => {
  return derece > 30 ? konum + " oldukça sıcak" : konum + " oldukça soğuk";
};

console.log(func5("ankara", 20));
console.log(func5("izmir", 40));
