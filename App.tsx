import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import RestaurantShowScreen from './src/screens/RestaurantShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantShow: RestaurantShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  },
);

export default createAppContainer(navigator);
