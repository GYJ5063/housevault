import React from "react"
const { compose, withProps } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    StreetViewPanorama,
} = require("react-google-maps");


const StreetView = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlqPHMEeUsDo4e5zSKGYeCtFuz_apFSYw&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap defaultZoom={8} defaultCenter={props.markerPosition}>
        <StreetViewPanorama defaultPosition={props.markerPosition} visible></StreetViewPanorama>
    </GoogleMap>
);

export default StreetView;