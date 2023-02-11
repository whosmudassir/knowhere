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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AdItemHorizontalText from '../AdItemHorizontalText';
import DialContactBtn from '../DialContactBtn';
import SetDirectionsBtn from '../SetDirectionsBtn';
import FavoriteIconBtn from '../FavoriteIconBtn';

interface FoodAdItemProps {
  item: any;
}

const FoodAdItem: React.FC<FoodAdItemProps> = ({item}) => {
  return (
    <>
      <HStack mb={4} bg={'white'} borderRadius={10}>
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
            <AdItemHorizontalText iconName={'flame'} textValue={item.item} />
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
    </>
  );
};

export default FoodAdItem;
