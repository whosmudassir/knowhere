import React from 'react';
import {Text} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Rent from '../Rent';
import Food from '../Food';
import Profile from '../Profile';
import Favorites from '../Favorites';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rent" component={Rent} />
      <Tab.Screen name="Food" component={Food} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Home;
