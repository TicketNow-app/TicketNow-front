import React, { useState } from 'react';
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import RNPickerSelect from 'react-native-picker-select';

import { Container, Header, MainTitle, ScrollContainer, Section, Title, SubTitle,  Form, ContainerDate, InputDate, InputCvv, InputBox, ButtonBox, ContainerSelect, ContainerCheckBox, ContainerCheckBoxText, TextCheckbox } from './styles';

import { HeaderButton } from '../../components/HeaderButton';
import { Checkbox } from '../../components/Form/Checkbox';
import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';


export function PaymentInfos() {

  const [isChecked, setChecked] = useState(false);

  const {
    control,
  } = useForm({
    resolver: yupResolver("seila")
  });


  return (
    <Container>
      <Header>
          <HeaderButton>
            <ArrowLeftIcon size={20} color={useTheme().colors.text} />
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
            <InputForm control={control} name='cardNumber'  placeholder='Número do cartão' />
          </InputBox>
          <ContainerDate>
            <InputDate>
              <InputForm control={control} name='validDate' placeholder='Data de validade'/>
            </InputDate>
            <InputCvv>
              <InputForm control={control} name='cvv' placeholder='CVV'/>
            </InputCvv>
          </ContainerDate>
          <InputBox>
            <InputForm control={control} name='name' placeholder='Nome do titular ' />
          </InputBox>
          <InputBox>
            <InputForm control={control} name='document' placeholder='CPF/CNPJ do titular' />
          </InputBox>
          <ContainerSelect>
            <RNPickerSelect
              placeholder={{
                label: '1x de R$165,00',
                value: null,
              }}
              style={{
                placeholder: {
                  color: useTheme().colors.text_inactive,
                  fontSize: 12,
                },
              }}
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: '2x de R$82,50', value: '2x' },
                  { label: '3x de R$55,00', value: '3x' }
              ]}
          />
          </ContainerSelect>
          <ContainerCheckBox>
            <Checkbox color={useTheme().colors.text_inactive} value={isChecked} onValueChange={() => { setChecked(!isChecked) }} />
            <ContainerCheckBoxText>
              <TextCheckbox>Salvar informações do cartão para compras futuras</TextCheckbox>
            </ContainerCheckBoxText>
          </ContainerCheckBox>
          <ButtonBox>
            <Button title='Finalizar compra' />
          </ButtonBox>
        </Form>
      </ScrollContainer>
    </Container>
  );

}

