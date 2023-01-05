import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

export default function Loading() {
    return (
        <View style={stylesSearch.activityContainer}>
            <ActivityIndicator size={50} color="grey" />
            <Text>Cargando Pokemon...</Text>
        </View>
    );
}

const stylesSearch = StyleSheet.create({
    activityContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
