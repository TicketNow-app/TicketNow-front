import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";

import { useAuth } from '../../hooks/auth';

import { ButtonBox, Container, ContainerImage, Form, GhostView, GroupInputs, Header, InputBox, InputBoxLeft, InputBoxRight, MainTitle, UserImage } from './styles';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { HeaderButton } from '../../components/HeaderButton';


export function EditProfile() {
  const navigation = useNavigation();

  const { user } = useAuth();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <HeaderButton onPress={handleGoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
          <MainTitle>Editar Perfil</MainTitle>
          <GhostView />
        </Header>
        <Form>
          <ContainerImage>
            <UserImage source={{ uri: user.photo }} />
          </ContainerImage>
          <InputBox>
            <Input placeholder='Alterar nome' value='Thiago Leão' />
          </InputBox>
          <GroupInputs>
            <InputBoxLeft>
              <Input placeholder='Alterar data de nascimento' value='24/10/2001' />
            </InputBoxLeft>
            <InputBoxRight>
              <Input placeholder='Alterar número de telefone' value='13 974154802' />
            </InputBoxRight>
          </GroupInputs>
          <InputBox>
            <Input placeholder='Alterar email' value='thiago.leaox@gmail.com' />
          </InputBox>
          <InputBox>
            <Input placeholder='Alterar senha' value='********' />
          </InputBox>
          <ButtonBox>
            <Button title='Salvar' />
          </ButtonBox>
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
