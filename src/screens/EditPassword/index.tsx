import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ArrowLeftIcon, CameraIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import { Container, GhostView, Header, MainTitle, ScrollContainer, Form, ContainerDateTelephone, InputBoxDate, InputBoxTelephone, InputBox, ContainerImage, UserImage, ContainerEditImage, ButtonBox } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';

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

export function EditPassword() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function GoBack() {
    navigation.goBack();
  }


  return (
    <Container>
      <ScrollContainer>
        <Header>
          <HeaderButton onPress={GoBack}>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
          </HeaderButton>
          <MainTitle>Editar</MainTitle>
          <GhostView />
        </Header>
        <Form>
          <InputBox>
            <InputForm control={control} name='currentPassword' placeholder='Senha atual' />
          </InputBox>
          <InputBox>
            <InputForm control={control} name='newPassword' placeholder='Nova senha' />
          </InputBox>
          <InputBox>
            <InputForm control={control} name='confirmPassword' placeholder='Confirme sua nova senha' />
          </InputBox>
          <ButtonBox>
            <Button title='Salvar' onPress={GoBack} />
          </ButtonBox>
        </Form>
      </ScrollContainer>
    </Container>
  );
}
