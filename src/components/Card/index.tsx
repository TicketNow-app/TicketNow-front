import SkeletonLoader from 'expo-skeleton-loader';
import React from 'react';
import { useTheme } from 'styled-components/native';

import {
  Container,
  ContainerText,
  Content,
  Date,
  Description,
  Gradient,
  Image,
  Title,
} from './styles';

import { formatToWriteDate } from '../../utils/utils';

interface CardProps {
  image: string;
  date: string;
  name: string;
  number: string;
  address: string;
  onPress: () => void;
}

export function Card({ image, date, name, number, address, ...rest }: CardProps) {
  return (
    <Container activeOpacity={0.6} {...rest}>
      <Content>
        <Image
          source={{
            uri: `${image}` || '',
          }}
        />
        <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']} locations={[0, 1]} />
        <ContainerText>
          <Date>{formatToWriteDate(date)}</Date>
          <Title numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Title>
          <Description numberOfLines={1} ellipsizeMode="tail">
            {number}, {address}
          </Description>
        </ContainerText>
      </Content>
    </Container>
  );
}

export function CardSkeleton() {
  const theme = useTheme();

  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{
          width: 140,
          height: 140,
          borderRadius: 10,
          justifyContent: 'flex-end',
          backgroundColor: theme.colors.background_secondary,
          padding: 14,
        }}
      >
        <SkeletonLoader.Item style={{ width: 110, height: 14, marginBottom: 5, borderRadius: 2 }} />
        <SkeletonLoader.Item style={{ width: 60, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
