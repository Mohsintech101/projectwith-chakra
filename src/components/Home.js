import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgage1 from '../assets/1.jpg';
import imgage2 from '../assets/2.jpg';
import imgage3 from '../assets/3.jpg';
import imgage4 from '../assets/4.jpg';
import imgage5 from '../assets/5.png'

const headingOptions = {
  pos: 'absolute',
  left: '25%',
  top: '50%',
//   transfrom: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const list = [
  { image: imgage1, name: 'Watch the Future', bgColor: 'blackAlpha.600', color: 'white'},
  { image: imgage2, name: 'Future is Gaming', bgColor: 'whiteAlpha.900', color: 'black'},
  { image: imgage3, name: 'Gaming on Console', bgColor: 'whiteAlpha.600', color: 'black'},
  { image: imgage4, name: 'Night Life is Cool', bgColor: 'whiteAlpha.600', color: 'black'},
];

const Home = () => {
  return (
    <Box >
      <MyCarousel/>

      <Container maxWidth={'container.lg'} minH={'100vh'} p='16' /* bgColor={'chocolate'} */ >
        <Heading textTransform={'unset'} py='2' w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >
          Services
        </Heading>
        <Stack
        h={'full'}
        p='4'
        alignItems={'center'}
        direction={['column', 'row']}
        >
          <Image src={imgage5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text 
          letterSpacing={'widest'}
          lineHeight={'190%'}
          p={['4','16']}
          textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio dignissimos natus libero tempore consequatur, hic odit. Minus sint molestias minima debitis, praesentium sequi tempore fugit vitae consectetur adipisci commodi inventore illum reprehenderit veniam eius sapiente quos? Ut nesciunt, architecto quo maxime laboriosam dicta ducimus officiis, molestiae beatae dolor aliquid excepturi! Possimus voluptatibus repudiandae earum rerum? 
          </Text>
        </Stack>
        </Container>
    </Box>
  );
};

const MyCarousel = () => {
    return(
        <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        {list.map(attr => (
          <Box w={'full'} h={'100vh'}>
            <Image src={attr.image} />
            <Heading
              bgColor={attr.bgColor}
              color={attr.color}
              {...headingOptions}
            >
              {attr.name}
            </Heading>
          </Box>
        ))}
      </Carousel>
    )
}

export default Home;
