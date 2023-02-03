import React from 'react';
import {Text, Box, Image} from 'native-base';
import LocationBox from '../LocationBox';

interface MainHeaderProps {
  showLocationBox: boolean;
}

const MainHeader: React.FC<MainHeaderProps> = ({showLocationBox}) => {
  return (
    <Box bgColor={'white'}>
      <Box alignItems={'center'} mt={-8}>
        <Image
          source={require(`../../../assets/images/knowhere.png`)}
          alt={'img'}
          resizeMode="cover"
          w={'100%'}
          size={'xl'}
        />
      </Box>
      {showLocationBox && <LocationBox />}
    </Box>
  );
};

export default MainHeader;
