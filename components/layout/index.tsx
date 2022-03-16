import React from 'react'
import Footer from './Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}

      <Footer />
    </>
  )
}

export default Layout
