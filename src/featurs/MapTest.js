import React from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from "react-leaflet";
  
import "../../node_modules/leaflet-geosearch/dist/geosearch.css";




const MapTest = () => {

    // const [searchText, setSearchText] = useState('');
    const provider = new OpenStreetMapProvider();
  
    const handleSearch = (result) => {
      // setSearchText(result.label);
    };
  


    return (
        <div>
     <MapContainer
        center={[32.6546, 51.6674]}
        zoom={16}
        scrollWheelZoom={false}
        id="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[32.6546, 51.6674]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <GeoSearchControl
        provider={provider}
        showMarker={true}
        showPopup={false}
        onResult={handleSearch}
        inputPlaceholder="Enter address"
        maxSuggestions={5}
        autoComplete={true}
        searchLabel="Search address"
        className="leaflet-bar leaflet-control leaflet-control-custom"
      />

      </MapContainer>

            
        </div>
    );
};

export default MapTest;