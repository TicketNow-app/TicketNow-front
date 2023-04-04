import styled from 'styled-components/native';

export const Input = styled.TextInput`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin-bottom: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
