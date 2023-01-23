import React from 'react';
import {
  Text,
  Divider,
  Box,
  Button,
  Link,
  Stack,
  Input,
  Icon,
  Pressable,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const contentWidth = {
  base: '75%',
  md: '25%',
};

const InputFiledSection = () => {
  const [show, setShow] = React.useState(false);

  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={contentWidth}
        InputLeftElement={
          <Icon
            as={<Ionicons name="ios-mail" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Email Address"
      />
      <Input
        w={contentWidth}
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={<Ionicons name={show ? 'ios-eye' : 'ios-eye-off'} />}
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Password"
      />
      <Button w={contentWidth} variant={'primaryButton'}>
        Sign in
      </Button>
    </Stack>
  );
};

const SignInForm = () => {
  return (
    <>
      <Text fontSize={22} fontWeight={600} pb={8}>
        Welcome back
      </Text>
      <InputFiledSection />
      <Divider my={10} w={contentWidth} />

      <Button
        variant={'primaryButton'}
        leftIcon={
          <Ionicons name="ios-phone-portrait-outline" color={'white'} />
        }>
        Sign in with OTP
      </Button>
    </>
  );
};

export default SignInForm;
