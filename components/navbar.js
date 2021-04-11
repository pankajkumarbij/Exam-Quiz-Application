import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./home";
import Attemptquiz from "./attemptquiz";
import QuizResult from "./result";
import { Button } from "react-native-paper";
import Quizlist from "./quizlist";
import UserLogin from "./user-login";
import UserRegister from "./user-register";
import CreateQuiz from "./createquiz";

const Stack = createStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#ee0979",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }}>
        <Stack.Screen name="Quiz App" component={Home} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Quiz List" component={Quizlist} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="User Login" component={UserLogin} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="User Register" component={UserRegister} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Create Quiz" component={CreateQuiz} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Attempt Quiz" component={Attemptquiz} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
        <Stack.Screen name="Result" component={QuizResult} options={{
        headerLeft:()=>(
          <Button icon="menu" onPress={()=>navigation.toggleDrawer()} color="#fff" />
        ),
        }}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };