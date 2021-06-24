import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Alert
} from "react-native";
import {Base} from "../../urls/base";
import {Picker} from "@react-native-picker/picker";
import PayHere from '@payhere/payhere-mobilesdk-reactnative';


const StartNewCustomizedCource = ({route,navigation}) => {

    const { username } = route.params;

    // getting student
    let url1=Base+'student/getStudent';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [auto,setAuto]=useState(0);
    const [nanual,setManual]=useState(0);
    const [bike,setBike]=useState(0);
    const [wheel,setWheel]=useState(0);
    const [payment,setPayment]=useState(11000);

    const paymentObject1 = {
        "sandbox": true,                 // true if using Sandbox Merchant ID
        "merchant_id": "1217670",        // Replace your Merchant ID
        "merchant_secret": "8m6xE46jD2H8LUozW1h2QP4OUvM7SBVDv8W6KJGse1ov",        // See step 4e
        "notify_url": "http://sample.com/notify",
        "order_id": "ItemNo12345",
        "items": "Hello from React Native!",
        "amount": ""+(11000 + (auto*1000) + (nanual*1000) + (bike*1000) + (wheel*1000))+"",
        "currency": "LKR",
        "first_name": "Saman",
        "last_name": "Perera",
        "email": "samanp@gmail.com",
        "phone": "0771234567",
        "address": "No.1, Galle Road",
        "city": "Colombo",
        "country": "Sri Lanka",
        "delivery_address": "No. 46, Galle road, Kalutara South",
        "delivery_city": "Kalutara",
        "delivery_country": "Sri Lanka",
        "custom_1": "",
        "custom_2": ""
    };



    const setCource=(wheeler,bikes,carAuto,carMan,heavyV,exam)=>{

        let traPos=1;

        if(wheeler===0 && bikes===0 && carAuto===0 && carMan===0 && heavyV===0 ){
            traPos=1;
        }else if(wheeler===0 && bikes===0 && carAuto===0 && carMan===0){
            traPos=3;
        }else if(wheeler===0 && bikes===0 && carAuto===0  && heavyV===0){
            traPos=5;
        }else if(wheeler===0 && carAuto===0 && carMan===0 && heavyV===0 ){
            traPos=7;
        }else if(bikes===0 && carAuto===0 && carMan===0 && heavyV===0 ){
            traPos=6;
        }else if(bikes===0 && wheeler===0 && carMan===0 && heavyV===0 ){
            traPos=4;
        }else{
            traPos=2;
        }
        let urlCourse=Base+'course/addcource'
        fetch(urlCourse, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                transportState: traPos,
                exam:exam,
                bike:bikes,
                carManual:carMan,
                carAuto:carAuto,
                wheeler:wheeler,
                heavy:heavyV
            })
        });
    }

    const [paymentId,setPaymentId]=useState(0);
    const addPayment=(val)=>{
        let urlPay=Base+'payment/addpayment';
        fetch(urlPay, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:username,
                amount:val
            })
        }).then((response) => response.json())
            .then((json) => {
                setPaymentId(json.paymentId);
            })
            .catch((error) => {
                console.error(error);
            });
    }



    var val;


    const [havy,setHeavy]=useState(0);
    const [payment2,setPayment2]=useState(11000);


    const paymentObject2 = {
        "sandbox": true,                 // true if using Sandbox Merchant ID
        "merchant_id": "1217670",        // Replace your Merchant ID
        "merchant_secret": "8m6xE46jD2H8LUozW1h2QP4OUvM7SBVDv8W6KJGse1ov",        // See step 4e
        "notify_url": "http://sample.com/notify",
        "order_id": "ItemNo12345",
        "items": "Hello from React Native!",
        "amount": ""+payment2+"",
        "currency": "LKR",
        "first_name": "Saman",
        "last_name": "Perera",
        "email": "samanp@gmail.com",
        "phone": "0771234567",
        "address": "No.1, Galle Road",
        "city": "Colombo",
        "country": "Sri Lanka",
        "delivery_address": "No. 46, Galle road, Kalutara South",
        "delivery_city": "Kalutara",
        "delivery_country": "Sri Lanka",
        "custom_1": "",
        "custom_2": ""
    };

    const wholePayment=()=>{

        setPayment(11000 + (auto*1000) + (nanual*1000) + (bike*1000) + (wheel*1000));
    }

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
                            <TouchableOpacity >
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



                    <View style={styles.lightSelectorView}>
                        <View><Text style={styles.mainHeaderOfLight}>සැහැල්ලු වාහන</Text></View>
                        <View
                            style={{
                                padding:2,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />

                        {/*for the car*/}


                        <View style={styles.selectView}>
                            <View>
                                <Text style={styles.vehicleHeader}>A1</Text>
                            </View>
                            <View>
                                <ImageBackground source={require('../../asets/icons/car.png')} style={styles.vehiClass}></ImageBackground>
                                <Text style={styles.vehicleHeader}>car(auto)</Text>
                                <Text style={styles.vehicleHeader}>car(manual)</Text>
                            </View>
                            <View>
                                <View style={styles.vehiClass}></View>
                                <View>
                                    <View style={styles.pickerView}>
                                        <Picker
                                            selectedValue={auto}
                                            onValueChange={(itemValue, itemIndex) =>{
                                                setAuto(itemValue);
                                                setTimeout(()=>{wholePayment();},1000);


                                            }

                                            }>
                                            <Picker.Item
                                                label="hours"
                                                value={0}
                                                enabled={false}

                                            />
                                            <Picker.Item label="1" value={1}/>
                                            <Picker.Item label="2" value={2}/>
                                            <Picker.Item label="3" value={3}/>
                                            <Picker.Item label="4" value={4}/>
                                        </Picker>
                                    </View>

                                </View>
                                <View>

                                    <View style={styles.pickerView}>
                                        <Picker
                                            selectedValue={nanual}
                                            onValueChange={(itemValue, itemIndex) =>{
                                                setManual(itemValue);
                                                setTimeout(()=>{wholePayment();},1000);
                                            }


                                            }>
                                            <Picker.Item
                                                label="hours"
                                                value={0}
                                                enabled={false}

                                            />
                                            <Picker.Item label="1" value={1}/>
                                            <Picker.Item label="2" value={2}/>
                                            <Picker.Item label="3" value={3}/>
                                            <Picker.Item label="4" value={4}/>
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View  style={styles.vehiClass}></View>
                                <Text style={styles.vehicleHeader}>{auto}</Text>
                                <Text style={styles.vehicleHeader}>{nanual}</Text></View>
                        </View>






                        <View
                            style={{
                                padding:2,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />


                        {/*for the bykes*/}


                        <View style={styles.selectView}>
                            <View>
                                <Text style={styles.vehicleHeader}>B</Text>
                            </View>
                            <View>
                                <ImageBackground source={require('../../asets/icons/motorcycle.png')} style={styles.vehiClass}></ImageBackground>
                                <Text style={styles.vehicleHeader}>Motorcycle</Text>

                            </View>
                            <View>
                                <View style={styles.vehiClass}></View>
                                <View>
                                    <View style={styles.pickerView}>
                                        <Picker
                                            selectedValue={bike}
                                            onValueChange={(itemValue, itemIndex) =>{
                                                setBike(itemValue);
                                                setTimeout(()=>{wholePayment();},1000);
                                            }



                                            }>
                                            <Picker.Item
                                                label="hours"
                                                value={0}
                                                enabled={false}

                                            />
                                            <Picker.Item label="1" value={1}/>
                                            <Picker.Item label="2" value={2}/>
                                            <Picker.Item label="3" value={3}/>
                                            <Picker.Item label="4" value={4}/>
                                        </Picker>
                                    </View>

                                </View>

                            </View>
                            <View>
                                <View  style={styles.vehiClass}></View>
                                <Text style={styles.vehicleHeader}>{bike}</Text>

                            </View>
                        </View>



                        <View
                            style={{
                                padding:2,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />


                        {/*for wheel*/}

                        <View style={styles.selectView}>
                            <View>
                                <Text style={styles.vehicleHeader}>G1</Text>
                            </View>
                            <View>
                                <ImageBackground source={require('../../asets/icons/tuk-tuk.png')} style={styles.vehiClass}></ImageBackground>
                                <Text style={styles.vehicleHeader}>Three Wheeler</Text>

                            </View>
                            <View>
                                <View style={styles.vehiClass}></View>
                                <View>
                                    <View style={styles.pickerView}>
                                        <Picker
                                            selectedValue={wheel}
                                            onValueChange={(itemValue, itemIndex) =>{
                                                setWheel(itemValue);
                                                setTimeout(()=>{wholePayment();},1000);
                                            }



                                            }>
                                            <Picker.Item
                                                label="hours"
                                                value={0}
                                                enabled={false}

                                            />
                                            <Picker.Item label="1" value={1}/>
                                            <Picker.Item label="2" value={2}/>
                                            <Picker.Item label="3" value={3}/>
                                            <Picker.Item label="4" value={4}/>
                                        </Picker>
                                    </View>

                                </View>

                            </View>
                            <View>
                                <View  style={styles.vehiClass}></View>
                                <Text style={styles.vehicleHeader}>{wheel}</Text>

                            </View>
                        </View>



                        <View
                            style={{
                                padding:2,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />

                        <View style={styles.examView}>
                            <Text style={styles.vehicleHeader}>Exam</Text>
                            <Text style={styles.vehicleHeader}>mandatory</Text>
                        </View>


                        <View
                            style={{
                                padding:5,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />

                        <View style={styles.examView}>
                            <Text style={styles.vehicleHeader}>Payment/Rs</Text>
                            <Text style={styles.vehicleHeader}>{(11000 + (auto*1000) + (nanual*1000) + (bike*1000) + (wheel*1000))}</Text>
                        </View>


                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.buttonViewPay}  onPress={()=>{
                                PayHere.startPayment(
                                    paymentObject1,
                                    (paymentId) => {
                                        console.log("Payment Completed", paymentId);
                                        // payment
                                        addPayment((11000 + (auto*1000) + (nanual*1000) + (bike*1000) + (wheel*1000)));
                                        setCource(wheel,bike,auto,nanual,0,0);
                                    },
                                    (errorData) => {
                                        Alert.alert("PayHere Error", errorData);
                                    },
                                    () => {
                                        console.log("Payment Dismissed");
                                    }
                                );
                            }}><Text>Proceed</Text></TouchableOpacity>
                        </View>


                    </View>


{/*heavy vehicle*/}


                    <View style={styles.lightSelectorView}>
                        <View><Text style={styles.mainHeaderOfLight}>බර වාහන</Text></View>
                        <View
                            style={{
                                padding:2,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />


                        {/*for the heavy*/}


                        <View style={styles.selectView}>
                            <View>
                                <Text style={styles.vehicleHeader}>H</Text>
                            </View>
                            <View>
                                <ImageBackground source={require('../../asets/icons/bus.png')} style={styles.vehiClass}></ImageBackground>
                                <Text style={styles.vehicleHeader}>Heavy Vehicles</Text>

                            </View>
                            <View>
                                <View style={styles.vehiClass}></View>
                                <View>
                                    <View style={styles.pickerView}>
                                        <Picker
                                            selectedValue={havy}
                                            onValueChange={(itemValue, itemIndex) =>{
                                                setHeavy(itemValue);
                                                setTimeout(()=>{setPayment2(11000+itemValue*2000);},1000);
                                            }



                                            }>
                                            <Picker.Item
                                                label="hours"
                                                value={0}
                                                enabled={false}

                                            />
                                            <Picker.Item label="1" value={1}/>
                                            <Picker.Item label="2" value={2}/>
                                            <Picker.Item label="3" value={3}/>
                                            <Picker.Item label="4" value={4}/>
                                        </Picker>
                                    </View>

                                </View>

                            </View>
                            <View>
                                <View  style={styles.vehiClass}></View>
                                <Text style={styles.vehicleHeader}>{havy}</Text>

                            </View>
                        </View>




                        <View
                            style={{
                                padding:2,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />

                        <View style={styles.examView}>
                            <Text style={styles.vehicleHeader}>Exam</Text>
                            <Text style={styles.vehicleHeader}>mandatory</Text>
                        </View>


                        <View
                            style={{
                                padding:5,
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}
                        />

                        <View style={styles.examView}>
                            <Text style={styles.vehicleHeader}>Payment/Rs</Text>
                            <Text style={styles.vehicleHeader}>{payment2}</Text>
                        </View>


                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.buttonViewPay} onPress={()=>{
                                PayHere.startPayment(
                                    paymentObject2,
                                    (paymentId) => {
                                        console.log("Payment Completed", paymentId);
                                        addPayment(payment2);
                                        setCource(0,0,0,0,havy,0);
                                    },
                                    (errorData) => {
                                        Alert.alert("PayHere Error", errorData);
                                    },
                                    () => {
                                        console.log("Payment Dismissed");
                                    }
                                );
                            }}><Text>Proceed</Text></TouchableOpacity>
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
    },
    lightSelectorView:{
        margin:10,
        width:'95%',
        marginLeft:'2.5%',
        marginRight:'2.5%',
        minHeight:200,
        backgroundColor:'#ffffff20',
        borderRadius:10,
        padding:15,
    },
    mainHeaderOfLight:{
        color:'white',
    },
    selectView:{
        marginBottom:5,
        // paddingBottom:30,
        width:'100%',
        // height:100,
        flexDirection:'row',
        justifyContent:'space-between',

    },
    vehiClass:{
        marginTop:10,
        paddingTop:10,
        width:30,
        height:30,
    },
    vehicleHeader:{
        color:'white',
        paddingTop:10
    },
    pickerView: {
        // padding:-2,
        margin: 5,
        width: 45,
        backgroundColor: 'white',
        height: 20,
        justifyContent: 'center',
    },
    examView: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    buttonViewPay:{
        backgroundColor:'#32DE3B',
        width:100,
        height:40,
        margin:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }



})
export default StartNewCustomizedCource;
