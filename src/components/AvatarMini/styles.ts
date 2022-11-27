import styled from 'styled-components/native';

export const ContainerCircle = styled.TouchableOpacity`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;


export const ImageAvatar = styled.Image`
  flex: 1;
  border-radius: 22px;
`;
