import styled from 'styled-components/native';

export const ContainerMarker = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  justify-content: center;
  border: 3px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
`;

export const MarkerImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;
