import { Stack } from '@chakra-ui/react';
import React from 'react';

import SignIn from './elements/signIn';

const LoginPage: React.FC = () => (
  <Stack h="100%" minH="100vh" direction="row" spacing={0}>
    <Stack
      display={{ base: 'none', md: 'flex' }}
      bgColor="primary"
      w="45vw"
      h="auto"
    />
    <SignIn />
  </Stack>
);

export default LoginPage;
