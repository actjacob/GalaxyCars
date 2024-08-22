import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useGetAllCategoryQuery } from '../Apis/categoryApi';
import CategoryItem from './CategoryItem';

function CategoryList() {
  const { data, isLoading } = useGetAllCategoryQuery(null);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <>
      <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <CategoryItem item={item}></CategoryItem>}></FlatList>
    </>
  );
}

export default CategoryList;
