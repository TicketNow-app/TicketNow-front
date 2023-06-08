import React from 'react';

import {
  Button,
  ButtonContainer,
  ButtonText,
  Center,
  FlexView,
  ModalComponent,
  ModalContent,
  Title,
} from './styles';

interface IBottomModal {
  icon?: React.ReactNode;
  text?: string;
  leftButtonText?: string;
  rightButtonText: string;
  onPress?: () => void;
  toggleModal?: () => void;
  isModalVisible: boolean;
  setModalVisible: (modalFunction: boolean) => void;
  handleFunction: (mainFunction: object) => void;
}

export function BottomModal({
  icon,
  text,
  leftButtonText,
  rightButtonText,
  isModalVisible,
  setModalVisible,
  toggleModal,
  handleFunction,
}: IBottomModal) {
  return (
    <FlexView>
      <ModalComponent
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
      >
        <ModalContent>
          <Center>
            {icon}
            <Title>{text}</Title>
            {leftButtonText ? (
              <ButtonContainer>
                <Button onPress={() => setModalVisible(false)}>
                  <ButtonText>{leftButtonText}</ButtonText>
                </Button>
                <Button onPress={handleFunction}>
                  <ButtonText>{rightButtonText}</ButtonText>
                </Button>
              </ButtonContainer>
            ) : (
              <Button onPress={() => setModalVisible(false)}>
                <ButtonText>{rightButtonText}</ButtonText>
              </Button>
            )}
          </Center>
        </ModalContent>
      </ModalComponent>
    </FlexView>
  );
}
