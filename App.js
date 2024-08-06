import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Storage/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Category from "./Screens/Category";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  function CategoryOverview() {
    return (
      <Drawer.Navigator initialRouteName="Category">
        <Drawer.Screen name="Kategoriler" component={Category}></Drawer.Screen>
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="CategoryOverview"
              component={CategoryOverview}
            ></Stack.Screen>
          </Stack.Navigator>
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
