import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import Container from '../components/layout/Container'
import Content from '../components/layout/Content'
import Hero from '../components/pages/home/hero'
import SEO from '../components/seo'
import Header from '../components/typography/Header'
import {siteTitle} from '../helpers/constants'

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <Helmet title={siteTitle} />

      <SEO />

      <Hero />

      <Container>
        <Header>Trailer</Header>

        <iframe
          height={675}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src="https://www.youtube.com/embed/rGPAsVgXP8Y?controls=0"
          className="w-full border-0 mt-10"
        />
      </Container>

      <Content heading="About Slave to Servant">
        <p>
          It might sound oxymoronic to say that independence is a rallying cry
          for unaffiliated Baptists. But truly we can all unite around our
          independence! Independence has been called a fundamental principle in
          Baptist belief and practice. Francis Wayland stated,
        </p>

        <blockquote>
          <p>
            The Baptists have ever believed in the entire and absolute
            independence of the churches. By this, we mean that every church of
            Christ, that is, every company of believers united together
            according to the laws of Christ, is wholly independent of every
            other; that every church is perfectly capable of self-government;
            and that, therefore, no one acknowledges any higher authority, under
            Christ, than itself;
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
          independent Baptists on the internet. Baptists can be found all across
          the web and on most social media platforms, but there has been no
          central marketplace in which to meet and interrelate. IBNet endeavors
          to meet this challenge.
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
    </Layout>
  )
}

export default Home
