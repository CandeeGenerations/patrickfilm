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

        <FooterWrapper className="relative flex items-center content-between lg:pb-20 pb-10 lg:flex-row flex-col">
          <div className="flex-grow pb-3 lg:pb-0 text-center lg:text-left">
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

          <div className="flex flex-grow-0">
            &copy; 2022{year !== '2022' && ` - ${year}`}&nbsp;Ferris Films
          </div>
        </FooterWrapper>
      </Container>

      <div
        aria-hidden="true"
        className="flex items-center justify-center h-48 bg-fixed bg-center md:bg-cover"
        style={{backgroundImage: "url('/images/background.jpg')"}}
      />
    </>
  )
}

const Border = styled.div`
  margin: 140px auto 50px;
  border-bottom: 1px solid rgba(8, 8, 11, 0.15);
`

const FooterWrapper = styled.div`
  color: #73737d;
`

export default Footer
