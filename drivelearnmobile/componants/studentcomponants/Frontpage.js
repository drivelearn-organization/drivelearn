import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    ScrollView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback, Modal
} from "react-native";
import {Base} from "../../urls/base";

const Frontpage = ({route,navigation}) => {

    const { username } = route.params;

    // getting student
    let url1=Base+'student/getStudent';
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
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

                            {/*home navigation*/}
                            <TouchableOpacity>
                                <ImageBackground source={require('../../asets/icons/home.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*notification navigation*/}
                            <TouchableOpacity>
                                <ImageBackground source={require('../../asets/icons/notification.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*display navigation*/}
                            <TouchableOpacity>
                                <ImageBackground source={require('../../asets/icons/display.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*location navigation*/}
                            <TouchableOpacity>
                                <ImageBackground source={require('../../asets/icons/pin.png')} style={styles.iconStyle}></ImageBackground>
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
                                    <Text>this is modal</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>


                    <View style={styles.nameBox}>
                        <View style={styles.nameView}><Text style={styles.textStyles}>{data.name}</Text></View>
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
        width:20,
        height:20,
        padding:10,
        margin: 5
    },
    modalMainView:{
        flex:1,
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
        width:230,
        height:230,
        backgroundColor: '#ffffff60',
        marginTop:60,
        marginEnd:10,
        borderRadius: 10
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
    }

})
export default Frontpage;
