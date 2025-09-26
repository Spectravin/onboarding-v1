import React from 'react'
import ContactList, { type ContactObj } from './ContactList';
import Messenger from './Messenger';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #f0f2f5;
  font-family: Arial, sans-serif;
`;

export const Sidebar = styled.div`
  width: 250px;
  background: #337fe2ff;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;


export type ContactListProps = {
            contacts:ContactObj[], 
            selectedContact?:ContactObj | undefined,
            onClick:(c:ContactObj)=>void
}

const ChatBox = () => {
        const contacts:ContactObj[] = [
            {id:1,name:"Alice", email:"Alice@gmail.com"},
            {id:2,name:"Bob", email:"Bob@gmail.com"},
            {id:3,name:"Charlie", email:"Charlie@gmail.com"}
        ]
        const [selectedContact, setSelectedContact] = React.useState<ContactObj>();
        
        return (
    <>
          <Container>
      <ContactList
        contacts={contacts}
        selectedContact={selectedContact}
        onClick={(c: ContactObj) => setSelectedContact(c)}
      />
      <Messenger selectedContact={selectedContact} />
    </Container></>
  )
}

export default ChatBox
