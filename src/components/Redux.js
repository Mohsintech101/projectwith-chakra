import { Button, Container, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Redux = () => {
  const { coins } = useSelector(state => state.first);

  const dispatch = useDispatch();

  const handleme = () => {
    dispatch({
      type: 'myFirstCase',
      payload: ['1', '2', '3'],
    });
  };

  const { count } = useSelector(state=> state.second)

  const increment = () => {
    dispatch({
        type: 'incrementCount',
      });
  }

  const decrement = () => {
    dispatch({
        type: 'decrementCount',
      });
  }

  return (
    <Container p={'20'} bgColor={'grey'} h={'100vh'} w={'container.xl'}>
      <Button colorScheme={'purple'} onClick={handleme}>
        Click
      </Button>
      <Box p={'4'}>
        <Text> {coins[0]} </Text>
        <Text> {coins[1]} </Text>
        <Text> {coins[2]} </Text>
      </Box>
      <Button colorScheme={'purple'} onClick={increment} marginRight={'2'}>
        Add
      </Button>
      <Button colorScheme={'purple'} onClick={decrement}>
        Subs
      </Button>
      <Box p={'4'}>
        <Text> {count} </Text>
      </Box>
    </Container>
  );
};

export default Redux;
