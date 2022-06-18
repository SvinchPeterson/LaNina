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
    proto: [Link, Text, Box],
    props: {
      fontSize: 'Z',
      color: 'cream2 .95',
      round: 'D',
      // background: 'cream2 .2',
      padding: 'Z2 0',
      width: 'F'
    },
    on: {
      click: (event, element, state) => {
        // event.preventDefault()
        state.update({ activeMenuItem: element.key, activeMenu: false })
        // Link.on.click(event, element, state)
      }
    }

    // class: {
    //   show: (element, state) => state.activeMenuItem === element.key
    //     ? { background: '244, 233, 217, 1' }
    //     : { }
    // }
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
      props: { boxSize: ' B' }
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
      ? { opacity: 1 }
      : { opacity: 0, pointerEvents: 'none' }
  },
  props: {
    boxSize: '100% 100%',
    position: 'fixed',
    top: '0',
    left: '0'
  },

  sectionLinks
}
