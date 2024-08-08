import useRestaurant from '../hooks/useRestaurant';
import { Restaurant } from '../types/restaurant-type';

export function filterRestaurantByPrice(price: string): Restaurant[] {
  const [, , restaurants] = useRestaurant();
  return restaurants.filter((restaurant) => {
    return restaurant.price === price;
  });
}
