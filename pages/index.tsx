import React from 'react'
import ButtonLink from '../components/buttonLink'
import Layout from '../components/layout'
import Container from '../components/layout/Container'
import Content from '../components/layout/Content'
import DonateModal from '../components/layout/DonateModal'
import ActorHeadshot, {IActorHeadshot} from '../components/pages/home/actor'
import DirectorSection from '../components/pages/home/director'
import Hero from '../components/pages/home/hero'
import SEO from '../components/seo'
import Header from '../components/typography/Header'
import config from '../config'
import {setPageState} from '../helpers'
import {gtagEvent} from '../libs/gtag'

export interface IPageState {
  open?: boolean
  iframeWidth?: number
}

export const HomeContext = React.createContext<{
  showHideDonateModal?: (open: boolean) => void
}>({})

const actors: IActorHeadshot[] = [
  {
    name: 'Ronan Woods',
    location: 'Dublin, Ireland',
    character: 'Patrick',
    image: '/images/ronan-image.jpg',
  },
  {
    name: 'Matthew Brooks',
    location: 'Pennsylvania, USA',
    character: "Patrick's Father",
    image: '/images/matt-image.jpg',
  },
  {
    name: 'Kayla Stone',
    location: 'Pennsylvania, USA',
    character: "Patrick's Mother",
    image: '/images/kayla-image.jpeg',
  },
  {
    name: "Mark O'Donohoe",
    location: 'Mullingar, Co. Westmeath, Ireland',
    character: "Patrick's Slave Master",
    image: '/images/mark-image.jpg',
  },
]

const Home = (): React.ReactElement => {
  const {trailerUrl} = config.base
  const [pageState, stateFunc] = React.useState<IPageState>({
    open: false,
    iframeWidth: 675,
  })

  const setState = (state: IPageState) =>
    setPageState<IPageState>(stateFunc, pageState, state)

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      setState({
        iframeWidth:
          width <= 1024 && width > 768
            ? 500
            : width <= 768 && width > 425
            ? 300
            : width <= 425
            ? 200
            : 675,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
              height={pageState.iframeWidth}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              src={trailerUrl}
              className="w-full border-0 mt-10"
            />
          ) : (
            <p className="text-center italic">No trailer yet</p>
          )}
        </Container>

        <Content heading="About Slave to Servant" smallHeader>
          <p>
            Slave to Servant is a gripping, new, dramatized movie about the
            early life of St. Patrick of Ireland. His remarkable life story
            continues to captivate a modern audience. The movie is written and
            directed by Shane Ferris, who calls himself the "Missionary
            Filmmaker". Shane has a passion for creating faith-based
            documentaries and short films.
          </p>
        </Content>

        <Container>
          <Header>Director</Header>

          <DirectorSection />
        </Container>

        <Container className="mt-24 text-center">
          <Header>Cast</Header>

          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-5xl"
          >
            {actors.map((actor, key) => (
              <li key={key}>
                <ActorHeadshot {...actor} />
              </li>
            ))}
          </ul>
        </Container>

        <Container className="text-center mt-24">
          <Header>Film Status: Pre-Production</Header>
        </Container>

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
            Give Now
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
