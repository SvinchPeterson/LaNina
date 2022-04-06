'use strict'
import { Text, SVG, Link, Box } from '@symbo.ls/symbols'

import style from './style'

import PHONE_PNG from '../../assets/icons/phoneRight.svg'

export default {
  proto: Box,
  style,
  props: {
    boxSize: '100% E',
    position: 'fixed',
    top: '0',
    padding: '0 C'
  }
}

// const check = {
//   tag: 'input',
//   attr: {
//     type: 'checkbox',
//     id: 'toggle'
//   }
// }

// const menuIcon = {
//   tag: 'label',
//   attr: { for: 'toggle' },
//   proto: Box,
//   props: {
//     flexFlow: 'column',
//     gap: 'Y',
//     boxSize: 'A2 A2',
//     padding: 'A'
//   },

//   on: {
//     click: (event, element, state) => {
//       state.active ? state.update({ active: false }) : state.update({ active: true })
//     }
//   },

//   childProto: {
//     proto: Box,
//     props: {
//       round: 'A'
//     }
//   },

//   ...[{}, {}, {}]
// }

// const langs = {
//   proto: Box,
//   props: {
//     flexAlign: 'flex-start center',
//     gap: 'Z2'
//   },

//   childProto: {
//     proto: Box,
//     props: { padding: 'Y 0' },
//     on: {
//       click: (event, element, state) => {
//         state.update({ activeLang: element.key })
//         console.log(state.activeLang, element.key)
//       }
//     },

//     class: {
//       show: (element, state) => state.activeLang === element.key ? { color: 'rgba(244, 233, 217, .55)' } : { color: 'rgba(244, 233, 217, 1)' }
//     }
//   },

//   ...[
//     {
//       props: { text: 'ქარ' },
//       style: { fontFamily: 'BPG ExtraSquare Mtavruli' }
//     },
//     {
//       props: { text: 'eng' }
//     },

//     {
//       props: { text: 'rus' }
//     }

//   ]
// }

// const call = {
//   tag: 'span',
//   proto: Box,
//   props: {
//     boxSize: 'A2 A2',
//     padding: 'A'
//   },
//   numb: {
//     proto: Link,
//     props: {
//       href: 'https://api.whatsapp.com/send?phone=+995571017170',
//       target: '_blank'
//     },
//     svg: {
//       proto: [SVG, Box],
//       src: PHONE_PNG,
//       props: { boxSize: 'A1 A1' }
//     }
//   }
// }

// export default {
//   tag: 'header',
//   style,
//   proto: Box,
//   props: {
//     flexAlign: 'center center',
//     gap: 'E'
//   },

//   check,

//   menuIcon,
//   langs,
//   call
// }
