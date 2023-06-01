import React from 'react';
import { Keyboard } from 'react-native';
import { useTheme } from "styled-components";
import { FireIcon } from "react-native-heroicons/solid";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { Square2StackIcon } from "react-native-heroicons/outline";

import { Container, Background, Form, CircleIcon, ContainerTexts, Title, Desc, ContainerCode, CodeLabel, ContainerInput, InputBox, ButtonCopy, ContainerButtons, ButtonCancel, ButtonConfirm, TextButton } from './styles';

import { InputForm } from '../Form/InputForm';

import { useAuth } from '../../hooks/auth';

import { validateUserCoupon, alterUser } from '../../services/user';

interface FormData {
  coupon: string;
}

interface User { //TODO: Create global type
  id: number;
  image?: string;
  name: string;
  cpf?: string;
  telephone?: string;
  birth?: string;
  category?: 'P' | 'C';
  coupon?: string;
  createdAt?: Date;
  deletedAt?: Date | null;
}

interface ModalPromoterProps {
  closeModal: () => void;
}

const schema = Yup.object().shape({
  coupon: Yup
    .string()
    .required('Código obrigatório')
    .min(4, 'Mínimo 4 caracteres')
    .max(11, 'Máximo 11 caracteres')
})

export function ModalPromoter({ closeModal }: ModalPromoterProps) {
  const { user, updateUser } = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  function setCloseModal() {
    closeModal();
  }

  async function handleAlterUser(coupon: string) {
    const alterUserObject: User = {
      ...user,
      coupon: coupon,
      category: 'P'
    }

    try {
      await alterUser(alterUserObject);
      updateUser(alterUserObject);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleValidateCoupon(coupon: string) {
    const couponObject = {
      coupon: coupon
    }

    try {
      const response = await validateUserCoupon(couponObject);

      if (response.isValid === false) {
        setError('coupon', {
          type: 'manual',
          message: 'Código inválido',
        });
      }

      if (response.isValid === true) {
        handleAlterUser(coupon);
        closeModal();
      }

    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmitCoupon(form: FormData) {
    const { coupon } = form;

    handleValidateCoupon(coupon);
  }

  return(
    <Container>
      <Background onPress={setCloseModal}/>
      <Form onPress={() => Keyboard.dismiss()}>
        <CircleIcon>
          <FireIcon size={40} color={useTheme().colors.text} />
        </CircleIcon>
        <ContainerTexts>
          <Title>Tornar-se promoter</Title>
          <Desc>Você poderá compartilhar seu código de divulgação e ao utilizarem, receberá uma parte do lucro da venda do ingresso.</Desc>
        </ContainerTexts>
        <ContainerCode>
          <CodeLabel>Escolha seu código</CodeLabel>
          <ContainerInput>
            <InputBox>
              <InputForm
                name="coupon"
                control={control}
                placeholder="Código"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                error={errors.coupon && errors.coupon.message.toString()}
              />
            </InputBox>
            {/* <ButtonCopy onPress={() => {}}>
              <Square2StackIcon size={30} color={useTheme().colors.text_inactive} />
            </ButtonCopy> */}
          </ContainerInput>
        </ContainerCode>
        <ContainerButtons>
          <ButtonCancel onPress={setCloseModal}>
            <TextButton>Cancelar</TextButton>
          </ButtonCancel>
          <ButtonConfirm onPress={handleSubmit(handleSubmitCoupon)}>
            <TextButton>Concluir</TextButton>
          </ButtonConfirm>
        </ContainerButtons>
      </Form>
    </Container>
  )
}
