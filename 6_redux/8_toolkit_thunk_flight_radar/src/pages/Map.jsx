import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import { icon } from "leaflet";

const Map = () => {
  const { flights } = useSelector((store) => store.flightReducer);

  // marker için kendi ikonumu oluşturalım
  const planeIcon = icon({
    iconUrl: "plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <div>
      <MapContainer
        center={[39.340544, 35.310927]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {flights.map((flight) => (
          <Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
            <Popup>
              <div className="popup">
                <span>Kod: {flight.code}</span>
                <button>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
