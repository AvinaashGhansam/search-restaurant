import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import { Restaurant } from '../types/restaurant-type';

const useRestaurant = (): [
  (restaurant: string) => Promise<void>,
  string,
  Restaurant[],
] => {
  // TODO: MAKE A RESTAURANT TYPE AND USE IT IN THE STATE
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function searchApi(restaurant: string) {
    try {
      // ADD TYPE TO RESPONSE BODY
      const response = await yelp.get<{ businesses: Restaurant[] }>('/search', {
        // Query String
        params: {
          limit: 50,
          term: restaurant,
          location: 'New Jersey',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(`Something went wrong ${err.message}`);
      }
    }
  }
  useEffect(() => {
    void searchApi('Pasta');
  }, []);

  return [searchApi, errorMessage, restaurants];
};
export default useRestaurant;
