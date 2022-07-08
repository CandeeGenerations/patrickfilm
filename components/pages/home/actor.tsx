import React from 'react'
import Facebook from './icons/facebook'
import Instagram from './icons/instagram'
import Linkedin from './icons/linkedin'
import Snapchat from './icons/snapchat'
import Twitter from './icons/twitter'
import Youtube from './icons/youtube'

export interface IActorHeadshot {
  image: string
  name: string
  location: React.ReactNode
  character: string
  social?: {
    facebook?: string
    instagram?: string
    youtube?: string
    twitter?: string
    linkedin?: string
    snapchat?: string
  }
}

const icons = {
  facebook: <Facebook />,
  twitter: <Twitter />,
  instagram: <Instagram />,
  youtube: <Youtube />,
  snapchat: <Snapchat />,
  linkedin: <Linkedin />,
}

const ActorHeadshot = ({
  image,
  name,
  location,
  character,
  social,
}: IActorHeadshot): React.ReactElement => {
  return (
    <div className="space-y-6">
      <img
        className="mx-auto h-40 w-40 object-center object-cover rounded-full shadow-lg"
        src={image}
        alt={name}
        title={name}
      />

      <div className="space-y-2">
        <div className="leading-6 font-medium space-y-1">
          <h1 className="text-2xl text-primary-500">{name}</h1>

          <h2 className="text-lg text-secondary-500">{character}</h2>

          <h3 className="text-lg text-gray-500">{location}</h3>
        </div>

        {social && (
          <ul role="list" className="flex justify-center space-x-5">
            {Object.keys(social).map((network) => (
              <li>
                <a
                  href={social[network]}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                >
                  {icons[network]}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ActorHeadshot
