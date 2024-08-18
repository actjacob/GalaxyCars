import { Pressable, Text, View, StyleSheet, FlatList } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useGetAllCategoryQuery } from "../../Apis/categoryApi";
import { useState } from "react";

function CategoryManage() {
  const { data, isloading } = useGetAllCategoryQuery();
  const { category, setCategory } = useState();
  if (isloading) {
    return (
      <View>
        <Text>...Loading</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable>
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.categoryName} </Title>
              <Paragraph>Description : {item.categoryDescription} </Paragraph>
            </Card.Content>
          </Card>
        </Pressable>
      )}
    ></FlatList>
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
