import BottomSheet from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Search() {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);

  const snapPoints = ['25%', '50%', '100%'];

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={index => {
          setIsOpen(index === 0);
        }}
      >
        <View style={styles.contentContainer}>
          <Text>Content</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


