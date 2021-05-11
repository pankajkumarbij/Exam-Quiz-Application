import React,{ useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TextInput, Button, Dialog, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";

export default function UserLogin({navigation}) {
	const login = require('../assets/login.png');

    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [error,setError]= useState('');
   	const [visible, setVisible] = useState(false);
   	
   	const hideDialog = () => setVisible(false);
    
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
            navigation.navigate("Home");
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            setError(error.message);
			setVisible(true);
        });
    }
    
    return (
        <>
            <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
            	<View style={{width:380, height:'80%'}}>
                	<Image style={styles.loginimg} source={login} />
                    <Text style={{color:"lightgreen", marginBottom:"3%", alignSelf:'center', fontSize:30, fontWeight:'700'}}>User Login</Text>
                    <TextInput label="Email" value={email} onChangeText={email => setEmail(email)} style={{marginTop:'3%'}}/>
                    <TextInput label="Password" secureTextEntry={true} value={password} onChangeText={password => setPassword(password)} style={{marginTop:'3%', marginBottom:'3%'}} />
                    <Button mode="contained" onPress={()=> loginitems()} color="#FF0099" >Login</Button>
                    {error==="The password is invalid or the user does not have a password." &&
					   <Dialog visible={visible} onDismiss={hideDialog}>
						<Dialog.Title>Alert</Dialog.Title>
						<Dialog.Content>
						  <Paragraph>The email or password is invalid.</Paragraph>
						</Dialog.Content>
						<Dialog.Actions>
						  <Button onPress={hideDialog}>OK</Button>
						</Dialog.Actions>
					  </Dialog>
					}
					{error==="The email address is badly formatted." || error==="There is no user record corresponding to this identifier. The user may have been deleted." &&
						<Dialog visible={visible} onDismiss={hideDialog}>
						<Dialog.Title>Alert</Dialog.Title>
						<Dialog.Content>
						  <Paragraph>The email or password is invalid.</Paragraph>
						</Dialog.Content>
						<Dialog.Actions>
						  <Button onPress={hideDialog}>OK</Button>
						</Dialog.Actions>
					  </Dialog>
					}
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
    loginimg: {
		width: 250,
		height: 250,
		alignSelf: 'center'
  	},
  });
