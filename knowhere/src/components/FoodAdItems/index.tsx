import React, {useEffect, useState} from 'react';
import {Text, VStack, View} from 'native-base';
import {foodItems} from '../../data/FoodItemsMockData';
import FoodAdItem from '../common/RentAdItem';

const FoodAdItems = () => {
  const [rentItem, setRentItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      try {
        setLoading(true);
        setRentItem(foodItems);
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
        <Text variant={'categoryTitle'}>Popular foods & drinks</Text>
        <VStack w={'90%'}>
          {foodItems.map(item => (
            <View key={item.id}>
              <FoodAdItem item={item} />
            </View>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default FoodAdItems;
