import React, {useState} from 'react';
import {Formik} from 'formik';
import {RadioButton} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
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
const Register = ({navigation}) => {

const [position,setPosition]=useState('are you a teacher?');
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
            <TouchableOpacity>
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
              DOB: '',
              address: '',
              conPassword: '',
              password: '',
            }}
            onSubmit={() => {}}>
            {props => (
              <View style={styles.inputView}>
                {/*username*/}

                <TextInput
                  placeholder={'Full Name'}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.fullname}
                  onChangeText={props.handleChange('fullname')}
                  // onBlur={props.handleChange('username')}
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
                  // onBlur={props.handleChange('username')}
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
                  onChangeText={props.handleChange('contact')}
                  // onBlur={props.handleChange('username')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.contact && props.errors.contact}
                </Text>

                {/*DOB*/}
                <TextInput
                  placeholder={'Date of Birth'}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.DOB}
                  onChangeText={props.handleChange('DOB')}
                  // onBlur={props.handleChange('username')}
                  // placeholderStyle={{color:'red'}}
                />
                <Text style={styles.warn}>
                  {props.touched.DOB && props.errors.DOB}
                </Text>

                {/*address*/}

                <TextInput
                  placeholder={'Address'}
                  multiline={true}
                  style={styles.inputone}
                  placeholderTextColor={'white'}
                  value={props.values.address}
                  onChangeText={props.handleChange('address')}
                  // onBlur={props.handleChange('username')}
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
                    <Picker.Item label="Baduraliya" value="Baduraliya" />
                    <Picker.Item label="Mathugama" value="Mathugama" />
                    <Picker.Item label="Kaluthara" value="Kaluthara" />
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
                  // onBlur={props.handleChange('username')}
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
                  // onBlur={props.handleChange('username')}
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
                  <TouchableOpacity onPress={()=>setPosition((prevPosition)=>{
                    return prevPosition==='are you a teacher?' ? 'are you not a teacher?': 'are you a teacher?';
                  })}><Text style={styles.textStyle}>{position}</Text></TouchableOpacity>
                </View>
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
  textStyle:{
    color:'white',
  }
});
export default Register;
