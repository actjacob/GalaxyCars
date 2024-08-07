import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Storage/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryList from "./Screens/CategoryList";
import HomePage from "./Screens/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryOverview from "./Screens/CategoryOverview";

export default function App() {
  const Drawer = createDrawerNavigator();

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
