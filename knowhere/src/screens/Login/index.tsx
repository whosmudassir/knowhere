import React from 'react';
import {Text} from 'native-base';
import {
  Button,
  Actionsheet,
  useDisclose,
  Stack,
  Input,
  Icon,
  Pressable,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface LoginProps {
  isLoginOpen: boolean;
  onLoginClose: () => void;
}

const InputFiledSection = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Stack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: '75%',
          md: '25%',
        }}
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
        w={{
          base: '75%',
          md: '25%',
        }}
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
    </Stack>
  );
};

const Login: React.FC<LoginProps> = ({isLoginOpen, onLoginClose}) => {
  return (
    <>
      <Actionsheet
        isOpen={isLoginOpen}
        onClose={onLoginClose}
        bgColor={'transparent'}>
        <Actionsheet.Content>
          <Text>Create an account</Text>

          <InputFiledSection />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default Login;
