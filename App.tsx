import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Mặc cái quần 1", age: 18, key: "1" },
    { id: 2, name: "Mặc cái quần 2", age: 19 },
    { id: 3, name: "Mặc cái quần 3", age: 20 },
    { id: 4, name: "Mặc cái quần 4", age: 21 },
    { id: 5, name: "Mặc cái quần 5", age: 22 },
    { id: 6, name: "Mặc cái quần 6", age: 23 },
    { id: 7, name: "Mặc cái quần 7", age: 24 },
    { id: 8, name: "Mặc cái quần 8", age: 18 },
    { id: 9, name: "Mặc cái quần 9", age: 18 },
    { id: 10, name: "Mặc cái quần 10", age: 18 },
  ])
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 60}}>Hello world</Text>
      <FlatList
        keyExtractor={item => item.id + ""}
        data={students}
        numColumns={2}
        renderItem={({item, index, separators}) => {
          return (
            <View style={{
              backgroundColor: "pink",
              marginBottom: 35,
              padding: 35,
              marginHorizontal: 35
            }}>
              <Text>{item.name}</Text>
            </View>
          )
        }}
      />
      {/* <ScrollView>
        { students.map(item => {
          return (
            <View style={{
              backgroundColor: "pink",
              marginBottom: 35,
              padding: 35,
            }}>
              <Text key={item.id}>{item.name}</Text>
            </View>
          )
        }) }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
