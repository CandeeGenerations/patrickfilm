import React from 'react'

const DirectorSection = (): React.ReactElement => {
  return (
    <div className="space-y-4 md:grid md:grid-cols-3 md:items-start md:gap-12 md:space-y-0">
      <div className="aspect-w-3 aspect-h-2 md:aspect-w-3 md:aspect-h-4">
        <img
          className="object-cover object-top shadow-lg rounded-lg"
          src="/images/ferris-image.jpg"
          alt="Shane Ferris"
        />
      </div>

      <div className="md:col-span-2">
        <div className="space-y-12 mt-12 md:mt-4">
          <div className="text-4xl leading-6 font-medium text-primary-500">
            <h3>Shane Ferris</h3>
          </div>

          <div className="text-lg">
            <p className="text-gray-500 text-justify">
              Since I was a teenager, I was involved in filmmaking. When I was
              27, I bought my first professional camera and began shooting
              regularly. I took a deeper dive into filmmaking in my late
              twenties for the sole cause of lifting up the name of Christ. My
              desire is to point people to Him through video productions. The
              Lord has blessed me with the ability to make films and have
              creative freedom to make movies that give clear and thorough
              gospel presentations. Consider partnering with me as I endeavor to
              use video to spread the message of faith.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DirectorSection
