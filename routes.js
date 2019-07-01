import React from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';

import Records from './screens/Records';

const RecordsAppNavigator = createStackNavigator(
    {
        Records: {
            screen: Records,
        },
    },
    {
        initialRouteName: 'Records'
    },
);

export default createAppContainer(RecordsAppNavigator);