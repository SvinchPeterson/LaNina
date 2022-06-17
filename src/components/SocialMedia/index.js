'use strict'

import { Box, Text, Link, Img } from '@symbo.ls/symbols'

import FACEBOOK_PNG from '../../assets/icons/facebook-white.png'
import INSTAGRAM_PNG from '../../assets/icons/instagram-white.png'
import LINKEDIN_PNG from '../../assets/icons/linkedIn-white.png'

export const SocialMedia = {
  tag: 'nav',
  proto: Box,
  props: {
    flexAlign: 'center center',
    gap: 'C'
    // padding: '0 0 0 B2'
  },
  style: { mixBlendMode: 'difference', zIndex: 100 },
  childProto: {
    proto: Link,
    props: { target: '_blank' },
    icon: {
      proto: [Img, Box],
      props: { boxSize: ' B' },
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
      icon: {
        props: { src: INSTAGRAM_PNG },
        style: { opacity: '.65' }
      }
    }
    // {
    //   icon: { props: { src: LINKEDIN_PNG } }
    // }
  ]
}
