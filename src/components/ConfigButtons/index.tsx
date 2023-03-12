import React from 'react';
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useTheme } from "styled-components";
import { StyleSheet, Text, View } from 'react-native';

import { ContainerOption, ContainerTexts, DescProfileOption, GroupIconTexts, TitleProfileOption } from './styles';

// import { Container } from './styles';

interface ConfigButtons {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  roundedBorder?: string;
  deleteColor?: string;
  separator?: string;
}

export function ConfigButtons({ icon, title, description, roundedBorder, deleteColor, separator }: ConfigButtons) {
  return (
    <ContainerOption separator={separator} roundedBorder={roundedBorder}>
      <GroupIconTexts>
        {icon}
        <ContainerTexts>
          <TitleProfileOption deleteColor={deleteColor}>{title}</TitleProfileOption>
          { description && <DescProfileOption>{description}</DescProfileOption> }
        </ContainerTexts>
      </GroupIconTexts>
      <ChevronRightIcon size={24} color={useTheme().colors.text_inactive} />
    </ContainerOption>
  );
}