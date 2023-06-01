import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px ${RFValue(16)}px;
  background-color: rgba(0,0,0,0.6);
`;

export const Form = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  position: absolute;
  align-self: center;
  z-index: 10;
  width: ${RFValue(310)}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 18px;
  padding: 24px;
  display: flex;
  align-items: center;
  margin-top: ${RFValue(60)}px;
`;

export const CircleIcon = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerTexts = styled.View`
  display: flex;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const Desc = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_inactive};
  text-align: center;
`;

export const ContainerCode = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-top: 20px;
`;

export const CodeLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_inactive};
  margin-bottom: ${RFValue(8)}px;
`;

export const ContainerInput = styled.View`
  width: 100%;
  flex-direction: row;
`;

// InputBox
export const InputBox = styled.View`
  flex: 1;
  height: 50px;
`;

// ButtonCopy
export const ButtonCopy = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  padding: ${RFValue(8)}px;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const ButtonCancel = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  flex: 1;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const ButtonConfirm = styled(ButtonCancel)`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-left: 10px;
  margin-right: 0px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
