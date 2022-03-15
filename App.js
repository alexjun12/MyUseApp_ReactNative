import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Fontisto } from '@expo/vector-icons'; 

import TodoScene from './routes/Todo'; 
import WeatherScene from './routes/Weather';
import MapScene from './routes/MapShow';

const Tab = createBottomTabNavigator();

export default function App() { 
  return (
    <NavigationContainer> 
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'TODO':
                iconName = focused ? 'nav-icon-list-a' : 'nav-icon-list-a';
                break;
              case 'WEATHER':
                iconName = focused ? 'day-cloudy' : 'day-cloudy';
                break;
              case 'MAP':
                iconName = focused ? 'map' : 'map';
            }
            return <Fontisto name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })} initialRouteName="ToDo"> 
        <Tab.Screen name="TODO" component={TodoScene} options={{ title: 'ToDoList', headerShown: false }}/>
        <Tab.Screen name="WEATHER" component={WeatherScene} options={{ title: 'WeatherCheck', headerShown: false}}/>
        <Tab.Screen name="MAP" component={MapScene} options={{ title: 'Map', headerShown: false}}/>
      </Tab.Navigator> 
    </NavigationContainer> 
  ); 
}

