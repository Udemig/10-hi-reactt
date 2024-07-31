import { getByText, render, screen } from "@testing-library/react";
import Scoops from "./index";

/*
 ! Seçiciler
 1) Method Tipi  | 2) All İfadesi  | 3) Seçici Method

 * get > render anında DOM'da olan elementleri almak için kullanılır | elementi bulamazsa test başarısız olur

 * query > elementin ekranda olma durumu keisn değilse kullanılır get ile benzer çalışır | elementi bulamazsa null döndürür test devam eder

 * find > elemetin ekrana basılamasının asenkron olduğu durumlarda kullanılır. (api isteği sonnucu ekrana basılıcaksa)
 * not: find methodu promise döndürdüğü için async await ile kullanılmalı

 * eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir.
 * not: all kullanırsa dönen cevapta 1 eleman olsa dahi dizi döner
*/

test("API'dan alınan veriler için ekrana kartlar basılır", async () => {
  render(<Scoops />);

  // ekrana basılan kartları al (resimleri almak yeterli)
  const images = await screen.findAllByAltText("çeşit-resim");

  // ekrandaki resimlerin (kartlartın) sayısı 1 den fazla mı?
  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("Çeşitlerin ekleme ve azaltma işlevlerinin toplam fiyata etkisi", async () => {
  // test edilecek bileşen render edilir
  render(<Scoops />);

  // bütün ekleme ve azatma butonlarını çağır
  const addBtns = await screen.findAllByRole("button", { name: "Ekle" });
  const delBtns = await screen.findAllByRole("button", { name: "Azalt" });

  // toplam fiyat elementini çağır
  const total = screen.getByTestId("total");

  // başlangıç anında toplam 0 mı kontrol et

  // choclate'ın ekle butonuna tıkla

  // toplam fiyat 20 mi kontrol et

  // vanilla'nın ekle butonuna çift tıkla

  // toplam fiyat  60 mı kontrol et

  // vanilla'nın azalt butonuna tıkla

  // toplam fiyat  40 mı kontrol et

  // vanilla'nın azalt butonuna tıkla

  // toplam fiyat  20 mı kontrol et

  // chocalate'ın azalt butonuna tıkla

  // toplam fiyat 0 mı kontrol et
});
