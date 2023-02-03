import React, {useState} from 'react';
import {Button, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const FavoriteIconBtn = () => {
  const [iconState, setIconState] = useState('ios-heart-outline');

  const onIconClick = () => {
    if (iconState == 'ios-heart') {
      setIconState('ios-heart-outline');
    } else {
      setIconState('ios-heart');
    }
  };

  return (
    <Button
      position="absolute"
      top={2}
      left={2}
      borderRadius={100}
      padding={'3px'}
      alignItems={'center'}
      justifyContent={'center'}
      backgroundColor={'muted.100'}
      onPress={onIconClick}>
      <Icon
        pt={'1.5px'}
        as={<Ionicons name={iconState} />}
        size={'22px'}
        color={'primary'}
      />
    </Button>
  );
};

export default FavoriteIconBtn;
