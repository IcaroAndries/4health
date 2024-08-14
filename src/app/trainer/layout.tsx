'use client';

import React from 'react';

import MainTemplate from 'modules/templates/MainTemplate';

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MainTemplate>
    {children}
  </MainTemplate>
);

export default UserLayout;
