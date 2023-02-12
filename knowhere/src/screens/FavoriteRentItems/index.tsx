import React, {useEffect, useState} from 'react';
import {Text, VStack, View, ScrollView} from 'native-base';
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
    <ScrollView flex={1} bgColor={'secondary'}>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}></Text>
        <VStack w={'90%'}>
          {filteredRentItems.map(item => (
            <View key={item.id}>
              <RentAdItem item={item} isInFavorite={true} />
            </View>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default FavoriteRentItems;
