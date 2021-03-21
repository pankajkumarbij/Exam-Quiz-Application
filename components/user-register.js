import React,{ useState, useEffect} from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, TextInput, Button, Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';

export default function UserRegister({navigation}) {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [mn, setMn]=useState("");
    const [password, setPassword]=useState("");
    const [cpassword, setCpassword]=useState("");
    useEffect(()=>{
        const myitem=firebase.database().ref("items");
        myitem.on("value", datasnap=>{
          console.log(datasnap.val());
        })
    });

    function saveitems(){
        console.log(name);
        console.log(email);
        console.log(mn);
        console.log(password);
        console.log(cpassword);
        const studentuser=firebase.database().ref("student-user");
        studentuser.push().set({
            name:name,
            email:email,
            mobile:mn,
            password:password,
            cpassword:cpassword,
            time:Date.now()
        });
    }

    return (
        <>
            <Appbar.Header style={{backgroundColor:"#7d0505"}}>
                <Appbar.Action icon="menu" onPress={()=>navigation.toggleDrawer()} />
                <Appbar.Content title="Quiz App">
                </Appbar.Content>
            </Appbar.Header>
            <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
                <View style={{width:350, height:400, justifyContent: 'center'}}>
                    <Headline style={{color:"lightgreen", marginBottom:"3%"}}>Student Register</Headline>
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