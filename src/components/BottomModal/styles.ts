import Modal from "react-native-modal";
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const FlexView = styled.View`
  flex: 1;
  background-color: white;
`;

export const ModalComponent = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const ModalContent = styled.View`
  background-color: #161616;
  padding-top: 12px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  min-height: 300px;
  padding-bottom: 20px;
`;

export const Center = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-top: ${RFValue(15)}px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  width: 170px;
  padding: 18px;
  border-radius: 12px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
`;



export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text}
`;

