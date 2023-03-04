import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-bottom: 36px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text_inactive};
`;
