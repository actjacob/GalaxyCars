import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { useCreateVehicleMutation, useGetVehicleByIdQuery, useUpdateVehicleMutation } from '../../Apis/vehicleApi';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

function VehicleAddOrUpdate({ route, navigation }) {
  const Navigation = useNavigation();
  const vehicleId = route.params?.vehicleId;
  const { data, isLoading } = useGetVehicleByIdQuery(vehicleId);
  const [UpdateVehicle] = useUpdateVehicleMutation();
  const [CreateVehicle] = useCreateVehicleMutation();
  const [vehicleModel, setVehicleModel] = useState({
    brand: data ? data.brand : '',
    model: data ? data.model : '',
    modelYear: data ? data.modelYear : '',
    price: data ? data.price : 0,
    imageUrl: data ? data.imageUrl : '',
    description: data ? data.description : '',
    categoryId: data ? data.categoryId : '',
  });

  if (isLoading && vehicleId !== undefined) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setVehicleModel((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  const handleVehicleClick = async () => {
    var response;
    if (vehicleId !== undefined) {
      setVehicleModel({
        brand: data.brand,
        model: data.model,
        modelYear: data.modelYear,
        price: data.price,
        imageUrl: data.imageUrl,
        description: data.description,
        categoryId: data.categoryId,
      });
      console.log('vehicleModel');
      console.log(vehicleModel);

      const vehicleUpdateModel = {
        vehicleId: vehicleId,
        vehicleModel: {
          brand: vehicleModel.brand,
          model: vehicleModel.model,
          modelYear: vehicleModel.modelYear,
          price: vehicleModel.price,
          imageUrl: vehicleModel.imageUrl,
          description: vehicleModel.description,
          categoryId: vehicleModel.categoryId,
        },
      };

      response = await UpdateVehicle(vehicleUpdateModel);
      Navigation.goBack();
    } else {
      response = await CreateVehicle(vehicleModel);
      Navigation.goBack();
    }
  };

  // public string Brand { get; set; }
  // public string Model { get; set; }
  // public string ModelYear { get; set; }
  // public decimal Price { get; set; }
  // public string ImageUrl { get; set; }
  // public string Description { get; set; }
  // public Guid CategoryId { get; set; }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Brand" defaultValue={data ? data.brand : ''} onChangeText={(value) => inputChangeHandler('brand', value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Model" defaultValue={data ? data.model : ''} onChangeText={(value) => inputChangeHandler('model', value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="ModelYear" defaultValue={data ? data.modelYear : ''} onChangeText={(value) => inputChangeHandler('modelYear', value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Price" defaultValue={data ? data.price.toString() : ''} keyboardType="numeric" onChangeText={(value) => inputChangeHandler('price', value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="ImageUrl" defaultValue={data ? data.imageUrl : ''} onChangeText={(value) => inputChangeHandler('imageUrl', value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Description" defaultValue={data ? data.description : ''} onChangeText={(value) => inputChangeHandler('description', value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="CategoryId" defaultValue={data ? data.categoryId : ''} onChangeText={(value) => inputChangeHandler('categoryId', value)}></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleVehicleClick}></Button>
      </View>
    </View>
  );
}

export default VehicleAddOrUpdate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 30,

    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
