import React from 'react'
import Container from './Container'
import Footer from './Footer'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      {children}

      <Container>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
