import React from 'react';
import styled from 'styled-components';
import L from 'leaflet';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const locationMark = new L.Icon({
  iconUrl: '/images/pin.png',
  iconSize: [90, 90],
});

const Container = styled.div``;

const Map = ({ center, companyName }) => (
  <Container>
    <MapContainer
      center={center}
      zoom={20}
      scrollWheelZoom={false}
      style={{
        width: '100vw',
        height: '100vh',
        filter: ' contrast(0.94) grayscale(0.75) hue-rotate(175deg) saturate(1.95) sepia(0.62)',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={center} icon={locationMark}>
        <Popup>
          <h1>{companyName}</h1>
        </Popup>
      </Marker>
    </MapContainer>
  </Container>
);

export default Map;
