import React from 'react';
import {ScrollView, Text, VStack} from 'native-base';
import MainHeader from '../../components/common/MainHeader';
import RentAdItem from '../../components/RentAdItem';

const Rent = () => {
  return (
    <>
      <MainHeader />
      <ScrollView flex={1} bgColor={'secondary'}>
        <VStack>
          <RentAdItem />
        </VStack>
      </ScrollView>
    </>
  );
};

export default Rent;
