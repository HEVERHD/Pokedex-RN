import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import Icon from 'react-native-vector-icons/Ionicons';
import { Navigator } from './src/navigator/Navigator';
import { Tabs } from './src/navigator/Tabs';

export default function App() {
    return (
        <NavigationContainer>
            {/* <Navigator /> */}
            <Tabs />
            {/* <Icon name="star-outline" color="red" size={30} /> */}
        </NavigationContainer>
    );
}
