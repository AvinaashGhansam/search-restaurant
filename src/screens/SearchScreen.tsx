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
        filterRestaurantByPrice={filterRestaurantByPrice}
        price="$"
        title="Cost Effective"
      />
      <RestaurantList
        filterRestaurantByPrice={filterRestaurantByPrice}
        price="$$"
        title="Bit Pricer"
      />
      <RestaurantList
        filterRestaurantByPrice={filterRestaurantByPrice}
        price="$$$"
        title="Big Spender"
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
