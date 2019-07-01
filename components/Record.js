import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Record = ({name, dob}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Name: <Text style={styles.detail}>{name}</Text>
            </Text>
            <Text style={styles.title}>
                DOB: <Text  style={styles.detail}>{dob}</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        height: 100,
        padding: 10,
        paddingRight:20,
        paddingLeft:20,
        marginTop: 10,
        margin: 10,
    },
    title: {
        fontSize: 17,
        marginBottom: 5,
    },
    detail:{
        fontSize: 20,
         fontWeight: 'bold',
        marginBottom: 5,
        color:'#293462'

    }
});

export default Record;