import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}) {
  const homeimg1 = require('../assets/img2.png');
  return (
    <>
        <Appbar.Header style={{backgroundColor:"#7d0505"}}>
          <Appbar.Action icon="menu" onPress={()=>navigation.toggleDrawer()} />
          <Appbar.Content title="Quiz App">
          </Appbar.Content>
        </Appbar.Header>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
          <Image style={styles.homeimg} source={homeimg1} />
          <Text style={styles.texts}>Practice and test your skills by attempting many different types of quizzes according to your subject.</Text>
          <Button icon="arrow-right" mode="contained" style={{margin:20}} onPress={() => navigation.navigate('Quiz List')}>Attempt a Quiz</Button>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeimg: {
    width: '100%',
    height: 370,
  },
  texts: {
    fontSize: 20,
    padding: 30,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'white'
  }
});
