import React, {useEffect, useState} from 'react';
const { forwardRef, useRef, useImperativeHandle } = React;
import {
    ImageBackground,
    Modal,
    ScrollView,
    StyleSheet, Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Base} from "../../urls/base";
import QuizComp from "../common/QuizComp";

const TutionQuiz = ({route,navigation}) => {
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





// load the course

    },[]);




    const [navModal,setNavModal]=useState(false);

    const quizref=useRef();
    const quizref1=useRef();
    const quizref2=useRef();
    const quizref3=useRef();
    const quizref4=useRef();
    const quizref5=useRef();
    const quizref6=useRef();
    const quizref7=useRef();
    const quizref8=useRef();
    const quizref9=useRef();
    const quizref10=useRef();
    const quizref11=useRef();
    const quizref12=useRef();
    const quizref13=useRef();
    const quizref14=useRef();
    const quizref15=useRef();
    const quizref16=useRef();
    const quizref17=useRef();
    const quizref18=useRef();
    const quizref19=useRef();
    const quizref20=useRef();
    const quizref21=useRef();
    const quizref22=useRef();
    const quizref23=useRef();
    const quizref24=useRef();
    const quizref25=useRef();
    const quizref26=useRef();
    const quizref27=useRef();
    const quizref28=useRef();
    const quizref29=useRef();
    const quizref30=useRef();
    const quizref31=useRef();
    const quizref32=useRef();
    const quizref33=useRef();
    const quizref34=useRef();
    const quizref35=useRef();
    const quizref36=useRef();
    const quizref37=useRef();
    const quizref38=useRef();
    const quizref39=useRef();
    const quizref40=useRef();
    const quizref41=useRef();
    const quizref42=useRef();
    const quizref43=useRef();
    const quizref44=useRef();
    const quizref45=useRef();
    const quizref46=useRef();
    const quizref47=useRef();
    const quizref48=useRef();
    const quizref49=useRef();
    const quizref50=useRef();
    const quizref51=useRef();
    const quizref52=useRef();
    const quizref53=useRef();
    const quizref54=useRef();
    const quizref55=useRef();
    const quizref56=useRef();
    const quizref57=useRef();
    const quizref58=useRef();
    const quizref59=useRef();
    const quizref60=useRef();
    const quizref61=useRef();
    const quizref62=useRef();
    const quizref63=useRef();
    const quizref64=useRef();
    const quizref65=useRef();
    const quizref66=useRef();
    const quizref67=useRef();
    const quizref68=useRef();
    const quizref69=useRef();
    const quizref70=useRef();
    const quizref71=useRef();
    const quizref72=useRef();
    const quizref73=useRef();
    const quizref74=useRef();
    const quizref75=useRef();
    const quizref76=useRef();
    const quizref77=useRef();
    const quizref78=useRef();
    const quizref79=useRef();
    const quizref80=useRef();
    const quizref81=useRef();
    const quizref82=useRef();
    const quizref83=useRef();
    const quizref84=useRef();
    const quizref85=useRef();
    const quizref86=useRef();
    const quizref87=useRef();
    const quizref88=useRef();
    const quizref89=useRef();
    const quizref90=useRef();
    const quizref91=useRef();
    const quizref92=useRef();
    const quizref93=useRef();
    const quizref94=useRef();
    const quizref95=useRef();
    const quizref96=useRef();
    const quizref97=useRef();
    const quizref98=useRef();
    const quizref99=useRef();
    const quizref100=useRef();

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
                            <TouchableOpacity >
                                <ImageBackground source={require('../../asets/icons/games.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            {/*customize the course*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TutionQuiz',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/quiz.png')} style={styles.iconStyle}>

                                </ImageBackground>
                            </TouchableOpacity>

                            {/*Selected Courses*/}
                            <TouchableOpacity onPress={()=>navigation.navigate('TutionPlayer',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/play-button.png')} style={styles.iconStyle}></ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>navigation.navigate('TutionOpenBook',{username:username})}>
                                <ImageBackground source={require('../../asets/icons/open-book.png')} style={styles.iconStyle}></ImageBackground>
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
                                    <TouchableOpacity onPress={()=>navigation.navigate('TutionOpenBook',{username:username})}>
                                        <Text style={styles.modelIndex}>DriveLearn Material</Text>
                                    </TouchableOpacity>

                                    {/*Start a Course*/}
                                    <TouchableOpacity onPress={()=>navigation.navigate('StartNewCourceFrontPage',{username:username})}>
                                        <Text style={styles.modelIndex}>Start a Course</Text>
                                    </TouchableOpacity>

                                    {/*profile settings*/}
                                    <TouchableOpacity onPress={()=>navigation.navigate('StudentProfileUpdate',{username:username})}>
                                        <Text style={styles.modelIndex}>Profile Settings</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>


                    <QuizComp num={1} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"ඉරට්ටේ දිනවල වාහන ඇතුල්වීම තහනම්."} B={"ඔත්තේ දින වල වාහන නැවැත්වීම තහනම්."} C={"ඉරට්ටේ දිනවල වාහාන නැවැත්වීම තහනම්."} D={"ඔත්තේ දින වල වාහන ඇතුල් වීම තහනම්"} an={"C"} ref={quizref}></QuizComp>
                    <QuizComp num={2} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"ඉදිරියෙන් නවතිනු."} B={"එකිනෙක හරහා ගමන්කරන මාර්ගය ඉදිරියෙනි."} C={"අනිවාර්ය වටරවුම ඉදිරියෙනි."} D={"වටරවුම ඉදිරියෙනි."} an={"D"} ref={quizref1}></QuizComp>
                    <QuizComp num={3} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"මාර්ගය ඉඩදෙනු."} B={"අනිවාර්ය ත්‍රිකෝණාකාර මංසන්ධිය."} C={"ඉදිරියෙන් මාර්ගය ඉඩදෙනු."} D={"ප්‍රධාන මාර්ගය ඉදිරියෙනි."} an={"A"} ref={quizref2}></QuizComp>
                    <QuizComp num={4} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"සතුන්ගේ අභයභූමිය ඉදිරියෙනි."} B={"ගවයන් ඇතිකරන ගොවිපල ඉදිරියෙනි."} C={"ගවයන් හෝ වෙනත් සතුන් මාර්ගය හරහා ගමන් කිරීමට ඉඩ ඇති ස්ථානය ඉදිරියෙනි."} D={"ගවයන් සදහා මාර්ගය මාරුවීමට වෙන්ක්ල ස්ථානය ඉදිරියෙනි."} an={"C"} ref={quizref3}></QuizComp>
                    <QuizComp num={5} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"සතුන්ගේ අභයභූමිය ඉදිරියෙනි."} B={"ගවයන් ඇතිකරන ගොවිපල ඉදිරියෙනි."} C={"ගවයන් හෝ වෙනත් සතුන් මාර්ගය හරහා ගමන් කිරීමට ඉඩ ඇති ස්ථානය ඉදිරියෙනි."} D={"ගවයන් සදහා මාර්ගය මාරුවීමට වෙන්ක්ල ස්ථානය ඉදිරියෙනි."} an={"C"} ref={quizref4}></QuizComp>
                    <QuizComp num={6} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"ඉදිරියෙන් හතරමං හන්දිය."} B={"ප්‍රමුකතා මාරගය."} C={"ප්‍රමුකතා මාරගය ඉදිරියෙනි."} D={"මංසන්ධි කොටුව"} an={"B"} ref={quizref5}></QuizComp>
                    <QuizComp num={7} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"වම් පැත්තෙන් වාහන ප්‍රධාන මාරගයට එක්වන සන්ධිය ඉදිරියෙනි."} B={"පළමුවන වම් පැත්තට විහිදෙන විසම සංධිය ඉදිරියෙනි."} C={"වම් පැත්තට එන රථවාහන සදහා ප්‍රමුකතාව දෙනු."} D={"Y හැඩයේ මංසන්ධිය ඉදිරියෙනි."} an={"A"} ref={quizref6}></QuizComp>
                    <QuizComp num={8} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"ළමයින් මාරුවන ස්ථානය ."} B={"අන්ධ මිනිසුන් මාරුවන ස්ථානය ඉදිරියෙනි."} C={"ළමයින් මාරුවන ස්ථානය ඉදිරියෙනි "} D={"පාසල ඉදිරියෙනි ."} an={"B"} ref={quizref7}></QuizComp>
                    <QuizComp num={9} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"පදිකයින් මාරුවන ස්ථානය ."} B={"පොලිස් ස්ථානය ."} C={"ඉන්ධන පිරවුම්හල."} D={"වාහන නවත්වන ස්ථානය ."} an={"D"} ref={quizref8}></QuizComp>
                    <QuizComp num={10} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"දකුණු පැත්තට ද්විත්ව වංගුව ඉදිරියෙනි"} B={"ඉදිරියෙන් දකුණට හරවනු."} C={"දකුණු පැත්තට වංගුව ඉදිරියෙනි ."} D={"දකුණු පැත්තට වැලමිට වංගුව ඉදිරියෙනි ."} an={"C"} ref={quizref9}></QuizComp>
                    <QuizComp num={11} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"තහනම් සංඥාවකි"} B={"සීමාකාරී සංඥාවකි."} C={"විධාන සංඥාවකි"} D={"අනතුරු හැගවීමේ සංඥාවකි."} an={"B"} ref={quizref10}></QuizComp>
                    <QuizComp num={12} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"සියලුම වාහන සදහා පාර වසා ඇත."} B={"ඔත්තේ දිනවල වාහන නැවැත්වීම තහනම්."} C={"නැවැත්වීම හා හැවරීම තහනම්."} D={"වාහන නැවැත්වීම තහනම් ."} an={"D"} ref={quizref11}></QuizComp>
                    <QuizComp num={13} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"ඇක්සලය මත පැටවිය හැකි බර සීමව."} B={"වේග සීමාවේ අවසානය."} C={"වේග සීමාවේ ආරම්භය."} D={"වේග සීමාව."} an={"B"} ref={quizref12}></QuizComp>
                    <QuizComp num={14} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"පදිකයින් සදහා වෙන්කල මාරගය ආරම්භය"} B={"පදිකයින් සදහා ඉඩදෙන්න."} C={"පදිකයින් මාරුවන ස්ථානය ."} D={"පදික මාරුව ඉදිරියෙනි ."} an={"C"} ref={quizref13}></QuizComp>
                    <QuizComp num={15} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"මාරගය ලිස්සන සුලු ස්ථානය ඉදිරියෙනි ."} B={"ඉහලට අවදානම් බෑවුම ඉදිරියෙනි ."} C={"කාර් රථ ලිස්සන ස්ථානය ඉදිරියෙනි ."} D={"පහතට අවදානම් බෑවුම ඉදිරියෙනි ."} an={"D"} ref={quizref14}></QuizComp>
                    <QuizComp num={16} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"Y හැඩයේ මංසන්ධිය ඉදිරියෙනි"} B={"ඉදිරියේදී මාර්ගය පටුය."} C={"ප්‍රවාහන මාර්ගය දෙපසින් රථ වාහන පිවිසෙන ම‍ංසන්දිය ඉදිරියෙනි ."} D={"දිවිත්ව රථ මාර්ගයේ ආරම්භය ඉදිරියෙනි ."} an={"A"} ref={quizref15}></QuizComp>
                    <QuizComp num={17} question={"මෙම සඳ්ඳාවෙන් දැක්වෙන්නේ ?"} A={"මෝටර් කාරය අනිවාරයෙන් ඉදිරියට යා යුතුය."} B={"ත්‍රීරෝද  රථය කෙළින්ම ඉදිරියට යා හැකිය."} C={"පත්‍රීරෝද  රථය දකුණට හැරවීම හෝ කෙළින්ම ඉදිරියට යා හැක."} D={"මෝටර් කාරයට කෙළින්ම ඉදිරියට යාමට හෝ දකුණට හැරවිය හැක."} an={"A"} ref={quizref16}></QuizComp>
                    <QuizComp num={18} question={"මෙහි තිබෙන මංසන්ධියේදී වමට හැරවීමට අදහස් කරන්නේ නම් පිළිවෙලින් A,B හා C වලදී කළ යුතු වන්නේ.."} A={"තීරණය‍‍‍,සංඥා කිරීම සහ ක්‍රියාත්මක කිරීම."} B={"නිරීක්ෂණය ,තීරණය කිරීම සහ ක්‍රියා කිරීම."} C={"සංඥා කිරීම ,තීරණය  කිරීම සහ ක්‍රියාත්මක කිරීම ."} D={"ඉහල සියල්ලම නිවැරැදි ."} an={"B"} ref={quizref17}></QuizComp>
                    <QuizComp num={19} question={"පෙන්වා ඇති රථ වාහන මාර්ග සංඥා ලාම්පු වල ඊලඟට දැල්වෙන වර්ණය කුමක්ද?"} A={"තරතු හා කහ"} B={"රතු."} C={"කොළ හා කහ."} D={"කොළ.කොළ."} an={"B"} ref={quizref18}></QuizComp>
                    <QuizComp num={20} question={"පෙන්වා ඇති පොලිස් නිළධාරියාගේ විධානය කුමක්ද?"} A={"ඉදිරියෙන් හා පසුපසින් පැමිණෙන වාහන නවතිනු."} B={"පසුපසින් පැමිණෙන වාහන නවත්වන්න"} C={"නවතිනු."} D={"ඉදිරියෙන් පැමිණෙන වාහන නවතිනු."} an={"A"} ref={quizref19}></QuizComp>
                    <QuizComp num={21} question={"මාර්ගය මත සලකුණු කර ඇති මෙම මාර්ග සළකුණෙන් දැක්වෙන්නේ"} A={"ධාවන තීරූ සලකුණු"} B={"මාර්ග රේඛාව"} C={"දකුණට හැරීම හැර හරහා යාම තහනම් කර ඇති ආයතන රේඛාව"} D={"මාර්ගය හරහා ගමන් කිරීම තහනනම් කිරීමේ රේඛාව"} an={"D"} ref={quizref20}></QuizComp>
                    <QuizComp num={22} question={"වාහන ආලෝක සඳ්ඳා තිබෙන මෙම සංදියේදී"} A={"වෑන් රථය අවශ්‍ය නම් වමට හැරවිය හැක."} B={"වෑන් රථය අනිවාරෙන් දකුණට හැරවිය යුතුය."} C={"මෝටර් කාරය අවශ්‍ය නම් දකුණට හැරවිය හැකිය."} D={"මෝටර් කාරය අවශ්‍ය නම් වමට හැරවිය හැකිය"} an={"B"} ref={quizref21}></QuizComp>
                    <QuizComp num={23} question={"මාර්ගය මත හරස් අතට සලකුණු කර ඇති මෙම සළකුණෙන් දැක්වෙන්නෙ ."} A={"මාර්ගය ඉඩදෙන රේඛාව"} B={"මාර්ගය බෙදී යන ස්ථානක් පිහිටුවන නැවැතුම් රේඛාව"} C={"නවතිනු සංඥා වෙහි පිහිටුවන නැවතුම් රේඛාව"} D={"වවටරවුමක පිහිටුවන මාර්ගය ඉඩදෙනු රේඛාව"} an={"D"} ref={quizref22}></QuizComp>
                    <QuizComp num={24} question={"රූපයේ පෙන්වා තිබෙන T හැඩයේ මංසන්ධියට ඇතුළුවන මෙම රියදුරු තම වාහනය."} A={"ප්‍රධාන මාර්ගයේ වාහන නොමැතිනම් නතර කළ යුතු නැත."} B={"අනිවාරයෙන් නතර කල යුතුය."} C={"දකුණට හරවන්නේනම් පමණක් නතර කළ යුතුය."} D={"වමට හැරවීමෙදී නතර කළ යුතු නැත."} an={"B"} ref={quizref23}></QuizComp>
                    <QuizComp num={25} question={"මාර්ගය මත හරස් අතට සලකුණු කර ඇති මෙම සළකුණෙන් දැක්වෙන්නෙ ."} A={"මාර්ගය ඉඩදෙන රේඛාව"} B={"රථවාහන සංඥා එළියකදී හෝ පොලිසිය පාලනය වන අන්තර් ඡෙදනයකදී නැවතීමේ රේඛාව"} C={"නවතිනු සංඥා පිහිටුවන නැවතුම් රේඛාව"} D={"වටරවුමක පිහිටුවනු ලබන මාර්ගය ඉඩදෙනු රේඛාව"} an={"C"} ref={quizref24}></QuizComp>
                    <QuizComp num={26} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"ඉදිරියෙනි මාර්ගය වසා ඇත"} B={"දුම්රිය හරස් මාර්ගය ඉදිරියෙනි"} C={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය"} D={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය ඉදිරියෙනි"} an={"C"} ref={quizref25}></QuizComp>
                    <QuizComp num={27} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"අනිවාර්ය වට රවුම"} B={"ඇතුළු වීම තහනම්"} C={"බස් හා ලොරි සදහා පාර වසා ඇත"} D={"මාර්ගය වසා ඇත."} an={"D"} ref={quizref26}></QuizComp>
                    <QuizComp num={28} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"ලිස්සන සුලු මාර්ගය ඉදිරියෙනි"} B={"වංගු සහිත මාර්ගය ඉදිරියෙනි"} C={"අන්තරාදායක මංසන්ධිය ඉදිරියෙනි"} D={"ඉදිරියෙන් මාර්ගය පටුය"} an={"A"} ref={quizref27}></QuizComp>
                    <QuizComp num={29} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"Y හැඩයේ මංසන්ධිය ඉදිරියෙනි"} B={"ඉදිරියෙන් මාර්ගය පටුය"} C={"ද්විත්ව ර්ථ මාර්ගය අවසානය  ඉදිරියෙනි"} D={"පටු පාලම ඉදිරියෙනි"} an={"C"} ref={quizref28}></QuizComp>
                    <QuizComp num={30} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"අනිවාර්ය වටරවුම ඉදිරියෙනි"} B={"අනිවාර්ය වටරවුම"} C={"වටරවුම ඉදිරියෙනි"} D={"වටරවුම"} an={"B"} ref={quizref29}></QuizComp>
                    <QuizComp num={31} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"වම් පැත්තට හරවා නවත්වන්න"} B={"වම් පැත්තට හැරවිය යුතුය"} C={"වම් පැත්තට හැරවීම සදහා ප්‍රමුඛත්වය"} D={"ඉදිරියෙන් වම් පැත්තට හැරවිය යුතුය"} an={"C"} ref={quizref30}></QuizComp>
                    <QuizComp num={32} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"තොරතුරු සංඥාවකි"} B={"අනතුරු හැගවීමේ සංඥාවකි."} C={"තහනම් සංඥාවකි"} D={"විධාන සංඥාවකි"} an={"C"} ref={quizref31}></QuizComp>
                    <QuizComp num={33} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"වම් පැත්තට ද්විත්ව වංගුව ඉදිරියෙනි"} B={"වම් පැත්තට වැලමිට වංගුව ඉදිරියෙනි"} C={"වම් පැත්තට වංගුව ඉදිරියෙනි"} D={"U හැඩයට හැරවිය හැකි ස්ථානය ඉදිරියෙනි"} an={"B"} ref={quizref32}></QuizComp>
                    <QuizComp num={34} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"සියලුම වාහන සදහා මාර්ගය වසා ඇත"} B={"මාර්ගය වසා ඇත"} C={"කාර් සහ යතුර්පැදි සදහා මාර්ගය වසා ඇත"} D={"කාර් සහ යතුරු පැදි ඇතුල්වීම තහනම්"} an={"A"} ref={quizref33}></QuizComp>
                    <QuizComp num={35} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"වටරවුම ඉදිරියෙනි"} B={"රථ වාහන නවත්වන්න ස්ථානය"} C={"නවතිනු"} D={"ඉදිරියෙන් නවතිනු"} an={"D"} ref={quizref34}></QuizComp>
                    <QuizComp num={36} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"ද්විත්ව රථ මාර්ගය ආරම්භය ඉදිරියෙනි"} B={"ඉදිරියෙන් මාර්ගය පටුය"} C={"ද්විත්ව රථ මාර්ගය අවසානය ඉදිරියෙනි"} D={"පටු පාලම ඉදිරියෙනි"} an={"B"} ref={quizref35}></QuizComp>
                    <QuizComp num={37} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"වේග සීමව"} B={"සාමාන්‍ය වේගය"} C={"අවම වේගය"} D={"නගර සීමව තුල වේග සීමව"} an={"D"} ref={quizref36}></QuizComp>
                    <QuizComp num={38} question={"මාර්ග සංඥා දැක්වෙන්නෙ"} A={"ඉදිරියෙන් මංසන්ධියක්"} B={"ඔත්තේ දිනවල නැවැත්වීම හා පැටවීම තහනම්"} C={"ඉරටේ දිනවල නැවැත්වීම හා පැටවීම තහනම්"} D={"නැවැත්වීම හා පැටවීම තහනම්"} an={"D"} ref={quizref37}></QuizComp>
                    <QuizComp num={39} question={"පෙන්වා ඇති රථ වාහන මාර්ග සංඥා ලාම්පු වල ඊළගට දැක්වෙන වර්ණය කුමක්ද?"} A={"කොළ"} B={"කහ"} C={"රතු සහ කහ"} D={"කහ සහ කොළ"} an={"B"} ref={quizref38}></QuizComp>
                    <QuizComp num={40} question={"මාර්ග සංඥාවෙන් දැක්වෙන්නේ"} A={"ඉදිරියෙන් එන වාහන වලට කමුඛතාවය අවසන්"} B={"ඇතුල්වීම තහනම්"} C={"වාහන ඉස්සර කිරීම තහනම්"} D={"ඉටේ දිනවල නැවැත්වීම තහනම්"} an={"C"} ref={quizref39}></QuizComp>
                    <QuizComp num={41} question={"මාර්ග සංඥාවෙන් දැක්වෙන්නේ"} A={"රටධාන මාර්ගය ඉදිරියෙනි"} B={"ඉදිරියෙන් මාර්ගය ඉඩදෙනු"} C={"ත්රිකෝණාකාර මංසන්ධිය ඉදිරියෙනි"} D={"මාර්ගය ඉඩදෙනු"} an={"B"} ref={quizref40}></QuizComp>
                    <QuizComp num={42} question={"මාර්ග සංඥාවෙන් දැක්වෙන්නේ"} A={"කලුගල් කඩන ස්ථානය ඉදිරියෙනි"} B={"අවදානම් බෑවුම ඉදිරියෙනි"} C={"මාර්ගය අලුත්වැඩියා කරන ස්ථානය ඉදිරියෙනි"} D={"ගල් පර්වත කැබලි වැටෙන ස්ථානය ඉදිරියෙනි"} an={"D"} ref={quizref41}></QuizComp>
                    <QuizComp num={43} question={"මාර්ග සංඥාවෙන් දැක්වෙන්නේ"} A={"ඉරටේ දිනවල වාහන ඇතුල්වීම තහනම්"} B={"ඉරටේ දිනවල වාහන නැවැත්වීම තහනම්"} C={"ඔත්තේ දිනවල වාහන නැවැත්වීම තහනම්"} D={"ඔත්තේ දිනවල වාහන අතුල්වීම තහනම්"} an={"D"} ref={quizref42}></QuizComp>
                    <QuizComp num={44} question={"පෙන්වා ඇති පොලිස් නිළධාරියාගේ විධානය කුමක්ද?"} A={"පසුපසින් පැමිණෙන වාහන නවතිනු"} B={"ඉදිරියෙන් හා පසුපසින් පැමිණෙන වාහන නවතිනු"} C={"ඉදිරියට එනු"} D={"නවතිනු"} an={"D"} ref={quizref43}></QuizComp>
                    <QuizComp num={45} question={"මාර්ගය මත හරස් අතට සළකුණු කර ඇති මෙම සළකුණෙන් අදහස් කරන්නේ"} A={"ඉඩදීමේ රේඛාව"} B={"රථ වාහන සංඥා ආලෝක සංඥා හෝ පොලිසියෙන් පාලනය වන මාර්ගය බෙදීයන ස්ථානයක පිහිටුවන නැවතුම් රේඛාව"} C={"නැවතීමේ සංඥාව අසල නැවතීමේ රේඛාව"} D={"“වටවංගුව” අසල ඉඩදීමේ රේඛාව"} an={"B"} ref={quizref44}></QuizComp>
                    <QuizComp num={46} question={"මාර්ගය මත හරස් අතට සළකුණු කර ඇති මෙම සළකුණෙන් අදහස් කරන්නේ"} A={"මාර්ගය බෙදීයන ස්ථානයක පිහිටුවන නැවතුම් රේඛාවයි"} B={"වට රවුමක පිහිටුවන මාර්ගය ඉඩදෙනු රේඛාව"} C={"නවතිනු සංඥාවේ පිහිටු වන නැවතීමේ රේඛාවයි"} D={" මාර්ගය ඉඩදෙනු රේඛාවයි"} an={"A"} ref={quizref45}></QuizComp>
                    <QuizComp num={47} question={"මාර්ගය මත සළකුණු කර ඇති මෙම මාර්ග සලකුණෙන් දැක්වෙන්නේ"} A={"මංතීරු සලකුණ"} B={"මාර්ගය හරහා ගමන් කිරීම තහනම් කිරීමේ ආයත රේඛාව"} C={"දකුණට හැරවීම හැර හරහා යෑම තහනම් කිරීමේ ආයත රේඛාව"} D={"මධ්යය රේඛාව"} an={"B"} ref={quizref46}></QuizComp>
                    <QuizComp num={48} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"ද්විත්ව මාර්ගය ඉදිරියෙන් ඇති බවයි"} B={"පටු පාලමකි"} C={"ඉදිරියේ මාර්ගය පටු බවයි"} D={"පටු පාලම ඉදිරියෙන් ඇති බවයි"} an={"D"} ref={quizref47}></QuizComp>
                    <QuizComp num={49} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"පදිකයන් මාරුවන ස්ථානය ඉදිරියෙන් ඇති බවයි"} B={"පදික මාරුව ඉදිරියෙන් ඇති බවයි"} C={"මගීන් මාරුවන ස්ථානයක් ඉදිරියෙන් ඇති බවයි"} D={"ළමයින් මාරුවන ස්ථානය ඉදිරියෙන් බවයි"} an={"A"} ref={quizref48}></QuizComp>
                    <QuizComp num={50} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"ඔත්තේ දින වල ඇතුල්වීම තහනම් බවයි"} B={"ඔත්තේ දින වල නැවැත්වීම තහනම් බවයි"} C={"ඇතුල්වීම තහනම් බවයි"} D={"විරුද්ධ දිශාවෙන් වාහන පැමිණිය නොහැකි බවයි"} an={"B"} ref={quizref49}></QuizComp>
                    <QuizComp num={51} question={"මෙම සලකුණෙන් පෙන්වා ඇත්තේ"} A={"රුධාන පාර ඉදිරියෙන් ඇති බවයි"} B={"කෝණාකර මංසන්දිය ඉදිරියෙන් ඇති බවයි"} C={"ඉදිරියෙන් ඉඩ දෙනු යන අදහසයි"} D={"මාර්ගය ඉඩ දෙනු යන අදහසයි"} an={"A"} ref={quizref50}></QuizComp>
                    <QuizComp num={52} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"වාහන අතුල්වීම සීමා කර ඇති බවයි"} B={"ඉදිරියෙන් ඉඩ දෙනු යන අදහසයි"} C={"ප්රරමුඛතා මාර්ගය බවයි"} D={"ප්රරමුඛතා මාර්ගයේ අවසානය බවයි"} an={"A"} ref={quizref51}></QuizComp>
                    <QuizComp num={53} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"ඉදිරියෙන් ග්රලධාන මාර්ගයට ඇතුලුවන බවයි"} B={"ඉදිරියෙන් එන වාහන වලට රටමඛතාවය දියයුතු බවයි"} C={"ඉදිරියට යන වාහන වලට ප්රනමුඛතාවය දිය යුතු බවයි"} D={"පඉදිරියෙන් පැමිණෙන වාහනයෙන් රවේශම් වන්න යන අදහසයි"} an={"A"} ref={quizref52}></QuizComp>
                    <QuizComp num={54} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"දුම්රිය ඉදිරියෙන් පැමිණිය හැකි බැවින් ප්‍රවේශම් වන්න යන්නයි"} B={"දුම්රියෙන් ග්රවේශම් විය යුතු බවයි"} C={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගයක් බවයි."} D={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය ඉදිරියෙන් බවයි"} an={"D"} ref={quizref53}></QuizComp>
                    {/*<QuizComp num={54} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"දුම්රිය ඉදිරියෙන් පැමිණිය හැකි බැවින් ප්‍රවේශම් වන්න යන්නයි"} B={"දුම්රියෙන් ග්රවේශම් විය යුතු බවයි"} C={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගයක් බවයි."} D={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය ඉදිරියෙන් බවයි"} an={"D"} ref={quizref53}></QuizComp>*/}
                    {/*<QuizComp num={54} question={"මෙම සලකුණෙන් දැක්වෙන්නේ"} A={"දුම්රිය ඉදිරියෙන් පැමිණිය හැකි බැවින් ප්‍රවේශම් වන්න යන්නයි"} B={"දුම්රියෙන් ග්රවේශම් විය යුතු බවයි"} C={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගයක් බවයි."} D={"ආරක්ෂා කර නොමැති දුම්රිය හරස් මාර්ගය ඉදිරියෙන් බවයි"} an={"D"} ref={quizref53}></QuizComp>*/}

                    <TouchableOpacity onPress={()=>{
                        let count =0;
                        if(quizref.current.checkForAnswer()==1){count=count+1;}
                        if(quizref1.current.checkForAnswer()==1){count=count+1;}
                        if(quizref2.current.checkForAnswer()==1){count=count+1;}
                        if(quizref3.current.checkForAnswer()==1){count=count+1;}
                        if(quizref4.current.checkForAnswer()==1){count=count+1;}
                        if(quizref5.current.checkForAnswer()==1){count=count+1;}
                        if(quizref6.current.checkForAnswer()==1){count=count+1;}
                        if(quizref7.current.checkForAnswer()==1){count=count+1;}
                        if(quizref8.current.checkForAnswer()==1){count=count+1;}
                        if(quizref9.current.checkForAnswer()==1){count=count+1;}
                        if(quizref10.current.checkForAnswer()==1){count=count+1;}
                        if(quizref11.current.checkForAnswer()==1){count=count+1;}
                        if(quizref12.current.checkForAnswer()==1){count=count+1;}
                        if(quizref13.current.checkForAnswer()==1){count=count+1;}
                        if(quizref14.current.checkForAnswer()==1){count=count+1;}
                        if(quizref15.current.checkForAnswer()==1){count=count+1;}
                        if(quizref16.current.checkForAnswer()==1){count=count+1;}
                        if(quizref17.current.checkForAnswer()==1){count=count+1;}
                        if(quizref18.current.checkForAnswer()==1){count=count+1;}
                        if(quizref19.current.checkForAnswer()==1){count=count+1;}
                        if(quizref20.current.checkForAnswer()==1){count=count+1;}
                        if(quizref21.current.checkForAnswer()==1){count=count+1;}
                        if(quizref22.current.checkForAnswer()==1){count=count+1;}
                        if(quizref23.current.checkForAnswer()==1){count=count+1;}
                        if(quizref24.current.checkForAnswer()==1){count=count+1;}
                        if(quizref25.current.checkForAnswer()==1){count=count+1;}
                        if(quizref26.current.checkForAnswer()==1){count=count+1;}
                        if(quizref27.current.checkForAnswer()==1){count=count+1;}
                        if(quizref28.current.checkForAnswer()==1){count=count+1;}
                        if(quizref29.current.checkForAnswer()==1){count=count+1;}
                        if(quizref30.current.checkForAnswer()==1){count=count+1;}
                        if(quizref31.current.checkForAnswer()==1){count=count+1;}
                        if(quizref32.current.checkForAnswer()==1){count=count+1;}
                        if(quizref33.current.checkForAnswer()==1){count=count+1;}
                        if(quizref34.current.checkForAnswer()==1){count=count+1;}
                        if(quizref35.current.checkForAnswer()==1){count=count+1;}
                        if(quizref36.current.checkForAnswer()==1){count=count+1;}
                        if(quizref37.current.checkForAnswer()==1){count=count+1;}
                        if(quizref38.current.checkForAnswer()==1){count=count+1;}
                        if(quizref39.current.checkForAnswer()==1){count=count+1;}
                        if(quizref40.current.checkForAnswer()==1){count=count+1;}
                        if(quizref41.current.checkForAnswer()==1){count=count+1;}
                        if(quizref42.current.checkForAnswer()==1){count=count+1;}
                        if(quizref43.current.checkForAnswer()==1){count=count+1;}
                        if(quizref44.current.checkForAnswer()==1){count=count+1;}
                        if(quizref45.current.checkForAnswer()==1){count=count+1;}
                        if(quizref46.current.checkForAnswer()==1){count=count+1;}
                        if(quizref47.current.checkForAnswer()==1){count=count+1;}
                        if(quizref48.current.checkForAnswer()==1){count=count+1;}
                        if(quizref49.current.checkForAnswer()==1){count=count+1;}
                        if(quizref50.current.checkForAnswer()==1){count=count+1;}
                        if(quizref51.current.checkForAnswer()==1){count=count+1;}
                        if(quizref52.current.checkForAnswer()==1){count=count+1;}
                        if(quizref53.current.checkForAnswer()==1){count=count+1;}
                        // if(quizref54.current.checkForAnswer()==1){count=count+1;}
                        console.log("count is :"+count);

                    }}><Text style={{color:'white'}}>Click</Text></TouchableOpacity>

                    <TouchableOpacity onPress={()=>{
                        quizref.current.refresh();
                        quizref1.current.refresh();
                        quizref2.current.refresh();
                        quizref3.current.refresh();
                        quizref4.current.refresh();
                        quizref5.current.refresh();
                        quizref6.current.refresh();
                        quizref7.current.refresh();
                        quizref8.current.refresh();
                        quizref9.current.refresh();
                        quizref10.current.refresh();
                        quizref11.current.refresh();
                        quizref12.current.refresh();
                        quizref13.current.refresh();
                        quizref14.current.refresh();
                        quizref15.current.refresh();
                        quizref16.current.refresh();
                        quizref17.current.refresh();
                        quizref18.current.refresh();
                        quizref19.current.refresh();
                        quizref20.current.refresh();
                        quizref21.current.refresh();
                        quizref22.current.refresh();
                        quizref23.current.refresh();
                        quizref24.current.refresh();
                        quizref25.current.refresh();
                        quizref26.current.refresh();
                        quizref27.current.refresh();
                        quizref28.current.refresh();
                        quizref29.current.refresh();
                        quizref30.current.refresh();
                        quizref31.current.refresh();
                        quizref32.current.refresh();
                        quizref33.current.refresh();
                        quizref34.current.refresh();
                        quizref35.current.refresh();
                        quizref36.current.refresh();
                        quizref37.current.refresh();
                        quizref38.current.refresh();
                        quizref39.current.refresh();
                        quizref40.current.refresh();
                        quizref41.current.refresh();
                        quizref42.current.refresh();
                        quizref43.current.refresh();
                        quizref44.current.refresh();
                        quizref45.current.refresh();
                        quizref46.current.refresh();
                        quizref47.current.refresh();
                        quizref48.current.refresh();
                        quizref49.current.refresh();
                        quizref50.current.refresh();
                        quizref51.current.refresh();
                        quizref52.current.refresh();
                        quizref53.current.refresh();

                    }}><Text style={{color:'white'}}>Refresh</Text></TouchableOpacity>



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
    displayMainView:{
        width:'95%',
        minHeight:100,
        backgroundColor:'#ffffff20',
        marginRight:'2.5%',
        marginLeft:'2.5%',
        borderRadius:10,
        padding:15,
    },
    headViewAvail:{
        width:'100%',
        height:40,
        backgroundColor:'#ffffff15',
        justifyContent:'center',
        alignItems:'center'
    },
    headerTopic:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    dateView:{
        marginTop:15,
        width:'100%',
        height:40,
        backgroundColor:'#ffffff08',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:15
    },
    dataViewText:{
        color:'white',
        padding:10,
    },
    buttonViewInCourse:{
        marginTop:15,
        width:'100%',
        height:60,
        // backgroundColor:'#ffffff08',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        // borderRadius:15
        padding:15
    },
    ednButton:{
        backgroundColor:'red',
        width:120,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    modBackground:{
        flex:1,
        backgroundColor:'#ffffff20',
        justifyContent:'center',
        alignItems:'center'
    },
    innerModalView:{
        width:300,
        height:250,
        backgroundColor:'#ffffff',
        borderRadius:10,
        borderColor:'red',
        borderWidth:2
    },
    warnText:{
        padding:10
    },
    warnButtonView:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    hariButton:{
        width:100,
        height:45,
        backgroundColor:'red',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    nathaButton:{
        width:100,
        height:45,
        backgroundColor:'green',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    }



})
export default TutionQuiz;
