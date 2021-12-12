'use strict'
import { Block, Text, Img, Link, SVG } from '@rackai/symbols'

import FACEBOOK_SVG from '../../assets/facebook.svg'
import INSTAGRAM_SVG from '../../assets/instagram.svg'
import LINKEDIN_SVG from '../../assets/linkedin.svg'

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
    attr: {
      id: 'contact'
    },
    style: {
      letterSpacing: '6px',
      fontWeight: '500',
      display: 'block'
    }
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
        gap: 'B'
      },
      childProto: {
        proto: [Link, Block],
        // style: { border: '1px solid red' },
        icon: {
          proto: [SVG, Block],
          props: { boxSize: 'B1 B1' },
          style: {
            opacity: '.75'
          }
        }
      },
      ...[
        {
          props: { href: `https://www.facebook.com/laninaresidence` },
          icon: { src: FACEBOOK_SVG }
        },
        {
          icon: { src: LINKEDIN_SVG }
        },
        {
          props: { href: 'https://www.instagram.com/laninaresidence/' },
          icon: {
            src: INSTAGRAM_SVG
          }
        }
      ]
    }
  }
}
