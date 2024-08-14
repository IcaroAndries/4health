import React from 'react';

import {
  CalendarIcon,
  OverviewIcon,
  ProfileIcon,
  StudentsIcon,
  TrainsIcon,
} from 'modules/common/icons';

interface IUseNavItem {
  name: string
  path: string
  icon: React.ReactElement
}

interface IUserList {
  [key: string]: IUseNavItem[]
}

const useNav: IUserList = {
  Athlete: [
    {
      name: 'Overview',
      path: '/',
      icon: <OverviewIcon />,
    },
    {
      name: 'Meu Perfil',
      path: '/profile',
      icon: <ProfileIcon />,
    },
    {
      name: 'Meu Perfil',
      path: '/profile',
      icon: <StudentsIcon />,
    },
    {
      name: 'Meu Perfil',
      path: '/profile',
      icon: <CalendarIcon />,
    },
    {
      name: 'Meu Perfil',
      path: '/profile',
      icon: <TrainsIcon />,
    },
  ],
};
export default useNav;
