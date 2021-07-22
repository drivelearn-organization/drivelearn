import React, {useEffect, useState} from 'react';
import {Base} from "../../urls/base";
import StarRating from 'react-native-star-rating-widget';

import {
    ImageBackground, Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import TrainerSessionCard from "../common/TrainerSessionCard";
import Geolocation from '@react-native-community/geolocation';

const TrainerSelectedSessionInView = ({route,navigation}) => {
    const { username,sessionid } = route.params;



    // this is the count for notification count
    const [notificCount,setNotificCount]=useState('0');

    // getting student
    let url1=Base+'employee/getemployee';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [students, setStudenst] = useState([]);
    const [isStart,setIsStart]=useState(3);
    const [visibleFact,setVisibleFact]=useState(false);
    const [modelId,setModelId]=useState(0);
    const [start, setStarting] = useState(0);
    const [end, setEnd] = useState(0);
    const [reverse, setReverse] = useState(0);
    const [searBalance, setSearBalance] = useState(0);
    const [cluchBalance, setCluchBalance] = useState(0);
    const [gear, setGear] = useState(0);
    const [maxRating,setMaxRating] = useState([1,2,3,4,5]);
    const [visibleFact2,setVisibleFact2]=useState(false);

    useEffect(()=>{


        // this is student loading
        fetch(url1, {
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
                setData(json)
                console.log(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));



        // here the notification number calling at the be begining
        let notificUrl=Base+'notification/unreads';
        fetch(notificUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                receiverUserId:0,
                receiverUsername: username,
                receiverType:2

            })
        })
            .then((response) => response.json())
            .then((json) => {
                //code here
                if(json<10){
                    setNotificCount(json.toString());
                }else if (json>=10){
                    setNotificCount('9+');
                }
                console.log(json);
            })
            .catch((error) => console.error(error))




        //here is the notification updating
        const setNotificUpdate=setInterval(()=>{
            fetch(notificUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    receiverUserId:0,
                    receiverUsername: username,
                    receiverType:2

                })
            })
                .then((response) => response.json())
                .then((json) => {
                    //code here
                    if(json<10){
                        setNotificCount(json.toString());
                    }else if (json>=10){
                        setNotificCount('9+');
                    }
                    console.log(json);
                })
                .catch((error) => console.error(error))

        },10000);

        // this is initial settins of students
        let stUrl=Base+'session/sessionstudents';
        fetch(stUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId: sessionid
            })
        })
            .then((response) => response.json())
            .then((json) => {
                setStudenst(json);
                console.log(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


        // this is interval setting of students
        const getSessionStudents=setInterval(()=>{
            fetch(stUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId: sessionid
                })
            })
                .then((response) => response.json())
                .then((json) => {
                    setStudenst(json);
                    // console.log(json);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        },10000);


// check is started or not
        let checkStarted=Base+'session/checkstarted'
        fetch(checkStarted, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId: sessionid
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if(json){
                    setIsStart(1);
                }
                console.log(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));


        const makeLocation=setInterval(()=>{
            console.log("we are in");
            let lon;
            let lat;
            Geolocation.getCurrentPosition(position => {
                console.log(position);
                console.log(position.coords.longitude);
                console.log(position.coords.latitude);
                lon=position.coords.longitude;
                lat=position.coords.latitude;
            })
            let startSession=Base+'session/location'
            fetch(startSession, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId: sessionid,
                    laditude:lat+"",
                    longititude:lon+""
                })
            });


        },1000);




        return()=>{
            clearInterval(setNotificUpdate);
            clearInterval(getSessionStudents);
            clearInterval(makeLocation);
        }
    },[]);

    const startSession=()=>{
        let lon;
        let lat;
        Geolocation.getCurrentPosition(position => {
            console.log(position);
            console.log(position.coords.longitude);
            console.log(position.coords.latitude);
            lon=position.coords.longitude;
            lat=position.coords.latitude;
        })
        let startSession=Base+'session/start'

        setTimeout(()=>{
            fetch(startSession, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sessionId: sessionid,
                    laditude:lat+"",
                    longititude:lon+""
                })
            });
            setIsStart(1);
        },100)


    }

    const clickEnd=()=>{
        let endSession=Base+'session/end';
        fetch(endSession, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                sessionId: sessionid
            })
        });
    }

    const clickAddFeedback=()=>{
        let feedback=Base+'session/addfeedback';
        fetch(feedback, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start:start,
                end:end,
                reverse:reverse,
                searingBalance:searBalance,
                cluchBalance:cluchBalance,
                gear:gear,
                sessionId: sessionid,
                studentId:modelId
            })
        });
    }



    const [navModal,setNavModal]=useState(false);



    return (
        <TouchableWithoutFeedback >
            <ScrollView>
                <ImageBackground source={require('../../asets/background/StudentView.png')} style={styles.imageBac}>
                    <View style={styles.headerView}>
                        {/*logo*/}
                        <ImageBackground source={require('../../asets/logo/Logo_Box.png')} style={styles.logo}></ImageBackground>

                        {/*nav div*/}
                        <View style={styles.navbar}>

                            {/*home navigation*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TrainerFrontPage',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/home.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*notification navigation*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TrainerNotification',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/notification.png')} style={styles.iconStyle}>
                                    {notificCount==='0'?null:<View style={styles.notificWarnView}><Text style={styles.notificWarn}>{notificCount}</Text></View>}
                                </ImageBackground>
                            </TouchableOpacity>


                            {/*location navigation*/}
                            <TouchableOpacity>
                                <ImageBackground source={require('../../asets/icons/user.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.headTopicView}>
                        <Text style={styles.headStyles}>Students</Text>
                    </View>

                    {students.map(student=><TouchableOpacity onPress={()=>{
                        setModelId(student.stuID);
                        setVisibleFact(true);
                    }} key={student.stuID.toString()}><View style={styles.innerViewStyle}>
                        <Text style={styles.elelmemt}>{student.name}</Text>
                        <Text style={styles.elelmemt}>{student.contact}</Text>
                    </View></TouchableOpacity>)}


                    <View style={styles.buttonViewForControl}>

                        <TouchableOpacity onPress={()=>startSession()} disabled={isStart===1?true:false} style={isStart===1?styles.startButtonInViewYellow:styles.startButtonInView}><Text>Start</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.endtButtonInView} onPress={()=>setVisibleFact2(true)}><Text>End</Text></TouchableOpacity>
                    </View>

                    <Modal visible={visibleFact} transparent={true}>
                        <TouchableWithoutFeedback onPress={()=>{
                            setVisibleFact(false);
                            setStarting(0);
                            setEnd(0);
                            setReverse(0);
                            setSearBalance(0);
                            setCluchBalance(0);
                            setGear(0);
                        }}>
                            <View style={styles.modBackground}>
                                <View style={styles.mainContainer}>
                                    <View style={styles.modelHeader}>
                                        <Text style={styles.modelHeaderText}>Rate The Student</Text>
                                    </View>



                                    {/*start*/}
                                    <View style={styles.mainRatingView}>
                                        <Text style={styles.ratingText}>Start   </Text>
                                        <View style={styles.ratingView}>
                                            {maxRating.map((rating,key)=>{
                                                return(
                                                    <TouchableOpacity key={rating.toString()} activeOpacity={0.7} onPress={()=>setStarting(rating)}>
                                                        <ImageBackground source={rating<=start?require('../../asets/rating/star_filled.png'):require('../../asets/rating/star_corner.png')} style={styles.starPics}></ImageBackground>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>

                                    {/*clutch balance*/}
                                    <View style={styles.mainRatingView}>
                                        <Text style={styles.ratingText}>Clutch  </Text>
                                        <View style={styles.ratingView}>
                                            {maxRating.map((rating,key)=>{
                                                return(
                                                    <TouchableOpacity key={rating.toString()} activeOpacity={0.7} onPress={()=>setCluchBalance(rating)}>
                                                        <ImageBackground source={rating<=cluchBalance?require('../../asets/rating/star_filled.png'):require('../../asets/rating/star_corner.png')} style={styles.starPics}></ImageBackground>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>

                                    {/*sear balance*/}
                                    <View style={styles.mainRatingView}>
                                        <Text style={styles.ratingText}>Stearing</Text>
                                        <View style={styles.ratingView}>
                                            {maxRating.map((rating,key)=>{
                                                return(
                                                    <TouchableOpacity key={rating.toString()} activeOpacity={0.7} onPress={()=>setSearBalance(rating)}>
                                                        <ImageBackground source={rating<=searBalance?require('../../asets/rating/star_filled.png'):require('../../asets/rating/star_corner.png')} style={styles.starPics}></ImageBackground>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>

                                    {/*gear*/}
                                    <View style={styles.mainRatingView}>
                                        <Text style={styles.ratingText}>Gear    </Text>
                                        <View style={styles.ratingView}>
                                            {maxRating.map((rating,key)=>{
                                                return(
                                                    <TouchableOpacity key={rating.toString()} activeOpacity={0.7} onPress={()=>setGear(rating)}>
                                                        <ImageBackground source={rating<=gear?require('../../asets/rating/star_filled.png'):require('../../asets/rating/star_corner.png')} style={styles.starPics}></ImageBackground>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>

                                    {/*end*/}
                                    <View style={styles.mainRatingView}>
                                        <Text style={styles.ratingText}>End     </Text>
                                        <View style={styles.ratingView}>
                                            {maxRating.map((rating,key)=>{
                                                return(
                                                    <TouchableOpacity key={rating.toString()} activeOpacity={0.7} onPress={()=>setEnd(rating)}>
                                                        <ImageBackground source={rating<=end?require('../../asets/rating/star_filled.png'):require('../../asets/rating/star_corner.png')} style={styles.starPics}></ImageBackground>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>

                                    {/*reverse*/}
                                    <View style={styles.mainRatingView}>
                                        <Text style={styles.ratingText}>Reverse </Text>
                                        <View style={styles.ratingView}>
                                            {maxRating.map((rating,key)=>{
                                                return(
                                                    <TouchableOpacity key={rating.toString()} activeOpacity={0.7} onPress={()=>setReverse(rating)}>
                                                        <ImageBackground source={rating<=reverse?require('../../asets/rating/star_filled.png'):require('../../asets/rating/star_corner.png')} style={styles.starPics}></ImageBackground>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>

                                    <View style={styles.filler}></View>


                                    <View style={styles.buttonViewForControl}>

                                        <TouchableOpacity disabled={isStart===1?false:true} onPress={()=>{
                                            clickAddFeedback();
                                            setVisibleFact(false);
                                            setStarting(0);
                                            setEnd(0);
                                            setReverse(0);
                                            setSearBalance(0);
                                            setCluchBalance(0);
                                            setGear(0);
                                        }}   style={isStart===1?styles.startButtonInView:styles.startButtonInViewYellow}><Text>Rate</Text></TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{
                                            setVisibleFact(false);
                                            setStarting(0);
                                            setEnd(0);
                                            setReverse(0);
                                            setSearBalance(0);
                                            setCluchBalance(0);
                                            setGear(0);
                                        }} style={styles.endtButtonInView}><Text>End</Text></TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                        </TouchableWithoutFeedback>

                    </Modal>




                    <Modal visible={visibleFact2} transparent={true}>
                        <TouchableWithoutFeedback onPress={()=>{setVisibleFact2(false);}}>
                            <View style={styles.modBackground}>
                                <View style={styles.mainContainerEx}>
                                    <View style={styles.modelHeader}>
                                        <Text style={styles.modelHeaderText}>Rate The Student</Text>
                                    </View>


                                    <View style={styles.filler}><Text style={styles.alertText}>Are you sure. You want to end the session ?</Text></View>


                                    <View style={styles.buttonViewForControl}>

                                        <TouchableOpacity onPress={()=>{setVisibleFact2(false);}}  style={styles.startButtonInView}><Text>Cancel</Text></TouchableOpacity>
                                        <TouchableOpacity  onPress={()=>{
                                            clickEnd();
                                            navigation.navigate('TrainerFrontPage',{username:username});
                                        }} style={styles.endtButtonInView} ><Text>End</Text></TouchableOpacity>
                                    </View>
                                </View>


                            </View>
                        </TouchableWithoutFeedback>

                    </Modal>







                    {/*space for body*/}


                </ImageBackground>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles =StyleSheet.create({
    imageBac:{
        width:'100%',
        minHeight:800,
    },
    headerView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    logo:{
        width:70,
        height:70,
        margin:5
    },
    navbar:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        backgroundColor: '#ffffff25',
        // width:220,
        height: 40,
        margin:10,
        borderRadius:10,
        paddingEnd:10
    },
    iconStyle:{
        width:21,
        height:21,
        padding:10,
        margin: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    modalMainView:{
        flex:1,
        backgroundColor:'#ffffff20',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    modalView:{
        minHeight: 800,
        backgroundColor:'black',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    modalBox:{
        width:250,
        height:230,
        backgroundColor: '#000000',
        marginTop:60,
        marginEnd:10,
        borderRadius: 10,
        // borderColor:'white',
        // borderWidth:1
    },
    nameBox:{
        width:'100%',
        height:100,
        backgroundColor:'#ffffff10',
        borderRadius:10
    },
    textStyles:{
        color:'white',
        fontSize:25,
        padding:4,
        alignItems:'baseline'
    },
    nameView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        fontWeight:'bold',
    },
    modalHeader:{
        color: 'white',
        fontSize: 15,
        paddingLeft:15,
        paddingTop:10,
        fontWeight: 'bold',
        paddingBottom:30,

    },
    modelIndex:{
        color:'white',
        fontSize: 15,
        paddingLeft:15,
        // paddingTop:10,
        paddingBottom:15,
    },
    notificWarn:{
        color:'red',
        fontSize:10,
        fontWeight:'bold'
    },
    notificWarnView:{
        width:12,
        height:12,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#00ff49',
        borderRadius:10

    },
    newCourceOuterView:{
        width:'95%',
        height:150,
        backgroundColor:'#ffffff20',
        marginLeft:'2.5%',
        marginRight:'2.5%',
        borderRadius:12,
        marginTop: 20,
        padding:15,
    },
    courceHeaderView:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'flex-end',
    },
    headerStyle:{
        color:'white',
        fontSize:19,
    },
    descStyle:{
        color:'white',
        paddingTop: 12,
    },
    startButton:{
        backgroundColor:'#32DE3B',
        width:75,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7
    },
    headTopicView:{
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff27',
        borderRadius:10
    },
    headStyles:{
        color:'#ffffff',
        fontSize:24,
        fontWeight:'bold'
    },
    innerViewStyle:{
        width:'95%',
        height:45,
        backgroundColor:'#ffffff20',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        marginTop:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    elelmemt:{
        color:'#ffffff',
        paddingTop:10,
        paddingLeft:5,
        paddingRight:5,
        fontSize:17
    },
    buttonViewForControl:{
        margin:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    startButtonInView:{
        width:100,
        height:45,
        backgroundColor:'#32DE3B',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    endtButtonInView:{
        width:100,
        height:45,
        backgroundColor:'red',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    startButtonInViewYellow:{
        width:100,
        height:45,
        backgroundColor:'yellow',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    modBackground:{
        flex:1,
        backgroundColor:'#ffffff20',
        justifyContent:'center',
        alignItems:'center'
    },
    mainContainer:{
        width:'95%',
        minHeight:450,
        backgroundColor:'#ffffff',
        borderRadius:10
    },
    mainRatingView:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    ratingView:{
        flexDirection:'row',

    },
    starPics:{
        width:30,
        height:30,
    },
    ratingText:{
        fontSize:20
    },
    modelHeader:{
        width:'100%',
        height:65,
        justifyContent:'center',
        alignItems:'center'
    },
    modelHeaderText:{
        fontSize:28,
        fontWeight:'bold'
    },
    filler:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:20,
        marginTop:30,
        marginBottom:30
    },
    mainContainerEx:{
        width:'95%',
        minHeight:250,
        backgroundColor:'#ffffff',
        borderRadius:10
    },
    alertText:{
        fontSize:16,
    }


});
export default TrainerSelectedSessionInView;
