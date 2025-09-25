import React, { useState } from 'react';
import styled from 'styled-components';
import {Button} from './FruitAddingForm';
const IncreaseNumberComponent = () => {
  const [number, setNumber] = useState<number>(1);

  function increaseTheNumber() {
    setNumber(number + 1);
    setNumber(a => a + 2); // total +3
  }

  return (
    <Container>
      <h3>Number is {number}</h3>
      <Button onClick={increaseTheNumber}>+3</Button>
    </Container>
  );
};

export default IncreaseNumberComponent;

//
// Styled components
//
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  p
`