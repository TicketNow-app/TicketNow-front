import { useNavigation } from '@react-navigation/native';
import { BellIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { Container, ContainerScroll, Header, HorizontalScroll, LogoHorizontal, TitleContainer } from './styles';

import { AvatarMini } from '../../components/AvatarMini';
import { Card } from '../../components/Card';
import { CardLarge } from '../../components/CardLarge';
import { CardLargeEvent } from '../../components/CardLargeEvent';
import { CompanyTag } from '../../components/CompanyTag';
import { HeaderButton } from '../../components/HeaderButton';

import { company, data, event, eventsRecent } from '../../mock';

export function Home() {
  const navigation = useNavigation();

  function OpenEvent() {
    navigation.navigate('Event');
  }

  return (
    <Container>
      <Header>
        <HeaderButton>
          <BellIcon size={20} color={useTheme().colors.text} />
        </HeaderButton>
        <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
        <AvatarMini />
      </Header>
      <ContainerScroll>
        <TitleContainer onPress={OpenEvent}>Categorias</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => <CardLarge data={item} />}
        />
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Recomendados</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={event}
          renderItem={({ item }) => <Card event={item} />}
        />
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Eventos recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={eventsRecent}
          renderItem={({ item }) => <CardLargeEvent eventsRecent={item} />}
        />
      </ContainerScroll>
      <ContainerScroll>
        <TitleContainer>Produtoras recentes</TitleContainer>
        <HorizontalScroll
          horizontal
          showsHorizontalScrollIndicator={false}
          data={company}
          renderItem={({ item }) => <CompanyTag company={item} />}
        />
      </ContainerScroll>
    </Container>
  );
}



