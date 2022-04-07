'use strict'
import { Box, Img, Text } from '@symbo.ls/symbols'

import { bbSololaki, stayText } from '../../texts'

import style, { styleResidence } from './style'

import LUGGAGE_PNG from '../../assets/icons/luggage.PNG'

const residence = {
  proto: Box,
  class: [styleResidence],
  props: {
    flexAlign: 'flex-start center'
  },
  p: {
    proto: [bbSololaki, Box],
    props: {
      color: 'black .35',
      background: 'cream',
      padding: 'E 0 E E'
    }
  }
}

export default {
  proto: Box,
  style,
  props: {
    padding: 'F 0'
  },

  residence

}

// const residenceOrigin = {
//   tag: 'section',
//   proto: Block,
//   style: styleResidenceOrigin,
//   props: {
//     flexAlign: 'flex-start center'
//   },
//   p: {
//     proto: [bbSololaki, Block],
//     props: { padding: 'E' }
//   }
// }

// const entrence = {
//   tag: 'section',
//   proto: Block,
//   style: styleEntrence,
//   props: { flexAlign: 'flex-end flex-end' },
//   p: {
//     proto: [Block, Text],
//     props: {
//       padding: 'E E D E',
//       flexFlow: 'column'
//     },
//     entrences: {
//       proto: Block,
//       props: {
//         flexFlow: 'column',
//         gap: 'Y',
//         padding: '0 0 C 0'
//       },
//       style: {
//         width: 'fit-content'
//       },
//       childProto: {
//         proto: Block,
//         props: {
//           flexAlign: 'center flex-start',
//           gap: 'Z'
//         },
//         style: {
//           opacity: '.35',
//           // color: 'rgba(168, 98, 63, 1)',
//           fontSize: `${14 / 15}em`,
//           letterSpacing: '1.3px'
//         },
//         dot: {
//           style: {
//             width: '4px',
//             height: '4px',
//             borderRadius: '100%',
//             background: 'rgba(0, 0, 0, 1)'
//           }
//         },
//         span: { proto: Text }
//       },
//       ...[
//         {
//           dot: {},
//           span: { props: { text: 'private entrance' } }
//         },
//         {
//           dot: {},
//           span: { props: { text: 'separate street or building entrance' } }
//         },
//         {
//           dot: {},
//           span: { props: { text: 'free parking on premises' } }
//         }
//       ]
//     },
//     luggage: {
//       proto: Block,
//       props: {
//         flexAlign: 'flex-start center',
//         gap: 'Z2'
//       },
//       style: {
//         maxWidth: `${500 / 15}em`,
//         opacity: '.25'
//       },
//       icon: {
//         proto: Img,
//         props: { src: LUGGAGE_PNG },
//         style: { marginTop: '3px' }
//       },
//       text: `Luggage dropoff allowed
//       for guests' convenience when they have early arrival or late departure`
//     },
//     stay: {
//       proto: [stayText, Block],
//       props: { padding: 'Z 0 0 B2' },
//       style: { color: 'rgba(168, 98, 63, .5)' }
//       // style: { color: 'rgba(168, 98, 63, .35)', fontWeight: 'bold' }
//     }
//   }
// }

// export default {
//   tag: 'article',
//   proto: Block,
//   attr: { id: 'residence' },
//   style,
//   props: {
//     padding: 'F 0 F 0',
//     flexFlow: 'column',
//     gap: 'G'
//   },

//   residenceOrigin,
//   entrence
// }
