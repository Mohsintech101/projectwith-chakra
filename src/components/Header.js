import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={20} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDE0 HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/videos">Videos</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/videos?categories=free">Free Videos</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/upload">Upload Videos</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/complimentary">Complimentary</Link>
              </Button>
              <Button
                variant={'ghost'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/redux">Redux</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              justifyContent="space-evenly"
              w={'full'}
            >
              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to="/login">Login</Link>
              </Button>
              <Button
                variant={'outline'}
                colorScheme={'purple'}
                onClick={onClose}
              >
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
