'use client';

import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Your GSAP animation logic here
  }, [currentSlide]);

  return (
    <Box
      minH="700px"
      bgColor="blackAlpha.900"
    />
  );
};

export default Hero;
