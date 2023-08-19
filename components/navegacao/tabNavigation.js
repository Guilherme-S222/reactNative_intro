import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import MyStack from './stackNavigation';
import StackAtv from './stackNavigationAtv';

import Atividades from './atividades'

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyStack" component={MyStack} />
      <Tab.Screen name="StackAtv" component={StackAtv} />
    </Tab.Navigator>
  );
}

export default MyTabs;