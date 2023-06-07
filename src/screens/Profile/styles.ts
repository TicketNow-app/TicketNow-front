import { TextProps, TouchableOpacityProps } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { TicketMini } from '../../components/Svg/TicketMini';

interface ButtonPromoterProps extends TouchableOpacityProps {
  promoter: boolean;
}

interface TextButtonProps extends TextProps {
  promoter: boolean;
}

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 24,
  },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerTopInfos = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.View`
  padding: ${RFValue(8)}px;
  border: 4px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
`;

export const UserImage = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  background-color: ${({ theme }) => theme.colors.text_inactive};
  border-radius: 70px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(4)}px;
`;

export const ButtonPromoter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<ButtonPromoterProps>`
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 100px;
  margin-bottom: ${RFValue(18)}px;
`;

export const CopyButtonPromoter = styled(ButtonPromoter)`
  background-color: transparent;
  margin-left: 0px;
  margin-right: ${RFValue(8)}px;
`;

export const TextButton = styled.Text<TextButtonProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(8)}px;
`;

export const TextCopyButton = styled(TextButton)`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_inactive};
  margin-left: 0px;
  margin-right: ${RFValue(8)}px;
`;

export const ContainerConfigButtons = styled.View`
  width: 100%;
  height: ${RFValue(230)}px;
  justify-content: space-between;
  padding: 0px ${RFValue(16)}px;
  margin-top: 24px;
`;

export const ContainerPromoterMetrics = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 100%;
  height: ${RFValue(118)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px ${RFValue(16)}px;
  border-radius: 8px;
`;

export const TicketMiniSvg = styled(TicketMini)`
  width: 100%;
  height: ${RFValue(200)}px;
  position: absolute;
  top: 0px;
`;

export const ContainerMetricsInfos = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-right: -${RFValue(70)}px;
`;

export const TitleMetrics = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(8)}px;
`;

export const ContainerSell = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextSell = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MetricsDivisor = styled.View`
  width: 2px;
  height: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.text_inactive};
  margin: 0px ${RFValue(10)}px;
  border-radius: 4px;
`;
