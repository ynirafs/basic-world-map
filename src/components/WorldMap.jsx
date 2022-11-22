import { MapContainer, GeoJSON } from 'react-leaflet'
import countries from '../data/countries.json'
import 'leaflet/dist/leaflet.css'
import './WorldMap.css'

function WorldMap() {
    //custom style geojson
    const mapStyle = {
        fillColor: "slateGray",
        color: "powderblue",
        weight: 1,
        fillOpacity: 1,
    }

    //country name popup function
    const clickCountry = (country, layer) => {
        const countryName = country.properties.ADMIN
        const countryCode = country.properties.ISO_A3
        
        layer.bindPopup(`${countryName}, ${countryCode}`)
    }

    return (
        <MapContainer style={{height: "80vh"}} zoom={2} center={[20, 100]}>
            <GeoJSON data={countries.features} style={mapStyle} onEachFeature={clickCountry} />
        </MapContainer>
    )
}

export default WorldMap;

//<GeoJSON data={countries.features} style={mapStyle} onEachFeature={hoverCountry} />

/*
//function that changes style of a country
    const changeMapStyle = (e) => {
        e.target.setStyle({
            fillColor: "orangered"
        })
    }

    //function that changes style of a country
    const hoverCountry = (country, layer) => {
        const countryName = country.properties.ADMIN
        const countryCode = country.properties.ISO_A3
        
        layer.bindPopup(`${countryName}, ${countryCode}`)

        layer.on({
            mousemove: changeMapStyle
        })
    }
*/