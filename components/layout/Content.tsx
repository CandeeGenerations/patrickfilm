import React from 'react'
import Header from '../typography/Header'

const Content = ({
  heading,
  intro,
  children,
}: {
  heading: string
  intro?: string
  children: React.ReactNode
}) => {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <Header>{heading}</Header>

          {intro && (
            <p className="mt-8 text-xl text-gray-500 leading-8">{intro}</p>
          )}
        </div>

        <div className="mt-6 prose prose-primary prose-lg text-gray-500 mx-auto text-justify">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content
