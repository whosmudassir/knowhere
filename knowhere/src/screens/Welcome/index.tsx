import React from 'react';
import {Text, Box, Image} from 'native-base';

const Welcome = () => {
  return (
    <Box flex={1} bgColor={'#F4F5F9'} alignItems={'center'}>
      <Image
        source={require(`../../assets/images/knowhere.png`)}
        resizeMode="cover"
        h={40}
        w={40}
      />
      <Image
        source={require(`../../assets/images/real-estate.png`)}
        resizeMode="cover"
        h={40}
        w={40}
      />
    </Box>
  );
};

export default Welcome;
