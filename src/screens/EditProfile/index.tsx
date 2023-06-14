import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ArrowLeftIcon, CameraIcon, ArrowRightIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import { Container, GhostView, Header, MainTitle, ScrollContainer, Form, ContainerDateTelephone, InputBoxDate, InputBoxTelephone, InputBox, ContainerImage, UserImage, ContainerEditImage, ButtonBox, ButtonEditPassword, EditPasswordBox } from './styles';

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

export function EditProfile() {
  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setImage(result.assets[0].uri);
  };

  function goToEditPassword() {
    navigation.navigate('EditPassword');
  }

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
          <ContainerImage>
            <UserImage source={{ uri: image ? image : 'https://avatars.githubusercontent.com/u/45953201?v=4' }} />
            <ContainerEditImage onPress={pickImage}>
              <CameraIcon size={36} color={useTheme().colors.text} />
            </ContainerEditImage>
          </ContainerImage>
          <InputBox>
            <InputForm control={control} name='name' defaultValue='Thiago Leão' placeholder='Nome' />
          </InputBox>
          <ContainerDateTelephone>
            <InputBoxDate>
              <InputForm control={control} name='date' defaultValue='01/01/2000' placeholder='Data de nascimento'/>
            </InputBoxDate>
            <InputBoxTelephone>
              <InputForm control={control} name='telephone' defaultValue='(11) 99999-9999' placeholder='Telefone'/>
            </InputBoxTelephone>
          </ContainerDateTelephone>
          <InputBox>
            <InputForm control={control} name='email' defaultValue='thiago.leaox@gmail.com' placeholder='E-mail' />
          </InputBox>
          <EditPasswordBox onPress={goToEditPassword}>
            <InputForm control={control} name='password' value='thiago123456' placeholder='Senha' editable={false} secureTextEntry />
            <ButtonEditPassword>
              <ArrowRightIcon size={24} color={useTheme().colors.text_inactive} />
            </ButtonEditPassword>
          </EditPasswordBox>
          <ButtonBox>
            <Button title='Salvar' />
          </ButtonBox>
        </Form>
      </ScrollContainer>
    </Container>
  );
}
