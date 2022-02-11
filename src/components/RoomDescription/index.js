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
    width: '500px',
    height: 0,
    background: 'transparent',
    transition: 'all .3s ease-in-out',
    transitionDelay: '.2s',
    bottom: '0',
    zIndex: 50,
    '> div': {
      opacity: 0,
      color: 'rgba(0, 0, 0, .3)',
      transition: 'all 1s ease-in-out',
      transitionDelay: '1s',
      fontFamily: 'Avenir Next',
      fontSize: '16px'
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
    { props: { text: 'Open terrace' }, style: { with: 'fit-content' } },
    { props: { text: 'Private entrance' } },
    { props: { text: 'Air conditioning (Portable)' } },
    { props: { text: 'Heating' }, style: { with: 'fit-content' } },
    { props: { text: 'Ironing facilities' } },
    { props: { text: 'Drying rack' } },
    { props: { text: 'Mosquito net' }, style: { with: 'fit-content' } },
    { props: { text: 'Carbon monoxide alarm' } },
    { props: { text: 'Smoke alarm' } },
    { props: { text: 'Vinyl Media Player' }, style: { with: 'fit-content' } },
    { props: { text: 'Smart TV' } },
    { props: { text: 'Bed linens' } },
    { props: { text: 'Clothing storage' }, style: { with: 'fit-content' } },
    { props: { text: 'Hangers' } },
    { props: { text: 'Extra pillows and blankets' } },
    { props: { text: 'Robes & Slippers' }, style: { with: 'fit-content' } },
    { props: { text: 'Books and journals' } }
  ]

}
