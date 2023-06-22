import BottomSheet from '@gorhom/bottom-sheet';
import React, { useEffect, useRef, useState } from 'react';
import { AdjustmentsVerticalIcon } from 'react-native-heroicons/solid';
import { useTheme } from 'styled-components';
import {
  TitleContainer,
  ContainerInputButton,
  TitleDates,
  SelectDates,
  ContainerScrollPills,
  InputText,
  ButtonContainer,
} from './styles';
import { categories } from '../../mock';
import { Calendar } from '../Calendar';
import { FilterButton } from '../FilterButton';
import { FiltersPill } from '../FiltersPill';
import { Input } from '../Form/Input';

export function Filters() {
  const [bottomSheet, setBottomSheet] = useState<boolean>(false);

  useEffect(() => {
    if (bottomSheet === true) {
      return sheetRef.current?.expand();
    }
    sheetRef.current?.collapse();
  }, [bottomSheet]);

  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = ['14%', '24%', '90%'];

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: useTheme().colors.background }}
      handleStyle={{ height: 60 }}
      handleIndicatorStyle={{ backgroundColor: useTheme().colors.text_inactive }}
      enableOverDrag={false}
      enableContentPanningGesture={false}
      enablePanDownToClose={false}
      keyboardBlurBehavior="restore"
      style={{ paddingHorizontal: 16 }}
    >
      <ContainerInputButton>
        <AdjustmentsVerticalIcon size={38} color={useTheme().colors.base} />
        <TitleContainer>Filtrar</TitleContainer>
      </ContainerInputButton>
      <InputText placeholder="Insira a localização" />
      <TitleContainer>Categorias</TitleContainer>
      <ContainerScrollPills>
        {categories.map((category, index) => (
          <FiltersPill key={index} title={category.name} />
        ))}
      </ContainerScrollPills>
      <TitleDates>Selecionar datas</TitleDates>
      <SelectDates>
        <Input placeholder="1 Dez 2022 - 1 Dez 2022" />
      </SelectDates>
      <ButtonContainer>
        <FilterButton title="Limpar" />
        <FilterButton title="Aplicar" />
      </ButtonContainer>
    </BottomSheet>
  );
}
