import { Text, View, StyleSheet } from "react-native";
import { useGetVehicleByIdQuery } from "../../Apis/vehicleApi";
import { Card, Title, Paragraph } from "react-native-paper";

function VehicleDetail({ route, navigation }) {
  const vehicleId = route.params?.vehicleId;
  const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);

  console.log("data");
  console.log(data);

  if (isLoading) {
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );
  }

  return (
    <Card style={styles.card}>
      <Card.Cover
        style={styles.coverImage}
        source={{ uri: data.imageUrl }}
      ></Card.Cover>
      <Card.Content>
        <Title style={styles.Title}> {data.brand} </Title>
        <Title style={styles.Title}> {data.model} </Title>
        <Paragraph style={styles.Paragraph}>
          {" "}
          ${data.price.toFixed(2)}{" "}
        </Paragraph>
        <Paragraph style={styles.Paragraph}> {data.description} </Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  coverImage: {
    height: 200,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  Paragraph: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default VehicleDetail;
