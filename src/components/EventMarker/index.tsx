import React from "react";
import { Marker } from 'react-native-maps';
import { ContainerMarker, MarkerImage } from './styles';


export function EventMarker() {
  return (
    <Marker
      coordinate={{
        latitude: -23.970163,
        longitude: -46.410530
      }}
    >
      <ContainerMarker>
        <MarkerImage source={{ uri: 'https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }} />
      </ContainerMarker>
    </Marker>
  );
}
