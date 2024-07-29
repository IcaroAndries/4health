'use client';

import {
  Image,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import whiteLogo from 'assets/logo/whiteLogo.svg';
import { motion } from 'framer-motion';
import useResponsiveSize from 'modules/_shared/hooks/use-responsive-size';

const SideMenu: React.FC = () => {
  const { vw } = useResponsiveSize();
  const trasitionConfig = '0.4s';

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack
      w="fit-content"
      h="100%"
      minH="100vh"
      bgColor="primary"
      spacing="0px"
      zIndex={2}
      transition={trasitionConfig}
      borderRadius="0px 10px 10px 0px"
      position="sticky"
      top={0}
      onMouseEnter={() => onOpen()}
      onMouseLeave={() => onClose()}
    >
      <motion.div
        animate={{ width: isOpen ? 300 : 100, transition: { duration: 0.4 } }}
      >
        <Stack
          h="100%"
          w="100%"
          p={vw('10px')}
          transition={trasitionConfig}
          spacing="0px"
        >
          <Stack
            p={vw('15px')}
            spacing={vw('8px')}
            align="center"
            justify="center"
            direction="row"
            transition={trasitionConfig}
          >
            <Image
              src={whiteLogo.src}
              w={isOpen ? vw('100px') : vw('60px')}
              alt="4HealthLogo"
              transition={trasitionConfig}
            />
          </Stack>
          <Stack>
            {
              // the list goes here
            }
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default SideMenu;
