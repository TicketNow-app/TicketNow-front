import React from 'react';
import { PaymentIcon } from 'react-native-payment-icons'
import { RadioButton } from 'react-native-paper';
import { Container, ContainerInfos, TextType} from './styles';

type SavedCardProps = {
  lastDigits: number;
  type: string;
}

export function SavedCards({ lastDigits, type }: SavedCardProps) {

  return (
    <Container>
      <ContainerInfos>
         <RadioButton.Android
                value="first"
                status={ 'checked' }
                color='#FFFFFF'
        /> 
        <TextType>****{lastDigits} ({type})</TextType>    
      </ContainerInfos>
      <PaymentIcon type='master' width={40}/>
    </Container>
  );
}