'use client';

import {
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import useResponsiveSize from 'modules/_shared/hooks/use-responsive-size';

const SideBar: React.FC = () => {
  const { vw } = useResponsiveSize();
  const trasitionTime = '0.8s';

  const [colapsed, setCollapsed] = useState<boolean>(true);

  return (
    <Stack
      w="100%"
      h={colapsed ? 'auto' : '100%'}
      maxH={colapsed ? '80vh' : '100vh'}
      top={colapsed ? '10vh' : '0px'}
      bgColor="blackAlpha.900"
      spacing="0px"
      zIndex={2}
      transition={trasitionTime}
      borderRadius="0px 10px 10px 0px"
      position="sticky"
    >
      <Stack
        h="100%"
        w="100%"
        p={colapsed ? vw('5px') : vw('10px')}
        transition={trasitionTime}
        spacing="0px"
        position="relative"
      >
        <IconButton
          isRound
          zIndex={5}
          bgColor="yellow.400"
          textColor="whiteAlpha.900"
          icon={
            colapsed
              ? <IoIosArrowForward />
              : <IoIosArrowBack />
          }
          onClick={() => setCollapsed(!colapsed)}
          aria-label="Toggle SideBar"
          position="absolute"
          w={colapsed ? '30px' : '22px'}
          minW={colapsed ? '30px' : '22px'}
          h={colapsed ? '30px' : '22px'}
          top={colapsed ? '50%' : 'calc(10px + 3em)'}
          right={colapsed ? '-15px' : '-11px'}
          transition={trasitionTime}
        />
        <Stack
          p={vw('15px')}
          spacing={vw('8px')}
          align="center"
          justify="center"
          direction="row"
          transition={trasitionTime}
        >
          <Image
            src="/light.png"
            w="3em"
            alt="4HealthLogo"
          />

          {
            !colapsed && (
              <Text
                fontSize="3em"
                textColor="yellow.400"
                fontWeight="200"
                borderRadius="0px 10px 10px 0px"
              >
                4Health
              </Text>
            )
          }
        </Stack>
        <Stack>
          {
            // the list goes here
          }
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SideBar;
