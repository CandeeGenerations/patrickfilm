import {DetailedHTMLProps} from 'react'
import {Helmet} from 'react-helmet'
import config from '../../config'
import {siteTitle} from '../../helpers/constants'

const SEO = ({title}: {title?: string}) => {
  const description = 'Slave to Servant Film'
  const pathname = ''
  const siteUrl = config.siteUrl
  const url = siteUrl
  const fullURL = (path: string) => (path ? `${siteUrl}${path}` : siteUrl)
  const image = '/favicon/android-chrome-512x512.png'

  const metaTags: DetailedHTMLProps<any, any>[] = [
    {charset: 'utf-8'},
    {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#fff',
    },
    {
      rel: 'canonical',
      href: fullURL(pathname),
    },
    {itemprop: 'name', content: title},
    {itemprop: 'description', content: description},
    {itemprop: 'image', content: fullURL(image)},
    {name: 'description', content: description},

    {name: 'twitter:card', content: 'summary_large_image'},
    {name: 'twitter:site', content: title},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {
      name: 'twitter:image',
      content: fullURL(image),
    },

    {property: 'og:title', content: title},
    {property: 'og:url', content: url},
    {property: 'og:image', content: fullURL(image)},
    {property: 'og:description', content: description},
    {property: 'og:site_name', content: title},
  ]

  return (
    <Helmet
      title={title ? `${title} | ${siteTitle}` : siteTitle}
      htmlAttributes={{lang: 'en'}}
      meta={metaTags}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Merriweather:700,700i&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default SEO
