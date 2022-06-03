import styled from '@emotion/styled'
import dayjs from 'dayjs'
import React from 'react'
import {gtagEvent} from '../../libs/gtag'
import Container from './Container'

const Footer = () => {
  const year = dayjs().format('YYYY')

  return (
    <>
      <Container>
        <Border className="relative" />

        <FooterWrapper className="grid md:grid-cols-3 grid-rows-3 place-items-center relative content-between">
          <div className="pb-3 lg:pb-0 md:justify-self-start justify-self-center mb-5 md:mb-0">
            Designed by{' '}
            <a
              href="https://candeegenerations.com?ref=patrickfilm.net"
              target="_blank"
              onClick={() =>
                gtagEvent({
                  action: 'footer__candee_generations__link',
                  category: 'engagement',
                  label: 'click_event',
                })
              }
            >
              Candee Generations
            </a>
          </div>

          <div>
            <img
              src="/images/ferris-films-logo.png"
              alt="Ferris Films"
              title="Ferris Films"
              className="mx-auto"
              style={{maxWidth: 100}}
            />
          </div>

          <div className="md:justify-self-end justify-self-center mt-5 md:mt-0">
            &copy; 2022{year !== '2022' && ` - ${year}`}&nbsp;Ferris Films
          </div>
        </FooterWrapper>
      </Container>

      <div
        aria-hidden="true"
        className="flex items-center justify-center h-48 md:bg-fixed bg-bottom md:bg-cover"
        style={{backgroundImage: "url('/images/background-2.jpg')"}}
      />
    </>
  )
}

const Border = styled.div`
  margin: 75px auto 50px;
  border-bottom: 1px solid rgba(8, 8, 11, 0.15);
`

const FooterWrapper = styled.div`
  color: #73737d;
`

export default Footer
