import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";

//* Contextin temelini oluştur
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("sepet", []);

  const addToBasket = (newProduct) => {
    //* Tıkladığımız eleman sepette var mı yok mu kontrol etmek için find methodu kullarak
    //* idsi eşit olan ürünü bulduk.
    const found = basket.find((i) => i.id === newProduct.id);

    //* Ürün sepette varsa miktarını 1 arttır.
    if (found) {
      console.log("ürün bulundu");
      console.log(found);
      //* Bulunun ürünün miktarını bir arttır
      const updated = { ...found, amount: found.amount + 1 };
      //* Sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      console.log(newBasket);
      setBasket(newBasket);
    } else {
      //* Ürün sepette yoksa ürünün miktarı 1 olarak sepete ekle
      console.log("ürün ilk defa eklendi");
      setBasket(basket.concat({ ...newProduct, amount: 1 }));
    }
  };
  console.log(basket);

  return (
    <BasketContext.Provider value={{ addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
