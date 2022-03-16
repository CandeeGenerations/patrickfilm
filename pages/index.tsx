import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {siteTitle} from '../helpers/constants'

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <Helmet title={siteTitle} />

      <SEO />

      <div className="mt-14 mb-16 mx-5">
        <img
          src="/images/default.svg"
          className="mx-auto max-w-4xl"
          alt={siteTitle}
        />
      </div>
    </Layout>
  )
}

export default Home
