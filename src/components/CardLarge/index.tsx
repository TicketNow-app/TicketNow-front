import React from "react";
import SkeletonLoader from "expo-skeleton-loader";
import { useTheme } from "styled-components";

import { Container, ContainerText, Content, Description, Gradient, Image, Title } from './styles';

interface CardLargeProps {
  category: {
    id: number;
    name: string;
    image: string;
  }
}

export function CardLarge({ category }: CardLargeProps) {
  return (
    <Container activeOpacity={0.6}>
      <Content>
        <Image source={{ uri: category.image }} />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
          locations={[0.4, 1]}
        />
        <ContainerText>
          <Title>{category.name}</Title>
          <Description>10 eventos próximos</Description>
        </ContainerText>
      </Content>
    </Container>
  )
}

export function CardLargeSkeleton() {
  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{ width: 300, height: 150, borderRadius: 10, justifyContent: 'flex-end', backgroundColor: useTheme().colors.background_secondary, padding: 14 }}
      >
        <SkeletonLoader.Item
          style={{ width: 220, height: 14, marginBottom: 5, borderRadius: 2 }}
        />
        <SkeletonLoader.Item style={{ width: 150, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  )
}

