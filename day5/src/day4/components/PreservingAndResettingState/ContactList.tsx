import React from 'react'
import { type ContactListProps } from './ChatBox';
import { Sidebar } from './ChatBox';
import styled from 'styled-components';

export const ContactButton = styled.button<{ $active?: boolean }>`
  background: ${(props) => (props.$active ? "#61dafb" : "none")};
  color: ${(props) => (props.$active ? "black" : "white")};
  border: none;
  text-align: left;
  padding: 10px;
  margin: 5px 0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #61dafb;
    color: black;
  }
`;



const ContactList: React.FC<ContactListProps> =({
     contacts ,
     selectedContact,
     onClick}
    )=> {
    const [contact, setSelectedContact] = React.useState();
    
  return (
    <> 
      <Sidebar>
        <h3>Contacts</h3>
        {contacts.map((c) => (
          <ContactButton
            key={c.id}
            onClick={() => onClick(c)}
            $active={selectedContact?.id === c.id}
          >
            {c.name}
          </ContactButton>
        ))}
      </Sidebar>
    </>
    
    )
}
export default ContactList;

export type ContactObj={
    id:number;
    name:string;
    email:string;
}
