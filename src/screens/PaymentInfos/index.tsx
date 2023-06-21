import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from 'styled-components';

import {
  Container,
  ScrollContainer,
  GhostView,
  Section,
  Title,
  SubTitle,
  Form,
  ContainerDate,
  InputDate,
  InputCvv,
  InputBox,
  ButtonBox,
  ContainerSelect,
  ContainerCheckBox,
  ContainerCheckBoxText,
  TextCheckbox,
} from './styles';

import { Button } from '../../components/Form/Button';
import { Checkbox } from '../../components/Form/Checkbox';
import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';

import { formatMoney } from '../../utils/utils';

type PaymentInfosRouteProp = RouteProp<{ PaymentInfos: { total: number } }, 'PaymentInfos'>;

export function PaymentInfos() {
  const route = useRoute<PaymentInfosRouteProp>();
  const [isChecked, setChecked] = useState(false);
  const theme = useTheme();
  const { total } = route.params;
  const navigation = useNavigation();

  const { control } = useForm({
    resolver: yupResolver('seila'),
  });

  function goToPaymentCompleted() {
    navigation.navigate('PaymentCompleted');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header buttonBack title="Dados de Pagamento" buttonRight={<GhostView />} />
        <ScrollContainer>
          <Section>
            <Title>Cartão de Crédito</Title>
            <SubTitle>Parcelamento em até 6x</SubTitle>
          </Section>
          <Section>
            <Title>Dados do Cartão</Title>
          </Section>
          <Form>
            <InputBox>
              <InputForm control={control} name="cardNumber" placeholder="Número do cartão" />
            </InputBox>
            <ContainerDate>
              <InputDate>
                <InputForm control={control} name="validDate" placeholder="Data de validade" />
              </InputDate>
              <InputCvv>
                <InputForm control={control} name="cvv" placeholder="CVV" />
              </InputCvv>
            </ContainerDate>
            <InputBox>
              <InputForm control={control} name="name" placeholder="Nome do titular " />
            </InputBox>
            <InputBox>
              <InputForm control={control} name="document" placeholder="CPF/CNPJ do titular" />
            </InputBox>
            <ContainerSelect>
              <RNPickerSelect
                placeholder={{
                  label: '1x de ' + formatMoney(total),
                  value: null,
                }}
                style={{
                  placeholder: {
                    color: theme.colors.text,
                    fontSize: 12,
                  },
                  modalViewMiddle: {
                    backgroundColor: theme.colors.background,
                    borderTopColor: theme.colors.background,
                  },
                  done: {
                    color: theme.colors.text,
                  },
                  inputIOS: {
                    color: theme.colors.text,
                    fontSize: 12,
                  },
                }}
                pickerProps={{
                  style: {
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.text,
                  },
                }}
                touchableWrapperProps={{
                  style: {},
                }}
                touchableDoneProps={{
                  style: {},
                }}
                onValueChange={value => console.log(value)}
                items={[
                  { label: '2x de ' + formatMoney(total / 2), value: '2x' },
                  { label: '3x de ' + formatMoney(total / 3), value: '3x' },
                  { label: '4x de ' + formatMoney(total / 4), value: '4x' },
                  { label: '5x de ' + formatMoney(total / 5), value: '5x' },
                  { label: '6x de ' + formatMoney(total / 6), value: '6x' },
                ]}
              />
            </ContainerSelect>
            <ContainerCheckBox>
              <Checkbox
                color={theme.colors.text_inactive}
                value={isChecked}
                onValueChange={() => {
                  setChecked(!isChecked);
                }}
              />
              <ContainerCheckBoxText>
                <TextCheckbox>Salvar informações do cartão para compras futuras</TextCheckbox>
              </ContainerCheckBoxText>
            </ContainerCheckBox>
            <ButtonBox>
              <Button title="Finalizar compra" onPress={goToPaymentCompleted} />
            </ButtonBox>
          </Form>
        </ScrollContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
