import { Text, View, StyleSheet, Image } from "react-native";
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/categoryApi";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import VehicleDetail from "./VehicleDetail";

function Vehicles({ route, navigation }) {
  const selectedCategoryId = route.params?.id;

  const { data, isloading } =
    useGetVehiclesByCategoryIdQuery(selectedCategoryId);
  const Navigation = useNavigation();

  const handlePressClick = (id) => {
    Navigation.navigate(`VehicleDetail`, {
      vehicleId: id,
    });
  };

  if (isloading) {
    return (
      <>
        <Text> Loading...</Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.vehicles} //data.vehicles :[]
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePressClick(item.id)}
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}> {item.brand} </Text>
              <Text style={styles.modelText}> {item.model} </Text>
            </View>
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
}

export default Vehicles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
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
});
