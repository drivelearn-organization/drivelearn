import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../componants/commoncomponants/Login';
import TrainerLogin from '../componants/Trainer/TrainerLogin';
import ForgotPassword from '../componants/commoncomponants/ForgotPassword';
import TrainerForgetPassword from '../componants/Trainer/TrainerForgetPassword';

const Stack = createStackNavigator();

function Mainstack() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="StudentFirst" component={TrainerLogin} options={{headerShown:false}}/>
        <Stack.Screen name="StudentForget" component={ForgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name="TrainerForget" component={TrainerForgetPassword} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Mainstack;
