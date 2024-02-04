import { useState } from "react";
import "./App.css";
import { MapView } from "./components/MapView.jsx";
import { SearchBarAddress } from "./components/SearchBarAddress";
import "bootstrap/dist/css/bootstrap.min.css";
import { MapContainer, TileLayer } from "react-leaflet";
const position = [-34.7033363, -58.3953235];

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20vw",
          height: "100%",
          float: "right",
          position: "relative",
        }}
      >
        {/* <div> */}
        <SearchBarAddress
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
      </div>
      {selectPosition != null ? (
        <div>
          <div>
            <MapView selectPosition={selectPosition} />
          </div>
        </div>
      ) : (
        // mapa si no hay select position
        <div
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            minZoom={3}
            maxZoom={19}
            maxBounds={[
              [-85.06, -180],
              [85.06, 180],
            ]}
          >
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default App;
