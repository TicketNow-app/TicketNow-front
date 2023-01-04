import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  padding: 10px;
`;
