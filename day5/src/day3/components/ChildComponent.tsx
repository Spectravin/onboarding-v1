import React from 'react';
import styled from 'styled-components';

const ChildComponent = ({ setclickButton }: any) => {
  return (
    <Button type="button" onClick={setclickButton}>
      Enter
    </Button>
  );
};
export default ChildComponent;

//
// Styled components
//
const Button = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background-color: #2196f3;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }

  &:active {
    transform: scale(0.95);
  }
`;
