// src/app/login/page.tsx
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';

const Login: React.FC = () => (
  <Box
    w="100%"
    h="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    bgColor="whiteAlpha.300"
  >
    <Stack
      spacing={3}
      w="300px"
      bg="blackAlpha.800"
      margin="0 auto"
      padding="2em"
      rounded="xl"
    >
      <FormControl>
        <FormLabel color="yellow.400">Email address</FormLabel>
        <Input
          bg="whiteAlpha.800"
          type="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel color="yellow.400">Password</FormLabel>
        <Input
          bg="whiteAlpha.800"
          type="password"
        />
      </FormControl>
      <HStack
        w="100%"
        justifyContent="space-between"
      />
      <Checkbox
        color="yellow.400"
      >
        Remember me
      </Checkbox>
      <Button
        variant="link"
        color="yellow.400"
      >
        Forgot password?
      </Button>
      <Button
        w={['full', 'auto']}
        rounded="full"
        bg="yellow.400"
        color="black"
        type="submit"
      >
        Sign in
      </Button>
    </Stack>
  </Box>
);

export default Login;
