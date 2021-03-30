import React,{ useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";

export default function UserLogin({navigation}) {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Home");
            } else {
                navigation.navigate("User Login");
            }
        });
    });

    function loginitems(){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
                <View style={{width:350, height:400, justifyContent: 'center'}}>
                    <Headline style={{color:"lightgreen", marginBottom:"3%"}}>User Login</Headline>
                    <TextInput label="Email" value={email} onChangeText={email => setEmail(email)} style={{marginTop:'3%'}} />
                    <TextInput label="Password" secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} style={{marginTop:'3%', marginBottom:'3%'}} />
                    <Button mode="contained" onPress={()=> loginitems()} >Login</Button>
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