import React, {useState} from 'react';
import {Formik} from 'formik';
// import Base from '../../urls/base'
import {RadioButton} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {DatePicker} from 'react-native-woodpicker';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import * as yup from 'yup';

var va;
const isAvail = value => {
  fetch('http://192.168.56.1:8080/student/isAvail', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: value,
    }),
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      va = json;
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

const reviewSchema = yup.object().shape({
  password: yup.string().required().min(6).max(8),
  conPassword: yup
    .string()
    .required()
    .matches()
    .oneOf([yup.ref('password')], 'password is not matching'),
  fullname: yup.string().required(),
  username: yup
    .string()
    .required()
    .test('isAvail', 'username is not available', value => {
      isAvail(value);
      console.log('va is' + va);
      return va;
    }),
  nid: yup.string().required(),
  contact: yup.string().required(),
  address: yup.string().required(),
  day: yup
    .string()
    .required()
    .test('day validate', 'Invalid date', value => {
      return parseInt(value) > 0 && parseInt(value) < 32;
    }),
  month: yup
    .string()
    .required()
    .test('day validate', 'Invalid date', value => {
      return parseInt(value) > 0 && parseInt(value) < 13;
    }),
  year: yup.string().required(),
});

const Register = ({navigation}) => {
  const register = values => {
    var basenow = 'http://localhost:8080/';
    if (position === 'are you not a teacher?') {
      basenow = basenow + 'trainer/';
    } else {
      basenow = basenow + 'student/addstudent';
    }

    fetch('http://192.168.56.1:8080/student/addstudent', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: values.fullname,
        address: values.address,
        nid: values.nid,
        contact: values.contact,
        branch: selectedLanguage,
        username: values.username,
        password: values.password,
        day: values.day,
        month: values.month,
        year: values.year,
      }),
    })
      // .then((response) =>{
      //   console.log(JSON.stringify(response, null, 4))
      //   response.json()
      // } )
      // .then((json) => {
      //   console.log(json);
      // })
      .catch(error => {
        console.error(error);
      });
  };
  const [position, setPosition] = useState('are you a teacher?');
  const [checked, setChecked] = React.useState('first');
  const [selectedLanguage, setSelectedLanguage] = useState();

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
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.headerText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground
              source={require('../../asets/logo/Logo_Box.png')}
              style={styles.headerlogo}
            />
          </View>
          <View style={styles.topicView}>
            <Text style={styles.topiccText}>Sign Up</Text>
          </View>

          {/*form*/}

          <Formik
            initialValues={{
              fullname: '',
              username: '',
              nid: '',
              contact: '',

              address: '',
              conPassword: '',
              password: '',
              day: '',
              month: '',
              year: '',
            }}
            onSubmit={values => {
              register(values);
            }}
            validationSchema={reviewSchema}>
            {props => (
              <View style={styles.inputView}>
                {/*username*/}

                <TextInput
                  placeholder={'Full Name'}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.fullname}
                  onChangeText={props.handleChange('fullname')}
                  // onBlur={props.handleChange('fullname')}
                  // placeholderStyle={{color:'red'}}
                />

                <Text style={styles.warn}>
                  {props.touched.fullname && props.errors.fullname}
                </Text>

                {/*username*/}
                <TextInput
                  placeholder={'Username'}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.username}
                  onChangeText={props.handleChange('username')}
                  // onBlur={props.handleChange('username')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.username && props.errors.username}
                </Text>

                {/*NID*/}
                <TextInput
                  placeholder={'NID'}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.nid}
                  onChangeText={props.handleChange('nid')}
                  // onBlur={props.handleChange('nid')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.nid && props.errors.nid}
                </Text>

                {/*contact number*/}

                <TextInput
                  placeholder={'Contact'}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.contact}
                  // onChangeText={props.handleChange('contact')}
                  onBlur={props.handleChange('contact')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.contact && props.errors.contact}
                </Text>

                {/*DOB*/}

                <View style={styles.bdView}>
                  <Text style={styles.textStyle1}>Date of birth</Text>
                  <TextInput
                    value={props.values.day}
                    onChangeText={props.handleChange('day')}
                    maxLength={2}
                    value={props.values.day}
                    keyboardType={'numeric'}
                    style={styles.days}
                    placeholder={'dd'}
                    placeholderTextColor={'white'}
                  />
                  <TextInput
                    value={props.values.month}
                    onChangeText={props.handleChange('month')}
                    maxLength={2}
                    keyboardType={'numeric'}
                    value={props.values.month}
                    style={styles.months}
                    placeholder={'mm'}
                    placeholderTextColor={'white'}
                  />
                  <TextInput
                    value={props.values.year}
                    onChangeText={props.handleChange('year')}
                    maxLength={4}
                    keyboardType={'numeric'}
                    value={props.values.year}
                    style={styles.years}
                    placeholder={'yyyy'}
                    placeholderTextColor={'white'}
                  />
                </View>

                <Text style={styles.warn}>
                  {(props.touched.day && props.errors.day) ||
                    (props.touched.month && props.errors.month) ||
                    (props.touched.year && props.errors.year)}
                </Text>

                {/*address*/}

                <TextInput
                  placeholder={'Address'}
                  multiline={true}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.address}
                  onChangeText={props.handleChange('address')}
                  // onBlur={props.handleChange('address')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.address && props.errors.address}
                </Text>

                {/*branch*/}

                <View style={styles.pickerView}>
                  <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item
                      label="Select a branch"
                      value="java"
                      enabled={false}
                    />
                    <Picker.Item label="Panadura" value="Panadura" />
                    <Picker.Item label="Mathugama" value="mathugama" />
                    <Picker.Item label="Kaluthara" value="kaluthatara" />
                    <Picker.Item label="Aluthgama" value="Aluthgama" />
                  </Picker>
                </View>

                {/*password*/}

                <TextInput
                  placeholder={'password'}
                  // multiline={true}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.password}
                  secureTextEntry={true}
                  onChangeText={props.handleChange('password')}
                  // onBlur={props.handleChange('password')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.password && props.errors.password}
                </Text>

                {/*confirm password*/}
                <TextInput
                  placeholder={'confirm password'}
                  // multiline={true}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.conPassword}
                  secureTextEntry={true}
                  onChangeText={props.handleChange('conPassword')}
                  // onBlur={props.handleChange('conPassword')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.conPassword && props.errors.conPassword}
                </Text>

                {/*<RadioButton*/}
                {/*  value="first"*/}
                {/*  status={checked === 'first' ? 'checked' : 'unchecked'}*/}
                {/*  onPress={() =>*/}
                {/*    setChecked(prevChecked => {*/}
                {/*      return prevChecked === 'first' ? 'notFirst' : 'first';*/}
                {/*    })*/}
                {/*  }*/}
                {/*/>*/}

                <View>
                  <TouchableOpacity
                    onPress={() =>
                      setPosition(prevPosition => {
                        return prevPosition === 'are you a teacher?'
                          ? 'are you not a teacher?'
                          : 'are you a teacher?';
                      })
                    }>
                    <Text style={styles.textStyle}>{position}</Text>
                  </TouchableOpacity>
                </View>

                {position === 'are you not a teacher?' ? (
                  <>
                    <TextInput
                      placeholder={'Licence number'}
                      // multiline={true}
                      style={styles.inputone}
                      placeholderTextColor={'white'}
                      // value={props.values.password}
                      // secureTextEntry={true}
                      // onChangeText={props.handleChange('password')}
                      // onBlur={props.handleChange('username')}
                      // placeholderStyle={{color:'red'}}
                    />
                    <Text style={styles.warn} />
                    <TextInput
                      placeholder={'Emergency contact'}
                      // multiline={true}
                      style={styles.inputone}
                      placeholderTextColor={'white'}
                      // value={props.values.password}
                      // secureTextEntry={true}
                      // onChangeText={props.handleChange('password')}
                      // onBlur={props.handleChange('username')}
                      // placeholderStyle={{color:'red'}}
                    />
                    <Text style={styles.warn} />
                  </>
                ) : null}
                <View style={styles.touchableView}>
                  <TouchableOpacity
                    style={styles.buttonSubmit}
                    onPress={props.handleSubmit}>
                    <Text>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </ImageBackground>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bacStyleSheetkgroundImage: {
    width: '100%',
    // height: 800,
  },
  headerText: {
    color: 'white',
    padding: 5,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerlogo: {
    width: 60,
    height: 60,
  },
  topicView: {
    width: '100%',
    alignItems: 'center',
  },
  topiccText: {
    color: 'white',
    fontSize: 35,
    padding: 10,
  },
  inputView: {
    alignItems: 'center',
  },
  inputone: {
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 250,
  },
  listStyle: {
    color: 'white',
    backgroundColor: 'black',
  },
  pickerView: {
    // padding:-2,
    margin: 10,
    width: 250,
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
  },
  warn: {
    color: 'red',
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
  textStyle: {
    color: 'white',
  },
  bdView: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  days: {
    // height:32,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  textStyle1: {
    paddingTop: 14,
    color: 'white',
  },
  months: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  years: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
export default Register;
