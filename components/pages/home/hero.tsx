import {ArrowNarrowDownIcon} from '@heroicons/react/outline'
import React from 'react'

const Hero = (): React.ReactElement => {
  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="/images/background-2.jpg"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-primary-800 to-secondary-700 opacity-50"
      />

      <div className="relative max-w-6xl mx-auto pt-32 pb-16 px-6 flex flex-col items-center text-center sm:pt-64 sm:pb-32 lg:px-0">
        <h1 className="text-4xl font-king font-extrabold tracking-tight text-white lg:text-9xl mb-10">
          Slave to Servant
        </h1>

        <p className="text-lg text-white">Watch the trailer below</p>

        <ArrowNarrowDownIcon className="text-white h-10 w-10 mt-8" />
      </div>
    </div>
  )
}

export default Hero
