import React from 'react';
import {Text, Box, Image, Button, Link, ScrollView} from 'native-base';

const Welcome = () => {
  return (
    <ScrollView>
      <Box flex={1} bgColor={'#FFFF'} alignItems={'center'}>
        <Image
          source={require(`../../assets/images/knowhere.png`)}
          resizeMode="cover"
          w={40}
          size={'2xl'}
          mb={-20}
          mt={-10}
        />
        <Box
          bgColor={'#F4F5F9'}
          p={6}
          px={20}
          mb={6}
          w={'80%'}
          alignItems={'center'}
          borderRadius={10}>
          <Text>Find place to rent</Text>
          <Image
            source={require(`../../assets/images/house.png`)}
            resizeMode="cover"
            h={40}
            w={40}
          />
        </Box>
        <Box
          bgColor={'#F4F5F9'}
          p={6}
          px={20}
          mb={6}
          w={'80%'}
          alignItems={'center'}
          borderRadius={10}>
          <Text>Find street food that locals love</Text>
          <Image
            source={require(`../../assets/images/cup.png`)}
            resizeMode="cover"
            h={40}
            w={40}
          />
        </Box>
        <Button>Sign up</Button>
        <Link>Skip</Link>
      </Box>
    </ScrollView>
  );
};

export default Welcome;
