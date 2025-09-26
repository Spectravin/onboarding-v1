import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { type ContactObj } from './ContactList';

export type MessengerProps = { selectedContact?: ContactObj|undefined };

const Messenger: React.FC<MessengerProps> = ({ selectedContact }) => {
  const [text, setText] = React.useState('');

  return (
    <Box flex={1} display="flex" flexDirection="column" p={2}>
      <Typography variant="h6" mb={1} sx={{ borderBottom: '1px solid #ddd', pb: 1 }}>
        {selectedContact ? `Chat with ${selectedContact.name}` : 'Select a contact to start chatting'}
      </Typography>

      <TextField
        multiline
        minRows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Type a message to ${selectedContact?.name ?? 'someone'}`}
        variant="outlined"
        sx={{ mb: 2, flex: 1 }}
      />

      <Button
        variant="contained"
        disabled={!selectedContact}
        onClick={() => setText('')}
        sx={{ alignSelf: 'flex-end' }}
      >
        Send to {selectedContact?.email ?? ''}
      </Button>
    </Box>
  );
};

export default Messenger;