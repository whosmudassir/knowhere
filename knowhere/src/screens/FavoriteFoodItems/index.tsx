import React, {useEffect, useState} from 'react';
import {Text, VStack, View, ScrollView} from 'native-base';
import {foodItems} from '../../data/FoodItemsMockData';
import FoodAdItem from '../../components/common/FoodAdItem';
import {userFoodFavoriteStore} from '../../store';
import EmptyFavorite from '../../components/common/EmptyFavorite';

const FavoriteFoodItems = () => {
  const userFoodFavorites = userFoodFavoriteStore(
    state => state.userFoodFavorites,
  );

  const filteredFoodItems = foodItems.filter(item => {
    return userFoodFavorites.includes(item.id);
  });

  return (
    <ScrollView flex={1} bgColor={'secondary'}>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}></Text>
        <VStack w={'90%'}>
          {filteredFoodItems.length > 0 ? (
            filteredFoodItems.map(item => (
              <View key={item.id}>
                <FoodAdItem item={item} />
              </View>
            ))
          ) : (
            <EmptyFavorite navigateTo="Food" />
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default FavoriteFoodItems;
