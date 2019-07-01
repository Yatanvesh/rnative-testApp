import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Records from './screens/Records';

import RecordsAppNavigator from './routes';

export default function App() {
    return (
        <RecordsAppNavigator />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
