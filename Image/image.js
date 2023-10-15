// There are 3 typed of img
// 1. Static Images
// 2. Network images
// 3. images firom local disk

// Imagses should be stored in assets folder
// 1. Import Image from react native library
import { View, Text , Image} from "react-native";

export default function App() {
  // 2. Return view Component as it is a container
  return (
      <View style={{ flex: 1, backgroundColor: "plum" }}>
          {/* 3. Static Image */}
          <Image source={logoimg} style ={{width: 300, height: 300}}></Image>
      <Text>Static Image </Text>

      {/* Nesting of text */}
      <Text>
        <Text> style={{ color: "white" }}Hello</Text>World
      </Text>
    </View>
  );
}
