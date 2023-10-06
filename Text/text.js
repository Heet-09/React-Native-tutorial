// 1. Import text from react native library
import { View, Text } from "react-native";

export default function App() {
  // 2. Return view Component as it is a container
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
          {/* flex used to cover the entire space */}
          {/* We can't write text normally as we write in web dev */}
          {/* We have to wrap every text in <Text></Text> */}
<Text>Helo World</Text>

          {/* Nesting of text */}
          <Text><Text> style={{color: "white"}}Hello</Text>World</Text>
    </View>
  );
}
