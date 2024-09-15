"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="text-3xl my-20 text-center flex flex-col gap-20">
      <h1>Üzgünüz Bir sorun oluştu</h1>
      <p>{error.message}</p>

      <button onClick={reset}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
