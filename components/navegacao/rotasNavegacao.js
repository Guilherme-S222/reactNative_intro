import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Tab from './tabNavigation';
import Velha from '../velha/index';

const Drawer = createDrawerNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name = "Tab" component={Tab} />
                <Drawer.Screen name = "Velha" component={Velha} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}