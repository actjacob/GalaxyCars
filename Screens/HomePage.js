import {
  View,
  Text,
  Alert,
  Modal,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import {
  BottomTabBarHeightCallbackContext,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import CategoryManage from "./Category/CategoryManage";
import VehicleManage from "./VehicleScreens/VehicleManage";
import Home from "./Home";
import { useState } from "react";

function HomePage() {
  const Tab = createBottomTabNavigator();
  const [visibleModal, setVisibleModal] = useState(false);

  const handleCategoryClick = () => {
    console.log("trigger handleCategoryClick");
    setVisibleModal(true);
  };
  const removeModalClick = () => {
    setVisibleModal(false);
  };
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="CategoryManage"
          component={CategoryManage}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              handleCategoryClick();
            },
          })}
        />
        <Tab.Screen name="VehicleManage" component={VehicleManage} />
      </Tab.Navigator>
      <Modal visible={visibleModal} onRequestClose={removeModalClick}>
        <View style={styles.viewStyleOne}>
          <View style={styles.viewStyleTwo}>
            <TextInput placeholder="Enter Your Mail"></TextInput>
          </View>
          <View style={styles.viewStyleTwo}>
            <TextInput placeholder="Enter Your Password"></TextInput>
          </View>
        </View>
        <Button onPress={removeModalClick} title="Close Modal"></Button>
      </Modal>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  viewStyleOne: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyleTwo: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});
