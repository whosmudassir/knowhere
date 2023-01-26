import React, {useEffect, useState} from 'react';
import {
  HStack,
  Text,
  VStack,
  View,
  Icon,
  Box,
  Image,
  Button,
} from 'native-base';
import {rentItems} from '../../data/RentItemsMockData';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <VStack w={'90%'}>
          {rentItems.map(item => (
            <HStack key={item.id} mb={4} bg={'white'} borderRadius={10}>
              <Image
                borderTopLeftRadius={10}
                borderBottomLeftRadius={10}
                source={{uri: item.img}}
                style={{width: '42%', height: '100%'}}
              />
              <VStack justifyItems={'flex-end'} p={3}>
                <Text fontSize={13}>Area: {item.area}</Text>
                <Text>Rent: {item.rent}</Text>
                <Text>Type: {item.type}</Text>
                <Text>Preferred: {item.preferred}</Text>
                <Text color={'muted.400'} fontSize={12}>
                  <Icon
                    as={<Ionicons name="ios-time" />}
                    size={4}
                    color={'muted.400'}
                  />{' '}
                  Posted on {item.postedOn}
                </Text>
                {/* <Text>Contact Name: {item.contactName}</Text> */}
                <Box flexDirection={'row'}>
                  <Button
                    ml={2}
                    mr={3}
                    bgColor="white"
                    borderRadius={100}
                    borderColor={'primary'}
                    borderWidth={'1px'}
                    _text={{
                      color: 'primary',
                      fontSize: 12,
                    }}>
                    Directions
                  </Button>
                  <Button
                    bgColor="primary"
                    borderRadius={100}
                    _text={{
                      fontSize: 12,
                    }}>
                    Contact
                  </Button>
                </Box>
                {/* <Text>Contact Number: {item.contactNumber}</Text> */}
              </VStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default RentAdItem;
