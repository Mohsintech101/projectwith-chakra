import { Box, Stack, VStack, Heading, Input, HStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <Box 
    bgColor={'blackAlpha.900'} 
    color={'white'} 
    minH={'40'} 
    p='16'
    >
        <Stack direction={['column', 'row']} >
            <VStack
            alignItems={'stretch'}
            w={'full'}
            px={'4'}
            >
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']} >
                    Subscribe to News Letter...
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'} >
                    <Input 
                    placeholder='Enter Email'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}
                    focusBorderColor='none'
                    />
                    <Button
                  
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'outline'}
                    borderRadius={'0px 20px 20px 0px'}
                    >
                        <AiOutlineSend />
                    </Button>
                </HStack>
                
            </VStack>
            <VStack 
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
                    <Heading textTransform={'uppercase'} textAlign={'center'} >
                        Video Hub
                    </Heading>
                    <Text>
                        All rights received
                    </Text>
            </VStack>
            <VStack 
            w={'full'}
            >
                    <Heading
                    textTransform={'uppercase'}
                    size={'md'}
                    >
                        Social Media
                    </Heading>
                    <Button 
                    variant={'link'}
                    colorScheme={'purple'}
                    >
                        <a
                        target={'black'}
                        href='https://youtube.com/6packprogrammer'
                        >YouTube</a>
                    </Button>
                    <Button 
                    variant={'link'}
                    colorScheme={'purple'}
                    >
                        <a
                        target={'black'}
                        href='https://instagram.com/6packprogrammer'
                        >Instagram</a>
                    </Button>
                    <Button 
                    variant={'link'}
                    colorScheme={'purple'}
                    >
                        <a
                        target={'black'}
                        href='https://github.com/6packprogrammer'
                        >GitHub</a>
                    </Button>
            </VStack>
        </Stack>
    </Box>
    </>
  )
}

export default Footer