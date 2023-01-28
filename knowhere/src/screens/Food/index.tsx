import React from 'react';
import {Text, ScrollView, VStack} from 'native-base';
import MainHeader from '../../components/common/MainHeader';

const Food = () => {
  return (
    <>
      <MainHeader />
      <ScrollView flex={1} bgColor={'secondary'}>
        <VStack></VStack>
      </ScrollView>
    </>
  );
};

export default Food;
