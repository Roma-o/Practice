import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="bg-fuchsia-50 min-h-screen bg-gradient-to-t from-gray-800 to-white ">
      {children}
    </div>
  )
}

export default Layout
