import React from "react";
// import {useTheme} from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

export function AppRoutes() {
  // const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#e1e1e6",
        header: () => null,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Configurações"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="Início"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="Pesquisar"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ))
        }}
      />
    </Navigator>
  );
}
