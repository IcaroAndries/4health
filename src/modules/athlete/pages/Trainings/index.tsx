import { Stack } from '@chakra-ui/react';
import React from 'react';

import useResponsiveSize from 'modules/_shared/hooks/use-responsive-size';

const Trainings: React.FC = () => {
  const { vw } = useResponsiveSize();

  return (
    <Stack>
      training
    </Stack>
  );
};

export default Trainings;
