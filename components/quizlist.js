import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Paragraph, Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Quizlist({navigation}) {
  return (
    <>
        <Appbar.Header style={{backgroundColor:"#7d0505"}}>
          <Appbar.Action icon="menu" onPress={()=>navigation.toggleDrawer()} />
          <Appbar.Content title="Quiz App">
          </Appbar.Content>
        </Appbar.Header>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Card.Title title="Quiz Name" subtitle="Author name"/>
          <Card.Content>
            <Paragraph>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" style={{width:'100%'}} onPress={() => navigation.navigate('Attempt Quiz')}>Go to Quiz</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.cardstyle}>
          <Card.Title title="Quiz Name" subtitle="Author name"/>
          <Card.Content>
            <Paragraph>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" style={{width:'100%'}}>Go to Quiz</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.cardstyle}>
          <Card.Title title="Quiz Name" subtitle="Author name"/>
          <Card.Content>
            <Paragraph>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" style={{width:'100%'}}>Go to Quiz</Button>
          </Card.Actions>
        </Card>
        <Card style={styles.cardstyle}>
          <Card.Title title="Quiz Name" subtitle="Author name"/>
          <Card.Content>
            <Paragraph>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present.</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" style={{width:'100%'}}>Go to Quiz</Button>
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
  },
});
