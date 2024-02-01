import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapView from './components'
import { SearchBarAddress } from './components/SearchBarAddress'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectPosition, setSelectPosition] = useState(null)

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width:'100vw',
      height: '100vh'
    }}>
<div>
  <SearchBarAddress selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
</div>
<div style={{width:"100vw", height:"100vh", padding:"0px 20px"}}>
<MapView />
</div>

    </div>
  )
}

export default App
