'use strict'
import { Block, Img, Text, Flex, Link, Shape, SVG } from '@rackai/symbols'

import SideMenu from '../SideMenu'

import style from './style'

import PHONE_SVG from '../../assets/phones.svg'
import LOGO_PNG from '../../assets/logos.png'

const menuIcon = {
  proto: [Block, Flex],
  props: { gap: 'X1' },

  style: {
    flexFlow: 'column',
    cursor: 'pointer',
    background: 'black'
  },
  childProto: {
    proto: [Block, Shape],
    props: {
      round: 'A'
    },
    style: {
      background: 'rgba(243, 231, 219, .85)',
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
    flexFlow: 'column',
    paddingTop: '20px',
    '&:hover > a': { visibility: 'visible' }
  },
  childProto: {
    proto: [Link, Text],
    props: { size: 'A2' },
    style: {
      color: 'rgba(243, 231, 219, .85)',
      cursor: 'pointer',
      opacity: '.65',
      transition: 'all .6s ease-in-out'
    }
  },
  ...[
    { text: 'EN', style: { '&:hover': { opacity: 1 } } },
    {
      text: 'RUS',
      style: {
        visibility: 'hidden',
        '&:hover': { opacity: 1 }
      }
    }
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
      letterSpacing: '4px',
      color: 'rgba(243, 231, 219, .85)'
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
  style,
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
  // menu: {
  //   tag: 'aside',
  //   proto: SideMenu
  // },
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
      proto: Block
    },
    ...[
      { proto: langLinks },
      { proto: call },
      { proto: book }

    ]
  }
}
