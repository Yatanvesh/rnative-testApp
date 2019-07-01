import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, DatePickerAndroid,ToastAndroid} from 'react-native';

export default class Record extends React.Component {
    static  navigationOptions = {
        title: 'Add Record'
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

    cancelRecord(){
        this.props.navigation.goBack();
    }

    saveRecord(){

        if(this.validateSubmit()=== false){
            ToastAndroid.show('Please fill the details', ToastAndroid.SHORT);
            return ;
        }

        let {name,dob} = this.state;
        let record = {name:name,dob:dob, key:Math.random().toString()};

        const saveRecordCallBack = this.props.navigation.getParam('saveRecordCallback', ()=>console.log('error!'));
        saveRecordCallBack(record);
        this.props.navigation.goBack();
    }

    validateSubmit(){
        let {name,dob} = this.state;
        let valid= true;

        if (name==='')
            valid=false;
        if(dob===null)
            valid=false;
        //scope to add more validators

        return valid;
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputFields}>

                    {/*<View style={styles.attributeViews}>*/}
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
                    {/*</View>*/}
                    <View style={styles.attributeViews}>
                        <Text style={styles.inputTitle}>
                            Date Of Birth:
                        </Text>

                        <Button title={this.state.dob ? this.state.dob : 'Pick Date'} onPress={() => this.pickDate()}/>
                    </View>

                </View>


                <View style={styles.buttonGroup}>
                    <View style={styles.buttonContainer}>
                        <Button title="Submit" onPress={()=>this.saveRecord()}/>

                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={()=>this.cancelRecord()}/>

                    </View>
                </View>
            </View>
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
    inputFields: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        width: '80%',
        padding: 10,
        marginTop: 15,
        margin: 10,
        flex: 4
    },
    inputTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    attributeViews: {
        margin: 20,
        padding: 10
    },
    buttonGroup: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 16,
        width: 200
    },
    buttonContainer:{
        margin:10,
        padding:5
    }
});

