'use strict'
import { Block, Text, Img, Link } from '@rackai/symbols'

import FACEBOOK_PNG from '../../assets/facebook.png'
import INSTAGRAM_PNG from '../../assets/instagram.png'
import LINKEDIN_PNG from '../../assets/linkedin.png'

export default {
  style: {
    color: 'rgba(0, 0, 0, .55)'
  },
  proto: [Block],
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    padding: 'B 0 C 0'
  },
  h5: {
    proto: [Text, Block],
    props: {
      text: 'Contact',
      padding: '0 0 C 0'
    },
    style: { letterSpacing: '6px', fontWeight: '500' }
  },
  contact: {
    proto: Block,
    props: {
      flexFlow: 'column',
      flexAlign: 'center center',
      gap: 'Y'
    },
    style: { fontFamily: 'Avenir Next' },
    childProto: {
      proto: Text,
      props: { size: 'B' }
    },
    ...[
      { props: { text: '571 017 170' } },
      { props: { text: 'Svinchy@gmail.com' } }
    ]
  },

  folow: {
    proto: Block,
    props: {
      flexFlow: 'column',
      flexAlign: 'center center',
      gap: 'A',
      padding: 'B 0 0 0'
    },
    style: { fontFamily: 'Avenir Next' },
    span: {
      proto: Text,
      props: {
        text: 'follow us',
        size: 'B'
      }
    },
    icons: {
      proto: Block,
      props: {
        flexAlign: 'center flex-start',
        gap: 'A'
      },
      childProto: {
        proto: [Link],
        icon: {
          proto: [Img, Block],
          props: { boxSize: 'B1 B1' }
        },
        props: {
          boxSize: 'B1 B1'
        }
      },
      ...[
        {
          props: { href: `https://www.facebook.com/laninaresidence` },
          icon: { props: { src: FACEBOOK_PNG } }
        },
        {
          icon: { props: { src: LINKEDIN_PNG } }
        },
        {
          props: { href: 'https://www.instagram.com/laninaresidence/' },
          icon: { props: { src: INSTAGRAM_PNG } }
        }
      ]
    }
  }
}
