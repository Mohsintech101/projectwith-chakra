import { Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <>
    <Container
    maxW={'container.xl'}
    h={'100vh'}
    p={'16'}
    >
      <form>
        <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        m={'auto'}
        my={'16'}
        >
          <Heading>
            Welcome Back, Please Login to Enter
          </Heading>
          <Input
          placeholder='Enter Email'
          type={'email'}
          focusBorderColor={'purple.500'}
          required
          />
          <Input
          placeholder='Enter Password'
          type={'password'}
          focusBorderColor={'purple.500'}
          required
          />

          <Button
          variant={'link'}
          alignSelf={'flex-end'}
          >
            <Link to='/forgetpassword' >Forget Password</Link>
          </Button>
          <Button
          colorScheme={'purple'}
          type={'submit'}
          >
            Log In
          </Button>
          <Text
          textAlign={'right'}
          >
            New User?{' '}<Button
            variant={'link'}
            alignSelf={'flex-end'}
            >
              <Link to='/singup' >Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
    </>
  )
}

export default Login