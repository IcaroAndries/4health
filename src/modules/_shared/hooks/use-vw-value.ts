import { useCallback } from 'react';

interface IUseVwValue {
  getVwValue: (pixelValue: string) => number
}

const useVwValue = (): IUseVwValue => {
  const getVwValue = useCallback(
    (pixelValue: string): number => {
      const vwValue = parseInt(pixelValue.replace('px', ''), 10) * (100 / 1920);

      return vwValue;
    },
    [],
  );

  return {
    getVwValue,
  };
};

export default useVwValue;
