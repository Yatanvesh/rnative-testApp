import React from 'react';
import {StyleSheet, TouchableOpacity,FlatList, View, StatusBar, Button} from 'react-native';

import Record from '../components/Record';




export default class Records extends React.Component {
    static  navigationOptions={
        title:'Records'
    };


    state = {
        people: [
            {name:'One Man', dob:new Date().toDateString(), key:Math.random().toString()},
            {name:'Two Man', dob:new Date().toDateString(), key:Math.random().toString()},
            {name:'Three Man', dob:new Date().toDateString(), key:Math.random().toString()},


        ]
    };

    saveRecordToState = (record) =>{
        console.log(record);
        const people = [...this.state.people, record];
        this.setState({people});
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle='dark-content'
                />

                    <View style={styles.list}>
                            <FlatList
                                data={this.state.people}
                                renderItem={({item}) => <Record name={item.name} dob={item.dob}>{item.key}</Record>}
                            />
                    </View>
                    <View style={styles.container}>
                            <Button   onPress={()=>{this.props.navigation.navigate('AddRecord', {
                                saveRecordCallback: this.saveRecordToState
                            }) }}
                                      title="Add"   />
                    </View>
            </View>
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
    list:{
        marginTop:20,
        flex:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
     button:{
        flex:1,alignItems: 'center',
         justifyContent: 'center',
     }
});
