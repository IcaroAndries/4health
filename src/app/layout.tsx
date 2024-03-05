import React from 'react';

import Provider from 'modules/providers/ChakraProvider';

const RootLayout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <html lang="en">
    <head>
      <link
        rel="icon"
        type="image/svg+xml"
        href="/light.png"
      />
    </head>
    <body>
      <Provider>
        {children}
      </Provider>
    </body>
  </html>
);

export default RootLayout;
