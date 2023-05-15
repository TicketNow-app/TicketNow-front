import React, { useState } from "react";

import { Container, Content, Image, Gradient, ContainerText, Title, Description } from './styles';

import { CardLargeSkeleton } from './skeleton'

interface CardLargeProps {
  data: {
    image: string;
    title: string;
    description: string;
  }
  isLoading?: boolean;
}

export function CardLarge({ data, isLoading }: CardLargeProps) {
  return (
    <>
      {
        isLoading ?
        (
          <CardLargeSkeleton />
        ) :
        (
          <Container activeOpacity={0.6}>
            <Content>
              <Image source={{ uri: data.image }} />
              <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)']}
                locations={[0.4, 1]}
              />
              <ContainerText>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
              </ContainerText>
            </Content>
          </Container>
        )
      }
    </>
  )
}
