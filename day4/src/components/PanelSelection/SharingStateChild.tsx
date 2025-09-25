import React from 'react'
import styled from 'styled-components';

const ChildCard = styled.div<{ $isActive: boolean }>`
  border: 2px solid ${(props) => (props.$isActive ? "#61dafb" : "#ccc")};
  background-color: ${(props) => (props.$isActive ? "#e6f7ff" : "#f9f9f9")};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: #61dafb;
  }
`;
const ChildTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #222;
`;

const ChildContent = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
`;

interface parentProps{
     title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}


const SharingStateChild = ({title,children,isActive,onShow}:parentProps) => {
  return (
    <div>
         <ChildCard $isActive={isActive} onClick={onShow}>
      <ChildTitle>{title}</ChildTitle>
      {isActive && <ChildContent>{children}</ChildContent>}
    </ChildCard>
    </div>
  )
}

export default SharingStateChild