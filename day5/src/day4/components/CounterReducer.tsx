import React, { useReducer } from 'react';
import { Box, Typography, Button, Stack, Paper } from '@mui/material';

function counterReducer(state: any, action: any) {
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

const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Paper
      sx={{
        maxWidth: 300,
        mx: 'auto',
        mt: 4,
        p: 3,
        textAlign: 'center',
      }}
      elevation={3}
    >
      <Typography variant="h5" mb={2}>
        Count: {state.count}
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </Button>
        <Button variant="contained" color="primary" onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </Button>
        <Button variant="contained" color="error" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </Button>
      </Stack>
    </Paper>
  );
};

export default CounterReducer;
