import { View, Text, Button } from "react-native";

const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View>
      <Text style={{ fontSize: 40 }}>
        thằng nghiêm văn sỹ lúc thì mạt sát người ta, lúc thì nói chuyện dễ
        nghe, đúng là đa nhân cách
      </Text>
      <Button
        title="View Detail"
        onPress={() => navigation.navigate("review-detail")}
      />
    </View>
  );
};

export default HomeScreen;
