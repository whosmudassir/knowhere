import {Box, Text, View} from 'native-base';
import React from 'react';
import FavoriteFoodItems from '../FavoriteFoodItems';
import FavoriteRentItems from '../FavoriteRentItems';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainHeader from '../../components/common/MainHeader';
import NonLoggedInUserView from '../NonLoggedInUserView';

const Tab = createMaterialTopTabNavigator();

const Favorites = () => {
  return (
    <>
      <MainHeader showLocationBox={false} />
      <NonLoggedInUserView />
      <Box mt={-51} alignItems={'center'}></Box>
      {/* {false ? (
        <Tab.Navigator>
          <Tab.Screen name="Rent" component={FavoriteRentItems} />
          <Tab.Screen name="Food" component={FavoriteFoodItems} />
        </Tab.Navigator>
      ) : (
        <NonLoggedInUserView />
      )} */}
    </>
  );
};

export default Favorites;
