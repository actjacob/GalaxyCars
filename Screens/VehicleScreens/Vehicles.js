import { Text, View, StyleSheet, FlatList } from "react-native";
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/categoryApi";

function Vehicles({ route, navigation }) {
  const selectedCategoryId = route.params?.id;
  const { data, isloading } =
    useGetVehiclesByCategoryIdQuery(selectedCategoryId);
  console.log("selectedCategoryId");

  if (isloading) {
    return (
      <>
        <Text> Loading...</Text>
      </>
    );
  }

  return (
    <>
      <FlatList
        data={data.vehicles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.brand} </Text>
          </View>
        )}
      ></FlatList>
    </>
  );
}

export default Vehicles;
