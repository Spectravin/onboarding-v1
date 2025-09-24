import React from 'react'
import type { ContactObj } from './ContactList';
import type { MessengerProps } from './Chatbox';
import styled from 'styled-components';

export const ChatArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ChatHeader = styled.div`
  font-weight: bold;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const MessageBox = styled.textarea`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
  margin-bottom: 1rem;

  &:focus {
    border-color: #61dafb;
    outline: none;
    box-shadow: 0 0 4px rgba(97, 218, 251, 0.6);
  }
`;
export const SendButton = styled.button`
  align-self: flex-end;
  padding: 10px 16px;
  font-size: 1rem;
  background-color: #61dafb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover:not(:disabled) {
    background-color: #21a1f1;
    color: white;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Messenger:React.FC<MessengerProps> = ({selectedContact}) => {
    const [text, setText] = React.useState(""); 
    return (
    <>
       <ChatArea>
      <ChatHeader>
        {selectedContact
          ? `Chat with ${selectedContact.name}`
          : "Select a contact to start chatting"}
      </ChatHeader>

      <MessageBox
        value={text}
        placeholder={
          "Type a message to " + (selectedContact?.name ?? "someone")
        }
        onChange={(e) => setText(e.target.value)}
      />

      <SendButton disabled={!selectedContact}>
        Send to {selectedContact?.email ?? ""}
      </SendButton>
    </ChatArea></>
  )

}

export default Messenger
