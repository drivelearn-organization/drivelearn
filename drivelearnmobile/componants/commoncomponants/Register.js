import React from 'react';
import {RadioButton} from 'react-native-paper';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const Register = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <ImageBackground
          source={require('../../asets/background/registerwallpaper.png')}
          style={styles.bacStyleSheetkgroundImage}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
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
});
export default Register;
