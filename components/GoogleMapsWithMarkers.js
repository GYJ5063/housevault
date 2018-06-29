import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import _ from "lodash";

const GoogleMapsWithMarkers = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlqPHMEeUsDo4e5zSKGYeCtFuz_apFSYw&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.markerPosition}
    >
        {props.isMarkerShown && <Marker position={props.markerPosition} onClick={props.onMarkerClick} />}
        {props.markers.map(marker => (
            <Marker
                key={marker.price}
                position={{ lat: marker.latitude, lng: marker.longitude }}
            />
        ))}


    </GoogleMap>
);


export default GoogleMapsWithMarkers;