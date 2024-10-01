import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { OPENSANS_REGULAR, globalStyles } from "../../utils/const";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import starIcon from "../../assets/images/star.png";
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

const DetailScreen = ({ navigation, route }: any) => {
  // const navigation: NavigationProp<RootStackParamList> = useNavigation();
  // const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();
  console.log();
  return (
    // <ImageBackground
    //   source={require("../../assets/images/react-native.png")}
    //   style={{ flex: 1 }}
    // >
    <View>
      <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
      <Text style={styles.reviewText}>Title: {route.params?.title}</Text>
      <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
      <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
        <Image
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
      </View>
      {/* <Button title="Go Home" onPress={() => navigation.navigate("home")} /> */}
    </View>
    {/* </ImageBackground> */}
  );
};

export default DetailScreen;
