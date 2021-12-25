'use strict'
import { Block, Text, Img, Link, SVG } from '@rackai/symbols'

import FACEBOOK_SVG from '../../assets/facebook2.svg'
import INSTAGRAM_SVG from '../../assets/instagram2.svg'
import LINKEDIN_SVG from '../../assets/linkedin2.svg'

export default {
  tag: 'aside',
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center center'
  },
  style: {
    position: 'fixed',
    top: 0,
    left: '0',
    opacity: 0,
    // pointerEvents: 'fill',
    // zIndex: '100',
    // background: 'rgba(0, 0, 0, .75)',
    transition: 'all .7s ease-in-out',
    width: '0px',
    height: '100%',
    // border: '3px solid red',
    // background: '#0C0C0C',
    // background: 'red',
    '> nav': {
      opacity: 0
    }

  },
  nav: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'B'
    },
    style: {
      // background: 'brown'
    },
    childProto: {
      proto: [Link, Text],
      props: {
        size: 'B'
      },
      // attr: {
      //   tabIndex: '1'
      // },
      style: {
        textTransform: 'uppercase',
        fontFamily: 'Gilda Display',
        letterSpacing: '6px',
        textDecoration: 'none',
        color: '#F3E7DB',
        cursor: 'pointer',
        opacity: '.85',
        // '&[tabindex]:focus': { color: 'red' },
        '&:hover': {
          opacity: 1,
          fontWeight: '600'
        }
        // '&:focus': { color: 'red' }

      }
    },
    ...[
      {
        props: {
          text: 'story',
          href: '#story'
        }
      },
      {
        props: {
          text: 'apartment',
          href: '#apartments'
        }
      },
      {
        props: {
          text: 'services',
          href: '#services'
        }
      },
      {
        props: {
          text: 'contact',
          href: '#contact'
        }
      },
      {
        props: { text: 'We are' }
      }
    ]
  },
  nav2: {
    tag: 'nav',
    proto: Block,
    props: {
      flexAlign: 'center flex-start',
      gap: 'C'
    },
    style: {
      position: 'absolute',
      top: '90%',
      left: '45%',
      transform: 'translate(-50%, -50%)'

    },
    childProto: {
      proto: [Link, Block],
      props: {

      },
      icon: {
        proto: [SVG, Block],
        props: {
          boxSize: 'B B'
        },
        style: {
          opacity: '.65'
          // border: '1px solid red',
          // width: '24px',
          // height: '24px'
        }
      }
    },
    ...[
      {
        icon: { src: FACEBOOK_SVG },
        props: {
          href: `https://www.facebook.com/laninaresidence`,
          target: '_blank'
        }
      },
      { icon: { src: LINKEDIN_SVG } },
      {
        icon: { src: INSTAGRAM_SVG },
        props: {
          href: 'https://www.instagram.com/laninaresidence/',
          target: '_blank'
        }
      }
    ]

  }
}
