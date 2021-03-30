import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Paragraph, RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";

export default function Attemptquiz({navigation, route}) {
  const [checked, setChecked] = useState('');

  const {quizdata}=route.params;

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Attempt Quiz");
      } else {
        navigation.navigate("User Login");
      }
    });
  });

  return (
    <>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Card.Title title={quizdata.quizname} subtitle={quizdata.subject}/>
        </Card>
          {quizdata.ques.length>0 &&
          Object.keys(quizdata.ques).map(function(keyName, keyIndex) {
            return(
              <Card style={styles.cardstyle}>
                <Paragraph style={styles.question}>Q:{parseInt(keyIndex)+1} {quizdata.ques[keyName].value}?</Paragraph>
                <RadioButton.Group>
                    <RadioButton.Item label={quizdata.ques[keyName].option1} value={quizdata.ques[keyName].option1} status={ checked == quizdata.ques[keyName].option1 ? 'checked' : 'unchecked' } onPress={() => setChecked(quizdata.ques[keyName].option1)}/>
                    <RadioButton.Item label={quizdata.ques[keyName].option2} value={quizdata.ques[keyName].option2} status={ checked == quizdata.ques[keyName].option2 ? 'checked' : 'unchecked' } onPress={() => setChecked(quizdata.ques[keyName].option2)}/>
                    <RadioButton.Item label={quizdata.ques[keyName].option3} value={quizdata.ques[keyName].option3} status={ checked == quizdata.ques[keyName].option3 ? 'checked' : 'unchecked' } onPress={() => setChecked(quizdata.ques[keyName].option3)}/>
                    <RadioButton.Item label={quizdata.ques[keyName].option4} value={quizdata.ques[keyName].option4} status={ checked == quizdata.ques[keyName].option4 ? 'checked' : 'unchecked' } onPress={() => setChecked(quizdata.ques[keyName].option4)}/>
                </RadioButton.Group>
              </Card>
            )
          })
          }
          {quizdata.ques.length==0 &&
            <ActivityIndicator size="large" color="#00ff00" />
          }
      <Card style={{marginTop: '5%'}}>
        <Card.Actions>
          <Button mode="contained" style={{width:'100%'}} onPress={() => navigation.navigate('Result')}>Finish Quiz</Button>
        </Card.Actions>
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
    padding: '5%'
  },
  question: {
    marginTop: '1%',
    padding: '5%'
  },
});