import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface AvatarProps {
  size?: number;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
`;

export const Avatar = styled.Image<AvatarProps>`
  width: ${props => (props.size ? RFValue(props.size) : RFValue(34))}px;
  height: ${props => (props.size ? RFValue(props.size) : RFValue(34))}px;
  border-radius: ${RFValue(17)}px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-right: -${RFValue(8)}px;
`;

export const AvatarMore = styled.View<AvatarProps>`
  width: ${props => (props.size ? RFValue(props.size) : RFValue(34))}px;
  height: ${props => (props.size ? RFValue(props.size) : RFValue(34))}px;
  border-radius: ${RFValue(17)}px;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;
