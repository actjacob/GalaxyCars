import { Text, View, StyleSheet, FlatList } from "react-native";
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/categoryApi";

function Vehicles({ route, navigation }) {
  const selectedCategoryId = route.params?.id;
  console.log(selectedCategoryId);
  const { data, isloading } =
    useGetVehiclesByCategoryIdQuery(selectedCategoryId);
  console.log("selectedCategoryId");
  console.log(data);

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
        data={data?.vehicles} //data.vehicles :[]
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
