import React from 'react';

import { Container, ContainerScroll, ScrollView, TitleContainer } from './styles';

import { CardLarge } from '../../components/CardLarge';
import { Card } from '../../components/Card';
import { CompanyTag } from '../../components/CompanyTag';

export function Home() {
  return (
    <Container>
      <ContainerScroll>
        <TitleContainer>Categorias</TitleContainer>
        <ScrollView>
          <CardLarge image='https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3' title='Festival Eletronica' description='21 Eventos próximos' />
          <CardLarge image='https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3' title='Shows' description='47 Eventos próximos' />
          <CardLarge image='https://images.unsplash.com/photo-1630163664483-9ee845d40a63' title='#Baile' description='4 Eventos próximos' />
        </ScrollView>
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Recomendados</TitleContainer>
        <ScrollView>
          {/* Mock data here */}
          <Card image="https://images.unsplash.com/photo-1595239094789-4e00e532528a" date='Sex 14 de Out' title="#ECX22 - Eletronic Core Experience" location="1291 Nesor Street" />
          <Card image="https://images.unsplash.com/photo-1549342902-be005322599a" date='Sab 18 de Nov' title="Mack e Puc apres: Volta ao Mundo do Funk" location="334 Daeh Pass" />
          <Card image="https://images.unsplash.com/photo-1570872626485-d8ffea69f463" date='Sab 22 de Out' title="Bravosween" location="1291 Nesor Street" />
          <Card image="https://images.unsplash.com/photo-1599839619722-39751411ea63" date='Sab 18 de Nov' title="Bruno Prado e MC Kelvinho" location="334 Daeh Pass" />
        </ScrollView>
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Produtoras recentes</TitleContainer>
        <ScrollView>
          <CompanyTag image='https://images.unsplash.com/photo-1612808444988-623003362d44' title="Holy Shit" />
          <CompanyTag image='https://images.unsplash.com/photo-1516876437184-593fda40c7ce' title="Creation Company" />
          <CompanyTag image='https://images.unsplash.com/photo-1547987523-f132f72f9b43' title="Underground Prod." />
          <CompanyTag image='https://images.unsplash.com/photo-1614851099518-055a1000e6d5' title="Cromatic" />
        </ScrollView>
      </ContainerScroll>
    </Container>
  );
}



