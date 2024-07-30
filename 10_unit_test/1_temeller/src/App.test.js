// App.test.js: App bileşeninin testlerinin yazıldığı dosya
// Bir dosyanın test dosyası olduğunu .test.js/jsx uzantılarındna anlayabiliriz.

/*
  ! Unit Test

   * Yazdığımız dinamik olan bütün react bileşenlerini test edicez.

   * Bu sayede kod değişikliği yapıldığında, yaptığımız değişiklikleri githuba göndermeden önce testleri çalıştıırıp her şeyin doğru çalışıtığından emin olabiliriz. Bütük projelerde her işlevi el ile kontrol etmek çok fazla zaman alır ve gözden bir şey kaçırma ihtimali yüksektir. Bu yüzden uni test ile bileşenler görevlerini yerine getiriyor mu diye tek tek her bileşenin testi yazılır.

   * Kod değişikliği yapıldığında yeni kodlar githuba pushlanmadan önce testler çalıştırılır ve her şeyin doğru çalıştığından emin olunur. Unit testler sayesinde yapılan her değişiklikte bütün projeyi el ile tek tek kontrol etmeye gerek kalmaz. Sadece testler çalıştırılır
*/

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Button from "./Button";
import Button2 from "./Button2";

// Bir fonksiyonun veya bileşnein unit testini yazmak için "test" veya "it" methodu kullanılır.
// test methodu 2 parametre alır
// 1) string    : testin açıklaması
// 2) fonksiyon : testin yapıldığı nokta

// test("react öğren linki ekrana basılır", () => {
//   // test edilcek olan bileşenin Virtual (Sanal) Dom'da "ekrana basılır"
//   render(<App />);

//   // bileşeni tarayıcıda ekrana basıyor olsaydık document.querySelector("a") vb. methodlarıını kullanarak elementi çağırıdık ama unit testteki render methodu tarayıcıya değil sanal dom da çalışır bundan dolayı document yerine screen ve querySelector/getElementById yerine farklı methodlar kullanırız.
//   const linkElement = screen.getByText("React Öğren");

//   // çağrılan elementten beklenetimizi test edicez
//   expect(linkElement).not.toBeInTheDocument();
// });

//
//
//
//
//
//
// test("Buton tıklanma olayında renk ve yazı değiştirir", () => {
//   //1) test edilcek bileşen render edilir
//   render(<Button />);

//   //2) test edilcek elementi çağır
//   const button = screen.getByRole("button");

//   //3) buton rengi kırmızıdır
//   expect(button).toHaveStyle({ background: "red" });

//   //4) butonun içinde "Maviye Çevir" yazar
//   expect(button).toHaveTextContent("Maviye Çevir");

//   //5) butona tıklanır
//   fireEvent.click(button);

//   //6) butonun rengi mavi olur
//   expect(button).toHaveStyle({ background: "aqua" });

//   //7) butonun içinde "Kırmızıya Çevir" yazar
//   expect(button).toHaveTextContent("Kırmızıya Çevir");

//   //8) butona tıklanır
//   fireEvent.click(button);

//   //9) buton rengi kırmızıdır
//   expect(button).toHaveStyle({ background: "red" });

//   //10) butonun içinde "Maviye Çevir" yazar
//   expect(button).toHaveTextContent("Maviye Çevir");
// });

// ALGORİTMA
//1) test edilecek bileşen render et
//2) test edilecek elementleri çağır (button)
//3) butonun içinde "Göster" yazar
//4) butona tıklanır
//5) test edilecek elementleri çağır (paragraf)
//6) buton içindeki yazı "Gizle" yazar
//7) paragraf ekrana gelir
//8) butona tıklanır
//9) buton yazısı 'Göster' olur
//10) paragraf ekranda yoktur

// var mı kontrolü?
// expect(element).toBeInTheDocument();
// yok mu kontrolü?
// expect(element).not.toBeInTheDocument();

// cevap-1
test("button", () => {
  // test edilecek bileşen render edilir
  render(<Button2 />);

  // test edilecek elementi çağır
  const button = screen.getByRole("button");

  //buton yazısı göster olacak
  expect(button).toHaveTextContent("Göster");

  // butona tıklanır
  fireEvent.click(button);

  //buton yazısı gizle olacak
  expect(button).toHaveTextContent("Gizle");

  // paragraf alınıcak
  const p = screen.getByText("Herkese açık wifi'lara dikkat edin");

  //"Herkese açık wifelara dikkat edin mesajı çıkacak"
  expect(p).toBeInTheDocument();

  //butona tıklanır
  fireEvent.click(button);

  //buton yazısı göster olacak
  expect(button).toHaveTextContent("Göster");

  //mesaj kaybolacak
  expect(p).not.toBeInTheDocument();
});
