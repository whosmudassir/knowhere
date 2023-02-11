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
import {foodItems} from '../../data/FoodItemsMockData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DialContactBtn from '../common/DialContactBtn';
import SetDirectionsBtn from '../common/SetDirectionsBtn';
import FavoriteIconBtn from '../common/FavoriteIconBtn';
import AdItemHorizontalText from '../common/AdItemHorizontalText';

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
                    iconName={'podium'}
                    textValue={item.shopName}
                  />
                  <AdItemHorizontalText
                    iconName={'flame'}
                    textValue={item.item}
                  />
                  <AdItemHorizontalText
                    iconName={'ios-location-sharp'}
                    textValue={item.area}
                  />

                  <AdItemHorizontalText
                    iconName={'md-calendar'}
                    textValue={item.establishedSince}
                  />

                  <HStack mt={1.5} mb={2} alignItems={'center'}>
                    <Icon
                      as={<Ionicons name="ios-time" />}
                      size={4}
                      color={'muted.400'}
                    />
                    <Text color={'muted.400'} fontSize={11} ml={1}>
                      Posted on {item.rating}
                    </Text>
                  </HStack>
                </Box>
                {/* <Text>Contact Name: {item.contactName}</Text> */}
                <Box flexDirection={'row'}>
                  <SetDirectionsBtn coordinates={item.mapCoordinate} />
                  <DialContactBtn phoneNumber={item.contactNumber} />
                </Box>
                {/* <Text>Contact Number: {item.contactNumber}</Text> */}
              </VStack>
              <FavoriteIconBtn id={item.id} addTo={'Food'} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </>
  );
};

export default FoodAdItems;
