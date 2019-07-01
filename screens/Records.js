import React from 'react';
import {StyleSheet, Text,FlatList, View, StatusBar, Button} from 'react-native';

import Record from '../components/Record';




export default class Records extends React.Component {
    static  navigationOptions={
        title:'Records'
    };


    state = {
        people: [
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
            {name:'One Man', dob:'42452', key:Math.random().toString()},
        ]
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
                            <Button   onPress={()=>{}}
                                      title="Add"   />
                    </View>

                {/*<View style={styles.list}>*/}
                {/*    <FlatList*/}
                {/*        data={this.state.people}*/}
                {/*        renderItem={({item}) => <Record name={item.name} dob={item.dob}>{item.key}</Record>}*/}
                {/*    />*/}
                {/*</View>*/}
                {/*<View styles={styles.button}>*/}
                {/*    <Button   onPress={()=>{}}*/}
                {/*              title="Add"   />*/}
                {/*</View>*/}

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
        flex:7,
        alignItems: 'center',
        justifyContent: 'center',
    },
     button:{
        flex:1,alignItems: 'center',
         justifyContent: 'center',
     }
});
