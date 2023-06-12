import { yupResolver } from '@hookform/resolvers/yup';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ChevronRightIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import {
  ButtonBox,
  Container,
  ContainerFooterMessage,
  ContainerLater,
  FooterMessage,
  Form,
  InputBox,
  TextLater,
  GhostView,
} from './styles';

import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import { TitleDesc } from '../../components/Form/TitleDesc';
import { Header } from '../../components/Header';

import { IRegisterSecondStep } from '../../interfaces/register';
import { User } from '../../interfaces/user';

import { alterAccount } from '../../services/account';
import { alterUser } from '../../services/user';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  cpf: Yup.string()
    .required('CPF obrigatório')
    .min(11, 'Mínimo 11 caracteres')
    .max(11, 'Máximo 11 caracteres'),
  telephone: Yup.string()
    .required('Telefone obrigatório')
    .min(11, 'Mínimo 11 caracteres')
    .max(11, 'Máximo 11 caracteres'),
});

type RegisterSecondStepProp = RouteProp<
  { RegisterSecondStep: { accountId: number; userId: number } },
  'RegisterSecondStep'
>;

type AlterAccount = {
  id: number;
  id_user: number;
};

export function RegisterSecondStep() {
  // const theme = useTheme();
  const route = useRoute<RegisterSecondStepProp>();
  const navigation = useNavigation();
  const { accountId, userId } = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: IRegisterSecondStep) {
    if (!form.name || !form.cpf || !form.telephone) return alert('Preencha todos os campos');

    const image = `https://ui-avatars.com/api/?name=${form.name}&length=2&size=1024&background=323643&color=FFFFFF&font-size=0.33`;

    const user: User = {
      id: userId,
      image,
      name: form.name,
      cpf: form.cpf,
      telephone: form.telephone,
    };

    const account: AlterAccount = {
      id: accountId,
      id_user: userId,
    };

    Promise.all([alterAccount(account), alterUser(user)]);

    navigation.navigate('Login');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header buttonLeft={<GhostView />} logo buttonRight={<GhostView />} />
        <Form>
          <TitleDesc
            title="Informações adicionais"
            desc="Para garantir a segurança das transações, precisamos de algumas informações adicionais."
          />
          <InputBox>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              error={errors.name?.message?.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name="cpf"
              control={control}
              placeholder="CPF"
              error={errors.cpf?.message?.toString()}
            />
          </InputBox>
          <InputBox>
            <InputForm
              name="telephone"
              control={control}
              placeholder="Telefone"
              error={errors.telephone?.message?.toString()}
            />
          </InputBox>
          <ButtonBox>
            <Button title="Finalizar" onPress={handleSubmit(handleRegister)} />
          </ButtonBox>
          {/* <ContainerLater>
            <TextLater>Lembre-me mais tarde</TextLater>
            <ChevronRightIcon size={18} color={theme.colors.text_inactive} />
          </ContainerLater> */}
        </Form>
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
