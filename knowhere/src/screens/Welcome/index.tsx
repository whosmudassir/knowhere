import React, {useState} from 'react';
import {Text, Box, VStack, Image, Button, Link, ScrollView} from 'native-base';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import Login from '../Login';

interface WelcomeProps {
  navigation: NavigationProp<ParamListBase>;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <ScrollView
        flex={1}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <VStack>
          <Box alignItems={'center'} mb={-16} mt={-16}>
            <Image
              source={require(`../../assets/images/knowhere.png`)}
              alt={'img'}
              resizeMode="cover"
              w={10}
              size={'2xl'}
            />
          </Box>
          <Box
            bgColor={'#F4F5F9'}
            p={6}
            px={20}
            mb={6}
            w={'80%'}
            alignItems={'center'}
            borderRadius={20}>
            <Text variant={'semiBoldText'} pb={2}>
              Find places to rent
            </Text>
            <Image
              source={require(`../../assets/images/house.png`)}
              resizeMode="cover"
              h={40}
              w={40}
            />
          </Box>
          <Box
            bgColor={'#F4F5F9'}
            p={6}
            px={20}
            mb={6}
            w={'80%'}
            alignItems={'center'}
            borderRadius={20}>
            <Text
              variant={'semiBoldText'}
              textAlign={'center'}
              pb={2}
              lineHeight={'19px'}>
              Find street food that locals love
            </Text>
            <Image
              source={require(`../../assets/images/cup.png`)}
              resizeMode="cover"
              h={40}
              w={40}
            />
          </Box>
          <Button
            bgColor={'primary'}
            borderRadius={10}
            mt={6}
            p={3}
            onPress={() => setIsLoginOpen(!isLoginOpen)}>
            Sign up
          </Button>
          <Button
            alignSelf={'center'}
            mt={2}
            onPress={() => navigation.navigate('Home')}>
            <Text>Skip</Text>
          </Button>
        </VStack>
      </ScrollView>
      <Login
        isLoginOpen={isLoginOpen}
        onLoginClose={() => setIsLoginOpen(!isLoginOpen)}
      />
    </>
  );
};

export default Welcome;
