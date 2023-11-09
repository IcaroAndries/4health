import Provider from 'modules/providers/ChakraProvider'
import React from 'react'

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
