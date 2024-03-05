import { Grid, Stack } from '@chakra-ui/react';
import React from 'react';

import SideBar from './elements/SideBar';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Grid
    w="100%"
    minH="100vw"
    bgColor="whiteAlpha.400"
    gridTemplateColumns="auto 1fr"
  >
    <SideBar />
    <Stack
      w="100%"
      h="100%"
      align="center"
      justify="center"
    >
      {children}
    </Stack>
  </Grid>
);

export default MainTemplate;
