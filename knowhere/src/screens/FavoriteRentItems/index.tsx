import React, {useEffect, useState} from 'react';
import {Text, VStack, View} from 'native-base';
import {rentItems} from '../../data/RentItemsMockData';
import RentAdItem from '../../components/common/RentAdItem';
import {userRentFavoriteStore} from '../../store';

const FavoriteRentItems = () => {
  const userRentFavorites = userRentFavoriteStore(
    state => state.userRentFavorites,
  );

  const filteredRentItems = rentItems.filter(item => {
    return userRentFavorites.includes(item.id);
  });

  return (
    <>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}>Places for rent</Text>
        <VStack w={'90%'}>
          {filteredRentItems.map(item => (
            <View key={item.id}>
              <RentAdItem item={item} />
            </View>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default FavoriteRentItems;
