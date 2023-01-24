import React from 'react';
import {Center, Box, Select, CheckIcon, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CityDropDown = () => {
  const [service, setService] = React.useState('kurnool');
  return (
    <Center>
      <Box maxW="300">
        <Select
          dropdownIcon={
            <Icon
              as={<Ionicons name="ios-chevron-down-sharp" />}
              size={5}
              color="primary"
            />
          }
          h={12}
          selectedValue={service}
          minWidth="96%"
          accessibilityLabel="Choose Service"
          _selectedItem={{
            bg: 'primary',
            _text: {color: 'white'},
          }}
          borderColor={'transparent'}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Kurnool" value="kurnool" />
        </Select>
      </Box>
    </Center>
  );
};

export default CityDropDown;
