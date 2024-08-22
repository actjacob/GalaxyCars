import { Pressable, Text, View, StyleSheet, FlatList, Button,ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useGetAllCategoryQuery, useRemoveCategoryMutation } from '../../Apis/categoryApi';
import { useState } from 'react';

function CategoryManage() {
  const { data, isLoading } = useGetAllCategoryQuery();
  const { category, setCategory } = useState();
  const [RemoveCategory] = useRemoveCategoryMutation();
  const Navigation = useNavigation();
  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const handleCategoryClick = (categoryId) => {
    Navigation.navigate('CategoryAddOrUpdate', { categoryId: categoryId });
  };
  const removeCategoryHandler = async (categoryId) => {
    console.log('trigger remove category handler');
    var response = await RemoveCategory(categoryId);
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
              <View style={styles.button}>
                <Button title="Remove" onPress={() => handleCategoryClick()}></Button>
              </View>
            </Card>
          </Pressable>
        )}
      ></FlatList>
      <Button title="Create Category" onPress={() => removeCategoryHandler(item.id)}></Button>
    </View>
  );
}

export default CategoryManage;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  button: {
    alignItems: 'center',
  },
});
