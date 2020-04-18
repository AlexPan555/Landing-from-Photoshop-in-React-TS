import React from "react"
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = (props) => {

    return(
      <div>
        <LeafletMap
        center={[46.4128031, 30.7323209]}
        zoom={8}
        maxZoom={15}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[46.4128031, 30.7323209]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
      </div>
     )
}
export default Map