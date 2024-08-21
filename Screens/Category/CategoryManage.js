import { Pressable, Text, View, StyleSheet, FlatList, Button } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useGetAllCategoryQuery } from "../../Apis/categoryApi";
import { useState } from "react";

function CategoryManage() {
  const { data, isLoading } = useGetAllCategoryQuery();
  const { category, setCategory } = useState();
  const Navigation = useNavigation();
  if (isLoading) {
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );
  }

  const handleCategoryClick = (categoryId) => {
    Navigation.navigate("CategoryAddOrUpdate", { categoryId: categoryId });
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleCategoryClick(item.id)}>
            <Card style={styles.card}>
              <Card.Content>
                <Title>{item.categoryName} </Title>
                <Paragraph>Description : {item.categoryDescription} </Paragraph>
              </Card.Content>
            </Card>
          </Pressable>
        )}
      ></FlatList>
      <Button title="Create Category" onPress={() => handleCategoryClick()}></Button>
    </View>
  );
}

export default CategoryManage;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    alignItems: "center",
    backgroundColor: "orange",
  },
});
