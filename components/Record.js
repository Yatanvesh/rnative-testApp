import React from 'react';
import {StyleSheet, Text, View, Tou} from 'react-native';

const Record  = ({name, dob,editingEnable}) =>{


    return (
     <View style={styles.container}>
         <Text>
             {name}
         </Text>
         <Text>
             {dob}
         </Text>
     </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'black',
        borderRadius:5,
        borderWidth: 2,
        height:100,
        width:300,
        padding:5,
        marginTop:10,
        margin:5,

    },
});

export default Record;