import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserLogin from './user-login';
import UserRegister from './user-register';
import Home from './home';
import TeacherLogin from './teacher-login';
import TeacherRegister from './teacher-register';
import Quizlist from './quizlist';
import Attemptquiz from './attemptquiz';
import QuizResult from './result';

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Quiz List" component={Quizlist} />
        <Drawer.Screen name="Attempt Quiz" component={Attemptquiz} />
        <Drawer.Screen name="Result" component={QuizResult} />
        <Drawer.Screen name="User Login" component={UserLogin} />
        <Drawer.Screen name="User Register" component={UserRegister} />
        <Drawer.Screen name="Teacher Login" component={TeacherLogin} />
        <Drawer.Screen name="Teacher Register" component={TeacherRegister} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}
