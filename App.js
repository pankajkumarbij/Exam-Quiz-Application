import React from 'react';
import Drawers from './components/drawer';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default function App() {
  return (
    <>
      <Drawers/>
    </>
  )
};
