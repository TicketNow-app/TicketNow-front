import React from "react";
import { Text } from "react-native";
import { useTheme } from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Settings } from "../screens/Settings";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Search } from "../screens/Search";

//set home as initial route

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="Início"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.text,
        tabBarInactiveTintColor: theme.colors.text_inactive,
        tabBarStyle: {
          height: 60,
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background_secondary,
          borderTopColor: 'transparent',
        },
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        header: () => null,
      }
      }
    >
      <Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          )),
        }}
      />
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="Pesquisar"
        component={Search}
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
    </ Navigator>
  );
}
