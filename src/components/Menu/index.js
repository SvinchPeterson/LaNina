'use strict'
import { Block, Text, Link, SVG, Img, Flex } from '@rackai/symbols'

import FACEBOOK_SVG from '../../assets/facebook2.svg'
import INSTAGRAM_SVG from '../../assets/instagram2.svg'
import LINKEDIN_SVG from '../../assets/linkedin2.svg'
import MAIL_PNG from '../../assets/mail.png'

import style from './style'

const sectionLinks = {
  tag: 'nav',
  proto: Block,
  props: {
    padding: 'G 0 0 0',
    // flexFlow: 'column',
    gap: 'D',
    flexAlign: 'flex-start center'
  },

  childProto: {
    proto: [Link, Text, Block],
    props: {
      size: 'B'
    }
  },
  ...[
    {
      props: { text: 'hotel', href: '#hotel' }
    },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

const socialMedia = {
  proto: Block,
  props: {
    flexAlign: 'center center',
    gap: 'C1'
  },
  style: { marginBottom: `${200 / 16}em` },

  childProto: {
    proto: [Link, Block],
    props: {
      target: '_blank',
      padding: 'A'
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
    }

    // {
    //   icon: {
    //     proto: Img,
    //     props: { src: MAIL_PNG }
    //   }
    // }
  ]
}

export default {
  tag: 'aside',
  proto: [Block, Flex],
  style,
  props: {
    flexAlign: 'flex-end flex-end',
    gap: '0'
    // flexAlign: 'center space-between'
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
