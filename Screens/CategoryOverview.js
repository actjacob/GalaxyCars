import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "../Screens/CategoryList";
import Vehicles from "./VehicleScreens/Vehicles";

export default function CategoryOverview() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Category List"
        component={CategoryList}
      ></Stack.Screen>
      <Stack.Screen name="Vehicles" component={Vehicles}></Stack.Screen>
    </Stack.Navigator>
  );
}
