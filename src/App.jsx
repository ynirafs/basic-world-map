import WorldMap from './components/WorldMap'
import './index.css'

function App() {
  return (
    <div>
      <h1 className="title">world map</h1>
      <p className="subtitle">with react leaflet and geojson</p>
      <WorldMap />
    </div>
  );
}

export default App;
