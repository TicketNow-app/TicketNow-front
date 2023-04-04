import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { HomeIcon, MapIcon, TicketIcon, UserIcon } from "react-native-heroicons/outline";
import { useTheme } from "styled-components";

import { getBottomSpace } from "react-native-iphone-x-helper";

import { Home } from "../screens/Home";
import { Map } from "../screens/Map";
import { Profile } from "../screens/Profile";
import { TicketsList } from "../screens/TicketsList";

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
          paddingTop: 16,
          paddingBottom: getBottomSpace(),
          backgroundColor: theme.colors.background_secondary,
          borderTopColor: 'transparent',
        },
        header: () => null,
        tabBarShowLabel: false
      }
      }
    >
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
        name="Mapa"
        component={Map}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MapIcon size={size} color={color} />
          ))
        }}
      />
      <Screen
        name="TicketList"
        component={TicketsList}
        options={{
          tabBarIcon: (({ size, color }) => (
            <TicketIcon size={size} color={color} />
          )),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) => (
            <UserIcon size={size} color={color} />
          ))
        }}
      />
    </ Navigator>
  );
}
