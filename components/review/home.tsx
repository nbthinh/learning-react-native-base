import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AppHeader from "../navigation/app.header";

interface IReview {
  id: number;
  title: string;
  star: number;
}
const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
  },
});
const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React native", star: 5 },
    { id: 2, title: "Phuận Văn Tám", star: 5 },
  ]);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        thằng nghiêm văn sỹ lúc thì mạt sát người ta, lúc thì nói chuyện dễ
        nghe, đúng là đa nhân cách
      </Text>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("review-detail", item)}
              >
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
