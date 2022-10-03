import React from "react";
// import {useTheme} from "styled-components";
import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Settings } from "../screens/Settings";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Search } from "../screens/Search";

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
        component={Settings}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ))
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
    </Navigator>
  );
}
