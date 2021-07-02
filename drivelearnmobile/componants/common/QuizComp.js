import React, {useEffect, useState} from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from "react-native";

const QuizComp = forwardRef((props, ref) => {
    const {question,A,B,C,D,an,num,sighn1}=props;
    const[num1,setNum]=useState(1);
    const [sighn,setSighn]=useState(sighn1);
    const[quest,setQuest]=useState(question);
    const[aval,setAval]=useState(A);
    const[bval,setBval]=useState(B);
    const[cval,setCval]=useState(C);
    const[dval,setDval]=useState(D);
    const[ans,setAns]=useState(an);
    const[haveIm,setHaveIm]=useState("H")
    const[url,setUrl] =useState('../../asets/quizpics/demopic1.jpeg');



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

        const image=()=>{
            if(haveIm=="H" && num==1){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic1.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==2){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic2.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==3){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic3.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==4){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic4.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==5){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic5.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==6){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic6.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==7){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic7.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==8){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic8.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==9){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic9.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==10){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic10.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==11){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic11.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==12){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic12.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==13){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic13.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==14){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic14.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==15){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic15.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==16){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic16.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==17){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic17.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==18){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic18.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==19){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic19.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==20){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic20.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==21){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic21.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==22){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic22.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==23){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic23.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==24){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic24.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==25){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic25.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==26){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic26.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==27){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic27.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==28){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic28.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==29){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic29.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==30){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic30.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }else if(haveIm=="H" && num==31){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic31.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==32){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic32.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==33){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic33.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==34){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic34.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==35){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic35.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==36){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic36.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==37){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic37.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==38){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic38.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==39){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic39.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==40){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic40.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==41){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic41.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==42){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic42.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==43){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic43.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==44){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic44.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==45){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic45.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==46){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic46.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==47){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic47.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==48){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic48.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==49){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic49.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==50){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic50.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==51){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic51.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==52){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic52.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==53){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic53.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==54){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic54.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==55){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic55.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==56){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic56.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==57){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic57.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==58){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic58.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==59){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic59.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==60){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic60.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==61){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic61.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==62){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic62.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==63){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic63.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==64){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic64.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==65){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic65.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==66){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic66.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==67){
                return <View style={styles.imageStyleView}><ImageBackground source={require('../../asets/quizpics/demopic67.jpeg')} style={styles.questionPic}></ImageBackground></View>
            }
            else if(haveIm=="H" && num==68){
                return null;
            }
            else if(haveIm=="H" && num==69){
                return null;
            }
            else{
                return null;
            }


        }

    return (
        <View style={styles.outerWindow}>
            <View style={styles.questionView}>
                <Text style={styles.numbeofIndex}>{num}</Text>
                <Text style={styles.questionStyle}>{quest}</Text>
            </View>
            {image()}
            {/*{haveIm==="H"?(<View style={styles.imageStyleView}><ImageBackground source={url} style={styles.questionPic}></ImageBackground></View>): null}*/}

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
        width:'75%',
        fontWeight:'bold',
        padding: 4,
        marginRight:15,
        color: 'blue',
    },
    anserView:{
        width:'95%',
        margin:5,
        marginRight:20,
        flexDirection:'row',
        justifyContent:'flex-start',
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
        width:'95%',
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
