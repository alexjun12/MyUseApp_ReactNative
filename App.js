import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Fontisto } from '@expo/vector-icons'; 

import TodoScene from './Todo'; 
import WeatherScene from './Weather';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

//constStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() { 
  return (
    <NavigationContainer> 
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'TODO') {
              iconName = focused ? 'nav-icon-list-a' : 'nav-icon-list-a';
            } else if (route.name === 'WEATHER') {
              iconName = focused ? 'day-cloudy' : 'day-cloudy';
            }
            return <Fontisto name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })} initialRouteName="ToDo"> 
        <Tab.Screen name="TODO" component={TodoScene} options={{ title: 'ToDoList', headerShown: false }}/>
        <Tab.Screen name="WEATHER" component={WeatherScene} options={{ title: 'WeatherCheck', headerShown: false}}/>
      </Tab.Navigator> 
    </NavigationContainer> 
  ); 
}

