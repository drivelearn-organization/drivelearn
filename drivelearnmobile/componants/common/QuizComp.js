import React, {useState} from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from "react-native";

const QuizComp = forwardRef((props, ref) => {
    const {question,A,B,C,D,an,num,sighn1}=props;

    const [sighn,setSighn]=useState(sighn1);
    const[quest,setQuest]=useState(question);
    const[aval,setAval]=useState(A);
    const[bval,setBval]=useState(B);
    const[cval,setCval]=useState(C);
    const[dval,setDval]=useState(D);
    const[ans,setAns]=useState(an);


    const [clicked ,setClicled]=useState("O");
    const [ansState,setAnsState]=useState(5);


        useImperativeHandle(ref, () => ({

            checkForAnswer(){
                if(clicked==="O"){
                    setClicled("P")
                    setAnsState(0);
                }else if(clicked===ans){
                    setAnsState(1);
                }else{
                    setAnsState(2);
                }

                if (ansState===1){
                    return 1
                }else {
                    return 0;
                }
            },

            refresh(){
                setClicled("O");
                setAnsState(5)

            }

        }));


    return (
        <View style={styles.outerWindow}>
            <View style={styles.questionView}>
                <Text style={styles.numbeofIndex}>{num}</Text>
                <Text style={styles.questionStyle}>{quest}</Text>
            </View>
            <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic'+1+'.jpeg')} style={styles.questionPic}></ImageBackground></View>
            <View>
                <TouchableOpacity onPress={()=>{setClicled("A")}}>
                    <View style={clicked==="A"?styles.clickedAnserView:styles.anserView}>
                        <Text style={styles.anserNumber}>A.</Text>
                        <Text style={styles.anserStyle}>{aval}</Text>
                        {clicked==="P"&& ans=== "A" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && ans=== "A" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===1 && ans=== "A" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && clicked=== "A" ?<ImageBackground source={require('../../asets/icons/cancel-mark.png')} style={styles.markStyle}></ImageBackground>:null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{setClicled("B")}}>
                    <View style={clicked==="B"?styles.clickedAnserView:styles.anserView}>
                        <Text style={styles.anserNumber}>B.</Text>
                        <Text style={styles.anserStyle}>{bval}</Text>
                        {clicked==="P"&& ans=== "B" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && ans=== "B" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===1 && ans=== "B" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && clicked=== "B" ?<ImageBackground source={require('../../asets/icons/cancel-mark.png')} style={styles.markStyle}></ImageBackground>:null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{setClicled("C")}}>
                    <View style={clicked==="C"?styles.clickedAnserView:styles.anserView}>
                        <Text style={styles.anserNumber}>C.</Text>
                        <Text style={styles.anserStyle}>{cval}</Text>
                        {clicked==="P"&& ans=== "C" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && ans=== "C" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===1 && ans=== "C" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && clicked=== "C" ?<ImageBackground source={require('../../asets/icons/cancel-mark.png')} style={styles.markStyle}></ImageBackground>:null}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{setClicled("D")}}>
                    <View style={clicked==="D"?styles.clickedAnserView:styles.anserView}>
                        <Text style={styles.anserNumber}>D.</Text>
                        <Text style={styles.anserStyle}>{dval}</Text>
                        {clicked==="P"&& ans=== "D" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && ans=== "D" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===1 && ans=== "D" ?<ImageBackground source={require('../../asets/icons/check.png')} style={styles.markStyle}></ImageBackground>:null}
                        {ansState===2 && clicked=== "D" ?<ImageBackground source={require('../../asets/icons/cancel-mark.png')} style={styles.markStyle}></ImageBackground>:null}
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    );
}
)
const styles = StyleSheet.create({
    outerWindow:{
        width:'100%',
        minHeight:100,
        backgroundColor:'#ffffff',
        borderRadius:10,
        marginBottom:15,
        marginTop:15
    },
    questionView:{
        flexDirection:'row',

    },
    questionStyle:{
        fontWeight:'bold',
        padding: 5
    },
    numbeofIndex:{
        fontWeight:'bold',
        padding:5
    },
    questionPic:{
        width: 100,
        height:100,
    },
    imageStyleView:{
        alignItems:'center'
    },
    anserNumber:{
        fontWeight:'bold',
        padding:5,
        fontSize:19,
        color:'blue'
    },
    anserStyle:{
        fontWeight:'bold',
        padding: 4,
        marginRight:15,
        color: 'blue',
    },
    anserView:{
        margin:5,
        flexDirection:'row',
        borderRadius: 20,
        borderWidth:1,
        borderColor:'blue'
    },
    wrongAnserView:{
        margin:5,
        flexDirection:'row',
        borderRadius: 20,
        borderWidth:1,
        backgroundColor: '#ff000020',
        borderColor:'#ff0000'
    },
    correctAnserView:{
        margin:5,
        flexDirection:'row',
        borderRadius: 20,
        borderWidth:1,
        backgroundColor: '#4caf5020',
        borderColor:'#4caf50'
    },
    clickedAnserView:{
        margin:5,
        flexDirection:'row',
        borderRadius: 20,
        borderWidth:1,
        backgroundColor: '#2196f320',
        borderColor:'#2196f3'
    },
    markStyle:{
        width:25,
        height: 25,
    }

    // 4caf50

})
export default QuizComp;
