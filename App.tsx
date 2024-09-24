import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, TouchableOpacity, Pressable, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FlexBox from './components/flex.box';

import AntDesign from '@expo/vector-icons/AntDesign';

interface ITodo {
  id: number,
  name: string
}




export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Mặc cái quần", "Todo không được để trống", [
        {
          text: "Huỷ",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Xác nhận", onPress: () => console.log("OK pressed")
        }
      ]);
      return;
    }
    setListTodo([...listTodo, {id: randomInteger(2, 2000000), name: todo}]);
    setTodo("");
  }


  const deleteTodo = (id: number) => {
    let newTodos = listTodo.filter(item => item.id !== id)
    setListTodo(newTodos);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Todo app</Text>
        
        {/* form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button
            title="Add todo"
            onPress={handleAddTodo}
          />
        </View>

        {/* list todo */}
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id + ""}
            renderItem={
              ({item}) => {
                console.log(item)
                return (
                  <Pressable
                    onPress={() => deleteTodo(item.id)}
                    style={({pressed}) => ({opacity: pressed ? 0.5 : 1})}
                  >
                    <View style={styles.groupTodo}>
                      <Text style={styles.todoItem}>{item.name}</Text>
                      <AntDesign name="close" size={24} color="black" />
                    </View>
                  </Pressable>
                )
              }
            }
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
    // flex: 1
  },
  form: {
    // flex: 2
    marginBottom: 20
  },
  todo: {
    flex: 1
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    marginHorizontal: 15,
    padding: 5,
    margin: 15
  },
  todoItem: {
    fontSize: 20,
    
    // marginBottom: 20,
    // padding: 10
  },
  body: {
    marginBottom: 20,
    paddingHorizontal: 10,
    flex: 1
  },
  groupTodo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "dashed",
    alignItems : "center",
    marginBottom: 15,
    padding: 15,
    marginHorizontal: 10
  }
});
