import React, {useEffect, useState} from 'react';
import {HStack, Text, VStack, View, Image} from 'native-base';
import {rentItems} from '../../data/RentItemsMockData';

const RentAdItem = () => {
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
        <Text py={4}>Recently Vacated</Text>
        {/* <HStack w={'90%'}> */}
        <VStack w={'90%'}>
          {rentItems.map(item => (
            <HStack key={item.id} mb={4} bg={'white'} borderRadius={10} p={3}>
              <Image
                source={{uri: item.img}}
                style={{width: 100, height: 100}}
              />
              <VStack justifyItems={'flex-end'}>
                <Text>Area: {item.area}</Text>
                <Text>Rent: {item.rent}</Text>
                <Text>Type: {item.type}</Text>
                <Text>Preferred: {item.preferred}</Text>
                <Text>Posted On: {item.postedOn}</Text>
                <Text>Contact Name: {item.contactName}</Text>
                <Text>Contact Number: {item.contactNumber}</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
        {/* </HStack> */}
      </VStack>
    </>
  );
};

export default RentAdItem;
