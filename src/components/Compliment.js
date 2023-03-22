import React, { useEffect } from 'react';
import { Button, Container, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const Compliment = () => {
  

  return (
    <Container p={'20'} bgColor={'grey'} h={'110vh'} w={'container.xl'}>
      <Mystack id={'101'}/>
      <Mystack id={'102'}/>
      <Mystack id={'103'}/>
      <Mystack id={'104'}/>
    </Container>
  );
};



const Mystack = ({id}) => {
  const [random, setRandom] = useState(1);
  const [num, setNum] = useState('');

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    setRandom(randomNumber);
    // eslint-disable-next-line
  }, []);

  const handleForm = (e, id) => {
    e.preventDefault();
    const comp = findHint(random)
    if (comp === parseInt(num)) {
      document.getElementById(id).style.backgroundColor = 'green';
    } else {
      document.getElementById(id).style.backgroundColor = 'red';
    }
  };

  const handleClear = () => {
    setNum('');
  };

  const findHint = (random) => {
    const randomNumberLength = random.toString().length;
    let baseOfRandom = '1';
    for (let i = 0; i < randomNumberLength; i++) {
      baseOfRandom += '0';
    }
    const comp = parseInt(baseOfRandom) - random;
    return comp
  };
  return (
    <VStack paddingBottom={'10'}>
        <form onSubmit={e => handleForm(e, id)}>
          {random}
          {' '}(Hint: {findHint(random)})
          <Input
            id={id}
            type={'text'}
            value={num}
            onChange={e => setNum(e.target.value)}
          />
          <Button marginTop={'2'} type="submit">
            Test
          </Button>
          <Button marginLeft={'2'} marginTop={'2'} onClick={handleClear}>
            Clear
          </Button>
        </form>
      </VStack>
  )
}

export default Compliment;