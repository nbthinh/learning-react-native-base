import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    // paddingTop: 40,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
  },
});
const AppHeader = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={[styles.headerText, globalStyles.globalFont]}>
        Hoidanit App
      </Text>
    </View>
  );
};

export default AppHeader;
