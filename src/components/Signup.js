import React from 'react'
import { Avatar, Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'

const Signup = () => {
  return (
    <>
    <Container
    maxW={'container.xl'}
    h={['full']}
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
            Register Video Hub
          </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
          placeholder='Enter Name'
          type={'text'}
          focusBorderColor={'purple.500'}
          required
          />
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
          <Input
          placeholder='Enter Password Again'
          type={'password'}
          focusBorderColor={'purple.500'}
          required
          />
          <Button
          colorScheme={'purple'}
          type={'submit'}
          >
            Sign Up
          </Button>
          <Text
          textAlign={'right'}
          >
            Already User?{' '}<Button
            variant={'link'}
            alignSelf={'flex-end'}
            >
              <Link to='/login' >Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
    </>
  )
}

export default Signup