import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}) {
  const homeimg1 = require('../assets/img2.png');

  return (
    <>
        <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
          <Image style={styles.homeimg} source={homeimg1} />
          <Text style={styles.texts}>Practice and test your skills by attempting many different types of quizzes according to your subject.</Text>
          <Button icon="arrow-right" mode="contained" style={{margin:'7%'}} onPress={() => navigation.navigate('Quiz List')} color="#FF0099" >Attempt a Quiz</Button>
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
    height: 400,
  },
  texts: {
    fontSize: 20,
    padding: '5%',
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'white'
  }
});
