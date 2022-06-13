'use strict'

import { Box, Text, Link, Img } from '@symbo.ls/symbols'

import FACEBOOK_PNG from '../../assets/icons/facebook.png'
import INSTAGRAM_PNG from '../../assets/icons/instagram.png'
import LINKEDIN_PNG from '../../assets/icons/linkedIn.png'

export const SocialMedia = {
  tag: 'nav',
  proto: Box,
  props: {
    position: 'fixed',
    bottom: '50px',
    flexAlign: 'center center',
    gap: 'C',
    padding: '0 0 0 D'
  },
  style: { mixBlendMode: 'difference', zIndex: 100 },
  childProto: {
    proto: Link,
    props: { target: '_blank' },
    icon: {
      proto: [Img, Box],
      props: { boxSize: ' B1' },
      style: {
        opacity: '.75',
        '&:hover': { opacity: 1 }
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
