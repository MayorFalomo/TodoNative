import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/Todoitem';
import Addtodo from './components/Addtodo';

export default function App() {

   const [todos, setTodos] = useState([
    {
      text: 'Buy me a Coffee',
      key: '1'
    },
    {
      text: 'Create an APP',
      key: '2'
    },
    {
      text: 'Go to school',
      key: '3'
    }
  ])


  //Touchable component for deleting items from an array
  const pressHandler = (item) => {
    console.log(item.text);
    setTodos((prevTodo) => {
      return prevTodo.filter(todo => todo.key !== item)
    })
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodo) => {
        return [
          {
            text: text,
            key: Math.random().toString()
          },
          ...prevTodo
        ]
      })
    } 
    else {
      Alert.alert('OOPS!', "Todos must be 3 characters long", [
        {
          text: "understood",
          onPress: () => console.log("alert closed")
        }
      ])
    }
    }


  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); console.log(); } } >
    <View style={styles.container}>
      <Header/>
      <View style={styles.content} >
        <Addtodo submitHandler={submitHandler} />
        <View style={styles.list}>
         <FlatList data={todos} renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler}  />
          )} />
        </View>
      </View>
      </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    },
  list: {
    flex: 1,
     borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'yellow',
  }
});
