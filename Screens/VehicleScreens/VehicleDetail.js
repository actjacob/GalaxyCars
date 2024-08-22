import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useGetVehicleByIdQuery } from '../../Apis/vehicleApi';
import { Card, Title, Paragraph } from 'react-native-paper';

function VehicleDetail({ route, navigation }) {
  const vehicleId = route.params?.vehicleId;
  const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.coverImage} source={{ uri: data.imageUrl }}></Card.Cover>
      <Card.Content>
        <Title style={styles.Title}>
          {' '}
          {data.brand} - {data.model}{' '}
        </Title>
        <Paragraph style={styles.PriceParagraph}> ${data.price.toFixed(2)} </Paragraph>
        <Paragraph style={styles.Paragraph}> {data.description} </Paragraph>
        <Paragraph style={styles.ModelParagraph}>Model Year: {data.modelYear} </Paragraph>
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
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  Paragraph: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
  },
  PriceParagraph: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
    color: 'red',
  },
  ModelParagraph: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default VehicleDetail;
