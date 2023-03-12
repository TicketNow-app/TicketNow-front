import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

type PropBorders = {
  roundedBorder: string;
  separator: string;
  deleteColor: string;
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
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 14px ${RFValue(18)}px;
  height: 70px;
  border-top-left-radius: ${(props) =>
      props.roundedBorder === 'top'
        ? `14px 14px`
        : 'none'
  };
  border-top-right-radius: ${(props) =>
      props.roundedBorder === 'top'
        ? `14px 14px`
        : 'none'
      };
  border-bottom-right-radius: ${(props) =>
      props.roundedBorder === 'bottom'
        ? `14px 14px`
        : 'none'
      };
  border-bottom-left-radius: ${(props) =>
      props.roundedBorder === 'bottom'
        ? `14px 14px`
        : 'none'
      };
  border-bottom-width: ${(props) =>
      props.separator === 'full'
        ? `1px`
        : 'none'
      }; 
`;


export const GroupIconTexts = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContainerTexts = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;


export const TitleProfileOption = styled.Text.attrs((props: PropBorders) => ({
  deleteColor: props.deleteColor,
}))<PropBorders>`
font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  margin-bottom: 4px;
  color: ${(props) =>
      props.deleteColor === 'true'
        ? `#E83F5B`
        : '#F3F6FB'
      };
`;

export const DescProfileOption = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text_inactive};
`;