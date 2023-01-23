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
            as={<Ionicons name="ios-person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
      />
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
        Create Account
      </Button>
    </Stack>
  );
};

const SignUpForm = () => {
  return (
    <>
      <Text fontSize={22} fontWeight={600} pb={8}>
        Create an account
      </Text>
      <InputFiledSection />
      <Box flexDirection={'row'} alignItems={'center'} textAlign={'center'}>
        <Text pt={4}>Already have an account?</Text>{' '}
        <Link
          _text={{
            color: 'primary',
            pt: 4,
            pl: 1,
          }}>
          Sign in
        </Link>
      </Box>

      <Divider my={10} w={contentWidth} />
      <Button
        variant={'primaryButton'}
        mb={3}
        leftIcon={<Ionicons name="ios-logo-google" color={'white'} />}>
        With Google
      </Button>
      <Button
        variant={'primaryButton'}
        leftIcon={
          <Ionicons name="ios-phone-portrait-outline" color={'white'} />
        }>
        With Phone number
      </Button>
    </>
  );
};

export default SignUpForm;
