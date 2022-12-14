import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="일정 입력"
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'추가'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 5,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;