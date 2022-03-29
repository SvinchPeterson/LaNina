'use strict'
import { Block } from '@rackai/symbols'

import { tabBallerina, tabRedBrick, tabYellowCouch, roomBallerina, roomRedBrick, roomYellowCouch } from '../../components'

// import { roomBallerina, roomRedBrick, roomYellowCouch } from './rooms'

import style from './style'

export default {
  tag: 'article',
  style,
  proto: Block,
  props: {
    flexFlow: 'column'
  },
  attr: { id: 'apartments' },

  tabs: {
    tag: 'header',
    proto: Block,
    props: {
      padding: 'D 0'
    },

    container: {
      proto: Block,
      props: { flexFlow: 'row', gap: 'A' },
      childProto: {
        proto: Block
      },
      ...[
        { proto: tabBallerina },
        { proto: tabRedBrick },
        { proto: tabYellowCouch }
      ]
    }
  }
}

// export default {
//   tag: 'article',
//   proto: Block,
//   style,
//   props: {
//     flexFlow: 'column',
//     padding: 'B 0 E 0'
//   },
//   attr: { id: 'apartments' },

//   tabs: {
//     tag: 'header',
//     proto: Block,
//     props: {
//       padding: 'E 0'
//     },
//     // props: {
//     //   flexFlow: 'row',
//     //   gap: 'B1',
//     //   padding: '0'
//     // },
//     container: {
//       proto: Block,
//       props: {
//         flexFlow: 'row',
//         gap: 'B1',
//         padding: '0'
//       },
//       childProto: {
//         proto: Block
//       },
//       ...[
//         { proto: tabBallerina },
//         { proto: tabRedBrick },
//         { proto: tabYellowCouch }
//       ]
//       // ballerina: { proto: tabBallerina },
//       // redBrick: { proto: tabRedBrick },
//       // yellowCouch: { proto: tabYellowCouch }
//       // ...[
//       //   tabBallerina,
//       //   tabRedBrick,
//       //   tabYellowCouch
//       // ]
//     }
//   },

//   rooms: {
//     tag: 'section',
//     proto: Block,
//     props: {
//       // padding: 'E'
//     },
//     ...[
//       roomBallerina,
//       roomRedBrick,
//       roomYellowCouch
//     ]
//   }
// }

// export default {
//   tag: 'article',
//   proto: Block,
//   props: {
//     flexFlow: 'column',
//     padding: 'G 0 0 0'
//   },
//   style,
//   state: {
//     active: 0
//     // class: {
//     //   flex: 1
//     // }
//   },
//   content: {
//     tag: 'section',
//     proto: Block,
//     props: {
//       flexFlow: 'column',
//       gap: 'D'
//     },
//     roomTabs: {
//       tag: 'header',
//       proto: [Block],
//       props: {
//         flexFlow: 'row',
//         gap: 'D'
//       },
//       style: {
//         height: `${600 / 16}em`
//       },

//       childProto: {
//         proto: Block,
//         roomImage: {
//           // style: { backgroundAttachment: 'fixed' }

//         },

//         on: {
//           click: (event, element, state) => {
//             state.update({ active: element.key })
//           }
//         },
//         class: {
//           show: (element, state) => state.active === element.key ? { flex: 3, '> span': { backgroundAttachment: 'fixed' } } : { flex: 1 }
//         },

//         style: {
//           transition: 'all .4s ease-in-out'
//           // '&:active': { flex: 3 }
//           // '> div': {
//           //   width: 0
//           // }
//           // '> div:hover': { flex: 3 }

//         }
//       },
//       ...[
//         {
//           proto: roomTabBallerina

//         },
//         {
//           proto: roomTabRedBrick
//         },
//         {
//           proto: roomTabYellowCouch
//         }
//       ]
//     },

//     rooms: {
//       proto: Block,
//       props: {
//         padding: 'D 0 0 0'
//       },
//       style: {
//         display: 'flex'
//       },
//       childProto: {
//         proto: Block,
//         style: {

//           transition: 'all 1.5s ease-in-out',
//           background: 'black',

//           '> nav': {
//             flex: 1,
//             display: 'flex',
//             position: 'relative',
//             minHeight: '100%',
//             flexFlow: 'column',
//             flexAlign: 'flex-start flex-start'
//           },
//           '> nav > div': {
//             flex: 1,
//             display: 'flex'
//           },
//           '> nav > button': {
//             height: 'fit-content',
//             position: 'absolute',
//             background: 'transparent',
//             top: '45%',
//             border: 'none',
//             transitionDelay: '0s',
//             cursor: 'pointer'
//           },
//           '> nav > button > img': {
//             width: '60px',
//             height: '100px'

//           },
//           '> nav > div > span': {
//             backgroundSize: 'cover',
//             '&:first-child:hover': {
//               backgroundPosition: 'bottom right',
//               transition: 'all 1.2s ease-in-out'
//             }
//           }
//         },
// class: {
//   show: (element, state) => state.active === element.key ? { minHeight: '800px', minWidth: '100%', opacity: 1, filter: 'brightness(70%) grayscale(50%)' } : { minHeight: 0, opacity: '.3', filter: 'brightness(0%)' }
// },

//         gallery: {
//           rightArrow: {
//             class: {
//               show: (element, state) => state.active === element.parent.parent.key ? { opacity: 1 } : { opacity: 0 }
//             }
//           },

//           leftArrow: {
//             class: {
//               show: (element, state) => state.active === element.parent.parent.key ? { opacity: 1 } : { opacity: 0 }
//             }
//           }
//         }

//       },
//       ...[
//         {
//           proto: roomBallerina,
//           attr: { id: 'ballerina' }

//         },
//         { proto: roomRedBrick, attr: { id: 'redBrick' } },
//         { proto: roomYellowCouch, attr: { id: 'yellowCouch' } }
//       ]
//     }
//   }
// }
