import React, {useState} from 'react';
import {
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
import * as yup from 'yup';
import {Base} from '../../urls/base';
const reviewSchema = yup.object().shape({
  newpassword: yup.string().required().min(6),
  otp: yup.string().required(),
  confpassword: yup
    .string()
    .required()
    .matches()
    .oneOf([yup.ref('newpassword')], 'password is not matching'),
});
const reviewSchema1 = yup.object().shape({
  username: yup.string().required(),
});
const TrainerForgetPassword = ({navigation}) => {

  const [otp,setOtp]=useState(0);

  const [errUsername, setErrUsername]=useState("");
  const [errEmail, setErrEmail]=useState("");


  const[email,setEmail]=useState("");
  const[username,setUsername]=useState("");


  const setOtpFunction=()=>{
    if(username===""){
      setErrUsername("username field is empty");
      return;
    }
    if(email===""){
      setErrEmail("email field is empty");
      return;
    }
    fetch(Base+"employee/gettrainer", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username
        })
    })
        .then((response) => response.json())
        .then((json) => {
            if(!json){
              setErrUsername("wrong username");
              return;
            }
            console.log(json);
        })
        .catch((error) => console.error(error));
        setErrUsername("");
        setErrEmail("");
        var val = Math.floor(1000 + Math.random() * 9000);
        setOtp(val);
        console.log(val);


  }

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
              {/*<View>*/}
              {/*  <TouchableOpacity style={styles.touchable}>*/}
              {/*    <Text*/}
              {/*      style={styles.switchText}*/}
              {/*      onPress={() => navigation.navigate('StudentFirst')}>*/}
              {/*      Switch To Trainer*/}
              {/*    </Text>*/}
              {/*  </TouchableOpacity>*/}
              {/*</View>*/}
            </View>
            <View style={styles.inputView}>
              <ImageBackground
                style={styles.logoStyle}
                source={require('../../asets/logo/Logo_Box.png')}
              />
            </View>
            <View style={styles.tpoicView}>
              <View>
                <Text style={styles.firsttext}>Forgot</Text>
              </View>
              <View>
                <Text style={styles.secondtext}>password</Text>
              </View>
            </View>

                <View style={styles.firstInputView}>
                  <TextInput
                    placeholder={'Username'}
                    style={styles.inputone}
                    placeholderTextColor={'white'}
                    value={username}
                    onChangeText={(text)=>{
                      setUsername(text);
                    }}
                    // onBlur={props.handleChange('username')}
                    // placeholderStyle={{color:'red'}}
                  />



                  <Text style={styles.warn}>
                    {errUsername!==""?errUsername:null}
                  </Text>

                  <TextInput
                      placeholder={'Email'}
                      style={styles.inputone}
                      placeholderTextColor={'white'}
                      value={email}
                      onChangeText={(text)=>{
                        setEmail(text);
                      }}
                      // onBlur={props.handleChange('username')}
                      // placeholderStyle={{color:'red'}}
                  />



                  <Text style={styles.warn}>
                    {errEmail!==""?errEmail:null}
                  </Text>

                  <View style={styles.touchableView}>
                    <TouchableOpacity
                      style={styles.buttonSubmit}
                      onPress={()=>{
                        setOtpFunction();
                      }}
                    >
                      <Text>Send OTP</Text>
                    </TouchableOpacity>
                  </View>
                </View>


            <Formik
              initialValues={{
                newpassword: '',
                otp: '',
                confpassword: '',
              }}
              validationSchema={reviewSchema}
              onSubmit={values => {
                // eslint-disable-next-line no-undef
                // actions.resetForm();
                navigation.navigate('Login');
              }}>
              {props => (
                <View style={styles.getInView}>
                  <TextInput
                    placeholder={'OTP send to mail'}
                    style={styles.inputone}
                    placeholderTextColor={'white'}
                    value={props.values.otp}
                    onChangeText={props.handleChange('otp')}
                    // onBlur={props.handleChange('otp')}
                    // placeholderStyle={{color:'red'}}
                  />
                  <Text style={styles.warn}>
                    {props.touched.otp && props.errors.otp}
                  </Text>

                  <TextInput
                    placeholder={'new password'}
                    style={styles.inputone}
                    placeholderTextColor={'white'}
                    value={props.values.newpassword}
                    secureTextEntry={true}
                    onChangeText={props.handleChange('newpassword')}
                    // onBlur={props.handleChange('username')}
                    // placeholderStyle={{color:'red'}}
                  />
                  <Text style={styles.warn}>
                    {props.touched.newpassword && props.errors.newpassword}
                  </Text>

                  <TextInput
                    placeholder={'confirm password'}
                    style={styles.imputTwo}
                    placeholderTextColor={'white'}
                    secureTextEntry={true}
                    value={props.values.confpassword}
                    onChangeText={props.handleChange('confpassword')}
                    // onBlur={props.handleChange('password')}
                  />
                  <Text style={styles.warn}>
                    {props.touched.confpassword && props.errors.confpassword}
                  </Text>
                  <View style={styles.fogPassView}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('StudentFirst')}>
                      <Text style={styles.fogText}>Go to login?</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.touchableView}>
                    <TouchableOpacity
                      style={styles.buttonSubmit}
                      onPress={props.handleSubmit}>
                      <Text>Change</Text>
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
                <Text style={styles.alreadyViewText}>sign Up</Text>
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
    paddingTop: 10,
    paddingBottom: 2,
  },
  getInView: {
    width: '100%',
    alignItems: 'center',
    height: 280,
    paddingTop: 10,
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
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fogText: {color: 'white'},
  alreadyView: {
    alignItems: 'center',
    height: 118,
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
  firstInputView: {
    alignItems: 'center',
  },
  warn: {
    color: 'red',
  },
});
export default TrainerForgetPassword;
