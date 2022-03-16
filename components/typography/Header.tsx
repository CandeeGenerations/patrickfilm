import React from 'react'
import {classNames} from '../../helpers'

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): React.ReactElement => {
  return (
    <div
      className={classNames(
        'max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between',
        className || '',
      )}
    >
      <h2 className="mx-auto text-4xl font-king font-extrabold tracking-tight text-gray-900 lg:text-7xl">
        <span className="-mb-1 pb-1 block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
    </div>
  )
}

export default Header
