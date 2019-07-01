import React from 'react';
import {StyleSheet, Dimensions, TextInput, View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'

let {height, width} = Dimensions.get('window');

const LoginBox = ({userName, password, userNameChangedCB,passwordChangedCB, submitCB}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <View style={styles.icon}>
                    <Icon
                        name='person'/>
                </View>

                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    onChangeText={userNameChangedCB}
                    value={userName}
                    autoCapitalize='none'
                    placeholder={'Username'}
                />
            </View>
            <View style={styles.textInputContainer}>
                <View style={styles.icon}>
                    <Icon
                        name='lock'/>
                </View>
                <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    onChangeText={passwordChangedCB}
                    autoCapitalize='none'
                    secureTextEntry
                    placeholder={'Password'}
                    value={password}
                />
            </View>

            <TouchableOpacity style={styles.loginButtonContainer} onPress={submitCB}>
                <Text style={styles.loginButtonTitle}>Login</Text>
            </TouchableOpacity>



        </View>
    )
};
//
// const styles = StyleSheet.create({
//     container: {
//         height: 190,
//         backgroundColor:'rgba(255,255,255,0.1)',
//         padding:20,
//         borderRadius:30
//     },
//     buttonGroup: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     textInputContainer: {
//         borderColor: '#D6D7DA',
//         borderRadius: 20,
//         borderWidth: 1,
//         marginBottom: 5,
//         marginTop: 5,
//         backgroundColor: 'rgba(174,239,240,0.3)',
//         flex: 1,
//         flexDirection: 'row'
//     },
//     loginButtonContainer:{
//         borderRadius: 20,
//         borderWidth: 1,
//         marginBottom: 3,
//         marginTop: 15,
//         backgroundColor: '#ff165d',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     loginButtonTitle:{
//         height: 35,
//         padding: 5,
//         fontSize: 16,
//         fontWeight: 'bold',
//
//     },
//     textInput: {
//         height: 35,
//         padding: 5,
//         fontSize: 16,
//         width: width * 0.7
//     },
//     icon: {
//         height: 35,
//         padding: 5,
//         fontSize: 16
//     },
//     buttonView: {
//         flex: 1,
//         margin: 10,
//         marginBottom: 30,
//         backgroundColor: '#ff165d',
//         borderRadius: 20
//     }
// });

export default LoginBox;