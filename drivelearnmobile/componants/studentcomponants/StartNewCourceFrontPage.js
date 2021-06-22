import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Base} from "../../urls/base";

const StartNewCourceFrontPage = ({route,navigation}) => {
    const { username } = route.params;

    // getting student
    let url1=Base+'student/getStudent';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

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


    },[]);


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

                            {/*available List*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('StartNewCourceFrontPage',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/handlist.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*customize the course*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('StartNewCustomizedCource',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/equalizer.png')} style={styles.iconStyle}>

                                </ImageBackground>
                            </TouchableOpacity>

                            {/*Selected Courses*/}
                            <TouchableOpacity>
                                <ImageBackground source={require('../../asets/icons/hand.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>


                            {/*central navigation navigation*/}
                            <TouchableOpacity onPress={()=>setNavModal(true)}>
                                <ImageBackground source={require('../../asets/icons/menu.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>
                        </View>


                    </View>

                    {/*main nav with modal*/}

                    <Modal style={styles.modalView} visible={navModal} transparent={true}>
                        <TouchableWithoutFeedback onPress={()=>setNavModal(false)}>
                            <View style={styles.modalMainView}>
                                <View style={styles.modalBox}>

                                    {/*home navigation*/}
                                    <Text style={styles.modalHeader}>{data.name}</Text>
                                    <TouchableOpacity onPress={()=>navigation.navigate('FrontPageStudent',{username:username})}>
                                        <Text style={styles.modelIndex}>Home</Text>
                                    </TouchableOpacity>

                                    {/*DriveLeaarn Material*/}
                                    <TouchableOpacity>
                                        <Text style={styles.modelIndex}>DriveLearn Material</Text>
                                    </TouchableOpacity>

                                    {/*Start a Course*/}
                                    <TouchableOpacity onPress={()=>navigation.navigate('StartNewCourceFrontPage',{username:username})}>
                                        <Text style={styles.modelIndex}>Start a Course</Text>
                                    </TouchableOpacity>

                                    {/*profile settings*/}
                                    <TouchableOpacity>
                                        <Text style={styles.modelIndex}>Profile Settings</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>



                    {/*light vehicle*/}

                    <View style={styles.lightVehicle}>
                        <View style={styles.headerViewInCard}>
                            <Text style={styles.lightHeader}>සැහැල්ලු වාහන</Text>
                        </View>

                        <View style={styles.bodyViewInCard}>
                            <Text style={styles.lightBody}>ඔබ සැහැල්ලු වාහන සම්භන්ධව කිසුදු ධාවන පලපුරුද්දක් නැති අයෙක්ද. එසේනම් අපි ඔබට අනුමත කරනුයේ කාර් පැය 12, ත්‍රී රෝද රථ පැය 12, යතුරු පැදි පැය 5 සහ ලිඛිත පරීක්ශන පුහුනුව සහිත පූර්ණ පැකේජයයි. එය වඩාත් නිවැරදිම තේරීම වන අතර අප එහිදී සියලු නීති කරුණු මෙන්ම ප්‍රායෝගික පුහුණුවද මැනවින් ලැබේ. ඔබගේ සියලු ලියකියවිලි කටයුතු අපගේ මෙහෙයවීම යටතේ සිදුකරනු ලැබේ අයකිරීම රු 25000.00 </Text>
                            <View style={styles.buttonViewInCard}>
                                <TouchableOpacity style={styles.courseButton}><Text>Start Course</Text></TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.bodyViewInCard}>
                            <Text style={styles.lightBody}>ඔබ සැහැල්ලු වාහන සම්භන්ධව සාමාන්‍ය ධාවන පලපුරුද්දක් ඇති අයෙක්ද. එසේනම් අපි ඔබට අනුමත කරනුයේ කාර් පැය 5, ත්‍රී රෝද රථ පැය 5, යතුරු පැදි පැය 5 සහ ලිඛිත පරීක්ශන පුහුනුව සහිත පූර්ණ පැකේජයයි. එය වඩාත් නිවැරදිම තේරීම වන අතර අප එහිදී සියලු නීති කරුණු මෙන්ම ප්‍රායෝගික පුහුණුවද මැනවින් ලැබේ. ඔබගේ සියලු ලියකියවිලි කටයුතු අපගේ මෙහෙයවීම යටතේ සිදුකරනු ලැබේ අයකිරීම රු 18000.00</Text>
                            <View style={styles.buttonViewInCard}>
                                <TouchableOpacity style={styles.courseButton}><Text>Start Course</Text></TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.bodyViewInCard}>
                            <Text style={styles.lightBody}>ඔබට අවශ්‍ය නම් සැහැල්ලු වාහන බලපත්‍රයට අදාල විභාගය, එයට අදාල අධ්‍යාපන කටයුතු සහ ප්‍රයෝගික පරීක්ශණය සදහා අදාල කාරනා සදහාම වූ පැකේජයක්ද අප සතුව පවතී. අය කිරීම රු 11000.00</Text>
                            <View style={styles.buttonViewInCard}>
                                <TouchableOpacity style={styles.courseButton}><Text>Start Course</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/*heavy vehicle*/}

                    <View style={styles.lightVehicle}>
                        <View style={styles.headerViewInCard}>
                            <Text style={styles.lightHeader}>බර වාහන</Text>
                        </View>

                        <View style={styles.bodyViewInCard}>
                            <Text style={styles.lightBody}>ඔබ බර වාහන සම්භන්ධව කිසුදු ධාවන පලපුරුද්දක් නැති අයෙක්ද. එසේනම් අපි ඔබට අනුමත කරනුයේ පුහුණු පැය 12 සහ ලිඛිත පරීක්ශන පුහුනුව සහිත පූර්ණ පැකේජයයි. එය වඩාත් නිවැරදිම තේරීම වන අතර අප එහිදී සියලු නීති කරුණු මෙන්ම ප්‍රායෝගික පුහුණුවද මැනවින් ලැබේ. ඔබගේ සියලු ලියකියවිලි කටයුතු අපගේ මෙහෙයවීම යටතේ සිදුකරනු ලැබේ අයකිරීම රු 25000.00 </Text>
                            <View style={styles.buttonViewInCard}>
                                <TouchableOpacity style={styles.courseButton}><Text>Start Course</Text></TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.bodyViewInCard}>
                            <Text style={styles.lightBody}>ඔබ බර වාහන සම්භන්ධව සාමාන්‍ය ධාවන පලපුරුද්දක් ඇති අයෙක්ද. එසේනම් අපි ඔබට අනුමත කරනුයේ පුහුණු පැය 5 සහ ලිඛිත පරීක්ශන පුහුනුව සහිත පූර්ණ පැකේජයයි. එය වඩාත් නිවැරදිම තේරීම වන අතර අප එහිදී සියලු නීති කරුණු මෙන්ම ප්‍රායෝගික පුහුණුවද මැනවින් ලැබේ. ඔබගේ සියලු ලියකියවිලි කටයුතු අපගේ මෙහෙයවීම යටතේ සිදුකරනු ලැබේ අයකිරීම රු 18000.00</Text>
                            <View style={styles.buttonViewInCard}>
                                <TouchableOpacity style={styles.courseButton}><Text>Start Course</Text></TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.bodyViewInCard}>
                            <Text style={styles.lightBody}>ඔබට අවශ්‍ය නම් බර වාහන බලපත්‍රයට අදාල විභාගය, එයට අදාල අධ්‍යාපන කටයුතු සහ ප්‍රයෝගික පරීක්ශණය සදහා අදාල කාරනා සදහාම වූ පැකේජයක්ද අප සතුව පවතී. අය කිරීම රු 11000.00</Text>
                            <View style={styles.buttonViewInCard}>
                                <TouchableOpacity style={styles.courseButton}><Text>Start Course</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

















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
    lightVehicle:{
        margin:15,
        padding:15,
        width:'95%',
        marginLeft: '2.5%',
        marginRight: '2.5%',
        // height:200,
        backgroundColor:'#ffffff20',
        borderRadius:10,


    },
    headerViewInCard:{

        width:'100%',
        height:45,
        backgroundColor:'#ffffff08',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
    lightHeader:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
    bodyViewInCard:{
        marginTop:20,
        padding:15,
        width:'100%',
        backgroundColor:'#ffffff08',
        borderRadius:25,


    },
    lightBody:{
        color:'white'
    },
    buttonViewInCard:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    courseButton:{
        width:100,
        height:45,
        backgroundColor:'#32DE3B',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:15
    }


})
export default StartNewCourceFrontPage;
