import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Restaurant } from '../types/restaurant-type';
import RestaurantDetails from './RestaurantDetails';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

interface IRestaurantList {
  title: string;
  price: string;
  filterRestaurantByPrice: (price: string) => Restaurant[];
}
type Props = IRestaurantList & NavigationInjectedProps;

const RestaurantList: React.FC<Props> = ({
  title,
  price,
  filterRestaurantByPrice,
  navigation,
}) => {
  const filteredRestaurants = filterRestaurantByPrice(price);

  if (!filteredRestaurants.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={filteredRestaurants}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantShow', { id: item.id })
            }
          >
            <RestaurantDetails restaurant={item} />
          </TouchableOpacity>
        )}
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
export default withNavigation(RestaurantList);
