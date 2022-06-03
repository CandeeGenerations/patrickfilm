import React from 'react'

const ActorHeadshot = ({
  image,
  name,
  location,
  character,
}: {
  image: string
  name: string
  location: string
  character: string
}): React.ReactElement => {
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
      </div>
    </div>
  )
}

export default ActorHeadshot
