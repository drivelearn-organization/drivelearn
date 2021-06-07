import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const Register = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <ImageBackground
          source={require('../../asets/background/registerwallpaper.png')}
          style={styles.bacStyleSheetkgroundImage}
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bacStyleSheetkgroundImage: {
    width: '100%',
    height: 200,
  },
});
export default Register;
