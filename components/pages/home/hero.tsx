import {ArrowNarrowDownIcon} from '@heroicons/react/outline'
import React from 'react'
import {gtagEvent} from '../../../libs/gtag'
import {HomeContext} from '../../../pages'
import ButtonLink from '../../buttonLink'

const Hero = (): React.ReactElement => {
  const {showHideDonateModal} = React.useContext(HomeContext)

  return (
    <div className="relative bg-gray-900">
      <div
        aria-hidden="true"
        className="flex items-center justify-center h-4/6 mb-12 bg-fixed bg-center md:bg-cover"
        style={{backgroundImage: "url('/images/background-2.jpg')"}}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary-800 to-secondary-700 opacity-50"
        />

        <div className="relative max-w-6xl mx-auto pt-32 pb-16 px-6 flex flex-col items-center text-center sm:pt-64 sm:pb-32 lg:px-0">
          <img
            src="/images/logo-white.svg"
            alt=""
            className="w-16 lg:w-24 h-auto"
          />

          <h1 className="text-6xl font-king font-extrabold tracking-tight text-white lg:text-9xl mt-5 mb-10">
            Slave to Servant
          </h1>

          <ButtonLink
            onClick={() => {
              showHideDonateModal(true)
              gtagEvent({
                action: 'hero__donate_now__button',
                category: 'engagement',
                label: 'click_event',
              })
            }}
            white
            rounded
            large
            className="mb-14"
          >
            Donate Now
          </ButtonLink>

          <p className="text-lg text-white">Watch the trailer below</p>

          <ArrowNarrowDownIcon className="text-white h-10 w-10 mt-8" />
        </div>
      </div>
    </div>
  )
}

export default Hero
