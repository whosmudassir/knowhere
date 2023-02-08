import {Button, Text, VStack, Icon} from 'native-base';
import React from 'react';
import {triggerSignUpActionSheet} from '../../store';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NonLoggedInUserView = () => {
  const openSignUpActionSheet = triggerSignUpActionSheet(
    state => state.openSignUpActionSheet,
  );

  return (
    <VStack alignItems={'center'} justifyContent={'center'} flex={1} pb={32}>
      <Icon
        as={<Ionicons name={'md-information-circle-outline'} />}
        size={12}
        color={'muted.400'}
      />
      <Text fontSize={16} mb={6} textAlign={'center'} w={'70%'}>
        Please Login/Sign up to get your saved list
      </Text>
      <Button
        variant={'thickPrimaryBtn'}
        onPress={() => openSignUpActionSheet()}>
        Continue
      </Button>
    </VStack>
  );
};

export default NonLoggedInUserView;
