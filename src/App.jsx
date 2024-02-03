import { useState } from 'react'
import './App.css'
import {MapView} from './components/MapView.jsx'
import { SearchBarAddress } from './components/SearchBarAddress'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh'
    }}>
      <div style={{ width: "50vw" }}>
        <MapView selectPosition={selectPosition && (
  <div style={{ width: "50vw" }}>
    <MapView selectPosition={selectPosition} />
  </div>
)} />
      </div>
      <div style={{ width: "50vw", height: "100%" }}>
        <SearchBarAddress selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
      </div>


    </div>
  )
}

export default App
