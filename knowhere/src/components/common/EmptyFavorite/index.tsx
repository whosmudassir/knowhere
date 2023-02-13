import {Button, Text, VStack, Icon} from 'native-base';
import React from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface EmptyFavoriteProps {
  navigation?: NavigationProp<ParamListBase>;
  navigateTo: string;
}

const EmptyFavorite: React.FC<EmptyFavoriteProps> = ({
  navigation,
  navigateTo,
}) => {
  return (
    <VStack alignItems={'center'} justifyContent={'center'} flex={1} pb={32}>
      <Icon
        as={<Ionicons name={'md-information-circle-outline'} />}
        size={12}
        color={'muted.400'}
      />
      <Text fontSize={16} mb={6} textAlign={'center'} w={'70%'}>
        You haven't added anything to favorites
      </Text>
      <Button
        variant={'thickPrimaryBtn'}
        onPress={() => navigation?.navigate(navigateTo)}>
        Browse
      </Button>
    </VStack>
  );
};

export default EmptyFavorite;
