'use strict'
import { Block, Img, Text, Flex, Link, Shape } from '@rackai/symbols'

const menuIcon = {
  proto: [Block, Flex],
  props: { gap: 'Y' },

  style: {
    flexFlow: 'column',
    marginLeft: '20px',
    '> div:nth-child(2)': { marginLeft: '2px' },
    '> div:nth-child(3)': { marginLeft: '2px' }
  },
  childProto: {
    proto: [Block, Shape],
    props: { round: 'A' },
    style: {
      background: 'rgba(255, 255, 255, .8)',
      height: '2px'
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
  childProto: {
    proto: Link
  },
  ...[
    { text: 'EN' },
    { text: 'RUS' },
    { text: 'GEO' }
  ]

}

export default {
  text: 'header',
  style: {
    width: '100%',
    height: '100px',
    background: 'black',
    position: 'absolute',
    top: 0,
    zIndex: 20
  },
  menuIcon,
  nav: {
    childProto: {
      proto: Link
    }
  },
  ...[
    {
      proto: langLinks
    },
    {},
    {}
  ]
}
