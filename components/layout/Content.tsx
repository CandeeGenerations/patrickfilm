import React from 'react'
import {classNames} from '../../helpers'
import Header from '../typography/Header'

const Content = ({
  heading,
  intro,
  children,
  space = true,
}: {
  heading?: string
  intro?: string
  children: React.ReactNode
  space?: boolean
}) => {
  return (
    <div
      className={classNames('relative overflow-hidden', space ? 'py-16' : '')}
    >
      <div className="relative px-4 sm:px-6 lg:px-8">
        {(heading || intro) && (
          <div className="text-lg max-w-prose mx-auto">
            {heading && <Header>{heading}</Header>}

            {intro && (
              <p className="mt-8 text-xl text-gray-500 leading-8">{intro}</p>
            )}
          </div>
        )}

        <div className="mt-6 prose prose-primary prose-lg text-gray-500 mx-auto text-justify">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content
