import BottomSheet from '@gorhom/bottom-sheet';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { InputText, ScrollContainer } from './styles';
import { ArrowsRightLeftIcon } from 'react-native-heroicons/solid';
import { TransferTag } from '../TransferTag';
import { BottomModal } from '../BottomModal';

export function ModalTransferTicket() {
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);

  useEffect(() => {
    if (bottomSheet === true) {
      return sheetRef.current?.expand();
    }
    sheetRef.current?.collapse();
  }, [bottomSheet]);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['14%', '24%', '50%'];

  const theme = useTheme();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function transferTicket(index: number) {
    setModalVisible(true);
  }

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: useTheme().colors.background }}
      handleStyle={{ height: 60 }}
      handleIndicatorStyle={{ backgroundColor: useTheme().colors.text_inactive }}
      enableOverDrag={false}
      enableContentPanningGesture={false}
      enablePanDownToClose={false}
      keyboardBlurBehavior="restore"
      style={{ paddingHorizontal: 16 }}
    >
      <InputText placeholder="Pesquisar" />
      <ScrollContainer>
        <TransferTag
          image="https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          name="Ramon"
          commonFriends={2}
          close
          transferTicket={() => transferTicket(1)}
          textButton="Transferir"
        />
        <TransferTag
          image="https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          name="Thiago"
          commonFriends={2}
          close
          transferTicket={() => transferTicket(1)}
          textButton="Transferir"
        />
        <TransferTag
          image="https://images.unsplash.com/photo-1469460340997-2f854421e72f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          name="Ramon"
          commonFriends={2}
          close
          transferTicket={() => transferTicket(1)}
          textButton="Transferir"
        />
      </ScrollContainer>
      <BottomModal
        icon={<ArrowsRightLeftIcon size={50} color={theme.colors.base} />}
        text="Voce tem certeza que deseja transferir o ingresso?"
        leftButtonText="Cancelar"
        rightButtonText="Confirmar"
        handleFunction={() => transferTicket(1)}
        setModalVisible={() => setModalVisible(false)}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </BottomSheet>
  );
}
