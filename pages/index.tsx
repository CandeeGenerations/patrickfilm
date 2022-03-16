import React from 'react'
import {Helmet} from 'react-helmet'
import ButtonLink from '../components/buttonLink'
import Layout from '../components/layout'
import Container from '../components/layout/Container'
import Content from '../components/layout/Content'
import DonateModal from '../components/layout/DonateModal'
import Hero from '../components/pages/home/hero'
import SEO from '../components/seo'
import Header from '../components/typography/Header'
import config from '../config'
import {setPageState} from '../helpers'
import {siteTitle} from '../helpers/constants'
import {gtagEvent} from '../libs/gtag'

export interface IPageState {
  open?: boolean
}

export const HomeContext = React.createContext<{
  showHideDonateModal?: (open: boolean) => void
}>({})

const Home = (): React.ReactElement => {
  const {trailerUrl} = config
  const [pageState, stateFunc] = React.useState<IPageState>({
    open: false,
  })

  const setState = (state: IPageState) =>
    setPageState<IPageState>(stateFunc, pageState, state)

  return (
    <HomeContext.Provider
      value={{
        showHideDonateModal: (open) => setState({open}),
      }}
    >
      <Layout>
        <SEO />

        <Hero />

        <Container>
          <Header>Trailer</Header>

          {trailerUrl ? (
            <iframe
              height={675}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={trailerUrl}
              className="w-full border-0 mt-10"
            />
          ) : (
            <p className="text-center italic">No trailer yet</p>
          )}
        </Container>

        <Content heading="About Slave to Servant">
          <p>
            It might sound oxymoronic to say that independence is a rallying cry
            for unaffiliated Baptists. But truly we can all unite around our
            independence! Independence has been called a fundamental principle
            in Baptist belief and practice. Francis Wayland stated,
          </p>

          <blockquote>
            <p>
              The Baptists have ever believed in the entire and absolute
              independence of the churches. By this, we mean that every church
              of Christ, that is, every company of believers united together
              according to the laws of Christ, is wholly independent of every
              other; that every church is perfectly capable of self-government;
              and that, therefore, no one acknowledges any higher authority,
              under Christ, than itself;
            </p>
          </blockquote>

          <p>
            But while we remain resolutely independent ecclesiastically, our
            individual and corporate lives are nevertheless intertwined through
            varying forms of relationships and interactions which are enabled
            increasingly more through the vast network of technology and social
            media. Independence doesn't need to mean isolation.
          </p>

          <h2>IBNet Helps Independents Connect</h2>

          <p>
            IBNet was born out of the need for a central gathering place of
            independent Baptists on the internet. Baptists can be found all
            across the web and on most social media platforms, but there has
            been no central marketplace in which to meet and interrelate. IBNet
            endeavors to meet this challenge.
          </p>

          <p>
            We firmly uphold the foundational principle of independence and the
            Baptist distinctive of the primacy and autonomy of the local church.
            We also understand the importance of being able to reach out and
            interact with others of like faith and practice for all of the
            reasons, small or great, that have brought independent Baptists
            together in the past. Our desire is that you find this website a
            useful ministry tool for connecting with like-minded churches,
            organizations, and individuals.
          </p>
        </Content>

        <Container className="text-center">
          <ButtonLink
            onClick={() => {
              setState({open: true})
              gtagEvent({
                action: 'home__donate_now__button',
                category: 'engagement',
                label: 'click_event',
              })
            }}
            large
            rounded
          >
            Donate Now
          </ButtonLink>
        </Container>
      </Layout>

      <DonateModal
        open={pageState.open}
        onChange={(open) => setState({open})}
      />
    </HomeContext.Provider>
  )
}

export default Home
