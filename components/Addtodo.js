import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

export default function Addtodo({item, pressHandler, submitHandler}) {

  const [text, setText] = useState('')
  const changeHandler = (e) => {
    setText(e)
  }

  // console.log(text)

  return (
    <View>
      <TextInput
        onChangeText={changeHandler}
        placeholder="Enter a Todo"
        style={styles.input}
      />
      <Button onPress={() => submitHandler(text) } title='Add Todo' />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
  marginBottom: 10,
    paddingHorizontal: 10,
  paddingVertical: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})