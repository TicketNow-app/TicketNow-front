import React from "react";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cog6ToothIcon, HomeIcon, UserIcon, MapIcon } from "react-native-heroicons/outline";

import { Settings } from "../screens/Settings";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Search } from "../screens/Search";

const { Navigator, Screen } = createBottomTabNavigator();

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
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background_secondary,
          borderTopColor: 'transparent',
        },
        header: () => null,
        tabBarShowLabel: false
      }
      }
    >
      <Screen
        name="Configurações"
        component={Settings}
        options={{
          tabBarIcon: (({ size, color }) => (
            <Cog6ToothIcon size={size} color={color} />
          )),
        }}
      />
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) => (
            <HomeIcon size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="Pesquisar"
        component={Search}
        options={{
          tabBarIcon: (({ size, color }) => (
            <UserIcon size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MapIcon size={size} color={color} />
          ))
        }}
      />
    </ Navigator>
  );
}
