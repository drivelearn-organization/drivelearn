import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../componants/studentcomponants/Login';
import TrainerLogin from '../componants/Trainer/TrainerLogin';
import ForgotPassword from '../componants/studentcomponants/ForgotPassword';
import TrainerForgetPassword from '../componants/Trainer/TrainerForgetPassword';
import Register from "../componants/studentcomponants/Register";
import LandingTrainer from "../componants/Trainer/LandingTrainer";
import Frontpage from "../componants/studentcomponants/Frontpage";
import NotificationPage from "../componants/studentcomponants/NotificationPage";
import StudentSessions from "../componants/studentcomponants/StudentSessions";
import StartNewCourceFrontPage from "../componants/studentcomponants/StartNewCourceFrontPage";

const Stack = createStackNavigator();

function Mainstack() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="StudentFirst" component={TrainerLogin} options={{headerShown:false}}/>
        <Stack.Screen name="StudentForget" component={ForgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name="TrainerForget" component={TrainerForgetPassword} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>
        <Stack.Screen name="LandingTrainer" component={LandingTrainer} options={{headerShown:false}}/>
        <Stack.Screen name="FrontPageStudent" component={Frontpage} options={{headerShown:false}}/>
        <Stack.Screen name="NotificationPageStudent" component={NotificationPage} options={{headerShown:false}}/>
        <Stack.Screen name="StudentSessions" component={StudentSessions} options={{headerShown:false}}/>
        <Stack.Screen name="StartNewCourceFrontPage" component={StartNewCourceFrontPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Mainstack;
