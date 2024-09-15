import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <h1 className="text-yellow-500">404</h1>

      <h1>Üzgünüz, Aradığınız sayfa bulunamadı</h1>

      <p className="text-lg">
        <Link href="/">Anasayfa</Link>'ya dönebilirsiniz
      </p>
    </div>
  );
};

export default NotFound;
