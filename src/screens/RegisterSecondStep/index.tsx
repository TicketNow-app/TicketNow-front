import React, { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import {createUser} from '../../helpers/requests/user';
import {RegisterTemporaryContext} from '../../contexts/registerTemporary';

import { ButtonBox, Container, ContainerFooterMessage, ContainerLater, FooterMessage, Form, Header, InputBox, LogoHorizontal, TextLater } from './styles';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { TitleDesc } from '../../components/Form/TitleDesc';

import { IRegisterSecondStep } from '../../interfaces/register';

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome obrigatório')
    .min(6, 'Mínimo 6 caracteres')
    .max(255, 'Máximo 100 caracteres'),
  cpf: Yup
    .string()
    .required('CPF obrigatório')
    .min(11, 'Mínimo 11 caracteres')
    .max(11, 'Máximo 11 caracteres'),
  phone: Yup
    .string()
    .required('Telefone obrigatório')
    .min(14, 'Mínimo 14 caracteres')
    .max(14, 'Máximo 14 caracteres'),
})

export function RegisterSecondStep({ navigation, route }: any) {
  const { updateRegisterTemporary, registerTemporary } = useContext(RegisterTemporaryContext);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  async function handleRegister(form: IRegisterSecondStep) {
    if(!form.name || !form.cpf || !form.phone)
      return alert('Preencha todos os campos');

    const registerInfos: IRegisterSecondStep = {
      name: form.name,
      cpf: form.cpf,
      phone: form.phone,
    }

    const registerInfosMerged = Object.assign(registerTemporary, registerInfos);

    updateRegisterTemporary(registerInfosMerged);

    createUser(registerInfosMerged);
    navigation.navigate('Login');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
        </Header>
        <Form>
          <TitleDesc title='Informações adicionais' desc='Para garantir a segurança das transações, precisamos de algumas informações adicionais.' />
          <InputBox>
            <InputForm
              name='name'
              control={control}
              placeholder='Nome completo'
              autoCapitalize='words'
              autoCorrect={true}
              error={errors.name && errors.name.message.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name='cpf'
              control={control}
              placeholder='CPF'
              autoCapitalize='characters'
              autoCorrect={false}
              error={errors.cpf && errors.cpf.message.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name='phone'
              control={control}
              placeholder='Telefone'
              autoCapitalize='characters'
              autoCorrect={true}
              error={errors.phone && errors.phone.message.toString()}
            />
          </InputBox>
          <ButtonBox>
            <Button title='Finalizar' onPress={handleSubmit(handleRegister)} />
          </ButtonBox>
          {/* <ContainerLater>
            <TextLater>Lembre-me mais tarde</TextLater>
            <ChevronRightIcon size={18} color={useTheme().colors.text_inactive} />
          </ContainerLater> */}
        </Form>
        <ContainerFooterMessage>
          <FooterMessage>*Seus dados pessoais serão usados para processar seus pedidos, melhorar sua experiência no aplicativo e outros fins descritos em nossa política de privacidade.</FooterMessage>
        </ContainerFooterMessage>
      </Container>
    </TouchableWithoutFeedback>
  );
}
