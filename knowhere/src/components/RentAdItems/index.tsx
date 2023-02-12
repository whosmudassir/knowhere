import React, {useEffect, useState} from 'react';
import {Text, VStack, View} from 'native-base';
import {rentItems} from '../../data/RentItemsMockData';
import RentAdItem from '../common/RentAdItem';

const RentAdItems = () => {
  const [rentItem, setRentItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        setRentItem(rentItems);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <VStack alignItems={'center'}>
        <Text variant={'categoryTitle'}>Places for rent</Text>
        <VStack w={'90%'}>
          {rentItems.map(item => (
            <View key={item.id}>
              <RentAdItem item={item} isInFavorite={true} />
            </View>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default RentAdItems;
