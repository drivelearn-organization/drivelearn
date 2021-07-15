import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Base} from "../../urls/base";

const SessionCard = (props) => {
    const {sessionDetails,username}=props;
    //sessionDetails.trainerUsername
    const [id,setId]=useState(sessionDetails.sessionId);
    const [date,setDate]=useState(sessionDetails.date);
    const [start,setStart]=useState(sessionDetails.startTime);
    const [end,setEnd]=useState(sessionDetails.endTime);
    const [stCount,setStCount]=useState(sessionDetails.numOfStudent);
    const [avail,setAvail]=useState(0);
    const [booked,setBooked]=useState(2);
    const [trainer,settrainer]=useState(sessionDetails.trainerUsername);

    useEffect(()=>{

        //initial call of vacancies
        let bookTestUrl=Base+'session/getavailableseats';
        fetch(bookTestUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId: id
            })
        }).then((response) => response.json())
            .then((json) => {
                setBooked(json);
            })
            .catch((error) => {
                console.error(error);
            });





        //interval call of vacancies.
        const vacuncies=setInterval(()=>{
            fetch(bookTestUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId: id
                })
            }).then((response) => response.json())
                .then((json) => {
                    setBooked(json);
                })
                .catch((error) => {
                    console.error(error);
                });
        },10000);

        return()=>{
            clearInterval(vacuncies);
        }
    },[]);
    return (
        <View style={styles.SessionOuterView}>
            <View style={styles.lableView}>
                <Text style={styles.cardHeader}>Session</Text>
                <Text style={styles.cardText}>Date</Text>
                <Text style={styles.cardText}>Time Duration</Text>
                <Text style={styles.cardText}>Student count</Text>
                <Text style={styles.cardText}>Available Seats</Text>
                <Text style={styles.cardText}>Trainer</Text>
            </View>


            <View style={styles.contentView}>
                <Text style={styles.cardHeader}>#{id}</Text>
                <Text style={styles.cardText}>{date}</Text>
                <Text style={styles.cardText}>{start} - {end}</Text>
                <Text style={styles.cardText}>{stCount}</Text>
                <Text style={styles.cardText}>{stCount-booked}</Text>
                <Text style={styles.cardText}>{trainer}</Text>

                <View style={styles.buttonView}>
                    <TouchableOpacity style={stCount-booked<=0?styles.proceedButtonRed:styles.proceedButton} disabled={stCount-booked<=0?true:false}><Text>Book session</Text></TouchableOpacity>
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
    proceedButtonRed:{
        backgroundColor: 'red',
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
