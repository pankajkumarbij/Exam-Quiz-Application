import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from 'firebase/app';
import 'firebase/database';
import { MainStackNavigator } from './navbar';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

export default function Drawers({navigation}) {

  const [email, setEmail] = useState("");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        setEmail(user.email);
    } else {
        setEmail("");
    }
  });

  function logout(){
    firebase.auth().signOut()
    .catch(error=>{
      console.log(error);
    });
  }
  
  function CustomDrawerContent1({navigation}) {
    return (
      <>
      <View style={styles.container}>
        <Button icon="home-outline" onPress={() => {navigation.navigate('Quiz App')}} color="#fff">Home</Button>
        <Button icon="format-list-bulleted-square" onPress={() => {navigation.navigate('Quiz List')}} color="#fff">Quiz List</Button>
        <Button icon="playlist-plus" onPress={() => {navigation.navigate('Create Quiz')}} color="#fff">Create Quiz</Button>
        <Button icon="email-outline" style={{width:280}} color="#fff">{email}</Button>
        <Button icon="logout" onPress={() => logout()} color="#fff">Logout</Button>
      </View>
      </>
    );
  }

  function CustomDrawerContent2({navigation}) {
    return (
      <>
      <View style={styles.container}>
        <Button icon="home-outline" onPress={() => {navigation.navigate('Quiz App')}} color="#fff">Home</Button>
        <Button icon="format-list-bulleted-square" onPress={() => {navigation.navigate('Quiz List')}} color="#fff">Quiz List</Button>
        <Button icon="login-variant" onPress={() => {navigation.navigate('User Login')}} color="#fff">Login</Button>
        <Button icon="account-plus-outline" onPress={() => {navigation.navigate('User Register')}} color="#fff">Sign Up</Button>
      </View>
      </>
    );
  }

  return (
    <>
    {email && 
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent1 {...props} />}>
          <Drawer.Screen name="Home" component={MainStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    }
    {!email && 
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent2 {...props} />}>
          <Drawer.Screen name="Home" component={MainStackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d0505',
    alignItems: 'flex-start',
    padding:'2%',
  },
});