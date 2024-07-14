import { useEffect, useState } from "react";
import Header from "./components/Header";
import List from "./pages/List";
import Map from "./pages/Map";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  return (
    <div>
      <Header />

      <div className="buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!isMapView ? "active" : ""}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? <Map /> : <List />}
    </div>
  );
};

export default App;
