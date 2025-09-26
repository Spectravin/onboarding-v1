import React, { useState } from 'react'
import styled from 'styled-components';

let formData = {   
  name: "",
  description: "",
  img: ""
}

const FruitAddingForm = () => {
  const [formData, setFormData] = useState({   
    name: "",
    description: "",
    img: ""
  });
  const [renderedFruits, setFruits] = useState(fruits);
  let lastFruitIndex = fruits.length-1;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch(event.target.id){
      case "fruitName": formData.name=event.target.value; break;
      case "description": formData.description=event.target.value; break;
      case "img": formData.img=event.target.value; break;
    }
    setFormData({...formData});
  }

  const handleSubmit = () => {
    let d = { 
      "name": formData.name, 
      "description": formData.description, 
      "img": formData.img
    }
    fruits.push(d);
    setFruits([...renderedFruits, d]); 
  }

  const [showComponent, setShowComponent] = useState(false);
  const [currentIndex,setIndex] = useState(0);

  function handleClick(){
    if(currentIndex < lastFruitIndex){
      setIndex(currentIndex+1);
    } else {
      setIndex(0);
    }
  }

  return (
    <Container>
      <Header>
        <ToggleButton onClick={() => setShowComponent(!showComponent)}>
          {showComponent ? "Hide " : "Show "} Fruits
        </ToggleButton>
      </Header>

      {showComponent && 
        <FruitDisplay>
          <Button onClick={handleClick}>Next</Button>
          <h2>{fruits[currentIndex]?.name}</h2>
          <p>{fruits[currentIndex]?.description}</p>
          <img src={fruits[currentIndex]?.img } alt="Not available"/>
        </FruitDisplay>
      }

      <Form>
        <h1>Fruit Adding Form</h1>
        <label htmlFor='fruitName'>Fruit Name</label>
        <Input id="fruitName" type="text" onChange={handleChange} />

        <label htmlFor='description'>Description</label>
        <Input id="description" type="text" onChange={handleChange} />

        <label htmlFor='img'>Image</label>
        <Input id="img" type="text" onChange={handleChange} />

        <Button type='button' onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  )
}

export default FruitAddingForm

export let fruits: fruit[] = [
  { 
    name:"apple",
    description:"This is a sweet tasting fruit. It can be available in Red, Green and White",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/500px-Pink_lady_and_cross_section.jpg"
  },
  {
    name:"orange",
    description:"This is a Citrus fruit. It has a sour taste",
    img:"https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
  }
]

export interface fruit {
  name: string,
  description: string,
  img: string
}

//
// Styled components
//
const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 16px;
  border: 2px solid #ddd;
  border-radius: 12px;
  background: #fafafa;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Header = styled.h1`
  text-align: center;
`;

const ToggleButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  background-color: #2196f3;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #1976d2;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;

  h1 {
    font-size: 20px;
    color: #333;
    margin-bottom: 8px;
  }

  label {
    font-weight: bold;
    color: #555;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 4px rgba(76,175,80,0.5);
  }
`;

export const Button = styled.button`
  padding: 10px 16px;
  margin-top: 8px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
  &:active {
    transform: scale(0.96);
  }
`;

const FruitDisplay = styled.div`
  margin-top: 20px;
  text-align: center;

  h2 {
    font-size: 22px;
    color: #222;
  }

  p {
    font-size: 14px;
    color: #666;
    margin: 8px 0;
  }

  img {
    max-width: 250px;
    max-height: 200px;
    border-radius: 12px;
    border: 1px solid #ccc;
    margin-top: 10px;
  }
`;
