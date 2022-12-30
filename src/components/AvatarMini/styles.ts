import styled from 'styled-components/native';

export const ContainerCircle = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;


export const ImageAvatar = styled.Image`
  flex: 1;
  border-radius: 22px;
`;
