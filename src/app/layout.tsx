import Provider from 'modules/providers/ChakraProvider'
import React from 'react'

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/favicon.ico' />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
