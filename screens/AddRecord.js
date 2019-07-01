import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Text,
    View,
    TextInput,
    Button,
    DatePickerAndroid,
    ToastAndroid,
    Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');

export default class Record extends React.Component {
    static  navigationOptions = {
        title: 'Add Record',
        headerStyle: {
            backgroundColor: '#0077e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        name: '',
        dob: null
    };

    async pickDate() {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date(),
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                let dob = new Date(year, month, day).toDateString();
                this.setState({dob});
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker, error', message);
        }
    }

    cancelRecord() {
        this.props.navigation.goBack();
    }

    saveRecord() {

        if (this.validateSubmit() === false) {
            ToastAndroid.show('Please fill the details', ToastAndroid.SHORT);
            return;
        }

        let {name, dob} = this.state;
        let record = {name: name, dob: dob, key: Math.random().toString()};

        const saveRecordCallBack = this.props.navigation.getParam('saveRecordCallback', () => console.log('error!'));
        saveRecordCallBack(record);
        this.props.navigation.goBack();
    }

    validateSubmit() {
        let {name, dob} = this.state;
        let valid = true;

        if (name === '')
            valid = false;
        if (dob === null)
            valid = false;
        //scope to add more validators

        return valid;
    }


    render() {
        return (
            <ImageBackground source={require('../assets/blue.jpg')} style={styles.container}>

                <View style={styles.inputBox}>
                    <View style={styles.attributeViews}>
                        <Text style={styles.inputTitle}>
                            Name:
                        </Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                underlineColorAndroid="transparent"
                                onChangeText={(name) => this.setState({name})}
                                value={this.state.name}
                                placeholder={'Enter Your Name'}
                            />
                        </View>
                    </View>

                    <View style={styles.attributeViews}>
                        <Text style={styles.inputTitle}>
                            Date Of Birth:
                        </Text>

                        <Button
                            title={this.state.dob ? this.state.dob : 'Pick Date'}
                            onPress={() => this.pickDate()}
                            color={'#28c3d4'}
                        />
                    </View>

                    <View style={styles.buttonGroup}>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Submit"
                                onPress={() => this.saveRecord()}

                            />

                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Cancel"
                                onPress={() => this.cancelRecord()}
                                color={'red'}
                            />

                        </View>
                    </View>

                </View>


            </ImageBackground>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        margin: 10,
    },
    inputTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white'
    },
    attributeViews: {
        marginBottom: 20,
        padding: 5
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        borderColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 5,
    },
    textInput: {
        height: 35,
        padding: 5,
        fontSize: 18,
        width: width * 0.7,
        color:'white'
    },
    buttonContainer: {
        margin: 10,
        padding: 5
    }
});

