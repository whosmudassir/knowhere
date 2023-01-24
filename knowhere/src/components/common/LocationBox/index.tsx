import React from 'react';
import {Box, Divider, Icon, HStack, Text, VStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LocationBox = () => {
  return (
    <Box
      bgColor={'secondary'}
      w={'90%'}
      alignSelf={'center'}
      mt={-10}
      borderRadius={10}
      mb={3}
      py={2}
      px={3}>
      <HStack>
        <HStack>
          <VStack alignSelf={'center'}>
            <Icon
              as={<Ionicons name="ios-location-sharp" />}
              size={6}
              color="primary"
            />
          </VStack>
          <Divider
            orientation="vertical"
            mx="3"
            bg={'muted.300'}
            h="60%"
            alignSelf={'center'}
          />
        </HStack>

        <HStack justifyItems={'flex-start'}>
          <VStack>
            <Text> City</Text>
            <Text> Kurnool</Text>
          </VStack>
          <Divider
            orientation="vertical"
            mx="3"
            bg={'muted.300'}
            h="60%"
            alignSelf={'center'}
          />
        </HStack>

        <VStack>
          <Text> City</Text>
          <Text> Kurnool</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default LocationBox;
