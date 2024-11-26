import { View, Text } from "@tarojs/components";

export default function Child(props) {
  return (
    <View>
      <Text>Child</Text>
      <Text>props:{props.userName}</Text>
    </View>
  );
}
