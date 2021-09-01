import React from "react";
import { MapMarker } from "../assets/Icons";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow 
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={18} defaultCenter={{ lat: props.groups[0].centroid[0], lng: props.groups[0].centroid[1] }}>
    {props.isMarkerShown && props.groups.map((group)=>{
      
     return <Circle
     defaultCenter={{ lat:  +group.centroid[0], lng: +group.centroid[1] }}
     radius={10}
     options={
      {
        strokeColor: "#ff0000",
        backgroundColor: "red"
      }
     }
   />
    }
    )}
  </GoogleMap>
));

export default MyMapComponent;
