import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import RNPickerSelect from 'react-native-picker-select';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  MainTitle,
  ScrollContainer,
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
import { HeaderButton } from '../../components/HeaderButton';

export function PaymentInfos() {
  const [isChecked, setChecked] = useState(false);
  const theme = useTheme();

  const { control } = useForm({
    resolver: yupResolver('seila'),
  });

  return (
    <Container>
      <Header>
        <HeaderButton>
          <ArrowLeftIcon size={20} color={theme.colors.text} />
        </HeaderButton>
        <MainTitle>Informações de Pagamento</MainTitle>
      </Header>
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
                label: '1x de R$165,00',
                value: null,
              }}
              style={{
                placeholder: {
                  color: theme.colors.text_inactive,
                  fontSize: 12,
                },
              }}
              onValueChange={value => console.log(value)}
              items={[
                { label: '2x de R$82,50', value: '2x' },
                { label: '3x de R$55,00', value: '3x' },
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
            <Button title="Finalizar compra" />
          </ButtonBox>
        </Form>
      </ScrollContainer>
    </Container>
  );
}
