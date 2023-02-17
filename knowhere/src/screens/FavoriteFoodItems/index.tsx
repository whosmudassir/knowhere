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

  return (
    <ScrollView flex={1} bgColor={'secondary'}>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}></Text>
        <VStack w={'90%'}>
          {userFoodFavorites.length > 0 ? (
            userFoodFavorites.map(item => (
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
