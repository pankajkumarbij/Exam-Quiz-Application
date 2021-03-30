import React from 'react';
import Drawers from './components/drawer';
import firebase from 'firebase/app';
import { firebaseConfig } from './config';

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default function App() {
  return (
    <>
      <Drawers/>
    </>
  )
};
