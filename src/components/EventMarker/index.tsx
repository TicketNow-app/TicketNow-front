import React from 'react';
import { Marker } from 'react-native-maps';
import { ContainerMarker, MarkerImage } from './styles';

interface EventMarkerProps {
  latitude: number;
  longitude: number;
  image: string;
  onPress?: () => void;
}

export function EventMarker({ latitude, longitude, image, onPress }: EventMarkerProps) {
  return (
    <Marker
      coordinate={{
        latitude,
        longitude,
      }}
      onPress={onPress}
    >
      <ContainerMarker>
        <MarkerImage source={{ uri: image }} />
      </ContainerMarker>
    </Marker>
  );
}
