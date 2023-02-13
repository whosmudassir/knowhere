import React, {useEffect, useState} from 'react';
import {Text, VStack, View, ScrollView} from 'native-base';
import {rentItems} from '../../data/RentItemsMockData';
import RentAdItem from '../../components/common/RentAdItem';
import {userRentFavoriteStore} from '../../store';
import EmptyFavorite from '../../components/common/EmptyFavorite';

const FavoriteRentItems = () => {
  const userRentFavorites = userRentFavoriteStore(
    state => state.userRentFavorites,
  );

  return (
    <ScrollView flex={1} bgColor={'secondary'}>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}></Text>
        <VStack w={'90%'}>
          {userRentFavorites.length > 0 ? (
            userRentFavorites.map(item => (
              <View key={item.id}>
                <RentAdItem item={item} />
              </View>
            ))
          ) : (
            <EmptyFavorite navigateTo="Rent" />
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default FavoriteRentItems;
