import { View, Text, Alert, Modal, Button, StyleSheet, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryManage from "./Category/CategoryManage";
import Home from "./Home";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useCheckIsTrueUserMutation } from "../Apis/accountApi";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehicleManage from "./VehicleScreens/VehicleManage";
import VehicleAddOrUpdate from "./VehicleScreens/VehicleAddOrUpdate";
import VehicleCRUD from "./VehicleScreens/VehicleCRUD";
import CategoryCRUD from "./Category/CategoryCRUD";

function HomePage() {
  const Tab = createBottomTabNavigator();
  const [visibleModal, setVisibleModal] = useState(false);
  const [CheckIsTrueUser] = useCheckIsTrueUserMutation();
  const [checkUser, setCheckUser] = useState(false);
  const Navigation = useNavigation();
  const Stack = createNativeStackNavigator();
  const [userModel, setUserModel] = useState({
    email: "",
    password: "",
  });

  const handleModalClick = () => {
    setVisibleModal(true);
  };

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setUserModel((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const GoBack = () => {
    Navigation.navigate("Home");
    setVisibleModal(false);
  };

  const checkRoleClick = async () => {
    const loginModel = {
      email: userModel.email,
      password: userModel.password,
    };
    const result = await CheckIsTrueUser(loginModel);
    const isUserAuthorized = result.data;

    if (!isUserAuthorized) {
      Navigation.navigate("Home");
      Alert.alert("You dont entry this page.UNAUTHORİZED!");
      setCheckUser(false);
    }
    setCheckUser(false);
    setVisibleModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: ({}) => <Ionicons name="home"></Ionicons> }}
        />
        <Tab.Screen
          name="CategoryCRUD"
          options={{ tabBarIcon: ({}) => <Ionicons name="albums"></Ionicons> }}
          component={CategoryCRUD}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              handleModalClick();
            },
          })}
        />
        <Tab.Screen
          name="VehicleCRUD"
          options={{
            tabBarIcon: ({}) => <Ionicons name="car-sport"></Ionicons>,
          }}
          component={VehicleCRUD}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              handleModalClick();
            },
          })}
        />
      </Tab.Navigator>
      <Modal visible={visibleModal}>
        <View style={styles.viewStyleOne}>
          <View style={styles.viewStyleTwo}>
            <TextInput
              placeholder="Enter Your Mail"
              onChangeText={inputChangeHandler.bind(this, "email")}
            ></TextInput>
          </View>
          <View style={styles.viewStyleTwo}>
            <TextInput
              placeholder="Enter Your Password"
              onChangeText={inputChangeHandler.bind(this, "password")}
            ></TextInput>
          </View>
        </View>
        <Button onPress={checkRoleClick} title="Check Role"></Button>
        <Button onPress={GoBack} title="Go Back"></Button>
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
