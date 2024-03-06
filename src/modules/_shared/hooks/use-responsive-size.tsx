'use client';

import { useBreakpointValue } from '@chakra-ui/react';
import { useCallback } from 'react';

import useVwValue from './use-vw-value';

interface IUseResponsiveValue {
  vw: (pixelValue: string, mobileValue?: string) => string
}

const useResponsiveSize = (): IUseResponsiveValue => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const isMd = useBreakpointValue({ base: false, md: true, lg: false });
  const isLg = useBreakpointValue({ lg: true, xl: false });
  const isXl = useBreakpointValue({ xl: true, '2xl': false });
  // const is1920 = useBreakpointValue({ base: false, '2xl': true });

  const { getVwValue } = useVwValue();

  // const screenSize = window?.innerWidth || 0;

  const vw = useCallback(
    (pixelValue: string, mobileValue?: string): string => {
      // if (is1920) return pixelValue;
      if (isMobile) return mobileValue || pixelValue;

      // return pixelValue;
      const vwValue = getVwValue(pixelValue);

      if (isMd) return `${vwValue * 1.2}vw`;
      if (isLg) return `${vwValue * 1.15}vw`;
      // if (isXl) return `${vwValue * 1.15}vw`;
      if (isXl) return pixelValue;

      return `${vwValue}vw`;
    },
    [getVwValue, isMobile, isMd, isLg, isXl],
  );

  return {
    vw,
  };
};

export default useResponsiveSize;
