'use strict'
import { Box, Text, Button, Img } from '@symbo.ls/symbols'

import { roomOffer, roomOffer2 } from '../../animations'
import style, { styleHeader, styleOffers } from './style'
import MINUS_ICON from '../../assets/icons/minus.png'

// import style from './style'

const header = {
  tag: 'header',
  proto: Box,
  style: styleHeader,
  props: {
    flexAlign: 'center space-between',
    padding: '0 B1'
  },
  h5: {
    proto: [Text, Box],
    props: {
      text: 'room offers',
      size: 'A',
      color: 'black .55'
    }
  },
  minimize: {
    proto: [Box, Button],
    props: { padding: 'Z' },
    minus: {
      proto: [Img, Box],
      props: {
        src: MINUS_ICON,
        boxSize: 'C B1'
      }
    },
    on: {
      click: (event, element, state) => {
        state.offers
          ? state.update({ offers: false })
          : state.update({ offers: true })
      }
    }
  }
}

const offers = {
  proto: Box,
  style: styleOffers,
  props: {
    padding: '0 C 0 C'
  },
  class: {
    show: (element, state) => state.offers
      ? {
        minHeight: `${300 / 16}em`,
        paddingBottom: `${100 / 16}em`,
        '> span': { height: '30px', opacity: '1' }
      }
      : {
        minHeight: `${0 / 16}em`,
        paddingBottom: `${0 / 16}em`,
        '> span': {
          height: 0,
          opacity: '0',
          transitionDelay: '0s'
        }
      }
  },
  childProto: {
    tag: 'span',
    proto: [Box, Text],
    props: {
      color: 'black .2'
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

export const RoomOffers = {
  tag: 'aside',
  proto: Box,
  style,
  props: {
    position: 'absolute',
    left: '0',
    bottom: '-80px',
    flexFlow: 'column',
    background: 'cream'
    // padding: '0 C1 C C1'
  },
  header,
  offers
}

// export default {
//   tag: 'aside',
//   proto: Box,
//   style,
//   props: {
//     position: 'absolute',
//     // padding: 'Y B 0 B',
//     flexFlow: 'column',
//     background: 'cream'
//     // gap: 'B'
//   },

//   header: {
//     proto: Box,
//     props: {
//       flexAlign: 'center center',
//       gap: 'G',
//       padding: 'B B2 A B'
//     },

//     h5: {
//       proto: Text,
//       props: {
//         text: 'apartment offers'
//       }
//     },

//     minimize: {
//       proto: [Box, Button],
//       props: { padding: 'Z' },
//       minus: {
//         proto: Img,
//         props: { src: MINUS_ICON }
//       },

//       on: {
//         click: (event, element, state) => {
//           state.offers ? state.update({ offers: false }) : state.update({ offers: true })
//         }
//       }
//     }
//   },

//   offer: {
//     proto: Box,
//     props: {
//       padding: 'A D D C',
//       flexAlign: 'center center'
//     },
//     class: {
//       show: (element, state) => state.offers ? {
//         height: '300px',
// animationName: roomOffers2,
// animationDuration: '.55s',
// animationTimingFunction: 'ease-in-out',

//         '> span': { opacity: '1' }
//       } : {
//         animationName: roomOffers,
//         animationDuration: '.55s',
//         animationTimingFunction: 'ease-in-out',
//         paddingTop: 0,
//         paddingBottom: 0,
//         height: 0,
//         '> span': { opacity: '0' }
//       }
//     },

//     childProto: {
//       tag: 'span',
//       proto: [Box, Text],
//       props: {
//         // size: 'A'
//       }
//     },
//     ...[
//       { props: { text: 'Wifi' } },
//       { props: { text: 'Open terrace' } },
//       { props: { text: 'Private entrance' } },
//       { props: { text: 'Air conditioning (Portable)' } },
//       { props: { text: 'Heating' } },
//       { props: { text: 'Ironing facilities' } },
//       { props: { text: 'Drying rack' } },
//       { props: { text: 'Mosquito net' } },
//       { props: { text: 'Carbon monoxide alarm' } },
//       { props: { text: 'Smoke alarm' } },
//       { props: { text: 'Vinyl Media Player' } },
//       { props: { text: 'Smart TV' } },
//       { props: { text: 'Bed linens' } },
//       { props: { text: 'Clothing storage' } },
//       { props: { text: 'Hangers' } },
//       { props: { text: 'Extra pillows and blankets' } },
//       { props: { text: 'Robes & Slippers' } },
//       { props: { text: 'Books and journals' } }
//     ]
//   }
// }
