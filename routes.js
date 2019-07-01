import React from 'react';
import {createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';

import Records from './screens/Records';
import AddRecord from './screens/AddRecord';
import Login from './screens/Login';
import Profile from './screens/Profile';

const RecordsAppNavigator = createStackNavigator(
    {
        Records: {
            screen: Records,
        },
        AddRecord:{
            screen:AddRecord
        }
    },
    {
        initialRouteName: 'Records'
    },
);

const RecordsAppNavigator2 = createStackNavigator(
    {
        Login: {
            screen: Login,
        }
    },
    {
        initialRouteName: 'Login'
    },
);



const TabNavigator = createBottomTabNavigator({
        App1: {
            screen: RecordsAppNavigator,
        },
        App2: {
            screen: RecordsAppNavigator2,
        },
    },
    {
        initialRouteName: 'App2',
        tabBarPosition: 'bottom',
        tabBarOptions: {style: {
                backgroundColor: 'white',
                height:50
            },
            showLabel: true,

            activeTintColor: 'steelblue',
            inactiveTintColor: 'grey',
            renderIndicator: () => null,
        },
    },
);



export default createAppContainer(TabNavigator);