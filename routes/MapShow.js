import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, ActivityIndicator} from 'react-native';

import { Fontisto } from '@expo/vector-icons';
import { theme } from '../colors';

export default function MapShow() {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:"magenta",
    },
})