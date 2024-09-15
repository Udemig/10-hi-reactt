"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// auth grunundaki bir sayfaya girilidğinde layour bileşeni o sayfayı chidlren prop'u ile alır
const Layout = ({ children }) => {
  const [name, setName] = useState();

  // url'den mevcut sayfa youlunur
  const path = usePathname();

  return (
    <div className="flex justify-between w-full p-4 gap-5">
      <nav className="text-lg flex flex-col border nav rounded">
        <label>Merhaba, {name} </label>
        <input
          className="text-black"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <Link href="/login" className={path === "/login" && "active"}>
          Giriş Yap
        </Link>

        <Link href="/signup" className={path === "/signup" && "active"}>
          Kayıt Ol
        </Link>

        <Link
          href="/forgotpass"
          className={path === "/forgotpass" && "active"}
        >
          Şifremi Unuttum
        </Link>
      </nav>

      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
