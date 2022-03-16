import React from 'react'

const Container = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement => {
  return (
    <div className="container max-w-screen-xl mx-auto p-5 md:p-16 lg:p-10">
      {children}
    </div>
  )
}

export default Container
