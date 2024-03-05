'use client';

import {
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import useResponsiveSize from 'modules/_shared/hooks/ResponsiveSize';

const SideBar: React.FC = () => {
  const { vw } = useResponsiveSize();

  const [colapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Stack
      w="100%"
      h={colapsed ? 'auto' : '100%'}
      bgColor="blackAlpha.900"
      spacing="0px"
      p={vw('10px')}
    >
      <Stack
        p={vw('15px')}
        spacing={vw('8px')}
        align="center"
        justify="center"
        direction="row"
      >
        <Image
          src="/light.png"
          w="3em"
          alt="4HealthLogo"
        />

        <Text
          fontSize="3em"
          textColor="yellow.400"
          fontWeight="200"
          borderRadius="0px 10px 10px 0px"
        >
          4Health
        </Text>
      </Stack>
      <Stack />
    </Stack>
  );
};

export default SideBar;
