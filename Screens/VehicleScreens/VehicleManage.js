import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Button, Alert} from "react-native";
import {useGetAllVehicleQuery, useRemoveVehicleMutation} from "../../Apis/vehicleApi";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

function VehicleManage() {
  const {data, isloading} = useGetAllVehicleQuery();
  const Navigation = useNavigation();
  if (isloading) {
    return (
      <View>
        <Text> ...Loading Vehicles </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data} //data.vehicles :[]
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}> {item.brand} </Text>
              <Text style={styles.modelText}> {item.model} </Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
      <Button title="Create Vehicle"></Button>
    </View>
  );
}

export default VehicleManage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    backgroundColor: "#B9B9B9",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "stretch",
  },
  image: {
    flex: 1,
    marginleft: 16,
  },
  textContainer: {
    flex: 1,
    marginleft: 16,
  },
  brandText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modelText: {
    fontSize: 15,
    color: "#555",
  },
  removeButton: {
    color: "red",
  },
});
