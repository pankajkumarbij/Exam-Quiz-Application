import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Paragraph, RadioButton } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export default function Attemptquiz() {
  const [checked, setChecked] = React.useState('first');
  return (
    <>
        <LinearGradient colors={['#8E60D9', '#E31748']} style={styles.container}>
        <ScrollView>
        <Card style={styles.cardstyle}>
          <Card.Title title="Quiz Name" subtitle="Author name"/>
          <Card.Content>
            <Paragraph style={styles.question}>Q:1 First question description and details for selecting a valid option?</Paragraph>
            <RadioButton.Group>
                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
                <RadioButton.Item label="First item" value="third forth" />
                <RadioButton.Item label="Second item" value="second" />
            </RadioButton.Group>
            <Paragraph style={styles.question}>Q:2 Second question description and details for selecting a valid option?</Paragraph>
            <RadioButton.Group>
                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
                <RadioButton.Item label="First item" value="third forth" />
                <RadioButton.Item label="Second item" value="second" />
            </RadioButton.Group>
            <Paragraph style={styles.question}>Q:3 Third question description and details for selecting a valid option?</Paragraph>
            <RadioButton.Group>
                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
                <RadioButton.Item label="First item" value="third forth" />
                <RadioButton.Item label="Second item" value="second" />
            </RadioButton.Group>
            <Paragraph style={styles.question}>Q:4 Forth question description and details for selecting a valid option?</Paragraph>
            <RadioButton.Group>
                <RadioButton.Item label="First item" value="first" />
                <RadioButton.Item label="Second item" value="second" />
                <RadioButton.Item label="First item" value="third forth" />
                <RadioButton.Item label="Second item" value="second" />
            </RadioButton.Group>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" style={{width:'100%'}}>Finish Quiz</Button>
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
  question: {
    marginTop: '1%',
  },
});