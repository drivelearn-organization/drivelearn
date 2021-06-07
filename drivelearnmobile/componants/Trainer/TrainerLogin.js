import React from 'react';
import * as yup from 'yup';
import {
  Button,
  ImageBackground,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Formik} from 'formik';

const reviewSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const TrainerLogin = ({navigation}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../asets/background/dillon-shook-mY3_bvR74fI-unsplash.png')}>
          <View style={styles.views}>
            <View style={styles.headerView}>
              <View>
                <TouchableOpacity style={styles.touchable} onPress={()=>navigation.navigate('Register')}>
                  <Text style={styles.signUp}>SignUp</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.touchable}>
                  <Text
                    style={styles.switchText}
                    onPress={() => navigation.navigate('Login')}>
                    Switch To Student
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputView}>
              <ImageBackground
                style={styles.logoStyle}
                source={require('../../asets/logo/Logo_Box.png')}
              />
            </View>
            <View style={styles.tpoicView}>
              <View>
                <Text style={styles.firsttext}>Trainer</Text>
              </View>
              <View>
                <Text style={styles.secondtext}>Login</Text>
              </View>
            </View>

            <Formik
              initialValues={{username: '', password: ''}}
              validationSchema={reviewSchema}
              onSubmit={values => {}}>
              {props => (
                <View style={styles.getInView}>
                  <TextInput
                    placeholder={'Username'}
                    style={styles.inputone}
                    placeholderTextColor={'white'}
                    value={props.values.username}
                    onChangeText={props.handleChange('username')}
                    // placeholderStyle={{color:'red'}}
                  />
                  <Text style={styles.warn}>
                    {props.touched.username && props.errors.username}
                  </Text>
                  <TextInput
                    placeholder={'password'}
                    style={styles.imputTwo}
                    placeholderTextColor={'white'}
                    value={props.values.password}
                    secureTextEntry={true}
                    onChangeText={props.handleChange('password')}
                  />
                  <Text style={styles.warn}>
                    {props.touched.password && props.errors.password}
                  </Text>
                  <View style={styles.fogPassView}>
                    <TouchableOpacity onPress={()=>navigation.navigate('TrainerForget')}>
                      <Text style={styles.fogText}>Forgot password?</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.touchableView}>
                    <TouchableOpacity
                      style={styles.buttonSubmit}
                      onPress={props.handleSubmit}>
                      <Text>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>

            <View style={styles.alreadyView}>
              <TouchableOpacity style={styles.alreadyPressableView} onPress={()=>navigation.navigate('Register')}>
                <Text style={styles.alreadyViewText}>
                  or if you haven't account,
                </Text>
                <Text style={styles.alreadyViewText}>sign un</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,
    // height:'100%',
    tintColor: '#000000',
  },
  text: {},
  views: {
    width: '100%',
    flex: 1,
    backgroundColor: '#26323899',
  },
  headerView: {
    width: '100%',
    height: 60,
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  touchable: {
    padding: 8,
  },
  signUp: {
    color: 'white',
  },
  switchText: {
    color: '#23A34C',
  },
  inputView: {
    width: '100%',
    height: 130,
    alignItems: 'center',
  },
  logoStyle: {
    width: 150,
    height: 130,
  },
  tpoicView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firsttext: {
    fontWeight: 'normal',
    fontSize: 40,
    color: '#aeaeae',
  },
  secondtext: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#ffffff',
  },
  inputone: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 200,
    paddingBottom: 4,
  },
  imputTwo: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 200,
    paddingTop: 20,
    paddingBottom: 4,
  },
  getInView: {
    width: '100%',
    alignItems: 'center',
    height: 270,
    paddingTop: 30,
  },
  touchableView: {
    height: 90,
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSubmit: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#23A34C',
    borderRadius: 10,
  },
  fogPassView: {
    width: 200,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fogText: {color: 'white'},
  alreadyView: {
    alignItems: 'center',
    height: 207,
  },
  alreadyViewText: {
    color: 'white',
  },
  alreadyPressableView: {
    alignItems: 'center',
  },
  filler2: {
    width: '100',
    height: 100,
  },
  warn: {
    color: 'red',
  },
});

export default TrainerLogin;
