import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Record = ({name, dob}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    Name:
                </Text>
                <Text style={styles.detail}>{name}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    DOB:
                </Text>
                <Text  style={styles.detail}>{dob}</Text>
            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28c3d4',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        height: 100,
        padding: 15,
        paddingRight:20,
        paddingLeft:20,
        margin: 5,
    },
    textContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    title: {
        fontSize: 22,
        color: '#dff0ea',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
        margin: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2
    },
    detail:{
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        color:'#293462'

    }
});

export default Record;