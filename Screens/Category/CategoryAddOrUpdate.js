import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { useCreateCategoryMutation, useGetCategoryByIdQuery, useUpdateCategoryMutation } from "../../Apis/categoryApi";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function CategoryAddOrUpdate({ route, navigation }) {
  const Navigation = useNavigation();
  const categoryId = route.params?.categoryId;
  const { data, isLoading } = useGetCategoryByIdQuery(categoryId);
  const [UpdateCategory] = useUpdateCategoryMutation();
  const [CreateCategory] = useCreateCategoryMutation();
  const [categoryModel, setCategoryModel] = useState({
    categoryName: data ? data.categoryName : "",
    categoryDescription: data ? data.categoryDescription : "",
  });

  if (isLoading && categoryId !== undefined) {
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

  const addOrUpdateCategory = async () => {
    var response;
    if (categoryId !== undefined) {
      setCategoryModel({
        categoryName: data.categoryName,
        categoryDescription: data.categoryDescription,
      });
      console.log("setCategoryModel");
      console.log(categoryModel);

      const categoryUpdateModel = {
        categoryId: categoryId,
        categoryModel: {
          categoryName: categoryModel.categoryName,
          categoryDescription: categoryModel.categoryDescription,
        },
      };
      response = await UpdateCategory(categoryUpdateModel);
      Navigation.goBack();
    } else {
      response = CreateCategory(categoryModel);
      Navigation.goBack();
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
      <Button title="Save" onPress={addOrUpdateCategory}></Button>
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
