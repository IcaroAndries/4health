interface IUseResponsiveSize {
  vw: (value: string) => string
}

const useResponsiveSize = (): IUseResponsiveSize => {
  const vw = (value: string): string => {
    const pxValue = parseFloat(value.replace('px', ''))

    const emValue = pxValue / 16

    return `${emValue}em`
  }

  return {
    vw
  }
}

export default useResponsiveSize
