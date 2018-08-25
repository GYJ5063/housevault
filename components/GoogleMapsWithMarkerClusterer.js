import React from "react";
import { compose, withProps, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import _ from "lodash";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"

const GoogleMapsWithMarkerClusterer = compose(
	withProps({
		googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlqPHMEeUsDo4e5zSKGYeCtFuz_apFSYw&v=3.exp&libraries=geometry,drawing,places",
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withHandlers({
		onMarkerClustererClick: () => (markerClusterer) => {
			const clickedMarkers = markerClusterer.getMarkers()
			console.log(`Current clicked markers length: ${clickedMarkers.length}`)
			console.log(clickedMarkers)
		},
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={15}
		defaultCenter={_.first(props.markers)}
	>
		<MarkerClusterer
			onClick={props.onMarkerClustererClick}
			averageCenter
			enableRetinaIcons
			gridSize={60}
		>
			{props.markers.map((marker, i) => (
				<Marker
					key={i}
					position={{ lat: marker.lat, lng: marker.lng }}
				/>
			))}
		</MarkerClusterer>
	</GoogleMap>
);

export default GoogleMapsWithMarkerClusterer;