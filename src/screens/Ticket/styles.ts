import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import QRCode from 'react-native-qrcode-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { TicketVertical } from '../../components/Svg/TicketVertical';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContainerTicket = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px 50px 40px;
  border-radius: 20px;
`;

export const TicketComponent = styled(TicketVertical)`
  position: absolute;
  top: 0px;
  align-self: center;
`;

export const TicketTopInfos = styled.View``;

export const ContainerTicketImage = styled.View`
  width: 100%;
`;

export const TicketImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 20px;
`;

export const ContainerTicketInfo = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const LineInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  margin-bottom: 14px;
`;

export const LineInfoTitle = styled(LineInfo)`
  margin-bottom: 30px;
  align-items: flex-start;
`;

export const EventTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerFriends = styled.View`
  width: 70px;
  height: 28px;
`;

export const ContainerIconInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const EventInfo = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 5px;
`;

export const TicketBottomInfos = styled.View``;

export const ClientName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerTicketData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18px;
`;

export const ContainerQrCode = styled.View`
  width: 120px;
  height: 120px;
  margin-right: 26px;
`;

export const QrCodeTag = styled(QRCode)``;

export const ContainerDetails = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ContainerTicketType = styled.View`
  margin-bottom: 10px;
`;

export const TicketType = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const TicketValue = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerQrCodeObservation = styled.View``;

export const QrCodeObservation = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;
