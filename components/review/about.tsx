import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../../utils/const";
const styles = StyleSheet.create({
  about: {
    fontSize: 30,
  },
  about1: {
    fontSize: 20,
  },
});
const AboutScreen = () => {
  return (
    <View>
      <Text style={[styles.about, globalStyles.globalFont]}>
        Mình lớn tuổi hơn thằng Võ Nhật Nam, thế nhưng nó dám sai bảo mình
      </Text>
      <Text style={[styles.about1, globalStyles.globalFont]}>Content</Text>
    </View>
  );
};

export default AboutScreen;
