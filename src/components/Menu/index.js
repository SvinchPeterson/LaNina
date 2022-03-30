'use strict'
import { Block, Text, Link, SVG } from '@rackai/symbols'

import FACEBOOK_SVG from '../../assets/icons/facebook.svg'
import INSTAGRAM_SVG from '../../assets/icons/instagram.svg'
import LINKEDIN_SVG from '../../assets/icons/linkedin.svg'

import style from './style'

const sectionLinks = {
  tag: 'nav',
  proto: Block,
  props: {
    padding: '0 E 0 0',
    gap: 'C',
    flexAlign: 'flex-end flex-end'
  },

  childProto: {
    proto: [Link, Text, Block],
    props: {
      size: 'D'
    },
    on: {
      click: (event, element, state) => {
        state.update({ activeMenuLink: element.key })
        console.log(state.activeMenuLink, element.key)
      }
    },

    class: {
      show: (element, state) => state.activeMenuLink === element.key ? { color: 'rgba(168, 98, 63, .65)' } : { color: 'rgba(244, 233, 217, .45)' }
    }
  },
  ...[
    { props: { text: 'residence', href: '#residence' } },
    { props: { text: 'apartments', href: '#apartments' } },
    { props: { text: 'wine', href: '#wine' } },
    { props: { text: 'location', href: '#location' } }
  ]
}

const socialMedia = {
  proto: Block,
  props: {
    flexAlign: 'flex-end center',
    gap: 'E',
    padding: '0 0 D 0'
  },

  childProto: {
    proto: [Link, Block],
    props: {
      target: '_blank'
    },
    icon: {
      proto: [SVG, Block],
      props: {
        boxSize: 'B1 B1'
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
  ]
}
export default {
  tag: 'aside',
  proto: Block,
  style,
  props: {
    flexFlow: 'column'
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
      '> div': {
        opacity: 1,
        transitionDelay: 0
      }
    }
  },

  sectionLinks,
  socialMedia

}
