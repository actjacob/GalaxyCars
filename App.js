import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Storage/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Category from "./Screens/Category";
import HomePage from "./Screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  function CategoryOverview() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Category" component={Category}></Stack.Screen>
      </Stack.Navigator>
    );
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="HomePage">
            <Drawer.Screen
              name="Home Page"
              component={HomePage}
            ></Drawer.Screen>
            <Drawer.Screen
              name="Categories"
              component={CategoryOverview}
            ></Drawer.Screen>
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
