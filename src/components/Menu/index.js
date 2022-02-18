'use strict'
import { Block, Text, Link, SVG, Img } from '@rackai/symbols'

import FACEBOOK_SVG from '../../assets/facebook2.svg'
import INSTAGRAM_SVG from '../../assets/instagram2.svg'
import LINKEDIN_SVG from '../../assets/linkedin2.svg'
import MAIL_PNG from '../../assets/mail.png'

import style from './style'

const sectionLinks = {
  tag: 'nav',
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'B',
    flexAlign: 'flex-start center'
  },

  childProto: {
    proto: [Link, Text, Block],
    props: {
      size: 'C'
    }
  },
  ...[
    {
      props: { text: 'hotel', href: '#hotel' }
    },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'service', href: '#services' } }
  ]
}

const socialMedia = {
  proto: Block,
  props: {
    flexAlign: 'center flex-start',
    gap: 'A'
  },

  childProto: {
    proto: [Link, Block],
    props: {
      target: '_blank',
      padding: 'A1'
    },
    icon: {
      proto: [SVG, Block],
      props: {
        boxSize: 'B B'
      }
    }
  },

  ...[
    {
      props: { href: `https://www.facebook.com/laninaresidence` },
      icon: {
        src: FACEBOOK_SVG
      }
    },

    {
      props: { href: 'https://www.instagram.com/laninaresidence/' },
      icon: {
        src: INSTAGRAM_SVG
      }
    },

    {
      icon: {
        src: LINKEDIN_SVG
      }
    },

    {
      style: {
        height: 'fit-content',
        width: 'fit-content',
        marginLeft: 'auto'
      },
      icon: {
        proto: [Img, Block],
        props: {
          src: MAIL_PNG,
          boxSize: 'B1 B'
        }
      }
    }
  ]
}

export default {
  tag: 'aside',
  proto: Block,
  style,
  props: {
    flexFlow: 'column',
    gap: 'D',
    flexAlign: 'center flex-start'
  },

  class: {
    show: (element, state) => state.active ? {
      opacity: 0,
      pointerEvents: 'none',
      '> nav': {
        opacity: 0,
        transitionDelay: 0
      },
      '> div': {
        opacity: 0,
        transitionDelay: 0
      }
    } : {
      opacity: 1,
      '> nav': { opacity: 1, transform: 'scale(1.02)' },
      '> div': {
        opacity: 1,
        transitionDelay: 0
      }
    }
  },

  sectionLinks,
  socialMedia

}
