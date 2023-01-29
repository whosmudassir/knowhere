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
import AdItemHorizontalText from '../common/AdItemHorizontalText';

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
            <HStack key={item.id} mb={4} bg={'white'} borderRadius={10}>
              <Image
                borderTopLeftRadius={10}
                borderBottomLeftRadius={10}
                source={{uri: item.img}}
                style={{width: '42%', height: '100%'}}
              />
              <VStack justifyItems={'flex-end'} p={3}>
                <Box ml={3}>
                  <AdItemHorizontalText
                    iconName={'ios-location-sharp'}
                    textValue={item.area}
                  />
                  <AdItemHorizontalText
                    iconName={'ios-home'}
                    textValue={item.type}
                  />
                  <AdItemHorizontalText
                    iconName={'md-cash'}
                    textValue={item.rent}
                  />
                  <AdItemHorizontalText
                    iconName={'ios-man'}
                    textValue={item.preferred}
                  />
                  <HStack mt={1.5} mb={2} alignItems={'center'}>
                    <Icon
                      as={<Ionicons name="ios-time" />}
                      size={4}
                      color={'muted.400'}
                    />
                    <Text color={'muted.400'} fontSize={11} ml={1}>
                      Posted on {item.postedOn}
                    </Text>
                  </HStack>
                </Box>
                {/* <Text>Contact Name: {item.contactName}</Text> */}
                <Box flexDirection={'row'}>
                  <Button
                    ml={2}
                    mr={2.5}
                    bgColor="white"
                    borderRadius={13}
                    borderColor={'primary'}
                    borderWidth={'1px'}
                    h={9}
                    p={0}
                    w={20}
                    _text={{
                      color: 'primary',
                      fontSize: 12,
                    }}>
                    Direction
                  </Button>
                  <Button
                    h={9}
                    p={0}
                    w={20}
                    bgColor="primary"
                    borderRadius={13}
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

export default RentAdItems;
