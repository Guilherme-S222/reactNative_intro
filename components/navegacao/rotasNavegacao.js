import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Exemplos from './exemplos';
import Velha from '../velha/index'

const Drawer = createDrawerNavigator();

export default function Rotas(){
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name = "Home" component={Exemplos} />
                <Drawer.Screen name = "Velha" component={Velha} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}