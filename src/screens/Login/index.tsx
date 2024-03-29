import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { TitleDesc } from '../../components/Form/TitleDesc';
import { Header } from '../../components/Header';
import { useAuth } from '../../hooks/auth';
import {
  ButtonBox,
  ButtonSocialRegisterBox,
  Container,
  ContainerAnotherSignUpWays,
  ContainerFooterMessage,
  ContainerForgotPassword,
  ContainerSocialRegister,
  FooterMessage,
  Form,
  InputBox,
  TextAnotherSignUpWays,
  TextForgotPassword,
  GhostView,
} from '../Login/styles';

interface FormData {
  login: string;
  password: string;
}

const schema = Yup.object().shape({
  login: Yup.string()
    .required('E-mail obrigatório')
    .min(6, 'Mínimo 6 caracteres')
    .max(255, 'Máximo 100 caracteres'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres')
    .max(50, 'Máximo 50 caracteres'),
});

export function Login({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithApple, signInWithApp } = useAuth();
  const theme = useTheme();

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

  async function handleSignInWithApp(credentials: { login: string; password: string }) {
    try {
      setIsLoading(true);
      return await signInWithApp(credentials);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta');
      setIsLoading(false);
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(form: FormData) {
    if (!form.login || !form.password) return alert('Preencha todos os campos!');

    const data = {
      //return example for backend
      login: form.login,
      password: form.password,
    };

    handleSignInWithApp(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header buttonLeft={<GhostView />} logo buttonRight={<GhostView />} />
        <Form>
          <TitleDesc
            title="Entre na sua conta"
            desc="Entre agora para encontrar ingressos para os eventos mais incríveis!"
          />
          <InputBox>
            <InputForm
              name="login"
              control={control}
              placeholder="E-mail"
              autoCorrect={false}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.login && errors.login.message.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name="password"
              control={control}
              placeholder="Senha"
              autoCorrect={false}
              keyboardType="default"
              autoCapitalize="none"
              secureTextEntry
              error={errors.password && errors.password.message.toString()}
            />
          </InputBox>
          <ContainerForgotPassword>
            <TextForgotPassword>Esqueceu sua senha?</TextForgotPassword>
          </ContainerForgotPassword>
          <ButtonBox>
            <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
          </ButtonBox>
          <ContainerAnotherSignUpWays>
            <TextAnotherSignUpWays>ou entre com</TextAnotherSignUpWays>
            <ContainerSocialRegister>
              <ButtonSocialRegisterBox>
                <Button icon={<AntDesign name="google" size={24} color={theme.colors.text} />} />
              </ButtonSocialRegisterBox>
              {Platform.OS === 'ios' && (
                <ButtonSocialRegisterBox>
                  <Button
                    icon={<AntDesign name="apple1" size={24} color={theme.colors.text} />}
                    onPress={handleSignInWithApple}
                  />
                </ButtonSocialRegisterBox>
              )}
              <ButtonSocialRegisterBox>
                <Button
                  icon={<MaterialIcons name="facebook" size={24} color={theme.colors.text} />}
                />
              </ButtonSocialRegisterBox>
            </ContainerSocialRegister>
          </ContainerAnotherSignUpWays>
        </Form>
        {isLoading && <ActivityIndicator size="small" color={theme.colors.text} />}
        <ContainerFooterMessage>
          <FooterMessage>
            *Seus dados pessoais serão usados para processar seus pedidos, melhorar sua experiência
            no aplicativo e outros fins descritos em nossa política de privacidade.
          </FooterMessage>
        </ContainerFooterMessage>
      </Container>
    </TouchableWithoutFeedback>
  );
}
