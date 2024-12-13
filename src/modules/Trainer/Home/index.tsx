import {
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Home: React.FC = () => (
  <HStack>

    <Stack>
      <Text>
        Hello John!
      </Text>

      {
        // aqui vão os cards
      }
    </Stack>

    {
      // aqui vai a lista
    }
  </HStack>
);
export default Home;
