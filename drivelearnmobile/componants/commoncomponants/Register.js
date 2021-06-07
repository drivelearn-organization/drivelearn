import React from 'react';
import {Formik} from 'formik';
import {RadioButton} from 'react-native-paper';
import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  ImageBackground,
  StyleSheet, View, TouchableOpacity, TextInput,
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
            <TouchableOpacity>
              <Text style={styles.headerText}>Sign In</Text>
            </TouchableOpacity>

          </View>
          <View>
            <ImageBackground source={require('../../asets/logo/Logo_Box.png')} style={styles.headerlogo}></ImageBackground>
          </View>
          <View style={styles.topicView}>
            <Text style={styles.topiccText}>Sign Up</Text>
          </View>

          {/*form*/}

          <Formik initialValues={{fullname:'',username:''}} onSubmit={()=>{

          }}>
            {(props)=>(
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



                  <TextInput
                      placeholder={'Username'}
                      style={styles.inputone}
                      placeholderTextColor={'white'}
                      value={props.values.username}
                      onChangeText={props.handleChange('username')}
                      // onBlur={props.handleChange('username')}
                      // placeholderStyle={{color:'red'}}
                  />
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
    // height: 200,
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
  },
  topicView:{
    width:'100%',
    alignItems:'center'
  },
  topiccText:{
    color: 'white',
    fontSize:35,
    padding: 10
  },
  inputView:{
    alignItems: 'center',
  },
  inputone:{
    color:'white',
    borderBottomWidth:1,
    borderBottomColor:'white',
    width:250
  }
});
export default Register;
