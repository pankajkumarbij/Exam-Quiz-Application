import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Button, Card, Paragraph, RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";

export default function Attemptquiz({navigation, route}) {
  const [checked, setChecked] = useState('');
  const [marks, setMarks] = useState(0);

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

  const checkHandler = (key, ans)=>{
    if(ans==quizdata.ques[key].ans){
      setMarks(marks+1);
    }
  }

  return (
    <>
        <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
        <View style={{height:'100%',}}>
        <Card style={styles.cardstyle}>
          <Card.Title title={quizdata.quizname} subtitle={quizdata.subject}/>
        </Card>
        <ScrollView>
          {quizdata.ques.length>0 &&
          Object.keys(quizdata.ques).map(function(keyName, keyIndex) {
            return(
              <Card style={styles.cardstyle}>
                <Paragraph style={styles.question}>Q:{parseInt(keyIndex)+1} {quizdata.ques[keyName].value}?</Paragraph>
                <RadioButton.Group>
                    <RadioButton.Item label={"(a) "+quizdata.ques[keyName].option1} value={quizdata.ques[keyName].option1} status={ checked == quizdata.ques[keyName].option1 ? 'checked' : 'unchecked' } onPress={()=>checkHandler(parseInt(keyName),quizdata.ques[keyName].option1)}/>
                    <RadioButton.Item label={"(b) "+quizdata.ques[keyName].option2} value={quizdata.ques[keyName].option2} status={ checked == quizdata.ques[keyName].option2 ? 'checked' : 'unchecked' } onPress={()=>checkHandler(parseInt(keyName),quizdata.ques[keyName].option2)}/>
                    <RadioButton.Item label={"(c) "+quizdata.ques[keyName].option3} value={quizdata.ques[keyName].option3} status={ checked == quizdata.ques[keyName].option3 ? 'checked' : 'unchecked' } onPress={()=>checkHandler(parseInt(keyName),quizdata.ques[keyName].option3)}/>
                    <RadioButton.Item label={"(d) "+quizdata.ques[keyName].option4} value={quizdata.ques[keyName].option4} status={ checked == quizdata.ques[keyName].option4 ? 'checked' : 'unchecked' } onPress={()=>checkHandler(parseInt(keyName),quizdata.ques[keyName].option4)}/>
                </RadioButton.Group>
              </Card>
            )
          })
          }
        </ScrollView>
          <Button mode="contained" style={{width:'100%',marginTop:'4%'}} onPress={() => navigation.navigate('Result',{marks: marks, quizdata:quizdata})} color="#FF0099" >Finish Quiz</Button>
      </View>
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
    marginBottom: '4%',
    padding: '4%'
  },
  question: {
    marginTop: '1%',
    padding: '4%'
  },
});
