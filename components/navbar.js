import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Navbar() {
  return (
    <>
        <Appbar.Header style={{backgroundColor:"#7d0505"}}>
          <Appbar.Action icon="menu"/>
          <Appbar.Content title="Quiz App">
          </Appbar.Content>
        </Appbar.Header>
    </>
  );
}
