import {
  View,
  Text,
  Alert,
  Modal,
  Button,
  StyleSheet,
  TextInput,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CategoryManage from "./Category/CategoryManage";
import VehicleManage from "./VehicleScreens/VehicleManage";
import Home from "./Home";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useCheckIsTrueUserMutation } from "../Apis/accountApi";

function HomePage() {
  const Tab = createBottomTabNavigator();
  const [visibleModal, setVisibleModal] = useState(false);
  const [CheckIsTrueUser] = useCheckIsTrueUserMutation();
  const [checkUser, setCheckUser] = useState(false);
  const Navigation = useNavigation();
  const [userModel, setUserModel] = useState({
    email: "",
    password: "",
  });

  const handleCategoryClick = () => {
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
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarIcon: ({}) => <Ionicons name="home"></Ionicons> }}
        />
        <Tab.Screen
          name="CategoryManage"
          options={{ tabBarIcon: ({}) => <Ionicons name="albums"></Ionicons> }}
          component={CategoryManage}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              handleCategoryClick();
            },
          })}
        />
        <Tab.Screen
          name="VehicleManage"
          component={VehicleManage}
          options={{
            tabBarIcon: ({}) => <Ionicons name="car-sport"></Ionicons>,
          }}
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
