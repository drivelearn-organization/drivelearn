import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback, ImageBackground} from "react-native";

const NotificationView = (props) => {
    const {status,headerd,message}=props;
    const[state,setState]=useState(2);
    const [header,setHeader]=useState('this is test header from branch Mathugam');
    const [msg,setMsg]=useState('this is the message from you from the Mathugama branch. You have entered several courses under us.');

    const [modalAcc,setModalAcc]=useState(false);

    useEffect(()=>{
        setState(status);
        setHeader(headerd);
        setMsg(message);
    },[])
    return (
        <View style={styles.outerView}>
            <TouchableOpacity style={state===1 ? styles.mainViewRead: styles.mainViewUnRead} onPress={()=>setModalAcc(true)}>
                <Text style={styles.headerText}>{header}</Text>
            </TouchableOpacity>
                <Modal visible={modalAcc} style={styles.modalBox} transparent={true}>
                    <TouchableWithoutFeedback style={styles.withoutFeed} onPress={()=>setModalAcc(false)}>
                        <View style={styles.innerView}>
                            <View style={styles.ButtonView}>
                                <TouchableOpacity onPress={()=>setModalAcc(false)}>
                                    <ImageBackground source={require('../../asets/icons/cancel.png')} style={styles.cancelButton}></ImageBackground>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.msgBox}><Text style={styles.msgTextStyle}>{msg}</Text></View>
                        </View>
                    </TouchableWithoutFeedback>

                </Modal>

        </View>


    );
};
const styles=StyleSheet.create({
    mainViewUnRead:{
        width:'100%',
        height:45,
        backgroundColor:'#ffffff45',
        borderRadius:10,
        justifyContent:'center'
    },
    mainViewRead:{
        width:'100%',
        height:45,
        backgroundColor:'#ffffff98',
        borderRadius:10,
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:18,
        paddingLeft:10,
        color:'#ffffff'

    },
    outerView:{
        padding:5
    },
    modalBox:{
        flex:1,

    },
    innerView:{
        flex: 1,
        backgroundColor:'#ffffff70',
        alignItems:'center',
    },
    cancelButton:{
        width:40,
        height:40,
    },
    ButtonView:{
        paddingTop:40
    },
    msgBox:{
        width:250,
        minHeight:170,
        marginTop:100,
        borderRadius:10,
        backgroundColor:'#00ff49',
        justifyContent:'center',
        alignItems: 'center'
    },
    msgTextStyle:{
        paddingLeft: 10,
        paddingRight:10,
        fontSize: 18,
        fontWeight: 'bold',
    }

})
export default NotificationView;
