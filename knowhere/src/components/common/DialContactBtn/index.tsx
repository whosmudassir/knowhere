import React from 'react';
import {Button} from 'native-base';
import {Linking} from 'react-native';

interface DialContactBtnProps {
  phoneNumber: string;
}

const DialContactBtn: React.FC<DialContactBtnProps> = ({phoneNumber}) => {
  const openNumberInPhoneApp = async () => {
    const url = `tel:${phoneNumber}`;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Can't make call.");
    }
  };

  return (
    <Button
      h={9}
      p={0}
      w={20}
      bgColor="primary"
      borderRadius={13}
      _text={{
        fontSize: 12,
      }}
      onPress={openNumberInPhoneApp}>
      Contact
    </Button>
  );
};

export default DialContactBtn;
