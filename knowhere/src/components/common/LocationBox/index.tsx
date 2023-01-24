import React from 'react';
import {Box, Divider, Icon, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CityDropDown from '../CityDropDown';

const LocationBox = () => {
  return (
    <Box
      bgColor={'secondary'}
      w={'88%'}
      alignSelf={'center'}
      mt={-10}
      borderRadius={10}
      mb={3}
      px={3}>
      <HStack>
        <HStack>
          <VStack alignSelf={'center'}>
            <Icon
              as={<Ionicons name="ios-location-sharp" />}
              size={5}
              color="primary"
            />
          </VStack>
          <Divider
            orientation="vertical"
            mx="3"
            bg={'muted.300'}
            h="40%"
            alignSelf={'center'}
          />
        </HStack>

        <HStack justifyItems={'flex-start'}>
          <VStack>
            <CityDropDown />
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default LocationBox;
