import { ReceiptPercentIcon } from 'react-native-heroicons/outline';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScrollContainer = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
})`
  width: 100%;
`;

export const GhostView = styled.View`
  width: 40px;
  height: 40px;
`;

export const ContainerTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: ${RFValue(16)}px;
  padding: 0px ${RFValue(16)}px;
`;

export const ImageEvent = styled.Image`
  width: ${RFValue(46)}px;
  height: ${RFValue(46)}px;
  border-radius: 8px;
  margin-right: ${RFValue(16)}px;
`;

export const ContainerInfosEvent = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TextTitleEvent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(8)}px;
`;

export const ContainerDateTime = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerDateEvent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: ${RFValue(16)}px;
`;

export const ContainerTimeEvent = styled(ContainerDateEvent)``;

export const TextDateEvent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(8)}px;
`;

export const TextTimeEvent = styled(TextDateEvent)``;

export const ContainerBottom = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: ${RFValue(16)}px;
`;

export const ContainerValues = styled.View`
  width: 100%;
`;

export const ContainerTitleValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;
`;

export const ContainerTotalValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(4)}px;
`;

export const TextTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const TextValue = styled(TextTitle)``;

export const TextTitleTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextValueTotal = styled(TextTitleTotal)``;

export const ContainerCoupon = styled.View`
  width: 100%;
  flex-direction: row;
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const ContainerObservation = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${RFValue(16)}px 0px;
`;

export const TextObservation = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;

export const HightlightTextObservation = styled(TextObservation)`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const TouchableObservation = styled.TouchableOpacity`
  margin-left: ${RFValue(4)}px;
`;

export const IconCoupon = styled(ReceiptPercentIcon).attrs(({ theme }) => ({
  size: RFValue(20),
  color: theme.colors.text_inactive,
}))`
  position: absolute;
  right: 13px;
  top: 13px;
`;
