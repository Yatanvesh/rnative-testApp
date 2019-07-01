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

const LoginAppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
        Profile:{
            screen:Profile
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
            screen: LoginAppNavigator,
        },
    },
    {
        initialRouteName: 'App2',
        tabBarPosition: 'bottom',
        tabBarOptions: {style: {
                backgroundColor: 'white',
            },
            showLabel: true,
            activeTintColor: 'steelblue',
            inactiveTintColor: 'grey',
        },
    },
);

export default createAppContainer(TabNavigator);