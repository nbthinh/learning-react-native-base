import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>
        thằng nghiêm văn sỹ lúc thì mạt sát người ta, lúc thì nói chuyện dễ
        nghe, đúng là đa nhân cách
      </Text>
      <Button
        title="View Detail"
        onPress={() =>
          alert(
            "thằng nghiêm văn sỹ lúc thì mạt sát mình, lúc thì nó nói chuyện dễ nghe, đúng là đa nhân cách"
          )
        }
      />
    </View>
  );
};

export default HomeScreen;
