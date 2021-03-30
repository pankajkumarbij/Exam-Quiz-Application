import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function QuizResult({navigation}) {
  return (
    <>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Card.Title title="Quiz Name Result" subtitle="Author name"/>
          <Card.Content>
            <Paragraph>Result: 200/300</Paragraph>
            <Paragraph>Status: Passed/Failed</Paragraph>
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