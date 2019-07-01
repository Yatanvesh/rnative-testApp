import React from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import Records from './screens/Records';
import AddRecord from './screens/AddRecord';


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

export default createAppContainer(RecordsAppNavigator);