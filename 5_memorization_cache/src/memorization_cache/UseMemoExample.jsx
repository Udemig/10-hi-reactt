import React, { useEffect, useMemo, useState } from "react";

const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  /*
        * React bileşeninde state'de bir güncelleme olduğunda güncellemenin 
        * ekrana yansıması için bileşeni tekrar render eder.Bunu önlemek için 
        * useMemo kullanılır.
        
    * Sorun:Aşağıdaki hesaplamada bileşen her render olduğnda gereksiz yere en baştan tekrar hesaplanır.

    * Çözüm:useMemo kullanıp yaptığımız hesaplamanın sonucu cache'e atmak ve her render
    * sırasında yeni sonuç üretmek yerine cache'deki veriye erişip kullanarak 
    * gereksiz maliyetli hesaplamaların önüne geçeriz
    
    */

  const dizi = new Array(10000).fill("Merhaba dünya");
  console.log(dizi);

  const yeniDizi = useMemo(() => {
    //* 1)Maliyetli işlem => 10.000 elemanlı bir dizi oluştur
    const dizi = new Array(10000).fill("Merhaba dünya");
    console.log(dizi);
    //* 2)Maliyetli işlem => diziyi dön ve yeni dizi oluştur
    return dizi.map((item) => item + "!");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Sayacı Arttır {count}</button>

      {yeniDizi.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default UseMemoExample;
