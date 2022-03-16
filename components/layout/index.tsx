import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto p-5 md:p-16 lg:p-10">
        {children}

        <Footer />
      </div>
    </>
  )
}

export default Layout
