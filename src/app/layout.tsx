import Provider from 'modules/providers/ChakraProvider'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/light.png'
        />
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
