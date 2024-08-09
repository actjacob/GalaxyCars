import { Text, View, StyleSheet } from "react-native";
import { useGetVehicleByIdQuery } from "../../Apis/vehicleApi";

function VehicleDetail({ route, navigation }) {
  const vehicleId = route.params?.vehicleId;
  const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);

  console.log("data");
  console.log(data);

  return (
    <View>
      <Text>....Detail Page {vehicleId}</Text>
    </View>
  );
}

export default VehicleDetail();
