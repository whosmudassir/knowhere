import React from 'react';
import {ScrollView, Text, VStack, Modal, Button} from 'native-base';
import MainHeader from '../../components/common/MainHeader';
import RentAdItems from '../../components/RentAdItems';

const Rent = () => {
  return (
    <>
      <MainHeader showLocationBox={true} />
      <ScrollView flex={1} bgColor={'secondary'}>
        <VStack>
          <RentAdItems />
        </VStack>
      </ScrollView>
      <Modal isOpen={false} onClose={() => {}}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Sit nulla est ex deserunt exercitation anim occaecat.
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space="2">
              <Button>LEARN MORE</Button>
              <Button>Accept</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Rent;
