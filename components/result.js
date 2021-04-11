import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function QuizResult({navigation,route}) {
  const {marks, quizdata}=route.params;
  const percent=100*marks/quizdata.ques.length;
  var status="";
  if(percent<30){
    status="Very Poor";
  }
  else if(percent<50){
    status="Poor";
  }
  else if(percent<80){
    status="Good";
  }
  else{
    status="Very Good";
  }
  return (
    <>
        <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Card.Title title={quizdata.quizname} subtitle={quizdata.subject}/>
          <Card.Content>
            <Paragraph>Result: {marks}</Paragraph>
            <Paragraph>percent: {percent}%</Paragraph>
            <Paragraph>Status: {status}</Paragraph>
          </Card.Content>
        </Card>
        </ScrollView>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  cardstyle: {
    marginTop: '5%',
  },
});