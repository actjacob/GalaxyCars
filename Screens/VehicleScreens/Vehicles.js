import { Text, View, StyleSheet } from "react-native";
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/categoryApi";

function Vehicles(route, navigation) {
  const selectedCategoryId = route.params?.id;
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
  return <></>;
}

export default Vehicles;
