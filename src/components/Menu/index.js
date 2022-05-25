'use strict'
import { Box, Text, Link, Img } from '@symbo.ls/symbols'

import FACEBOOK_PNG from '../../assets/icons/facebook.png'
import INSTAGRAM_PNG from '../../assets/icons/instagram.png'
import LINKEDIN_PNG from '../../assets/icons/linkedIn.png'

import style, { styleSectionLinks, styleSocialMedia } from './style'

const sectionLinks = {
  tag: 'nav',
  proto: Box,
  class: [styleSectionLinks],

  childProto: {
    proto: [Link, Text],
    props: {
      color: 'cream .95'
    },
    style: { fontSize: `${14.5 / 16}em` },
    on: {
      click: (event, element, state) => {
        state.update({ activeMenuItem: element.key, activeMenu: true })
      }
    },

    class: {
      show: (element, state) => state.activeMenuItem === element.key
        ? { color: 'rgba(168, 98, 63, 1)' }
        : { color: 'rgba(244, 233, 217, 1)' }
    }
  },
  ...[
    { props: { text: 'residence', href: '#residence' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

const socialMedia = {
  tag: 'nav',
  proto: Box,
  class: [styleSocialMedia],
  props: {
    flexFlow: 'row',
    gap: 'D'
  },

  childProto: {
    proto: Link,
    props: { target: '_blank' },
    icon: {
      proto: [Img, Box],
      props: { boxSize: 'B2' },
      style: {
        '@media only screen and (max-width: 1024px)': {
          // width: '30px',
          // height: '30px'

        }
      }
    }
  },
  ...[
    {
      props: { href: `https://www.facebook.com/laninaresidence` },
      icon: { props: { src: FACEBOOK_PNG } }
    },
    {
      props: { href: 'https://www.instagram.com/laninaresidence/' },
      icon: { props: { src: INSTAGRAM_PNG } }
    },
    {
      icon: { props: { src: LINKEDIN_PNG } }
    }
  ]
}

export const Menu = {
  tag: 'aside',
  proto: Box,
  style,
  class: {
    show: (element, state) => state.activeMenu
      ? { opacity: 0, pointerEvents: 'none' }
      : { opacity: 1 }
  },
  props: {
    boxSize: '100% 100%',
    position: 'fixed',
    top: '0',
    left: '0'
  },

  sectionLinks,
  socialMedia
}
