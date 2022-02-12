'use strict'
import { Block, Text, Flex, SVG } from '@rackai/symbols'
import { heightGallery, opacity2 } from '../../animations'

import iconSVG from '../../assets/instagram2.svg'

export default {
  tag: 'aside',
  proto: Block,
  props: {
    padding: 'E D'
  },
  style: {
    position: 'absolute',
    display: 'grid',
    columnGap: '50px',
    rowGap: '10px',
    paddingRight: '80px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    background: 'rgba(243, 231, 219, .9)',
    transition: 'all .3s ease-in-out',
    transitionDelay: '.2s',
    bottom: '0',
    zIndex: 50,
    '> div': {
      opacity: 1,
      color: 'rgba(0, 0, 0, .3)',
      transition: 'all 1s ease-in-out',
      transitionDelay: '1s',
      fontFamily: 'Avenir Next',
      fontSize: '14px'
    }
  },
  childProto: {
    proto: [Block, Text],
    props: {
      text: ''
    }
  },
  ...[
    { props: { text: 'Wifi' } },
    { props: { text: 'Open terrace' } },
    { props: { text: 'Private entrance' } },
    { props: { text: 'Air conditioning (Portable)' } },
    { props: { text: 'Heating' } },
    { props: { text: 'Ironing facilities' } },
    { props: { text: 'Drying rack' } },
    { props: { text: 'Mosquito net' } },
    { props: { text: 'Carbon monoxide alarm' } },
    { props: { text: 'Smoke alarm' } },
    { props: { text: 'Vinyl Media Player' } },
    { props: { text: 'Smart TV' } },
    { props: { text: 'Bed linens' } },
    { props: { text: 'Clothing storage' } },
    { props: { text: 'Hangers' } },
    { props: { text: 'Extra pillows and blankets' } },
    { props: { text: 'Robes & Slippers' } },
    { props: { text: 'Books and journals' } }
  ]

}
