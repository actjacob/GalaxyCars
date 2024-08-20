import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { useCreateCategoryMutation, useGetCategoryByIdQuery, useUpdateCategoryMutation } from "../../Apis/categoryApi";
import { useState } from "react";

function CategoryAddOrUpdate({ route, navigation }) {
  const categoryId = route.params?.categoryId;
  const { data, isloading } = useGetCategoryByIdQuery(categoryId);
  const [UpdateCategory] = useUpdateCategoryMutation();
  const [CreateCategory] = useCreateCategoryMutation();
  const [categoryModel, setCategoryModel] = useState({
    categoryName: data ? data.categoryName : "",
    categoryDescription: data ? data.categoryDescription : "",
  });

  if (isloading && categoryId !== undefined) {
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setCategoryModel((currentInputValue) => {
      return {
        ...currentInputValue,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  // public string CategoryName { get; set; }
  // public string CategoryDescription { get; set; }

  const addOrUpdateCategory = () => {
    if (categoryId !== undefined) {
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Category Name" defaultValue={data ? data.categoryName : ""} onChangeText={(value) => inputChangeHandler("categoryName", value)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Category Description" defaultValue={data ? data.categoryDescription : ""} onChangeText={(value) => inputChangeHandler("categoryDescription", value)}></TextInput>
      </View>
      <Button title="Save"></Button>
    </View>
  );
}

export default CategoryAddOrUpdate;

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

    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
  },
});
