import { View, Text } from "react-native";
import { useCreateCategoryMutation, useUpdateCategoryMutation } from "../../Apis/categoryApi";

function CategoryAddOrUpdate({ route, navigation }) {
  const categoryId = route.params?.categoryId;
  const [UpdateCategoryuseUpdateCategoryMutation] = useUpdateCategoryMutation();
  const [CreareCatgeory] = useCreateCategoryMutation();

  console.log("categoryId");
  console.log(categoryId);

  // public string CategoryName { get; set; }
  // public string CategoryDescription { get; set; }

  const addOrUpdateCategory = () => {
    if (categoryId !== undefined) {
    } else {
    }
  };

  return (
    <View>
      <Text>CategoryAddOrUpdate</Text>
    </View>
  );
}

export default CategoryAddOrUpdate;
