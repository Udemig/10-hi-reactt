import { useEffect } from "react";
import Filter from "./components/filter";
import Header from "./components/header";
import Hero from "./components/hero";
import Searchbar from "./components/searchbar";
import fetchCars from "./utils/fetchCars";

const App = () => {
  useEffect(() => {
    fetchCars().then((data) => console.log(data[0].cylinders));
  }, []);

  return (
    <div className="min-h-screen text-white bg-[rgb(23,23,23)]">
      <Header />

      <Hero />

      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabları keşfet</p>
        </div>
        <div className="home__filters">
          <Searchbar />

          <div className="home__filter-container">
            <Filter />
            <Filter />
          </div>
        </div>

        {/*
         * Araçları Listeleme
         */}
      </div>
    </div>
  );
};

export default App;
