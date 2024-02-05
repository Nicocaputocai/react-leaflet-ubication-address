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
        width: "100vw",
        height: "100vh",
        display: "flex",
        margin: 0,
        padding: 0
      }}
    >
      <div
        style={{
          width: "20vw",
          height: "100vh",
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
            width: "80vw",
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
             attribution='Map &copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org">OpenMapTiles</a>, <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, Diseño &copy <a href="https://maiken.com.ar/" target="_blank"> Maiken </a>, Desarrollo &copy <a href="https://www.divisioncode.net.ar/" target="_blank"> The Division Code </a> & &copy <a href="https://desarrolloi.org/" target="_blank"> Desarrollo i </a>'
    
             url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key={sk.eyJ1Ijoibmljb2NhcHV0b2NhaSIsImEiOiJja3RhazVpbzcwMzJhMndvNmZpNGJtbWhrIn0.YV17IMSMs1UQFzyqqhRIdA}"
            />
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default App;
