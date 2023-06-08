import { MaterialIcons } from '@expo/vector-icons';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const MapContent = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const ContainerInputButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(18)}px;
`;

export const InputMap = styled(BottomSheetTextInput)`
  flex: 1;
  height: 45px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonUserLocation = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  padding: 10px;
  margin-left: 8px;
`;

export const IconUserLocation = styled(MaterialIcons)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.text_inactive};
  transform: rotate(-90deg);
`;

export const ContainerScrollPills = styled.View`
  width: 100%;
  height: ${RFValue(36)}px;
  margin-bottom: ${RFValue(18)}px;
`;

export const ScrollPills = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: 100%;
`;

export const ContainerScrollCards = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;
`;

export const ScrollCards = styled.FlatList`
  width: 100%;
  height: 100%;
`;
