import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { MapContent } from './styles';

import mapStyle from '../../utils/mapStyle.json';

export function Map() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);


  return (
    <MapContent customMapStyle={mapStyle} showsUserLocation={true} initialRegion={location} />
  );
}
