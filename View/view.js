// 1. Import view from react native library
import { View } from "react-native";

// 2. Create a view component and export it
// 2a. It serves as a container for other component kind of like <div>
// 2b. It is a core component
export default function App() {
  // 3. Return view Component
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      {/* flex used to cover the entire space */}
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightyellow" }}
      ></View>
    </View>
  );
}
