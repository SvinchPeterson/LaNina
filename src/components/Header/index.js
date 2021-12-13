'use strict'
import { Block, Img, Text, Flex, Link, Shape, SVG } from '@rackai/symbols'

import SideMenu from '../SideMenu'

import PHONE_SVG from '../../assets/phones.svg'
import LOGO_PNG from '../../assets/logos.png'

const menuIcon = {
  proto: [Block, Flex],
  props: { gap: 'X1' },

  style: {
    flexFlow: 'column',
    cursor: 'pointer'
  },
  childProto: {
    proto: [Block, Shape],
    props: {
      round: 'A'
    },
    style: {
      background: '#F3E7DB',
      height: `${2 / 16}em`
    }
  },
  ...[
    { props: { width: 'B2' } },
    { props: { width: 'A1' } },
    { props: { width: 'A1' } }
  ]
}

const langLinks = {
  tag: 'nav',
  proto: [Block, Flex],
  style: {
    flexFlow: 'column'
  },
  childProto: {
    proto: [Link, Text],
    props: { size: 'A2' },
    style: {
      color: 'F3E7DB',
      cursor: 'pointer',
      opacity: '.85',
      '&:hover': { opacity: 1 }
    }
  },
  ...[
    { text: 'EN' },
    { text: 'RUS', style: { display: 'none' } },
    { text: 'GEO', style: { display: 'none' } }
  ]

}

const call = {
  proto: [SVG, Block],
  src: PHONE_SVG,
  props: { width: 'A2', height: 'A2' },
  style: {
    cursor: 'pointer',
    opacity: '.85',
    '&:hover': { opacity: 1 }
  }
}

const book = {
  proto: [Flex, Block, Link],
  props: { gap: 'Z', padding: 'Z' },
  style: {
    flexFlow: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    // background: 'radial-gradient(rgba(98, 73, 62, 1), rgba(98, 73, 62, 1) )',
    marginTop: `${120 / 16}em`,
    '> *': { opacity: '.85' },
    '&:hover > *': { opacity: 1 }
  },
  logo: {
    proto: [Img, Block],
    props: {
      src: LOGO_PNG,
      width: 'B2',
      height: 'C'
    }
  },
  span: {
    proto: Text,
    props: { text: 'BOOK' },
    style: {
      display: 'block',
      textOrientation: 'upright',
      writingMode: 'vertical-rl',
      letterSpacing: '4px'
    }
  }
}

export default {
  tag: 'header',
  proto: [Block, Flex],
  props: {
    height: 'D2',
    padding: '0 C'
  },
  style: {
    width: '100%',
    position: 'fixed',
    top: 0,
    zIndex: 20,
    alignItems: 'center',
    fontFamily: 'Avenir Next',
    boxSizing: 'border-box',
    mixBlendMode: 'difference',
    'input ~ label': {
      // background: 'red'
    },
    // '#toggle:not(:checked) ~ aside': {
    //   background: 'red'
    // },
    '#toggle:checked ~ aside': {
      left: '100px'
    },
    '#toggle:checked ~ label > div:last-child': {
      transition: 'all .4s ease-in-out',
      transitionDelay: '.2s',
      width: '36px'
    },
    '#toggle:not(:checked) ~ label > div:last-child': {
      transition: 'all .4s ease-in-out',
      transitionDelay: '.2s',
      width: '20px'
    },
    '#toggle:checked ~ label > div:first-child': {
      transition: 'all .4s ease-in-out',
      transitionDelay: '.2s',
      width: '20px'
    },
    '#toggle:not(:checked) ~ label > div:first-child': {
      transition: 'all .4s ease-in-out',
      transitionDelay: '.2s',
      width: '36px'
    }
  },
  input: {
    attr: {
      type: 'checkbox',
      id: 'toggle'
    },
    style: { display: 'none' }
  },
  hmburgerMenuIcon: {
    tag: 'label',
    attr: { for: 'toggle' },
    proto: menuIcon,
    style: { zIndex: '30' }
  },
  menu: {
    tag: 'aside',
    proto: SideMenu
  },
  nav: {
    tag: 'nav',
    proto: [Flex, Block],
    props: { gap: 'B2' },
    style: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 0
    },
    childProto: {
      proto: Block,
      style: {
        mixBlendMode: 'difference !important'
      }
    },
    ...[
      { proto: langLinks },
      { proto: call },
      { proto: book }

    ]
  }
}
