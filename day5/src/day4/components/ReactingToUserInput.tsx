import React, { useContext, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { AuthContext } from '../../AuthProvider';
import { enqueueSnackbar } from 'notistack';
import SharingStateParent from './PanelSelection/SharingStateParent';

const ReactingToUserInput = () => {
  const [input, setInput] = useState({ userName: '', userEmail: '' });
  const [formData, setFormData] = useState({ userName: '', userEmail: '' });
  const [error, setError] = useState({ nameError: '', emailError: '' });

  const auth = useContext(AuthContext);
  if (!auth) throw new Error('useAuth must be used within AuthProvider');
  const { isLoggedIn, login, logout } = auth;

  const validate = () => {
    let isValid = true;
    const newErrors = { nameError: '', emailError: '' };

    if (input.userName.trim() === '') {
      newErrors.nameError = 'Enter a valid name.';
      isValid = false;
    }

    if (input.userEmail.trim() === '') {
      newErrors.emailError = 'Enter a valid email ID.';
      isValid = false;
    } else if (
      !input.userEmail
        .trim()
        .match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-zA-Z]{2,6}$/)
    ) {
      newErrors.emailError = 'Invalid email ID.';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setFormData(input);
      login();
      enqueueSnackbar('Login Successful', {
        variant: 'success',
        autoHideDuration: 2000,
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
    } else {
      logout();
      enqueueSnackbar('Unable to Login', {
        variant: 'info',
        autoHideDuration: 2000,
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
      });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 3,
        border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: '#fff',
        boxShadow: 1,
      }}
    >
      <Typography variant="h5" align="center" mb={2}>
        ReactingToUserInput
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="User Name"
          name="userName"
          value={input.userName}
          onChange={handleChange}
          error={!!error.nameError}
          helperText={error.nameError}
          fullWidth
          size="small"
        />
        <TextField
          label="Email ID"
          name="userEmail"
          value={input.userEmail}
          onChange={handleChange}
          error={!!error.emailError}
          helperText={error.emailError}
          fullWidth
          size="small"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>

      {formData.userName && (
        <Box mt={2}>
          <Typography>Welcome {formData.userName}</Typography>
          <Typography>Email: {formData.userEmail}</Typography>
        </Box>
      )}

    </Box>
  );
};

export default ReactingToUserInput;
