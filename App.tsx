import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>
          Hello world
        </Text>
        <Text style={styles.parent}>
          Mặc cái quần 
          <Text style={styles.child}>bla bla</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>Mặc cái quần 1</Text>
      <Text>Mặc cái quần 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: 'red',
    fontSize: 60,
    borderColor: "green",
    borderWidth: 2,
    borderStyle: "dotted",
    padding: 10
  },
  header: {
    fontSize: 35,
    fontWeight: "bold"
  },
  parent: {
    fontSize: 60,
    color: "green"
  },
  child: {
    fontSize: 35,
    color: "pink"
  }
});
