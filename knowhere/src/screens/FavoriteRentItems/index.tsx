import React, {useEffect, useState} from 'react';
import {Text, VStack, View, ScrollView} from 'native-base';
import {rentItems} from '../../data/RentItemsMockData';
import RentAdItem from '../../components/common/RentAdItem';
import {userRentFavoriteStore} from '../../store';

const FavoriteRentItems = () => {
  const userRentFavorites = userRentFavoriteStore(
    state => state.userRentFavorites,
  );

  return (
    <ScrollView flex={1} bgColor={'secondary'}>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}></Text>
        <VStack w={'90%'}>
          {userRentFavorites.map(item => (
            <View key={item.id}>
              <RentAdItem item={item} />
            </View>
          ))}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default FavoriteRentItems;
