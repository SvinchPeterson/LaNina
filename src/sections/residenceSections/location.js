'use strict'

import { Flex } from 'smbls'

import { ContactItems, Map } from '../../components'


// const props = {
//   margin: 'E1 - B -',
//   padding: 'E - E -',
//   flow: 'column',
//   align: 'center center',
//   alignSelf: 'center',
//   gap: 'A',
//   border: '3px solid red',
//   // '@tabletM': {
//   //   margin: 'D - B -',
//   // },
//   // '@tabletS': { flow: 'column' },
//   // '@mobileL': {minWidth: '80%'},
//   // '@mobileS': {margin: '0 -'},
//   // style: {
//   //   '@media only screen and (min-height: 1000px)': {
//   //     marginTop: `${50 / 16}em`,
//   //     marginBottom: `${150 / 16}em`
//   //   }
//   // },
//   title: {
//     text: 'location',
//     fontSize: `${12 / 16}em`,
//     textTransform: 'uppercase',
//     letterSpacing: `${10 / 12}em`,
//     transform: 'rotate(180deg)',
//     // '@tabletS': {
//     //   alignSelf: 'flex-start',
//     //   padding: '- - - A',
//     //   transform: 'rotate(0)'
//     // },
//     // '@mobileL': { alignSelf: 'center'},
//     style: {
//       alignSelf: 'center',
//       writingMode: 'vertical-rl',
//       textOrientation: 'mixed',
//       // '@media only screen and (max-width: 1024px)': {
//       //   writingMode: 'horizontal-tb',
//       //   textOrientation: 'initial'
//       // }
//     }
//   },

//   content: {
//     flexFlow: 'column',
//     gap: 'A',
//     boxSize: 'H3 I1',
//     position: 'relative',
//     align: 'flex-end flex-start',
//     alignSelf: 'center',
//     style: {
//       backgroundAttachment: 'fixed',
//       backgroundRepeat: 'no-repeat'
//     },
//     // '@tabletS': { boxSize: 'H1 100%' },
//     // '@mobileL': {
//     //   align: 'center center'
//     // },
//     // '@mobileL': { boxSize: 'H 100%'},
//     // '@mobileS': { boxSize: 'G3 100%'},
//     map: {
//       minWidth: '100%',
//       maxHeight: '75%',
//       zIndex: '2',
//       position: 'relative',
//       overflow: 'hidden',
//       round: 'A',
//       border: 'none',
//       style: {
//         boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)',
//         backgroundAttachment: 'fixed',
//         flex: 1
//       }
//       // '@tabletM': { round: '0', maxHeight: '85%' }
//     }
//   },

//   footer: {
//     contacts: {
//       zIndex: '2',
//       align: 'center space-between',
//       gap: 'C',
//       margin: '- Z - -',
//       padding: 'Y2 - - -',
//       border: 'solid, black .65',
//       borderWidth: '.6px 0 0 0',
//       // '@mobileL': {
//       //   flow: 'column',
//       //   gap: 'Z',
//       //   alignSelf: 'center'
//       // },
//       // '@mobileM': {gap: 'A1'},

//       childProps: {
//         // '@mobileM': {
//         //   flow: 'column',
//         //   gap: 'Z',
//         // },
//         childProps: {
//           ':after': {
//             // '@mobileM': {display: 'none'}
//           }
//         }
//       }
//     }
//   }
// }

const props = {
  flow: 'column',
  width: 'fit-content',
  alignSelf: 'center',
  padding: '- - D1 -',
  position: 'relative',
  margin: '- - B -',

  title: {
    fontSize: `${12 / 16}em`,
    letterSpacing: `${8 / 12}em`,
    fontWeight: '400',
    textTransform: 'uppercase',
    position: 'absolute',
    transform: 'rotate(180deg)',
    padding: '- D - -',
    left: '-B2',
    style: {
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
    }
  },

  map: {
    minHeight: 'G3',
    minWidth: `${800 / 16}em`,
    display: 'block',
    round: 'A2',
    border: 'none',
    style: {boxShadow: '0px 0px 10px .3px rgba(0, 0,0, .1)'}
  },

  contact: {
    justifyContent: 'space-between',
    padding: 'Y1 -',
    margin: 'Z2 - - -',
    border: 'solid, black',
    borderWidth: '.6px 0px 0px 0px',
    minWidth: '90%',
    alignSelf: 'center'
  }
}

export const location = {
  tag: 'section',
  extend: Flex,
  props,
  attr: { id: 'location' },

  title: { tag: 'h5', text: 'location' },

  map: {extend: Map },

  contact: {
    extend: Flex,
    childExtend: ContactItems,
    ...[
      {
        ...[
          { props: { text: 'reservations@bbhospitality.ge' } },
          { props: { text: 'info@bbhospitality.ge' } }
        ]
      },
      {
        ...[
          { props: { text: '995 322 502 222' } },
          { props: { text: '995 598 502 222' } }
        ]
      }
    ]
   }
}
