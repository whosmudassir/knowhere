import React from 'react';
import {Button} from 'native-base';
import {Linking} from 'react-native';

interface SetDirectionsBtnProps {
  coordinates: string;
}

const SetDirectionsBtn: React.FC<SetDirectionsBtnProps> = ({coordinates}) => {
  const openMap = () => {
    const url = `geo:0,0?q=${coordinates}`;
    Linking.openURL(url);
  };

  return (
    <Button
      ml={3}
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
      }}
      onPress={openMap}>
      Direction
    </Button>
  );
};

export default SetDirectionsBtn;
