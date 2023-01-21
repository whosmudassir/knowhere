import React from 'react';
import {Text} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Rent from '../Rent';
import Food from '../Food';
import Profile from '../Profile';
import Favorites from '../Favorites';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Rent') {
            iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
          } else if (route.name === 'Food') {
            iconName = focused ? 'md-fast-food-sharp' : 'md-fast-food-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'ios-heart-sharp' : 'ios-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5667FD',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Rent" component={Rent} options={{headerShown: false}} />
      <Tab.Screen name="Food" component={Food} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Home;
