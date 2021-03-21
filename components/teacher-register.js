import React,{ useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, TextInput, Button, Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function TeacherRegister({navigation}) {
    const [text, setText]=useState("");
    return (
        <>
            <Appbar.Header style={{backgroundColor:"#7d0505"}}>
                <Appbar.Action icon="menu" onPress={()=>navigation.toggleDrawer()} />
                <Appbar.Content title="Quiz App">
                </Appbar.Content>
            </Appbar.Header>
            <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
                <View style={{width:350, height:400, justifyContent: 'center'}}>
                    <Headline style={{color:"lightgreen", marginBottom:"3%"}}>Teacher Register</Headline>
                    <TextInput label="Name" value={text} onChangeText={text => setText(text)} style={{marginTop:'3%'}} />
                    <TextInput label="Email" value={text} onChangeText={text => setText(text)} style={{marginTop:'3%'}} />
                    <TextInput label="Mobile No" value={text} onChangeText={text => setText(text)} style={{marginTop:'3%'}} />
                    <TextInput label="Password" value={text} onChangeText={text => setText(text)} style={{marginTop:'3%'}} />
                    <TextInput label="Confirm Password" value={text} onChangeText={text => setText(text)} style={{marginTop:'3%', marginBottom:'3%'}} />
                    <Button mode="contained" >Register</Button>
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