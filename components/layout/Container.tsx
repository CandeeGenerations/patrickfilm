import React from 'react'
import {classNames} from '../../helpers'

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): React.ReactElement => {
  return (
    <div
      className={classNames(
        'container max-w-screen-xl mx-auto p-5 md:p-16 lg:p-10',
        className || '',
      )}
    >
      {children}
    </div>
  )
}

export default Container
