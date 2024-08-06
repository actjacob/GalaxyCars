import { Text, View, StyleSheet, FlatList } from "react-native";
import { useGetAllCategoryQuery } from "../Apis/categoryApi";

function CategoryList() {
  const { data, isloading } = useGetAllCategoryQuery(null);

  if (isloading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  console.log("data");
  console.log(data);

  return (
    <>
      <FlatList></FlatList>
    </>
  );
}

export default CategoryList;
