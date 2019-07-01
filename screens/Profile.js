import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text, Dimensions,
    AsyncStorage
} from 'react-native';
import {Icon} from 'react-native-elements'
import * as ImagePicker from 'expo-image-picker'

let { width} = Dimensions.get('window');

import DisplayPicture from '../components/DisplayPicture';

export default class Profile extends React.Component {

    static  navigationOptions = {
        title: 'Profile'
    };

    state = {
        user:{
            name: 'John Doe',
            phone: '1234567890',
            email: 'test@test.com',
            imageUri: null,
        },
        editing: false
    };

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
        });

        if (!result.cancelled) {
            this.setState({  user:{...this.state.user, imageUri: result.uri}  });
        }
    };

    async componentWillMount() {
        console.log('compo');

            const value = await AsyncStorage.getItem('USER');
            if (value !== null) {
                console.log(value);
                let user = JSON.parse(value);
                this.setState({user});
                console.log(this.state.user);
            } else {
                console.log('no users, initialising');
                let user = {
                    name: 'John Doe',
                    phone: '1234567890',
                    email: 'test@test.com',
                    imageUri: null,
                };
                AsyncStorage.setItem('USER', JSON.stringify(user));
            }
    }

    onPressEdit = ()=>{

        let {editing} = this.state;
        this.setState({editing: !this.state.editing});


        if(editing){
            let {user} = this.state;
            AsyncStorage.setItem('USER', JSON.stringify(user));

        }
    };


    render() {
        const {editing} = this.state;
        let {imageUri, name,email,phone} = this.state.user;
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                <View style={styles.imageContainer}>
                    {
                        editing?(
                            <TouchableOpacity onPress={this.pickImage}>
                                <DisplayPicture uri={imageUri} editing={editing}/>
                            </TouchableOpacity>
                        ):(
                            <DisplayPicture uri={imageUri} editing={editing}/>

                        )
                    }
                    {
                        editing ? (
                            <TextInput  style={styles.nameTextInput}
                                        underlineColorAndroid="transparent"
                                        onChangeText={(name)=>this.setState({user:{...this.state.user,name} })}
                                        value={name}
                                        placeholder={'Enter Your Name'}/>
                        ) : (
                            <Text style={styles.name}>
                                {name}
                            </Text>
                        )
                    }

                </View>

                <View style={{flex: 2}}>
                    <View style={styles.editFieldContainer}>


                        <View style={styles.editField}>
                            <Icon size={30} color='steelblue' name='phone'/>
                            {
                                editing ? (
                                    <TextInput  style={styles.detailTextInput}
                                                underlineColorAndroid="transparent"
                                                onChangeText={(phone)=>this.setState({  user:{...this.state.user,phone}})}
                                                value={phone}
                                                placeholder={'Enter Phone Number'}/>
                                ) : (
                                    <Text style={styles.detail}>
                                        {phone}
                                    </Text>
                                )
                            }
                        </View>

                        <View style={styles.editField}>
                            <Icon size={30} color='steelblue' name='mail'/>
                            {
                                editing?(
                                    <TextInput  style={styles.detailTextInput}
                                                underlineColorAndroid="transparent"
                                                onChangeText={(email)=>this.setState({ user:{...this.state.user,email}})}
                                                value={email}
                                                placeholder={'Enter Email'}/>
                                ):(
                                    <Text style={styles.detail}>
                                        {email}
                                    </Text>
                                )
                            }
                        </View>
                    </View>
                </View>
                <View style={{flex: 1.1}}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressEdit}>
                        <Text style={styles.buttonTitle}>{editing ? 'Save' : 'Edit'}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

}


const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#384259',
            borderRadius: 15,
            width: '95%',
            margin: 10
        },
        name: {
            fontSize: 35,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'sans-serif-medium',
            fontStyle: 'italic',
            margin: 10

        },
        detail: {
            fontSize: 22,
            color: 'steelblue',
            fontWeight: 'bold',
            fontFamily: 'sans-serif-medium',
            marginLeft: 10
        },
        buttonContainer: {
            borderRadius: 20,
            borderWidth: 1,
            marginBottom: 10,
            marginTop: 15,
            backgroundColor: '#ff165d',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 100
        },
        buttonTitle: {
            height: 35,
            padding: 5,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
        },
        editFieldContainer: {
            width: width * 0.9,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
            margin: 5,
        },
        editField: {
            alignItems: 'center',
            width: width * 0.8,
            margin: 10,
            padding: 5,
            flexDirection: 'row'
        },
        nameTextInput:{
            fontSize: 35,
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'sans-serif-medium',
            fontStyle: 'italic',
            margin: 10,
            backgroundColor:'rgba(255,255,255,0.2)',
            borderRadius:10
        },
        detailTextInput: {
            fontSize: 22,
            color: 'steelblue',
            fontWeight: 'bold',
            fontFamily: 'sans-serif-medium',
            marginLeft: 10,
            backgroundColor:'rgba(0,0,0,0.2)',
            borderRadius:10,
            padding:5
        },

    });
