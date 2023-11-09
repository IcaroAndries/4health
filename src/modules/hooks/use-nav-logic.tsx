import React from 'react'

interface IUseNavItem {
  name: string
  path: string
  icon: React.ReactElement
}

const useNav = (): IUseNavItem[] => {
  return [
    {
      name: 'Treinos',
      path: '/Treinos',
      icon: <></>
    }
  ]
}

export default useNav
