import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Alert, Button } from 'react-native';
import { useGetAllVehicleQuery, useRemoveVehicleMutation } from '../../Apis/vehicleApi';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function VehicleManage() {
  const [vehicleModel, setVehicleModel] = useState({});
  const { data, isLoading } = useGetAllVehicleQuery();
  const [RemoveVehicle] = useRemoveVehicleMutation();
  const Navigation = useNavigation();
  if (isLoading) {
    return (
      <View>
        <Text> ...Loading Vehicles </Text>
      </View>
    );
  }

  const removeVehicleHandler = (vehicleId) => {
    setVehicleModel(data);
    var response = vehicleModel.find((x) => x.id === vehicleId);
    console.log('response');
    console.log(response);

    Alert.alert(`${response ? response.brand : ''} -${response ? response.model : ''}`, 'Do You Really Remove This Vehicle?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => RemoveVehicle(vehicleId) },
    ]);
  };

  const handleAddOrUpdate = (vehicleId) => {
    console.log(vehicleId);
    Navigation.navigate('AddOrUpdate', {
      vehicleId: vehicleId,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data} //data.vehicles :[]
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => handleAddOrUpdate(item.id)}>
            <Image source={{ uri: item.imageUrl }} style={styles.image}></Image>
            <View style={styles.textContainer}>
              <Text style={styles.brandText}> {item.brand} </Text>
              <Text style={styles.modelText}> {item.model} </Text>
            </View>
            <Button title="Remove" onPress={() => removeVehicleHandler(item.id)}></Button>
          </TouchableOpacity>
        )}
      ></FlatList>
      <Button title="Create Vehicle" onPress={() => handleAddOrUpdate()}></Button>
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
    backgroundColor: '#B9B9B9',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  image: {
    flex: 1,
    marginLeft: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modelText: {
    fontSize: 15,
    color: '#555',
  },
  removeButton: {
    color: 'red',
  },
});
