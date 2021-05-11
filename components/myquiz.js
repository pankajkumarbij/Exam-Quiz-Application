import React,{ useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

export default function MyQuiz({navigation}) {

  const [data, setData]=useState([]);
  const [key, setKey]=useState([]);
  const [email, setEmail] = useState("");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        setEmail(user.email);
    } else {
        setEmail("");
    }
  });
  
  useEffect(()=>{
    const quizeslist=firebase.database().ref('quiz');
    quizeslist.once('value',datasnap=>{
      var keys=[];
      var datas=[];
      datasnap.forEach((data)=>{
      	if(data.val().creater===email){
      		keys.push(data.key);
      		datas.push(data.val());
      	}
      })
      setData(datas);
      setKey(keys);
    })
  })
  
  function deletequiz(delkey){
  	const deletes = firebase.database().ref('quiz/'+delkey);
    deletes.remove();
  }

  return (
    <>
        <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
        <View style={{height:'98%',}}>
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
                	<Button icon="delete" mode="contained" style={{width:'45%'}} onPress={() => deletequiz(key[keyIndex])} color="#cc0000">Delete</Button>
                  <Button icon="eye" mode="contained" style={{marginLeft:'10%',width:'45%'}} onPress={() => navigation.navigate('Attempt Quiz',{quizdata: data[keyIndex]})} color="#73d216">View</Button>
                </Card.Actions>
              </Card>  
            )
          })
        }
        {data.length==0 &&
           <ActivityIndicator size="large" color="#00ff00" />
        }
        </ScrollView>
        </View>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '3%',
  },
  cardstyle: {
    marginTop: '4%',
  },
});
