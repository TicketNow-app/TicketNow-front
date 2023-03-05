import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useTheme } from 'styled-components';

import { ButtonBox, ButtonSocialRegisterBox, Container, ContainerAnotherSignUpWays, ContainerFooterMessage, ContainerForgotPassword, ContainerSocialRegister, FooterMessage, Form, Header, InputBox, LogoHorizontal, TextAnotherSignUpWays, TextForgotPassword } from '../Login/styles';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { TitleDesc } from '../../components/Form/TitleDesc';

export function Login({ navigation }: any) {
  return (
    <Container>
      <Header>
        <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
      </Header>
      <Form>
        <TitleDesc title='Entre na sua conta' desc='Entre agora para encontrar ingressos para os eventos mais incríveis!' />
        <InputBox>
          <Input placeholder='Endereço de e-mail' />
        </InputBox>
        <InputBox>
          <Input placeholder='Senha' />
        </InputBox>
        <ContainerForgotPassword>
          <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
        </ContainerForgotPassword>
        <ButtonBox>
          <Button title='Entrar' onPress={() => { navigation.navigate('RegisterSecondStep') }} />
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
