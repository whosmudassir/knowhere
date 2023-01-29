import React from 'react';
import {Text, ScrollView, VStack} from 'native-base';
import MainHeader from '../../components/common/MainHeader';
import FoodAdItems from '../../components/FoodAdItems';

const Food = () => {
  return (
    <>
      <MainHeader />
      <ScrollView flex={1} bgColor={'secondary'}>
        <VStack>
          <FoodAdItems />
        </VStack>
      </ScrollView>
    </>
  );
};

export default Food;
