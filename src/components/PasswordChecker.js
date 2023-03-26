import {
  Button,
  Container,
  Input,
  Stack,
  VStack,
  Heading,
  Text,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const PasswordChecker = () => {
  const handlePasswordChecker = e => {
    const overlay = document.querySelector('.overlay');
    const passwordLength = e.target.value.length;
    let overlayLength = 30 - passwordLength * 3;
    overlay.style.filter = `blur(${overlayLength}px)`;
  };

  return (
    <>
      <Container maxW={'container.lg'} h={'100vh'} p="20">
        <Stack direction={['column', 'row']}>
          <VStack
            w={'50%'}
            h={'100%'}
            /* className="form-container" id="sign-in-container" */
          >
            <form>
              <VStack>
                <Heading
                  color={'green'}
                  textAlign={'center'}
                  marginBottom={'6'}
                >
                  Sign in
                </Heading>
                <HStack
                  className="social-container"
                  color={'purple'}
                  justifyContent={'space-between'}
                >
                  <a
                    href="https://youtube.com/6packprogrammer"
                    className="social"
                  >
                    <i class="fa-brands fa-discord"></i>
                  </a>
                  <a
                    href="https://youtube.com/6packprogrammer"
                    className="social"
                  >
                    <i class="fa-brands fa-square-instagram"></i>
                  </a>
                  <a
                    href="https://youtube.com/6packprogrammer"
                    className="social"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </HStack>
              </VStack>
              <VStack>
                <span>or use your account</span>

                <Input
                  type={'email'}
                  id="email"
                  placeholder="enter your email"
                  focusBorderColor={'purple.500'}
                  required
                />

                <Input
                  type={'password'}
                  id="password"
                  placeholder="enter your password"
                  focusBorderColor={'purple.500'}
                  onKeyUp={handlePasswordChecker}
                  required
                />

                <Text alignSelf={'flex-end'} paddingTop={'5'}>
                  Forgot Password?{' '}
                  <Button colorScheme={'purple'} type="submit">
                    <Link to="/login}">Sign in</Link>
                  </Button>
                </Text>
              </VStack>
            </form>
          </VStack>
          <VStack
            className="overlay-container"
            top={'0'}
            w={'50%'}
            h={'100%'}
            overflow={'hidden'}
            transition="transform 0.6s ease-in-out"
          >
            <VStack
              className="overlay"
              backgroundImage={
                'https://images.pexels.com/photos/2481177/pexels-photo-2481177.jpeg?auto=compress&cs=tinysrgb&w1260&h=750&dpr=1'
              }
              backgroundRepeat={'no-repeat'}
              backgroundPosition={'center'}
              color={'whiteAlpha.900'}
              filter={'blur(30px)'}
            >
              <VStack className="overlay-panel"
              alignItems={'center'}
              p={'10'}
              >
                <Heading>Tech101!</Heading>
                <Text>
                  If you like the video, please LIKE SHARE & SUBSCRIBE for daily
                  awesome videos
                </Text>
                <Button colorScheme={'purple'} >
                  Sign Up
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </Stack>
      </Container>
    </>
  );
};

export default PasswordChecker;
