import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Amazon",
    // bütün tite'lara eklenicek ortak kelime
    template: "%s - Amazon",
  },
  description: "En iyi ürünler burada",
};

// HOC
// Ekrana basılcak olan sayfanın bileşnini prop olarak allır ve html - body içerisinde return eder
// bu sayede farklı sayfalarda ortak kullanılcak bilşenleride tanımlayabilir
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen flex flex-col">
          <header className="text-lg border-b p-5 font-semibold flex justify-between">
            <Link href="/">Anasayfa</Link>
            <Link href="/products">Ürünler</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Giriş Yap</Link>
          </header>

          <main className="flex-1 grid place-items-center text-3xl font-semibold">
            {children}
          </main>

          <footer className="text-lg border-t p-5 text-center">
            Tüm Haklar Saklıdı
          </footer>
        </div>
      </body>
    </html>
  );
}
