import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatScreen from './Components/ChatScreen/ChatScreen'
import Choose from './Components/ChooseScreen/Choose'
import MainScreen from './Components/MainScreen/MainScreen'

const Stack = createStackNavigator();
class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode='none'>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Choose" component={Choose}/>
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
};
export default App;
