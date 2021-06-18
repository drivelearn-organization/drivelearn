import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const NotificationView = (props) => {
    const[state,setState]=useState(1);
    const [header,setHeader]=useState('this is test header from branch Mathugam');
    const [msg,setMsg]=useState('');
    return (
        <View>
            <TouchableOpacity style={styles.mainView}>
                <Text style={styles.headerText}>{header}</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles=StyleSheet.create({
    mainView:{
        width:'100%',
        height:45,
        backgroundColor:'#56d4f767',
        borderRadius:10,
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:18,
        paddingLeft:10,

    }
})
export default NotificationView;
