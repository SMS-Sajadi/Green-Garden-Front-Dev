import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "../../node_modules/leaflet-geosearch/dist/geosearch.css";

const Map = () => {
  const [searchText, setSearchText] = useState("");
  const provider = new OpenStreetMapProvider();

  const handleSearch = (result) => {
    setSearchText(result.label);
  };

  const map = useMap();

//   const Search = (props) => {
//     const map = useMap();
//     const { provider } = props;

//     useEffect(() => {
//       const searchControl = new GeoSearchControl({
//         provider,
//       });

//       map.addControl(searchControl); // this is how you add a control in vanilla leaflet
//       return () => map.removeControl(searchControl);
//     }, [props]);

//     return (
//       <div>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search"
//           // ... other input props ...
//         />
//       </div>
//     );
//   };

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <div >
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

        {/* <Search provider={new OpenStreetMapProvider()} /> */}

      </MapContainer>
    </div>

    // <MapContainer center={[51.505, -0.09]} zoom={13}>
    //   <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //   <Marker position={[51.505, -0.09]}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker>
    //   <GeoSearchControl
    //     provider={provider}
    //     showMarker={true}
    //     showPopup={false}
    //     onResult={handleSearch}
    //     inputPlaceholder="Enter address"
    //     maxSuggestions={5}
    //     autoComplete={true}
    //     searchLabel="Search address"
    //     className="leaflet-bar leaflet-control leaflet-control-custom"
    //   />
    //   {searchText && <div className="search-text">{searchText}</div>}
    // </MapContainer>
  );
};

export default Map;
