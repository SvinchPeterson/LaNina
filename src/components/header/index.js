'use strict'
import { Block, Img, Text, Flex, Link, Shape, SVG, Icon } from '@rackai/symbols'

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
  props: { gap: 'Z', spacing: 'Z' },
  style: {
    flexFlow: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    // background: 'radial-gradient(rgba(98, 73, 62, 1), rgba(98, 73, 62, 1) )',
    marginTop: `${100 / 16}em`,
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
    spacing: '0 C'
  },
  style: {
    width: '100%',
    // background: 'radial-gradient(rgba(98, 73, 62, 1), rgba(98, 73, 62, 1) )',
    position: 'fixed',
    top: 0,
    zIndex: 20,
    alignItems: 'center',
    fontFamily: 'Avenir Next',
    boxSizing: 'border-box'
  },
  menuIcon,
  nav: {
    tag: 'nav',
    proto: [Flex, Block],
    props: { gap: 'B2' },
    style: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
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
