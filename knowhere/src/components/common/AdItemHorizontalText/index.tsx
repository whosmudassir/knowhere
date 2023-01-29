import React from 'react';
import {HStack, Text, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface AdItemHorizontalTextProps {
  iconName: string;
  textValue: string;
}

const AdItemHorizontalText: React.FC<AdItemHorizontalTextProps> = ({
  iconName,
  textValue,
}) => {
  return (
    <HStack my={0.25} alignItems={'center'}>
      <Icon as={<Ionicons name={iconName} />} size={4} color={'primary'} />
      <Text variant="rentItemTextValue" ml={1.5}>
        {textValue}
      </Text>
    </HStack>
  );
};

export default AdItemHorizontalText;
