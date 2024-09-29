import { View, Text, StyleSheet, Button } from "react-native";
import { OPENSANS_REGULAR, globalStyles } from "../../utils/const";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
  reviewText: {
    fontSize: 25,
    fontFamily: OPENSANS_REGULAR,
    padding: 15,
  },
});

const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();
  console.log();
  return (
    <View>
      <Text style={styles.reviewText}>{route.params?.id}</Text>
      <Text style={styles.reviewText}>{route.params?.star}</Text>
      <Text style={styles.reviewText}>{route.params?.title}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
};

export default DetailScreen;
