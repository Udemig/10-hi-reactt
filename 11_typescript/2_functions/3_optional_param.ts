/*
 * Optional Param
 * Normal şartlarda fonksiyonu çağırabilmemiz için parametrelerinin tamamına değer göndermemeiz gerekir.
 
 * Bazı durumlarda bazı parametreler zorunlu olmayabilir. Bu durumlarda opsiyonel parameterler kullanılır. 

 * Tanım
 * (a:string, b?:number)  > a parametresi zorunlu b ise opsiyonel olur
 
 * Eper opsiyonel olan parametreyi gödnermezsek undefined değeri gider.
 * Opsiyonel parametreler, parametre listesinin en sonunda yer alır.
 * Opsiyonel bir parametrenin ardından zorunlu bir param gönderilemez 
*/

function exaFunc(par1: number, par2: string, par3?: boolean) {
  console.log("1.param: ", typeof par1);
  console.log("2.param: ", typeof par2);
  console.log("3.param: ", typeof par3);

  console.log("---------------------");
}

exaFunc(33, "selam", true);
exaFunc(33, "selam", undefined);
exaFunc(33, "selam");

// Örnek
const karsilama = (isim: string, zaman?: string): string => {
  if (zaman) {
    return `İyi ${zaman}, ${isim}`;
  } else {
    return `Merhaba, ${isim}`;
  }
};

console.log(karsilama("Ahmet", "akşamlar"));
console.log(karsilama("Ali"));
