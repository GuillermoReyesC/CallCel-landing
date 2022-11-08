import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 36.609186 ,
      lng: 72.138092

    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '380px', width: '300px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Map
          lat={36.609186}
          lng={72.138092}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}