import React,{ useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserLogin() {
    const [text, setText]=useState("");
    return (
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
            <View style={{width:350, height:400, justifyContent: 'center'}}>
                <Headline style={{color:"lightgreen", marginBottom:"3%"}}>Student Login</Headline>
                <TextInput label="Email" value={text} onChangeText={text => setText(text)} />
                <TextInput label="Password" value={text} onChangeText={text => setText(text)} style={{marginTop:'3%', marginBottom:'3%'}} />
                <Button mode="contained" >Login</Button>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });