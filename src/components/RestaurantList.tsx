import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Restaurant } from '../types/restaurant-type';
import { filterRestaurantByPrice } from '../utils/filterRestaurantByPrice';
import RestaurantDetails from './RestaurantDetails';
// TODO FINISH THIS AND LESSON 105 time 6:02
interface IRestaurantList {
  title: string;
  price: string;
  filterRestaurantByPrice: (price: string) => Restaurant[];
}
const RestaurantList: React.FC<IRestaurantList> = ({
  title,
  price,
  filterRestaurantByPrice,
}) => {
  const filteredRestaurants = filterRestaurantByPrice(price);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={filteredRestaurants}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
        renderItem={({ item }) => <RestaurantDetails restaurant={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});
export default RestaurantList;
