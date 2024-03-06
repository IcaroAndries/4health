import { HStack } from '@chakra-ui/react';
import React from 'react';

import useResponsiveSize from 'modules/_shared/hooks/use-responsive-size';

const TopMenu: React.FC = () => {
  const { vw } = useResponsiveSize();

  return (
    <HStack>
      topmenu
    </HStack>
  );
};

export default TopMenu;
