"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="text-2xl flex flex-col gap-10 items-center text-center">
      <p>{error.message}</p>

      <button className="border rounded py-1 px-3 " onClick={reset}>
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
