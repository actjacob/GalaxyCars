import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "../Screens/CategoryList";

export default function CategoryOverview() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Categories" component={CategoryList}></Stack.Screen>
    </Stack.Navigator>
  );
}
