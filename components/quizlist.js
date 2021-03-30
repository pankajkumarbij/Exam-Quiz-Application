import React,{ useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

export default function Quizlist({navigation}) {

  const [data, setData]=useState([]);

  useEffect(()=>{
    const quizeslist=firebase.database().ref('quiz');
    quizeslist.once('value',datasnap=>{
      var datas=[];
      datasnap.forEach((data)=>{
        datas.push(data.val());
      })
      setData(datas);
    })
  })

  return (
    <>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
        <ScrollView>
        {data.length>0 &&
          Object.keys(data).map(function(keyName, keyIndex) {
            return(
              <Card style={styles.cardstyle}>
                <Card.Title title={data[keyName].quizname} subtitle={data[keyName].subject}/>
                <Card.Content>
                  <Paragraph>{data[keyName].description}</Paragraph>
                </Card.Content>
                <Card.Actions>
                  <Button mode="contained" style={{width:'100%'}} onPress={() => navigation.navigate('Attempt Quiz',{quizdata: data[keyIndex]})}>Go to Quiz</Button>
                </Card.Actions>
              </Card>  
            )
          })
        }
        {data.length==0 &&
           <ActivityIndicator size="large" color="#00ff00" />
        }
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
