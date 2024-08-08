import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Restaurant } from '../types/restaurant-type';
import { filterRestaurantByPrice } from '../utils/filterRestaurantByPrice';
// TODO FINISH THIS AND LESSON 105 time 6:02
interface IRestaurantList {
  title: string;
  price: string;
  filterRestaurantByPrice: (price: string) => Restaurant[];
}
const RestaurantList: React.FC<IRestaurantList> = ({
  title,
  filterRestaurantByPrice,
}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default RestaurantList;
