import {
  Box,
  Image,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

import whiteLogo from 'assets/logo/whiteLogo.svg';

import SignIn from './elements/signIn';

const LoginPage: React.FC = () => (

  <Stack
    h="100%"
    minH="100vh"
    direction="row"
    spacing={0}
  >
    <Stack
      display={{ base: 'none', md: 'flex' }}
      bgColor="primary"
      w="50vw"
      h="auto"
    >
      <Box m="2em">
        <Image
          src={whiteLogo.src}
          alt="logo"
        />
      </Box>
    </Stack>
    <SignIn />
  </Stack>
);

export default LoginPage;
