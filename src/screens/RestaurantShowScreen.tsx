import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import yelp from '../api/yelp';
import { Restaurant } from '../types/restaurant-type';

interface IRestaurantShowScreen {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
const RestaurantShowScreen: React.FC<IRestaurantShowScreen> = ({
  navigation,
}) => {
  const [result, setResult] = useState<null | Restaurant>(null);
  const id = navigation.getParam('id');

  async function getRestaurantPhotos(id: string) {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  }

  useEffect(() => {
    try {
      void getRestaurantPhotos(id);
    } catch (error) {
      console.error('Failed to fetch restaurant photos:', error);
    }
  }, [id]);
  /*console.log(result);*/

  return (
    <View>
      <Text>{result?.name}</Text>
      <FlatList
        data={result?.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          // BUG: NOT GETTING PHOTOS
          console.log('items', item);
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
export default RestaurantShowScreen;
