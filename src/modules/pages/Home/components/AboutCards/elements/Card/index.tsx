import {
  Box,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string
  description: string
}

const Card: React.FC<Props> = ({ title, description }) => (
  <Stack
    maxW="16em"
    py="3em"
    px="1.5em"
    spacing="0.8em"
    justify="center"
    align="center"
    border="2px solid"
    borderColor="blackAlpha.700"
    borderRadius="10px"
  >
    <Box
      w="4em"
      h="4em"
      borderRadius="50%"
      border="2px solid"
      borderColor="yellow.400"
      p="0.5em"
    />
    <Text textAlign="center">{title}</Text>
    <Text textAlign="center">{description}</Text>
  </Stack>
);

export default Card;
