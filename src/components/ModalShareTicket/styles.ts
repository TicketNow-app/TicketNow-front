import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Background = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0px ${RFValue(16)}px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const MainContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  position: absolute;
  align-self: flex-end;
  right: 20px;
  z-index: 10;
  width: ${RFValue(193)}px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 18px;

  display: flex;
  align-items: center;
  margin-top: ${RFValue(60)}px;
`;

type PropBorders = {
  roundedBorder: string;
  separator: string;
};

export const ContainerOption = styled.TouchableOpacity.attrs((props: PropBorders) => ({
  roundedBorder: props.roundedBorder,
  separator: props.separator,
  activeOpacity: 0.6,
}))<PropBorders>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px ${RFValue(18)}px;
  border-top-left-radius: ${props =>
    props.roundedBorder === 'top' || props.roundedBorder === 'all' ? `14px 14px` : 'none'};
  border-top-right-radius: ${props =>
    props.roundedBorder === 'top' || props.roundedBorder === 'all' ? `14px 14px` : 'none'};
  border-bottom-right-radius: ${props =>
    props.roundedBorder === 'bottom' || props.roundedBorder === 'all' ? `14px 14px` : 'none'};
  border-bottom-left-radius: ${props =>
    props.roundedBorder === 'bottom' || props.roundedBorder === 'all' ? `14px 14px` : 'none'};
  border-bottom-width: ${props => (props.separator === 'full' ? `1px` : 'none')};
`;

export const TitleOption = styled.Text.attrs((props: PropBorders) => ({}))<PropBorders>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${RFValue(16)}px;
`;