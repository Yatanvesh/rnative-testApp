import React from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';

const DisplayPicture = ({uri,editing}) =>{

    let editStyle={};
    if(editing){
        editStyle = {
            borderWidth: 3,
            opacity:0.7
        }
    }

    if(uri){
        return (<Image
            style={styles.avatar}
            source={{uri: uri}}
        />
        )
    }
    return (
            //default display picture
       <Image  style={[styles.avatar,editStyle ]}  source={require('../assets/DP.jpeg')} />

    )
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderColor: 'rgb(174,239,240)',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    phone: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default DisplayPicture;