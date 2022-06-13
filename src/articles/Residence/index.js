// 'use strict'
// import { Box, Text } from '@symbo.ls/symbols'

// import { bbSololaki } from '../../texts'

// import { styleEntrence } from './style'

// const residence = {
//   proto: Box,
//   props: {
//     padding: 'G B2',
//     flexAlign: 'center center',
//     color: 'black .35'
//   },
//   style: {
//     '@media only screen and (max-width: 768px)': {
//       paddingTop: `${150 / 16}em`,
//       paddingBottom: `${150 / 16}em`
//     }
//   },
//   p: {
//     proto: [bbSololaki, Box],
//     style: {
//       fontSize: `${15 / 16}em`,
//       maxWidth: `${530 / 15}em`,
//       lineHeight: `${23.5 / 15}em`,
//       letterSpacing: '.6px',
//       fontWeight: 400,
//       '@media only screen and (max-width: 768px)': {
//         maxWidth: `${400 / 15}em`
//       }
//     }
//   }
// }

// const entrance = {
//   proto: Box,
//   props: {
//     boxSize: '100% 200%'
//   },
//   style: {
//     border: '3px solid red'
//   },
//   // class: [styleEntrence],
//   frontImage: {

//   },

//   texts: {
//     proto: Box,
//     props: {
//       flexFlow: 'column',
//       padding: '0 0 E2 E2'
//     },
//     style: {
//       '@media only screen and (max-width: 1225px)': {
//         padding: `0 0 ${30 / 16}em ${100 / 16}em`
//       },
//       '@media only screen and (max-width: 768px)': {
//         padding: `0 0 ${30 / 16}em ${0 / 16}em`
//       }
//     },
//     entrences: {
//       proto: Box,
//       props: {
//         flexFlow: 'column',
//         gap: 'Z2'
//       },
//       style: {
//         '@media only screen and (max-width: 480px)': { gap: '5px' }
//       },
//       childProto: {
//         proto: [Text, Box],
//         props: { color: 'cream' },
//         style: {
//           letterSpacing: '0px',
//           textTransform: 'uppercase',
//           fontWeight: 900,
//           fontSize: `${16 / 16}em`,
//           '@media only screen and (max-width: 480px)': {
//             fontSize: `${14 / 16}em`
//           }
//         }
//       },
//       ...[
//         { props: { text: 'private entrance' } },
//         {
//           proto: Box,
//           props: {
//             flexAlign: 'center flex-start',
//             gap: '12px'
//           },
//           style: {
//             flexWrap: 'wrap',
//             lineHeight: '10px'
//           },
//           ...[
//             { text: 'separate street' },
//             { text: 'or', style: { textTransform: 'initial' } },
//             { text: 'building entrance' }
//           ]
//         },
//         { props: { text: 'free parking on premises' } }
//       ]
//     },
//     luggage: {
//       tag: 'p',
//       proto: [Text, Box],
//       props: {
//         text: `Luggage dropoff allowed for guests' convenience when they have early arrival or late departure`,
//         color: 'gold',
//         padding: 'B 0 Y 0'
//       },
//       style: {
//         fontSize: `${15 / 16}em`,
//         maxWidth: `${450 / 15}em`,
//         letterSpacing: '1px',
//         lineHeight: `${20 / 15}em`
//       }
//     },
//     stay: {
//       tag: 'p',
//       proto: [Text, Box],
//       props: {
//         text: 'Long term stays allow for 28 days or more',
//         color: 'gold'
//       },
//       style: {
//         fontWeight: 400,
//         letterSpacing: '1px'
//       }
//     }
//   },

//   image: {
//     tag: 'span'
//   }
// }

// export default {
//   proto: Box,
//   props: {
//     flexFlow: 'column',
//     minMax: '100% 100%'
//   },
//   attr: { id: 'residence' },
//   style: {
//     background: 'rgba(244, 233, 217, 1)',
//     borderBottom: '1px solid rgba(42, 81, 61, 1)',
//     '@media only screen and (max-width: 1225px)': {
//       gap: 0,
//       paddingTop: 0
//     }
//   },

//   residence,
//   entrance

// }
