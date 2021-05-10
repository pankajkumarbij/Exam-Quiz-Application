import React,{ useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TextInput, Button, RadioButton, Card, IconButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import 'firebase/database';

export default function UserRegister({navigation}) {
	const register = require('../assets/register.png');

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
    const [password, setPassword]=useState("");
    const [cpassword, setCpassword]=useState("");

    function saveitems(){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            const users=firebase.database().ref("users");
            users.push().set({
                name:name,
                email:email,
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
            <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
                <View style={{width:380, height:'100%'}}>
                	<Image style={styles.registerimg} source={register} />
                    <Text style={{color:"lightgreen", marginBottom:"3%", alignSelf:'center', fontSize:30, fontWeight:'700'}}>User Register</Text>
                    <TextInput label="Name" value={name} onChangeText={name => setName(name)} style={{marginTop:'3%'}} />
                    <TextInput label="Email" value={email} onChangeText={email => setEmail(email)} style={{marginTop:'3%'}} />
                    <TextInput label="Password" secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} style={{marginTop:'3%'}} />
                    <TextInput label="Confirm Password" secureTextEntry={true} value={cpassword} onChangeText={cpassword => setCpassword(cpassword)} style={{marginTop:'3%', marginBottom:'3%'}} />
                    <Button mode="contained" onPress={()=> saveitems()} color="#FF0099" >Register</Button>
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
    registerimg: {
		width: 250,
		height: 300,
		alignSelf: 'center'
  	},
  });
