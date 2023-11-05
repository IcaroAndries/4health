import { Provider } from 'modules/providers/ChakraProvider'
import MainTemplate from 'modules/templates/MainTemplate'
import React from 'react'

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <MainTemplate>{children}</MainTemplate>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
