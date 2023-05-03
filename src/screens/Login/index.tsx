import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Alert, Keyboard,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/auth';

import { ButtonBox, ButtonSocialRegisterBox, Container, ContainerAnotherSignUpWays, ContainerFooterMessage, ContainerForgotPassword, ContainerSocialRegister, FooterMessage, Form, Header, InputBox, LogoHorizontal, TextAnotherSignUpWays, TextForgotPassword } from '../Login/styles';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { TitleDesc } from '../../components/Form/TitleDesc';

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup
    .string()
    .required('E-mail obrigatório')
    .email('E-mail inválido')
    .min(6, 'Mínimo 6 caracteres')
    .max(255, 'Máximo 100 caracteres'),
  password: Yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres')
    .max(50, 'Máximo 50 caracteres')
})

export function Login({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithApple } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  // async function handleSignInWithGoogle() {
  //   try {
  //     // await signIn();
  //   } catch (error) {
  //     console.log(error);
  //     Alert.alert('Não foi possível conectar a conta Google');
  //   }
  // }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Apple');
      setIsLoading(false);
    }
  }


  function handleLogin(form: FormData) {
    if (!form.email || !form.password)
      return alert('Preencha todos os campos!');

    const data = { //return example for backend
      email: form.email,
      password: form.password
    }

    navigation.navigate('AppRoutes');

    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
        </Header>
        <Form>
          <TitleDesc title='Entre na sua conta' desc='Entre agora para encontrar ingressos para os eventos mais incríveis!' />
          <InputBox>
            <InputForm
              name='email'
              control={control}
              placeholder='E-mail'
              autoCorrect={false}
              keyboardType='email-address'
              autoCapitalize='none'
              error={errors.email && errors.email.message.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name='password'
              control={control}
              placeholder='Senha'
              autoCorrect={false}
              keyboardType='default'
              autoCapitalize='none'
              secureTextEntry
              error={errors.password && errors.password.message.toString()}
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
              {
                Platform.OS === 'ios' &&
                <ButtonSocialRegisterBox>
                  <Button icon={<AntDesign name='apple1' size={24} color={useTheme().colors.text} />} onPress={handleSignInWithApple} />
                </ButtonSocialRegisterBox>
              }
              <ButtonSocialRegisterBox>
                <Button icon={<MaterialIcons name='facebook' size={24} color={useTheme().colors.text} />} />
              </ButtonSocialRegisterBox>
            </ContainerSocialRegister>
          </ContainerAnotherSignUpWays>
        </Form>
        {
          isLoading &&
          <ActivityIndicator size='small' color={useTheme().colors.text} />
        }
        <ContainerFooterMessage>
          <FooterMessage>*Seus dados pessoais serão usados para processar seus pedidos, melhorar sua experiência no aplicativo e outros fins descritos em nossa política de privacidade.</FooterMessage>
        </ContainerFooterMessage>
      </Container >
    </TouchableWithoutFeedback >
  )
}
