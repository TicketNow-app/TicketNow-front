import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import {
  ButtonBox,
  ButtonSocialRegisterBox,
  Container,
  ContainerAlreadyAccount,
  ContainerAnotherSignUpWays,
  ContainerSocialRegister,
  ContainerTerms,
  ContainerTextTerms,
  Form,
  InputBox,
  TextAlreadyAccount,
  TextAlreadyAccountBold,
  TextAnotherSignUpWays,
  TextTerms,
  TextTermsBold,
  TouchableAlreadyAccount,
  GhostView,
} from './styles';

import { Button } from '../../components/Form/Button';
import { Checkbox } from '../../components/Form/Checkbox';
import { DatePicker } from '../../components/Form/DatePicker';
import { InputForm } from '../../components/Form/InputForm';
import { TitleDesc } from '../../components/Form/TitleDesc';
import { Header } from '../../components/Header';

import { Account } from '../../interfaces/account';
import { IRegisterForm } from '../../interfaces/register';
import { User } from '../../interfaces/user';

import { createAccount } from '../../services/account';
import { createUser } from '../../services/user';

const schema = Yup.object().shape({
  date: Yup.date(),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('E-mail inválido')
    .min(6, 'Mínimo 6 caracteres')
    .max(255, 'Máximo 100 caracteres'),
  password: Yup.string()
    .required('Senha obrigatória')
    .min(6, 'Mínimo 6 caracteres')
    .max(50, 'Máximo 50 caracteres'),
});

export function Register() {
  const [isChecked, setChecked] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [datePickerShow, setDatePickerShow] = useState(false);
  const navigation = useNavigation();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: IRegisterForm) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (!date || !form.email || !form.password) return alert('Preencha todos os campos');

    const userData: User = {
      image: '',
      name: '',
      cpf: '',
      telephone: '',
      birth: date.toISOString().split('T')[0],
      category: 'C',
      created_at: new Date().toISOString(),
    };

    const response = await createUser(userData);

    const accountData: Account = {
      email: form.email,
      password: form.password,
      status: 'P',
      id_user: response.id,
    };

    const responseAccount = await createAccount(accountData);
    navigation.navigate('RegisterSecondStep', {
      accountId: responseAccount.id,
      userId: response.id,
    });
  }

  function goToTermsOfUse() {
    navigation.navigate('TermsOfUse');
  }

  function goToLogin() {
    navigation.navigate('Login');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header buttonLeft={<GhostView />} logo buttonRight={<GhostView />} />
        <Form>
          <TitleDesc
            title="Crie sua conta"
            desc="Inscreva-se agora para descobrir os eventos mais incríveis!"
          />
          <InputBox>
            {/* <Input placeholder='Data de nascimento' editable={false} onPressIn={() => { setDatePickerShow(true) }} value={date?.toLocaleString('pt-BR').split(' ')[0]} /> */}
            <InputForm
              name="date"
              control={control}
              placeholder="Data de nascimento"
              editable={false}
              onPressIn={() => {
                setDatePickerShow(true);
              }}
              error={errors.date?.message?.toString()}
              onChange={(event: any) => {
                setDate(event.nativeEvent.text);
              }}
              value={date?.toLocaleString('pt-BR').split(' ')[0]}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name="email"
              control={control}
              placeholder="E-mail"
              autoCorrect={false}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email?.message?.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name="password"
              control={control}
              placeholder="Senha"
              secureTextEntry
              error={errors.password?.message?.toString()}
            />
          </InputBox>
          <ContainerTerms>
            <Checkbox
              color={theme.colors.text_inactive}
              value={isChecked}
              onValueChange={() => {
                setChecked(!isChecked);
              }}
            />
            <ContainerTextTerms>
              <TextTerms>Eu concordo com os </TextTerms>
              <TextTermsBold onPress={goToTermsOfUse}>Termos de uso</TextTermsBold>
              <TextTerms> e com as </TextTerms>
              <TextTermsBold>Políticas de Privacidade</TextTermsBold>
            </ContainerTextTerms>
          </ContainerTerms>
          <ButtonBox>
            <Button title="Continuar" onPress={handleSubmit(handleRegister)} />
          </ButtonBox>
          <ContainerAlreadyAccount>
            <TextAlreadyAccount>Já possui uma conta? </TextAlreadyAccount>
            <TouchableAlreadyAccount onPress={goToLogin}>
              <TextAlreadyAccountBold>Entre aqui!</TextAlreadyAccountBold>
            </TouchableAlreadyAccount>
          </ContainerAlreadyAccount>
          <ContainerAnotherSignUpWays>
            <TextAnotherSignUpWays>ou cadastre-se com</TextAnotherSignUpWays>
            <ContainerSocialRegister>
              <ButtonSocialRegisterBox>
                <Button icon={<AntDesign name="google" size={24} color={theme.colors.text} />} />
              </ButtonSocialRegisterBox>
              <ButtonSocialRegisterBox>
                <Button icon={<AntDesign name="apple1" size={24} color={theme.colors.text} />} />
              </ButtonSocialRegisterBox>
              <ButtonSocialRegisterBox>
                <Button
                  icon={<MaterialIcons name="facebook" size={24} color={theme.colors.text} />}
                />
              </ButtonSocialRegisterBox>
            </ContainerSocialRegister>
          </ContainerAnotherSignUpWays>
        </Form>
        {datePickerShow && (
          <DatePicker
            handleConfirm={date => {
              setDate(date), setDatePickerShow(false);
            }}
          />
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}
