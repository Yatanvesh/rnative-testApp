import React from 'react';
import {StyleSheet, FlatList, View, StatusBar, Button, ImageBackground} from 'react-native';

import Record from '../components/Record';


export default class Records extends React.Component {
    static  navigationOptions = {
        title: 'Records',
        headerStyle: {
            backgroundColor: '#0077e2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };


    state = {
        people: [
            {name: 'John Wick', dob: new Date().toDateString(), key: Math.random().toString()},
            {name: 'Chad Bradley', dob: new Date().toDateString(), key: Math.random().toString()},
            {name: 'Continentia', dob: new Date().toDateString(), key: Math.random().toString()},
            {name: 'Man boy', dob: new Date().toDateString(), key: Math.random().toString()},
        ]
    };

    saveRecordToState = (record) => {
        console.log(record);
        const people = [...this.state.people, record];
        this.setState({people});
    };

    render() {
        return (
            <ImageBackground source={require('../assets/blue.jpg')} style={styles.container}>
            <StatusBar
                    barStyle='dark-content'
                />

                <View style={styles.list}>
                    <FlatList
                        data={this.state.people}
                        renderItem={({item}) => <Record name={item.name} dob={item.dob}>{item.key}</Record>}
                    />
                </View>
                <View style={styles.buttonView}>
                    <Button onPress={() => {
                        this.props.navigation.navigate('AddRecord', {
                            saveRecordCallback: this.saveRecordToState
                        })
                    }}
                            title="Add Record"
                            color={'#59d4e8'}

                    />
                </View>
            </ImageBackground>
        );
    }

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        marginTop: 20,
        flex: 10,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        width: "30%",
        margin: 10,
        marginBottom: 15
    }
});
