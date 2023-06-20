import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerSearch = styled.KeyboardAvoidingView.attrs({
  behavior: 'height',
  enabled: true,
})`
  width: 100%;
  padding: 0px ${RFValue(16)}px;
  margin: ${RFValue(10)}px 0px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  },
})`
  width: 100%;
`;

export const ContainerUsers = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: ${RFValue(16)}px 0px;
`;

export const GhostView = styled.View`
  width: 40px;
  height: 40px;
`;

export const Section = styled.View`
  width: 100%;
  margin-top: ${RFValue(16)}px;
  padding: 0px ${RFValue(16)}px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(8)}px;
`;

export const ContainerNoSolicitations = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px;
  opacity: 0.6;
`;

export const NoSolicitationsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
  text-align: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const NoSolicitationsSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
  text-align: center;
`;

export const DeleteSolicitationTitle = styled.Text`
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
  color: ${({ theme }) => theme.colors.text};
`;
