'use client';

import {
  Button,
  Checkbox,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { useImmer } from 'use-immer';

const SignIn: React.FC = () => {
  const inputStyle = {
    width: '100%',
    height: '3.25em',
    fontSize: 'md',
    fontWeight: '600',
    borderRadius: '30px',
    border: '1px solid #43B748',
  };

  const iconButonStyle = {
    width: '100%',
    height: '3.25em',
    borderRadius: '30px',
    border: '1px solid #43B748',
  };

  const [form, updateForm] = useImmer({
    username: '',
    password: '',
    remember: false,
  });

  return (
    <Stack
      h="100%"
      w="100%"
      align="center"
      px={{ base: '2em', md: '8em' }}
      pt={{ base: '2em', md: '4em' }}
    >
      <Stack w="100%" align="center" maxW="40em">
        <Stack w="100%" alignItems="center">
          <Stack w="100%" align="center" spacing="2px" mb="2em">
            <Image src="/logo/greenLogo.svg" />
            <Text fontSize="4xl" fontWeight="bold" color="primary">
              Welcome Back!
            </Text>
            <Text fontSize="sm" color="#7A7A7A" fontWeight="600">
              Log in with
            </Text>
          </Stack>

          <Stack w="100%" align="center">
            <HStack w="100%" spacing="1em">
              <IconButton
                style={iconButonStyle}
                variant="outline"
                aria-label="google"
                icon={<FcGoogle size={30} />}
              />

              <IconButton
                style={iconButonStyle}
                variant="outline"
                aria-label="facebook"
                icon={<FaFacebook size={30} />}
              />

              <IconButton
                style={iconButonStyle}
                variant="outline"
                aria-label="apple"
                icon={<FaApple size={32} />}
              />
            </HStack>

            <Text fontSize="lg" fontWeight="bold" color="#7A7A7A" my="0.5em">
              or
            </Text>
          </Stack>

          <Stack spacing="1.25em" w="100%">
            <Input
              style={inputStyle}
              placeholder="Username"
              onChange={(e) => updateForm((draft) => { draft.username = e.target.value; })}
            />
            <Input
              style={inputStyle}
              type="password"
              placeholder="Password"
              onChange={(e) => updateForm((draft) => { draft.password = e.target.value; })}
            />
            <HStack
              w="100%"
              justify="space-between"
              align="center"
              spacing="0.5em"
            >

              <Checkbox
                isChecked={form.remember}
                onChange={() => updateForm((draft) => { draft.remember = !draft.remember; })}
              >
                <Text fontSize="sm">
                  Remember me
                </Text>
              </Checkbox>

              <Button
                variant="link"
                color="primary"
                fontSize="sm"
                _hover={{ color: '#50E555' }}
              >
                <u>
                  Forgot your password?
                </u>
              </Button>
            </HStack>

            <Button
              w="100%"
              h="3em"
              bgColor="primary"
              textColor="whiteAlpha.900"
              type="submit"
              borderRadius="30px"
              _hover={{ bgColor: '#50E555' }}
            >
              Log in
            </Button>
          </Stack>

          <Text fontSize="md" my="2em">
            Don&apos;t have an account yet?
            {' '}
            <Text
              display="inline"
              as="b"
              color="primary"
              fontWeight="600"
              _hover={{ color: '#50E555', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Get started!
            </Text>
          </Text>
        </Stack>

      </Stack>
    </Stack>
  );
};

export default SignIn;
