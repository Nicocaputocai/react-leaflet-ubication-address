import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import L from 'leaflet'
import '../../node_modules/leaflet/dist/leaflet.css';

const position =[-34.7033363,-58.3953235]

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();


  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  }, [selectPosition]);

  return null;
  }
export const MapView = (props) => {
  const { selectPosition } = props;
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];
  const locationDefault = position

  console.log(selectPosition);

  return (


    <div style={{margin: 0, padding: 0, width: "100vw", height: "100vh"}}>
  <MapContainer 
  center={position} 
  zoom={13} 
  scrollWheelZoom={true}
  minZoom={3}
  maxZoom={19}
  maxBounds={[[-85.06, -180], [85.06, 180]]}
  >
    <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
    />
    { locationSelection !== undefined ?
      <Marker position={locationSelection}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> : <Marker position={locationDefault}></Marker>
    }
    
    <ResetCenterView selecPosition={selectPosition }/>
  </MapContainer>,
  </div>
  );
};
