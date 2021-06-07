import React from 'react';
import {RadioButton} from 'react-native-paper';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
  StyleSheet, View,
} from 'react-native';

const Register = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <ImageBackground
          source={require('../../asets/background/registerwallpaper.png')}
          style={styles.bacStyleSheetkgroundImage}>
          {/*<RadioButton*/}
          {/*  value="first"*/}
          {/*  status={checked === 'first' ? 'checked' : 'unchecked'}*/}
          {/*  onPress={() => setChecked('first')}*/}
          {/*/>*/}
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Sign In</Text>
          </View>
          <View>
            <ImageBackground source={require('../../asets/logo/Logo_Box.png')} style={styles.headerlogo}></ImageBackground>
          </View>
        </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bacStyleSheetkgroundImage: {
    width: '100%',
    height: 200,
  },
  headerText:{
    color:'white',
    padding:5,
  },
  headerView:{
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  headerlogo:{
    width:60,
    height: 60
  }
});
export default Register;
