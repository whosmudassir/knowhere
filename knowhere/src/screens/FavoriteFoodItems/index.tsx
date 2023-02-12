import React, {useEffect, useState} from 'react';
import {Text, VStack, View} from 'native-base';
import {foodItems} from '../../data/FoodItemsMockData';
import FoodAdItem from '../../components/common/FoodAdItem';
import {userFoodFavoriteStore} from '../../store';

const FavoriteFoodItems = () => {
  const userFoodFavorites = userFoodFavoriteStore(
    state => state.userFoodFavorites,
  );

  const filteredFoodItems = foodItems.filter(item => {
    return userFoodFavorites.includes(item.id);
  });

  return (
    <>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}></Text>
        <VStack w={'90%'}>
          {filteredFoodItems.map(item => (
            <View key={item.id}>
              <FoodAdItem item={item} isInFavorite={true} />
            </View>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default FavoriteFoodItems;
