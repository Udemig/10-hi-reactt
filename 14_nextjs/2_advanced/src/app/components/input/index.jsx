"use client";

import { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");

  console.log("🎾🎾 Input Render Edildi");

  return (
    <div className="flex flex-col gap-5 items-center">
      <h1>Input, {name}</h1>

      <input
        className="text-black"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <span className="bg-red-500 px-2 py-1 text-white rounded-md mt-4 text-lg">
        Client comp
      </span>
    </div>
  );
};

export default Input;
