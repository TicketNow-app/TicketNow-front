import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';

import { ButtonBox, ButtonSocialRegisterBox, Container, ContainerAlreadyAccount, ContainerAnotherSignUpWays, ContainerSocialRegister, ContainerTerms, ContainerTextTerms, Form, Header, InputBox, LogoHorizontal, TextAlreadyAccount, TextAlreadyAccountBold, TextAnotherSignUpWays, TextTerms, TextTermsBold, TouchableAlreadyAccount } from './styles';

import { Button } from '../../components/Form/Button';
import { Checkbox } from '../../components/Form/Checkbox';
import { DatePicker } from '../../components/Form/DatePicker';
import { Input } from '../../components/Form/Input';
import { TitleDesc } from '../../components/Form/TitleDesc';

export function Register({ navigation }: any) {
  const [isChecked, setChecked] = useState(false);
  const [date, setDate] = useState<Date | string>('');
  const [datePickerShow, setDatePickerShow] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <LogoHorizontal source={require('../../../assets/logo-horizontal.png')} />
        </Header>
        <Form>
          <TitleDesc title='Crie sua conta' desc='Inscreva-se agora para descobrir os eventos mais incríveis!' />
          <InputBox>
            <Input placeholder='Data de nascimento' editable={false} onPressIn={() => { setDatePickerShow(true) }} value={date?.toLocaleString('pt-BR').split(' ')[0]} />
          </InputBox>
          <InputBox>
            <Input placeholder='Endereço de e-mail' />
          </InputBox>
          <InputBox>
            <Input placeholder='Senha' />
          </InputBox>
          <ContainerTerms onTouchEnd={() => { setChecked(!isChecked) }}>
            <Checkbox color={useTheme().colors.text_inactive} value={isChecked} onValueChange={() => { setChecked(!isChecked) }} />
            <ContainerTextTerms>
              <TextTerms>Eu concordo com os </TextTerms>
              <TextTermsBold>Termos & Condições</TextTermsBold>
              <TextTerms> e com as </TextTerms>
              <TextTermsBold>Políticas de Privacidade</TextTermsBold>
            </ContainerTextTerms>
          </ContainerTerms>
          <ButtonBox>
            <Button title='Continuar' onPress={() => { navigation.navigate('RegisterSecondStep') }} />
          </ButtonBox>
          <ContainerAlreadyAccount>
            <TextAlreadyAccount>Já possui uma conta? </TextAlreadyAccount>
            <TouchableAlreadyAccount>
              <TextAlreadyAccountBold>Entre aqui!</TextAlreadyAccountBold>
            </TouchableAlreadyAccount>
          </ContainerAlreadyAccount>
          <ContainerAnotherSignUpWays>
            <TextAnotherSignUpWays>ou cadastre-se com</TextAnotherSignUpWays>
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
        {datePickerShow && (
          <DatePicker handleConfirm={(date) => { setDate(date), setDatePickerShow(false) }} />
        )}
      </Container>
    </TouchableWithoutFeedback >
  );
}
