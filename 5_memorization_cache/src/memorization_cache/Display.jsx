import React from "react";

const Display = ({ count, updateCount }) => {
  console.log(count);
  console.log(updateCount);

  /*
    ! Sorun:
    * Şuan display bileşeninin içeriği değişmeyecek olsa daha üst bileşen
    * olan (newExample) render edildiğinde bu bileşende gereksiz yere
    * tekrardan render oluyor.
    * Gerçek bir projedeki kapsamlı bir sayfa olsaydı gereksiz yere render 
    * edilmesi performans sorunlarına yol açabilirdi.
  */

  return (
    <div
      style={{
        background: "crimson",
        padding: "5px",
        margin: "15px",
        borderRadius: "10px",
      }}
    >
      <h1>Sayacın Değeri: {count}</h1>

      <button onClick={updateCount}>Sayaç Arttır</button>
    </div>
  );
};

export default React.memo(Display);
/*
    ! Çözüm:
    * React.memo, react uygulamalarında performans optimizasyonu sağlamak
    * için kullanılır.
    * Bu fonksiyon bir önceki render sonucunu hafızada tutar.
    * Tekrar render edilmesi gerektiğinde eğer bileşenin aldığı proplar değişmediyse
    * tekrar render işlemi yapıp bileşeni ekrana basmak yerine önceki renderdan 
    * elde ettiğimiz sonucu kullanırız.

*/
