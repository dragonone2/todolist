import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import test from './components/test';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoListItem from './components/TodoListItem';
import React, { useState } from 'react'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName = 'test'
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="test" component={test} />
        <Stack.Screen name="TodoInsert" component={TodoInsert} />
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name = "TodoListItem" component={TodoListItem}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}