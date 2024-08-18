import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import CategoryManage from "./CategoryManage";
import CategoryAddOrUpdate from "./CategoryAddOrUpdate";

function CategoryCRUD() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="CategoryManage" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CategoryManage" component={CategoryManage}></Stack.Screen>
      <Stack.Screen name="CategoryAddOrUpdate" component={CategoryAddOrUpdate}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default CategoryCRUD;
