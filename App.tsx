import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{ fontSize: 40, fontWeight: "600" }}
        >Name: {name}</Text>
        <TextInput
          multiline
          autoCapitalize={"words"}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }} 
          onChangeText={(value) => setName(value)}
        />
      </View>

      <View>
        <Text
          style={{ fontSize: 40, fontWeight: "600" }}
        >Age: {age}</Text>
        <TextInput
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }} 
          onChangeText={(value) => setAge(+value)}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

      <Text style={{ fontSize: 40, fontWeight: "600" }}>
        count = {count}
      </Text>
      <View>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
