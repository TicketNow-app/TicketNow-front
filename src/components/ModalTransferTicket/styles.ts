import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const InputText = styled(BottomSheetTextInput)`
  height: 45px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFValue(24)}px;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 24,
  },
})`
  width: 100%;
`;
