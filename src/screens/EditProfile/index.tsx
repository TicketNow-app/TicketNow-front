import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { CameraIcon, ArrowRightIcon } from 'react-native-heroicons/outline';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import {
  Container,
  GhostView,
  Content,
  Form,
  ContainerDateTelephone,
  InputBoxDate,
  InputBoxTelephone,
  InputBox,
  ContainerImage,
  UserImage,
  ContainerEditImage,
  ButtonBox,
  ButtonEditPassword,
  EditPasswordBox,
} from './styles';

import { Button } from '../../components/Form/Button';
import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';

import { useAuth } from '../../hooks/auth';

import { UserWithAccount } from '../../interfaces/user';
import { alterUser } from '../../services/user';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .min(6, 'Mínimo 6 caracteres')
    .max(255, 'Máximo 100 caracteres'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').max(50, 'Máximo 50 caracteres'),
});

export function EditProfile() {
  // type state with string or null
  const [image, setImage] = useState<FormData | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const navigation = useNavigation();
  const { user, updateUser } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleEditProfile(form: UserWithAccount) {
    if (form.name || form.email || form.telephone || form.birth || image) {
      const filename = image[0].uri.substring(
        image[0].uri.lastIndexOf('/') + 1,
        image[0].uri.length
      );
      const extension = filename.split('.').pop();

      const formData = new FormData();

      formData.append(
        'image',
        JSON.parse(
          JSON.stringify({
            name: filename,
            uri: image[0].uri,
            type: extension,
          })
        )
      );
      formData.append('name', form.name ? form.name : user.name);
      // formData.append('email', form.email ? form.email : user.email);
      formData.append('telephone', form.telephone ? form.telephone : user.telephone);
      formData.append('birth', form.birth ? form.birth : user.birth);
      formData.append('cpf', user.cpf);
      formData.append('category', user.category);
      formData.append('coupon', user.coupon);

      console.log(formData);

      await alterUser(formData);
      // updateUser(userData);
      // navigation.goBack();
    }
  }

  const pickImage = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!canceled) {
      setImage(assets);
      setImagePreview(assets[0].uri);
    }
  };

  function goToEditPassword() {
    navigation.navigate('EditPassword');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header buttonBack title="Editar" buttonRight={<GhostView />} />
        <Content>
          <Form>
            <ContainerImage>
              <UserImage
                source={{
                  uri: imagePreview ? imagePreview : user.image,
                }}
              />
              <ContainerEditImage onPress={pickImage}>
                <CameraIcon size={36} color={useTheme().colors.text} />
              </ContainerEditImage>
            </ContainerImage>
            <InputBox>
              <InputForm
                name="name"
                control={control}
                placeholder="Nome"
                defaultValue="Thiago Leão"
                error={errors.name?.message?.toString()}
              />
            </InputBox>
            <ContainerDateTelephone>
              <InputBoxDate>
                <InputForm
                  control={control}
                  name="birth"
                  defaultValue="01/01/2000"
                  placeholder="Data de nascimento"
                  error={errors.birth?.message?.toString()}
                />
              </InputBoxDate>
              <InputBoxTelephone>
                <InputForm
                  control={control}
                  name="telephone"
                  defaultValue="(11) 99999-9999"
                  placeholder="Telefone"
                />
              </InputBoxTelephone>
            </ContainerDateTelephone>
            <InputBox>
              <InputForm
                control={control}
                name="email"
                defaultValue="thiago.leaox@gmail.com"
                placeholder="E-mail"
                error={errors.email?.message?.toString()}
              />
            </InputBox>
            <EditPasswordBox onPress={goToEditPassword}>
              <InputForm
                control={control}
                name="password"
                value="thiago123456"
                placeholder="Senha"
                editable={false}
                secureTextEntry
                error={errors.password?.message?.toString()}
              />
              <ButtonEditPassword>
                <ArrowRightIcon size={24} color={useTheme().colors.text_inactive} />
              </ButtonEditPassword>
            </EditPasswordBox>
            <ButtonBox>
              <Button title="Salvar" onPress={handleSubmit(handleEditProfile)} />
            </ButtonBox>
          </Form>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
