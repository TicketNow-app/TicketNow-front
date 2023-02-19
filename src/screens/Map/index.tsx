import BottomSheet from '@gorhom/bottom-sheet';
import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from "styled-components";

import { ButtonUserLocation, ContainerInputButton, ContainerScrollPills, IconUserLocation, InputMap, MapContent, ScrollPills } from './styles';

import { EventMarker } from '../../components/EventMarker';
import { Pill } from '../../components/Pill';
import { categories } from '../../mock';
import mapStyle from '../../utils/mapStyle.json';

export function Map() {
  const [location, setLocation] = useState(null);
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);
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

  //change bottomSheet state
  useEffect(() => {
    if (bottomSheet === true) {
      return sheetRef.current?.expand();
    }
    sheetRef.current?.collapse();
  }, [bottomSheet]);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['14%', '24%', '50%'];

  return (
    <>
      <MapContent customMapStyle={mapStyle} showsUserLocation={true} initialRegion={location} zoomEnabled={true} mapPadding={{ top: 0, right: 0, bottom: -40, left: 0 }}>
        <EventMarker />
      </MapContent >
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        backgroundStyle={{ backgroundColor: useTheme().colors.background }}
        handleStyle={{ height: 40 }}
        handleIndicatorStyle={{ backgroundColor: useTheme().colors.text_inactive }}
        enableOverDrag={false}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
        keyboardBlurBehavior="restore"
        style={{ paddingHorizontal: 16 }}
      >
        <ContainerInputButton>
          <InputMap placeholder='Buscar eventos' />
          <ButtonUserLocation>
            <IconUserLocation />
          </ButtonUserLocation>
        </ContainerInputButton>
        <ContainerScrollPills>
          <ScrollPills
            data={categories}
            renderItem={({ item }) => <Pill title={item.name} />}
          >
          </ScrollPills>
        </ContainerScrollPills>
      </BottomSheet>
    </>
  );
}
