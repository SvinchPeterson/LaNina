'use strict'
import { Block, Text, Link, SVG } from '@rackai/symbols'

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
    flexAlign: 'flex-start flex-start'
  },
  class: {
    show: (element, state) => state.active ? { opacity: 0, height: 0 } : { height: '100%', opacity: 1 },
    show2: (element, state) => state.active ? { nav: { filter: 'blur(2px)', pointerEvents: 'none' } } : { nav: { filter: 'blur(0px)' } }
  },

  style: {
    background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
    backdropFilter: 'blur(3px)',
    position: 'fixed',
    minWidth: '100%',
    top: 0,
    left: 0,
    transition: 'all .5s ease-in-out',
    zIndex: 100
  },
  nav: {
    proto: Block,
    props: {
      flexFlow: 'column',
      gap: 'G'
    },
    style: {
      transition: 'all .7s ease-in-out'
    },

    sectionLinks: {
      proto: Block,
      props: {
        flexFlow: 'column',
        gap: 'B1'
      },
      childProto: {
        proto: [Link, Text],
        props: {
          size: 'C'
        },
        style: {
          fontFamily: 'Bellefair',
          textTransform: 'uppercase',
          letterSpacing: '6px',
          textDecoration: 'none',
          color: '#F3E7DB',
          cursor: 'pointer',
          opacity: '.4',
          fontWeight: '400',
          '&:hover': {
            opacity: '.65',
            fontWeight: '500',
            transform: 'scale(.95)',
            transition: 'all .5s ease-in-out',
            letterSpacing: '6.5px'
          },
          '&:not(:hover)': {
            transition: 'all .5s ease-in-out'

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
      // style: { marginLeft: '-10px' },
      props: {
        flexAlign: 'center flex-start',
        gap: 'D'
      },
      childProto: {
        proto: [Link, Block],
        icon: {
          proto: [SVG, Block],
          props: {
            boxSize: 'B1 B1'
          },
          style: {
            opacity: '.35',
            '&:hover': { opacity: '.65' }
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
