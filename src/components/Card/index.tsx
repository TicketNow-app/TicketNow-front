import React from "react";
import SkeletonLoader from "expo-skeleton-loader";
import { useTheme } from "styled-components/native";

import { Container, ContainerText, Content, Date, Description, Gradient, Image, Title } from './styles';

export function Card({ event, isLoading, ...rest}) {
  if(isLoading) return (<CardSkeleton />)
  return (
      (
        <Container activeOpacity={0.6} {...rest}>
          <Content>
            <Image source={{ uri: event.images[0].url }} />
            <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
              locations={[0, 1]}
            />
            <ContainerText>
              <Date>
                {
                  event.dateStart
                    .split('-')
                    .reverse()
                    .join('/')
                }</Date>
              <Title>{event.name}</Title>
              <Description>{
                event?.id_place?.address
                  .split(',')
                  .slice(1)
              }</Description>
            </ContainerText>
          </Content>
        </Container>
      )
  );
}

export function CardSkeleton() {
  return (
    <SkeletonLoader>
      <SkeletonLoader.Container
        style={{ width: 140, height: 140, borderRadius: 10, justifyContent: 'flex-end', backgroundColor: useTheme().colors.background_secondary, padding: 14 }}
      >
        <SkeletonLoader.Item
          style={{ width: 110, height: 14, marginBottom: 5, borderRadius: 2 }}
        />
        <SkeletonLoader.Item style={{ width: 60, height: 14, borderRadius: 2 }} />
      </SkeletonLoader.Container>
    </SkeletonLoader>
  );
}
