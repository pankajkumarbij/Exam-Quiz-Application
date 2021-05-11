import React,{ useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";

export default function CreateQuiz({navigation}) {
    const [loginuser, setLoginuser]=useState("");
    const [name, setName]=useState("");
    const [subject, setSubject]=useState("");
    const [description, setDescription]=useState("");
    const [inputs, setInputs] = useState([{key: '', value: '', option1: '', option2: '', option3: '', option4: '', ans: ''}]);
    
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setLoginuser(user);
            } else {
                navigation.navigate("Home");
            }
        });
    });

    const addHandler = ()=>{
        const _inputs = [...inputs];
        _inputs.push({key: '', value: ''});
        setInputs(_inputs);
    }
    
    const deleteHandler = (key)=>{
        const _inputs = inputs.filter((input,index) => index != key);
        setInputs(_inputs);
    }

    const inputHandler = (text, key, option1, option2, option3, option4, ans)=>{
        const _inputs = [...inputs];
        _inputs[key].key = key;
        if(text)
        {
            _inputs[key].value = text;
        }
        if(option1)
        {
            _inputs[key].option1 = option1;
        }
        if(option2)
        {
            _inputs[key].option2 = option2;
        }
        if(option3)
        {
            _inputs[key].option3 = option3;
        }
        if(option4)
        {
            _inputs[key].option4 = option4;
        }
        if(ans)
        {
            _inputs[key].ans = ans;
        }
        setInputs(_inputs);
    }

    function saveitems(){
        const quizes=firebase.database().ref("quiz");
        quizes.push().set({
            creater:loginuser.email,
            quizname:name,
            subject:subject,
            description:description,
            ques:inputs,
            time:Date.now()
        });
    }

    return (
        <>
            <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
            <Text style={{color:"lightgreen", marginBottom:"3%", alignSelf:'center', fontSize:30, fontWeight:'700'}}>Create Quiz</Text>
            <ScrollView>
                <View style={{width:390, height:'100%'}}>
                    <TextInput label="Quiz Name" value={name} onChangeText={name => setName(name)} style={{marginTop:'3%'}} />
                    <TextInput label="Subject" value={subject} onChangeText={subject => setSubject(subject)} style={{marginTop:'3%'}} />
                    <TextInput label="Description" multiline value={description} onChangeText={description => setDescription(description)} style={{marginTop:'3%'}} />
                    {inputs.map((input, key)=>(
                        <View>
                            <TextInput label="question" multiline value={input.value}  onChangeText={(text)=>inputHandler(text,key,'','','','','')} style={{marginTop:'3%'}} />
                            <TextInput label="option 1" value={input.option1} onChangeText={(option1)=>inputHandler('',key,option1,'','','','')} />
                            <TextInput label="option 2" value={input.option2} onChangeText={(option2)=>inputHandler('',key,'',option2,'','','')} />
                            <TextInput label="option 3" value={input.option3} onChangeText={(option3)=>inputHandler('',key,'','',option3,'','')} />
                            <TextInput label="option 4" value={input.option4} onChangeText={(option4)=>inputHandler('',key,'','','',option4,'')} />
                            <TextInput label="answer" value={input.ans} onChangeText={(ans)=>inputHandler('',key,'','','','',ans)} />
                            <IconButton icon="minus-circle" size={30} color="red" onPress={()=> deleteHandler(key)} />
                        </View>
                    ))}
                    <View style={styles.row}>
                      <IconButton icon="plus-circle" size={30} color="#73d216" onPress={()=> addHandler()}  />
                    </View>
                </View>
            </ScrollView>
            <Button mode="contained" onPress={()=> saveitems()} style={{width: 390, marginTop:'3%', marginBottom:'3%'}} color="#FF0099" >Create Quiz</Button>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        top: -60,
    },
  });
