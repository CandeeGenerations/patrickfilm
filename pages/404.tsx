import {Helmet} from 'react-helmet-async'
import ButtonLink from '../components/buttonLink'
import Layout from '../components/layout'
import Container from '../components/layout/Container'
import Blockquote from '../components/typography/blockquote'
import Headings from '../components/typography/headings'
import {siteTitle} from '../helpers/constants'
import {gtagEvent} from '../libs/gtag'

const FourOhFour = () => {
  return (
    <Layout>
      <Helmet title={`404 | ${siteTitle}`} />

      <Container>
        <div className="mt-24">
          <img
            src="/images/horizontal.svg"
            className="max-w-2xl w-full mb-14"
            alt={siteTitle}
          />

          <Headings.h1>Jeremiah 29:13 says...</Headings.h1>

          <Blockquote className="mb-5 text-lg">
            And ye shall seek me, and find me, when ye shall search for me with
            all your heart.
          </Blockquote>

          <p>Looks like you must keep seeking :)</p>

          <div className="py-10">
            <ButtonLink
              href="/"
              onClick={() =>
                gtagEvent({
                  action: '404__go_home__button',
                  category: 'engagement',
                  label: 'click_event',
                })
              }
            >
              Go Home
            </ButtonLink>
          </div>

          <small className="text-sm">
            <em>404: Page not found</em>
          </small>
        </div>
      </Container>
    </Layout>
  )
}

export default FourOhFour
