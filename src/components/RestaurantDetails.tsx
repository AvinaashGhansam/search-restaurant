import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Restaurant } from '../types/restaurant-type';

interface IRestaurantDetails {
  restaurant: Restaurant;
}
const RestaurantDetails: React.FC<IRestaurantDetails> = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Starts, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});
export default RestaurantDetails;
