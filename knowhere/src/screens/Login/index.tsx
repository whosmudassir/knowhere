import React from 'react';
import {Actionsheet} from 'native-base';
import SignUpForm from '../../components/SignUpForm';
import SignInForm from '../../components/SignInForm';

interface LoginProps {
  isLoginOpen: boolean;
  onLoginClose: () => void;
}

const Login: React.FC<LoginProps> = ({isLoginOpen, onLoginClose}) => {
  return (
    <>
      <Actionsheet
        isOpen={isLoginOpen}
        onClose={onLoginClose}
        bgColor={'transparent'}>
        <Actionsheet.Content py={8}>
          {true ? <SignUpForm /> : <SignInForm />}
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default Login;
