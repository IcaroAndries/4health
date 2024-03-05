import { Image } from '@chakra-ui/react';
import React from 'react';

interface IUseNavItem {
  name: string
  path: string
  icon: React.ReactElement
}

const useNav = (): IUseNavItem[] => [
  {
    name: 'Treinos',
    path: '/Treinos',
    icon: <Image src="/light.png" w="1em" />,
  },
];

export default useNav;
