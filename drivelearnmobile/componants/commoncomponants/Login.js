import React from 'react';
import {Button, ImageBackground, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return(
      <ImageBackground style={styles.backgroundImage} source={require('../../asets/background/dillon-shook-mY3_bvR74fI-unsplash.png')}>
        <View style={styles.views}>
          <View style={styles.headerView}>
              <View><TouchableOpacity style={styles.touchable}><Text style={styles.signUp}>SignUp</Text></TouchableOpacity></View>
              <View><TouchableOpacity style={styles.touchable}><Text style={styles.switchText}>Switch To Student</Text></TouchableOpacity></View>
          </View>
          <View style={styles.inputView}>
            <ImageBackground style={styles.logoStyle} source={require('../../asets/logo/Logo_Box.png')}></ImageBackground>
          </View>
          <View style={styles.tpoicView}>
            <View><Text style={styles.firsttext}>Student</Text></View>
            <View><Text style={styles.secondtext}>Login</Text></View>
          </View>

          <Button title={'click to next'} onPress={()=>navigation.navigate('StudentFirst')}></Button>
        </View>
      </ImageBackground>

      );



};
const styles=StyleSheet.create({
  backgroundImage:{
    width:'100%',
    flex:1,
    tintColor:'#000000',
  },
  text:{
  },
  views:{
    width:'100%',
    flex: 1,
    backgroundColor:'#26323899'
  },
  headerView:{
    width:'100%',
    height:60,
    // flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  touchable:{
    padding:8
  },
  signUp:{
    color:'white'
  },
  switchText:{
    color:'#23A34C'
  },
  inputView:{
    width:'100%',
    height: 130,
    alignItems:'center'
  },
  logoStyle:{
    width:150,
    height:130
  },
  tpoicView:{
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  firsttext:{
    fontWeight:'normal',
    fontSize:40,
    color:'#aeaeae',
  },
  secondtext:{
    fontWeight:'bold',
    fontSize:40,
    color:'#ffffff'
  }
})


export default Login;
