import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';

import Icon from 'react-native-vector-icons/Ionicons';

import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#d89dff',
                tabBarStyle: {
                    borderWidth: 0,
                    elevation: 0,
                    height: 80,
                    position: 'absolute',
                    backgroundColor: '#7339fcd8',
                },
                tabBarLabelStyle: {
                    height: 40,
                    fontSize: 15,
                    fontWeight: 'bold',
                },
            }}>
            <Tab.Screen
                name="Inicio"
                component={Navigator}
                options={{
                    tabBarLabel: 'Listado Poke',
                    tabBarIcon: ({ color }) => (
                        <Icon name="list-outline" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => (
                        <Icon name="search-outline" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
