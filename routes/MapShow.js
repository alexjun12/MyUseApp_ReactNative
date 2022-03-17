import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import MapView from 'react-native-maps';

import { Fontisto } from '@expo/vector-icons';
import { theme } from '../colors';

export default function MapShow() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}>
                <TextInput style={styles.input} />
                <TouchableOpacity >
                    <Fontisto name="periscope" size={60} color="black" />
                </TouchableOpacity>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:theme.white,
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    myLoc: {
    },
    input: {
        backgroundColor: theme.white,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 80,
        fontSize: 18,
      },
})