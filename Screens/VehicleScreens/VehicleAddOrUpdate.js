import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { useCreateVehicleMutation, useGetVehicleByIdQuery, useUpdateVehicleMutation } from "../../Apis/vehicleApi";
import { useState } from "react";

function VehicleAddOrUpdate({ route, navigation }) {
  const vehicleId = route.params?.vehicleId;
  const { data, islodaing } = useGetVehicleByIdQuery(vehicleId);
  const [UpdateVehicle] = useUpdateVehicleMutation();
  const [CreateVehicle] = useCreateVehicleMutation();
  const [vehicleModel, setVehicleModel] = useState({
    brand: data ? data.brand : "",
    model: data ? data.model : "",
    modelYear: data ? data.modelYear : "",
    price: data ? data.price : "",
    imageUrl: data ? data.imageUrl : "",
    description: data ? data.description : "",
    categoryId: data ? data.categoryId : "",
  });

  if (islodaing) {
    return (
      <View>
        <Text> ...Loading Vehicle</Text>
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

  const handleVehicleHandler = () => {
    if (vehicleId !== undefined) {
      UpdateVehicle();
    } else {
      CreateVehicle();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Brand" defaultValue={data ? data.brand : ""} onChangeText={(value) => inputChangeHandler("brand", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Model" defaultValue={data ? data.model : ""} onChangeText={(value) => inputChangeHandler("model", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="ModelYear" defaultValue={data ? data.modelYear : ""} onChangeText={(value) => inputChangeHandler("modelYear", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Price" defaultValue={data ? data.price : ""} onChangeText={(value) => inputChangeHandler("price", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="ImageUrl" defaultValue={data ? data.imageUrl : ""} onChangeText={(value) => inputChangeHandler("imageUrl", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Description" defaultValue={data ? data.description : ""} onChangeText={(value) => inputChangeHandler("description", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="CategoryId" defaultValue={data ? data.categoryId : ""} onChangeText={(value) => inputChangeHandler("categoryId", value)}></TextInput>
      </View>
      <View style={styles.buttonConatiner}>
        <Button title="Save"></Button>
      </View>
    </View>
  );
}
// public string Brand { get; set; }
// public string Model { get; set; }
// public string ModelYear { get; set; }
// public decimal Price { get; set; }
// public string ImageUrl { get; set; }
// public string Description { get; set; }
// public Guid CategoryId { get; set; }

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
    height: 40,
    backgroundColor: "orange",
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
  },
  buttonConatiner: {
    marginTop: 16,
  },
});
