import React from 'react';
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";


import { Title, Button, ButtonContainer, ButtonText, FlexView, ModalContent, Center } from './styles';

interface BottomModal {
  icon?: React.ReactNode;
  text?: string;
  leftButtonText?: string;
  rightButtonText: string;
  onPress?: () => void;
  toggleModal?: () => void;
  isModalVisible: boolean;
  setModalVisible: ({}) => void;
  handleFunction: ({}) => void;
}

export function BottomModal({ icon, text, leftButtonText , rightButtonText, isModalVisible, setModalVisible, toggleModal, handleFunction }: BottomModal) {
  return (
    <FlexView>
              <Modal
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
                style={style.modal}
              >
                <ModalContent>
                  <Center>
                    {icon}
                    <Title>{text}</Title>
                    {leftButtonText ? 
                      <ButtonContainer>
                        <Button onPress={() => setModalVisible(false)}>
                          <ButtonText>{leftButtonText}</ButtonText>
                        </Button>
                        <Button onPress={() => handleFunction(0)}>
                          <ButtonText>{rightButtonText}</ButtonText>
                        </Button>
                      </ButtonContainer> 
                      : 
                      <Button onPress={() => handleFunction(0)}>
                        <ButtonText>{rightButtonText}</ButtonText>
                      </Button>
                    }
                  </Center>
                </ModalContent>
              </Modal>
            </FlexView>
  );
}

const style = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
