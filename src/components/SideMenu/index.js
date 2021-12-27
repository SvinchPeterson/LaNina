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
    gap: 'D',
    padding: 'F E 0 E',
    flexAlign: 'center flex-start'
  },

  style: {
    background: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))',
    // mixBlendMode: 'difference',
    backdropFilter: 'blur(3px)',
    position: 'fixed',
    top: 0,
    left: 0,
    transition: 'all .5s ease-in-out',
    zIndex: 100
    // '> nav > *': { transition: 'opacity .8s, filter 3s ease-in-out' }
  },
  nav: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'E'
    },
    style: { transition: 'all .8s ease-in-out' },

    sectionLinks: {
      proto: Block,
      props: {
        flexFlow: 'column',
        gap: 'B'
      },
      childProto: {
        proto: [Link, Text],
        props: {
          size: 'A'
        },
        style: {
          fontFamily: 'Bellefair',
          textTransform: 'uppercase',
          letterSpacing: '6px',
          textDecoration: 'none',
          color: '#F3E7DB',
          cursor: 'pointer',
          opacity: '.65',
          fontWeight: '400',
          transform: 'scale(.95)',
          '&:hover': {
            opacity: '.85',
            fontWeight: '500',
            transform: 'scale(1)',
            transition: 'all .3s ease-in-out'
          },
          '&:not(:hover)': {
            transition: 'all .3s ease-in-out'

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

    socialMedia: {
      proto: Block,
      style: { marginLeft: '-10px' },
      props: {
        flexAlign: 'center flex-start',
        gap: 'B2'
      },
      childProto: {
        proto: [Link, Block],
        icon: {
          proto: [SVG, Block],
          props: {
            boxSize: 'A2 A2'
          },
          style: {
            opacity: '.45',
            '&:hover': { opacity: '.85' }
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

}
