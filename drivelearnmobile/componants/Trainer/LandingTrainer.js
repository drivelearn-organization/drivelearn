import React from 'react';
import {ImageBackground, View, StyleSheet, TouchableOpacity, Text} from "react-native";

const LandingTrainer = ({navigation}) => {
    return (
        <ImageBackground source={require('../../asets/background/registerwallpaper.png')} style={styles.backImg}>
            <View  style={styles.signView}>
                <TouchableOpacity onPress={()=>navigation.navigate('StudentFirst')}>
                    <Text style={styles.signup}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.empty}>

            </View>
            <View style={styles.imgView}>
                <ImageBackground source={require('../../asets/logo/Logo_Box.png')} style={styles.innerLogo}></ImageBackground>
            </View>
            <View style={styles.empty}>

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textstyle}>Please wait for</Text>
                <Text style={styles.textstyle}>approval!!!</Text>
            </View>
        </ImageBackground>
    );
};
const styles=StyleSheet.create({
    backImg:{
        width:'100%',
        flex:1,
    },
    signup:{
        padding:10,
        color:'white',
    },
    signView:{
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    empty:{
        height:50,
    },
    imgView:{
        alignItems:'center',
    },
    innerLogo:{
        width: 290,
        height: 270
   },
    textContainer:{
        alignItems: 'center',
    },
    textstyle:{
        color: 'white',
        fontSize:40,
        fontWeight:'bold',
    }
});
export default LandingTrainer;
