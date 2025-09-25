import React, { useReducer } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  max-width: 300px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CountText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const ActionButton = styled.button`
  padding: 10px 16px;
  background: #61dafb;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #21a1f1;
    color: white;
  }
`;

const ResetButton = styled(ActionButton)`
  background: #ff6b6b;

  &:hover {
    background: #e63946;
  }
`;

function counterReducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

const initialState = { count: 0 };

const CounterReducer=()=> {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
   <Card>
      <CountText>Count: {state.count}</CountText>
      <ButtonGroup>
        <ActionButton onClick={() => dispatch({ type: "increment" })}>
          Increment
        </ActionButton>
        <ActionButton onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </ActionButton>
        <ResetButton onClick={() => dispatch({ type: "reset" })}>
          Reset
        </ResetButton>
      </ButtonGroup>
    </Card>
  );
}

export default CounterReducer;