const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white-fa p-4 md:p-5 lg:p-6 xl:p-8 text-gray-dark">
      <nav className="flex gap-10 font-semibold">
        <a>New Drops 🔥</a>
        <a>Men</a>
        <a>Women</a>
      </nav>

      <img className="w-[16%]" src="logo.svg" />

      <div className="flex items-center gap-10">
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7"
          src="/user.svg"
        />
        <img
          className="size-4 md:size-5 lg:size-6 xl:size-7"
          src="/search.svg"
        />

        <span className="size-[25px] bg-yellow rounded-full grid place-items-center font-open font-semibold">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
