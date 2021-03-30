import React,{ useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, TextInput, Button, RadioButton, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';

export default function UserRegister({navigation}) {

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Home");
            } else {
                navigation.navigate("User Register");
            }
        });
    });
  
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [mn, setMn]=useState("");
    const [password, setPassword]=useState("");
    const [cpassword, setCpassword]=useState("");
    const [checked, setChecked] = useState("student");

    function saveitems(){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            const users=firebase.database().ref("users");
            users.push().set({
                name:name,
                email:email,
                mobile:mn,
                usertype:checked,
                password:password,
                cpassword:cpassword,
                time:Date.now()
            });
        })
        .then(() => {
            navigation.navigate("User Login");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);name
        });
    }
    
    return (
        <>
            <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
                <View style={{width:350, height:400, justifyContent: 'center'}}>
                    <Headline style={{color:"lightgreen", marginBottom:"3%"}}>User Register</Headline>
                    <Card>
                        <RadioButton.Group>
                            <RadioButton.Item label="Student" value="student" status={ checked === 'student' ? 'checked' : 'unchecked' } onPress={() => setChecked('student')} />
                            <RadioButton.Item label="Teacher" value="teacher" status={ checked === 'teacher' ? 'checked' : 'unchecked' } onPress={() => setChecked('teacher')} />
                        </RadioButton.Group>
                    </Card>
                    <TextInput label="Name" value={name} onChangeText={name => setName(name)} style={{marginTop:'3%'}} />
                    <TextInput label="Email" value={email} onChangeText={email => setEmail(email)} style={{marginTop:'3%'}} />
                    <TextInput label="Mobile No" value={mn} onChangeText={mn => setMn(mn)} style={{marginTop:'3%'}} />
                    <TextInput label="Password" secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} style={{marginTop:'3%'}} />
                    <TextInput label="Confirm Password" secureTextEntry={true} value={cpassword} onChangeText={cpassword => setCpassword(cpassword)} style={{marginTop:'3%', marginBottom:'3%'}} />
                    <Button mode="contained" onPress={()=> saveitems()} >Register</Button>
                </View>
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
  });