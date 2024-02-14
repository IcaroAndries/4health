import MainTemplate from 'modules/templates/MainTemplate'
import React from 'react'

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MainTemplate>
      {children}
    </MainTemplate>
  )
}

export default UserLayout
