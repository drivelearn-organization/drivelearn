import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

const SessionCard = (props) => {

    const [id,setId]=useState(0);
    const [date,setDate]=useState('0000-00-00');
    const [duration,setDuration]=useState('00.00-00.00');
    const [stCount,setStCount]=useState(0);
    const [avail,setAvail]=useState(0);
    const [indTime,setIndTime]=useState(0);
    return (
        <View style={styles.SessionOuterView}>
            <View style={styles.lableView}>
                <Text style={styles.cardHeader}>Session</Text>
                <Text style={styles.cardText}>Date</Text>
                <Text style={styles.cardText}>Time Duration</Text>
                <Text style={styles.cardText}>Student count</Text>
                <Text style={styles.cardText}>Available Seats</Text>
                <Text style={styles.cardText}>Time for one/min</Text>
            </View>


            <View style={styles.contentView}>
                <Text style={styles.cardHeader}>#{id}</Text>
                <Text style={styles.cardText}>{date}</Text>
                <Text style={styles.cardText}>{duration}</Text>
                <Text style={styles.cardText}>{stCount}</Text>
                <Text style={styles.cardText}>{avail}</Text>
                <Text style={styles.cardText}>{indTime}</Text>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.proceedButton}><Text>Book session</Text></TouchableOpacity>
                </View>
            </View>


        </View>
    );
};
const styles=StyleSheet.create({
    SessionOuterView:{
        width:'95%',
        marginRight:'2.5%',
        marginLeft:'2.5%',
        height:250,
        backgroundColor:'#ffffff20',
        marginTop:15,
        borderRadius:10,
        padding:20,
        flexDirection:'row',
    },
    lableView:{
        flex:1,

    },
    contentView:{
        flex: 1,

    },
    cardHeader:{
        color:'white',
        fontSize:25,
        paddingBottom:20,
    },
    cardText:{
        color:'white',
        paddingTop:2
    },
    proceedButton:{
        backgroundColor: '#32DE3B',
        height: 35,
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center',
        width: 100,
        borderRadius: 7

    },
    buttonView:{
        alignItems: 'center',
    }

});
export default SessionCard;
