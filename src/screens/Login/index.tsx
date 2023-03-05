import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { ButtonBox, ButtonSocialRegisterBox, Container, ContainerAnotherSignUpWays, ContainerFooterMessage, ContainerForgotPassword, ContainerSocialRegister, FooterMessage, Form, Header, InputBox, LogoHorizontal, TextAnotherSignUpWays, TextForgotPassword } from '../Login/styles';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { TitleDesc } from '../../components/Form/TitleDesc';

interface FormData {
  email: string;
  password: string;
}

export function Login({ navigation }: any) {
  const {
    control,
    handleSubmit
  } = useForm();

  function handleLogin(form: FormData) {
    const data = {
      email: form.email,
      password: form.password
    }

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
      </Header>
      <Form>
        <TitleDesc title='Entre na sua conta' desc='Entre agora para encontrar ingressos para os eventos mais incríveis!' />
        <InputBox>
          <InputForm
            placeholder='Endereço de e-mail'
            control={control}
            name='email'
          />
        </InputBox>
        <InputBox>
          <InputForm
            placeholder='Senha'
            control={control}
            name='password'
          />
        </InputBox>
        <ContainerForgotPassword>
          <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
        </ContainerForgotPassword>
        <ButtonBox>
          <Button title='Entrar' onPress={handleSubmit(handleLogin)} />
        </ButtonBox>
        <ContainerAnotherSignUpWays>
          <TextAnotherSignUpWays>ou entre com</TextAnotherSignUpWays>
          <ContainerSocialRegister>
            <ButtonSocialRegisterBox>
              <Button icon={<AntDesign name='google' size={24} color={useTheme().colors.text} />} />
            </ButtonSocialRegisterBox>
            <ButtonSocialRegisterBox>
              <Button icon={<AntDesign name='apple1' size={24} color={useTheme().colors.text} />} />
            </ButtonSocialRegisterBox>
            <ButtonSocialRegisterBox>
              <Button icon={<MaterialIcons name='facebook' size={24} color={useTheme().colors.text} />} />
            </ButtonSocialRegisterBox>
          </ContainerSocialRegister>
        </ContainerAnotherSignUpWays>
      </Form>
      <ContainerFooterMessage>
        <FooterMessage>*Seus dados pessoais serão usados para processar seus pedidos, melhorar sua experiência no aplicativo e outros fins descritos em nossa política de privacidade.</FooterMessage>
      </ContainerFooterMessage>
    </Container>
  )
}
