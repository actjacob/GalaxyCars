import { Pressable, Text, View, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function CategoryItem({ item }) {
  const Navigation = useNavigation();

  const VehiclesByCategoryIdHandler = () => {
    Navigation.navigate(`Vehicles`, {
      id: item.id,
    });
  };

  if (!item) {
    return null; //item undefined veya null ise ,burada erken dönüş yapabilirsiniz
  }

  return (
    <Pressable onPress={VehiclesByCategoryIdHandler}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{item.categoryName} </Title>
          <Paragraph>Description : {item.categoryDescription} </Paragraph>
        </Card.Content>
      </Card>
    </Pressable>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  card: {
    margin: 16,
    alignItems: "center",
    backgroundColor: "orange",
  },
});
