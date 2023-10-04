import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
  return (
    <View style={styles.todoContainer} >
      <TouchableOpacity>
        <View style={styles.itemContainer} >
          <MaterialIcons onPress={() => pressHandler(item.key)} name="delete" size={24} color="black" />
          <Text style={styles.item}>
          {item.text}
        </Text>
        </View>
        
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 20,
     borderWidth: 1,
    borderColor: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
     borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 10
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
    // borderRadius: 7,
    // borderWidth: 1,
    // borderColor: 'black',
    // borderStyle: 'dashed',
    // backgroundColor: 'orange'
  }
})