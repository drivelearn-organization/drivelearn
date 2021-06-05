import React from 'react';
import {Button, Text, View} from 'react-native';

const StudentFirst = ({navigation}) => {
  return(
      <View>
          <Text>This is Student First</Text>
          <Button title={'tap to next'} onPress={() => navigation.navigate('Login')} ></Button>
      </View>
      );

};

export default StudentFirst;
