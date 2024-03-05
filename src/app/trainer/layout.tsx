import React from 'react';

import MainTemplate from 'modules/templates/MainTemplate';

const ProviderLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MainTemplate>
    {children}
  </MainTemplate>
);

export default ProviderLayout;
