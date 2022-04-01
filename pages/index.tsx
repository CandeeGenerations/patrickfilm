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
  const {trailerUrl} = config.base
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
            Slave to Servant is a new film by Ferris Films. This gripping story
            of the world-renowned Patrick of Ireland comes alive through this
            dramatized retelling. Patrick went from rebellious youth in Roman
            Britain, to slave on the treacherous island of ancient Ireland, to
            escape back to Britain, and finally, a return to Ireland as servant
            and missionary of Jesus Christ. See this historical account
            reenacted on screen as you’ve never seen it before.
          </p>

          <p>
            Patrick quoted the Apostle Paul extensively, and patterned his
            ministry in Ireland after the church-planting ministry of the
            apostle to the Gentiles. Like Paul, Patrick came to a sudden
            realization of his sinful state, and with a repentant heart, placed
            his trust in Jesus Christ as his Saviour. Later with great
            missionary zeal, and against the advice of family, friends, and
            religious leaders, Patrick put himself in harm's way to follow his
            own "Macedonian call" and bring the gospel to a godless and pagan
            people.
          </p>

          <p>
            Our prayer is that God will use this film to cast a fresh vision of
            Patrick's life and ministry, and that his missionary efforts will
            continue to bear fruit today as his heart of surrender speaks to a
            modern audience.
          </p>

          <p>
            The production of this film is solely dependent on private gifts. We
            sincerely ask you to consider a generous gift of any amount to help
            us reach our production budget and bring this film to release. May
            the Lord use it to touch many, and may the rewards abound to your
            account. God be glorified!
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
