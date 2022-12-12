import React, {useState} from 'react';
import TodoList from './components/TodoList';
import {SafeAreaView, View, Text, StyleSheet, ImageBackground} from 'react-native';
import TodoInsert from './components/TodoInsert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  // todos: {id: Number, textValue: string, checked: boolean }
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };
  const [startDate, setStartDate] = useState(new Date());
  const todayTime = ()=>{
    let now = new Data();
  }
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={require("C:/Users/강현호/Desktop/개인프로젝트/GP/assets/back.jpg")} style={styles.bgImage}>
      <Text style={styles.appTitle}>To do List</Text>
      <View style={styles.card} >
      <DatePicker style={styles.date} selected={startDate} onChange={date => setStartDate(date)} />
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
    alignItems: 'center',
  },
  date: {
    alignItems: 'center',
  },
  bgImage: {
    width: '100%', 
    height: '100%',
    alignItems: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    width:800,
  },
});

export default App;