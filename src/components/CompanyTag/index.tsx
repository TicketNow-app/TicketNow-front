import SkeletonLoader from 'expo-skeleton-loader';
import React from 'react';

import { Container, Content, Image, ContainerText, Title } from './styles';

// interface CompanyTagProps {
//   company: {
//     image: string;
//     title: string;
//   }
// }

export function CompanyTag({ company }) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: company.image }} />
        <ContainerText>
          <Title>{company.name}</Title>
        </ContainerText>
      </Content>
    </Container>
  );
}

export function CompanyTagSkeleton() {
  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{
          width: 130,
          height: 130,
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SkeletonLoader.Item style={{ width: 90, height: 90, marginBottom: 5, borderRadius: 42 }} />
        <SkeletonLoader.Item style={{ width: 90, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
