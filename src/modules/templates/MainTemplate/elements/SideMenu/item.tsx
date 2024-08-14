import {
  Box,
  HStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean
  name: string
  icon: React.ReactElement
}

const SideItem: React.FC<Props> = ({ isOpen, name, icon }) => (
  <HStack>
    <Box h="fit-content" w={14}>
      {icon}

    </Box>
    {
      isOpen && (
        <Text
          fontSize="lg"
          fontWeight="500"
          color="white"
          textTransform="capitalize"
        >
          {name}
        </Text>
      )
    }
  </HStack>
);

export default SideItem;
