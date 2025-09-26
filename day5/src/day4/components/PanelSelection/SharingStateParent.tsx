import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import SharingStateChild from './SharingStateChild';

const SharingStateParent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box maxWidth={600} mx="auto" mt={4} p={2}>
      <Typography variant="h5" align="center" mb={2}>
        Sharing State Between Components
      </Typography>

      <SharingStateChild
        title="Child 1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </SharingStateChild>

      <SharingStateChild
        title="Child 2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from алма, the Kazakh word for "apple" and is often
        translated as "full of apples". Wild Malus sieversii is considered
        the ancestor of modern domestic apple.
      </SharingStateChild>
    </Box>
  );
};
export default SharingStateParent;