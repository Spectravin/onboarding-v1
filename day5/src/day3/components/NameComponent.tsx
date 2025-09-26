import React from 'react';
import styled from 'styled-components';
import ChildComponent from './ChildComponent';

function NameComponent() {
  let name: string = "";

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    name = event.target.value;
  }

  function clickButton(event: React.MouseEvent<HTMLButtonElement>):void {
    alert("Hi " + name);
  }
  return (
    <Container>
      <StyledInput onChange={handleChange} placeholder="Enter your name" />
      <ChildComponent setclickButton={clickButton} />
    </Container>
  );
}
export default NameComponent;

//
// Styled components
//
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background: #fafafa;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 4px rgba(76,175,80,0.5);
  }
`;
