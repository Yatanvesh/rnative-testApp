import React from 'react';
import {StyleSheet, LayoutAnimation, View, Animated, KeyboardAvoidingView, ToastAndroid, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements'

import LoginBox from '../components/LoginBox';

const credentials = {
    userName: 'admin',
    password: 'admin'
};

const State = {
    Launching: 'Launching',
    WillTransitionIn: 'WillTransitionIn',
};

function sleep(duration = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}


export default class Login extends React.Component {

    static  navigationOptions = {
        title: 'Login'
    };

    state = {
        userName: '',
        password: '',
        transitionState: State.Launching,

    };
    toggleOpacity = new Animated.Value(0);


    async componentDidMount() {
        await sleep(500);

        const animation = LayoutAnimation.create(
            2000,
            LayoutAnimation.Types.easeInEaseOut,
            LayoutAnimation.Properties.opacity,
        );
        LayoutAnimation.configureNext(animation);

        setTimeout( ()=>{
            this.setState({transitionState: State.WillTransitionIn});
        },750);



        Animated.timing(this.toggleOpacity, {
            toValue: 1,
            duration: 1500,
            delay: 500,
            useNativeDriver: true
        }).start();


    }

    validateCredentials = () => {
        const {userName, password} = this.state;
        return userName === credentials.userName && password === credentials.password;
    };

    userNameChanged = (name) =>{
        this.setState({userName:name});
    };

    passwordChanged = (password) =>{
        this.setState({password:password})
    };

    submit = () =>{
        if(this.validateCredentials()){
            this.props.navigation.navigate('Profile');
        }

        else ToastAndroid.show('Wrong Username or Password!', ToastAndroid.SHORT);

    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                <View style={styles.logo}>
                    <Icon size={200} color='white' name='security'/>

                </View>
                {
                    this.state.transitionState!==State.Launching && (
                        <Animated.View style={[styles.loginBox, {opacity:this.toggleOpacity}]}>
                            <LoginBox
                                userName={this.state.userName}
                                password={this.state.password}
                                userNameChangedCB={this.userNameChanged}
                                passwordChangedCB={this.passwordChanged}
                                submitCB={this.submit}

                            />
                        </Animated.View>


                    )
                }
            </KeyboardAvoidingView>
        )
    }

}


const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#384259',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logo: {
            flex: 0.8,
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
        },
        loginBox: {
            flex: 1,
            marginBottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
        },

    });
