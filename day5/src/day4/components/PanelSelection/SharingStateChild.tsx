import React from 'react';
import { Paper, Typography, Collapse, Box } from '@mui/material';

interface Props {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}

const SharingStateChild: React.FC<Props> = ({ title, children, isActive, onShow }) => {
  return (
    <Paper
      elevation={isActive ? 6 : 1}
      onClick={onShow}
      sx={{
        mb: 2,
        p: 2,
        cursor: 'pointer',
        border: (theme) => `2px solid ${isActive ? theme.palette.primary.main : '#ccc'}`,
        backgroundColor: isActive ? '#e6f7ff' : '#f9f9f9',
        transition: '0.3s',
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Collapse in={isActive}>
        <Box mt={1}>
          <Typography>{children}</Typography>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default SharingStateChild;