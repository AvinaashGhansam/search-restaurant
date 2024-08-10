import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import React, { useState } from 'react';

import useRestaurant from '../hooks/useRestaurant';
import RestaurantList from '../components/RestaurantList';
import { filterRestaurantByPrice } from '../utils/filterRestaurantByPrice';

const SearchScreen: React.FC = () => {
  const [searchString, setSearchString] = useState<string>('');
  const [searchApi, errorMessage, restaurants] = useRestaurant();
  return (
    <View>
      <SearchBar
        search={searchString}
        onSearchChange={setSearchString}
        onSearchSubmit={() => searchApi(searchString)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>we have found {restaurants.length}</Text>
      <RestaurantList
        filterRestaurantByPrice={(price) => filterRestaurantByPrice(price)}
        title="Cost Effective"
        price="$"
      />

      <RestaurantList
        filterRestaurantByPrice={(price) => filterRestaurantByPrice(price)}
        title="Bit Pricer"
        price="$$"
      />
      <RestaurantList
        filterRestaurantByPrice={(price) => filterRestaurantByPrice(price)}
        title="Big Spender"
        price="$$$"
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
