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
import useNav from 'modules/hooks/use-nav-logic';

import SideItem from './item';

const SideMenu: React.FC = () => {
  const { vw } = useResponsiveSize();
  const trasitionConfig = '0.4s';

  const { isOpen, onOpen, onClose } = useDisclosure();

  const list = useNav.Athlete;

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
          align="center"
          spacing={16}
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
              list.map((item, index) => (
                <SideItem
                  key={index}
                  isOpen={isOpen}
                  name={item.name}
                  icon={item.icon}
                />
              ))
            }
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default SideMenu;
