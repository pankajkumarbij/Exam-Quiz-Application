import React,{ useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';
import { Button, Card, Paragraph, Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

export default function Quizlist({navigation}) {

  const [data, setData]=useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const onChangeSearch = query => setSearchQuery(query);

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
        <LinearGradient colors={['#FF0099', '#4A00E0']} style={styles.container}>
        <View style={{height:'98%',}}>
    	<Searchbar
		  placeholder="Search Subject or Title"
		  onChangeText={onChangeSearch}
		  value={searchQuery}
		  style={{marginBottom:"4%"}}
		/>
        <ScrollView>
        {data.length>0 &&
          Object.keys(data).map(function(keyName, keyIndex) {
          	if(data[keyName].subject.toUpperCase().search(searchQuery.toUpperCase())!=-1 || data[keyName].quizname.toUpperCase().search(searchQuery.toUpperCase())!=-1){
		        return(
		          <Card style={styles.cardstyle}>
		            <Card.Title title={data[keyName].quizname} subtitle={data[keyName].subject}/>
		            <Card.Content>
		              <Paragraph>{data[keyName].description}</Paragraph>
		            </Card.Content>
		            <Card.Actions>
		              <Button mode="contained" style={{width:'100%'}} onPress={() => navigation.navigate('Attempt Quiz',{quizdata: data[keyIndex]})} color="#FF0099">Go to Quiz</Button>
		            </Card.Actions>
		          </Card>  
		        )
            }
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
    marginBottom: '4%',
  },
});
