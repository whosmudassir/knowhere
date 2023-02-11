import React, {useState} from 'react';
import {Button, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {userRentFavoriteStore} from '../../../store';

interface FavoriteIconBtnProps {
  addTo: string;
  id: number;
}

const FavoriteIconBtn: React.FC<FavoriteIconBtnProps> = ({addTo, id}) => {
  const [iconState, setIconState] = useState('ios-heart-outline');

  const addToRentFavorite = userRentFavoriteStore(
    state => state.addToRentFavorite,
  );
  const removeFromRentFavorite = userRentFavoriteStore(
    state => state.removeFromRentFavorite,
  );

  const onIconClick = () => {
    if (iconState == 'ios-heart-outline') {
      setIconState('ios-heart');
      addTo == 'Rent' ? addToRentFavorite(id) : null;
    } else {
      setIconState('ios-heart-outline');
      addTo == 'Rent' ? removeFromRentFavorite(id) : null;
    }
  };

  return (
    <Button
      position="absolute"
      top={2}
      left={2}
      borderRadius={100}
      padding={'3px'}
      alignItems={'center'}
      justifyContent={'center'}
      backgroundColor={'muted.100'}
      onPress={onIconClick}>
      <Icon
        pt={'1.5px'}
        as={<Ionicons name={iconState} />}
        size={'22px'}
        color={'primary'}
      />
    </Button>
  );
};

export default FavoriteIconBtn;
