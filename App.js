import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import TodoScene from './Todo'; 
import WeatherScene from './Weather';

const Stack = createStackNavigator();
export default function App() { 
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="MAIN"> 
        <Stack.Screen name="MAIN" component={TodoScene} options={{ title: 'ToDoScreen', headerShown: false }}/>
        <Stack.Screen name="WEATHER" component={WeatherScene} options={{ title: 'WeatherScene', headerShown: false}}/>
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}

