import React, { useEffect, useRef } from 'react'

import { Container } from '@mui/material';

const defaultProps = {
  latitude: 23.594263,
  longitude: 72.963251,
  zoom: 14
};

let markers = [];

const MapComponent = ({ setLatLng, mapProps=defaultProps }) => {
  const mapRef = useRef(null);

  const setFieldLatLng = (lat, lng) => {
    setLatLng("latitude", lat);
    setLatLng("longitude", lng);
  }

  useEffect(() => {
    let google = window.google;
    let mapEle = mapRef.current;
    let lat = mapProps.latitude;
    let lng = mapProps.longitude;
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: defaultProps.zoom,
      center: myLatlng,
    };

    const map = new google.maps.Map(mapEle, mapOptions);

    if (mapProps.latitude !== defaultProps.latitude && mapProps.longitude !== defaultProps.longitude) {
      const marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
      });
      markers.push(marker);
    }

    // Configure the click listener.
    map.addListener("click", (mapsMouseEvent) => {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];

      let lat = mapsMouseEvent.latLng.lat();
      let lng = mapsMouseEvent.latLng.lng();
      setFieldLatLng(lat, lng);
      let marker = new google.maps.Marker({
        position: mapsMouseEvent.latLng,
        map
      });
      markers.push(marker);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('MapComponent.js: mapProps=', mapProps);

  return (
    <>
      <Container>
        <div ref={mapRef} style={{ width: "100%", height: "30vh" }} />
      </Container>
    </>
  );
};

export default MapComponent
