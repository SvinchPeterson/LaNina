'use strict'
import { Block, Img, Text, Flex, Link, Shape, SVG } from '@rackai/symbols'

import style from './style'

import PHONE_PNG from '../../assets/phone1.png'
import LOGO_PNG from '../../assets/logos.png'

const check = {
  tag: 'input',
  attr: {
    type: 'checkbox',
    id: 'toggle'
  }
}

const menuIcon = {
  tag: 'label',
  attr: { for: 'toggle' },
  proto: [Block, Flex],
  props: { gap: 'Y' },
  on: {
    click: (event, element, state) => {
      state.active ? state.update({ active: false }) : state.update({ active: true })
    }
  },

  childProto: {
    proto: [Block, Shape],
    props: {
      round: 'A'
    }
  },
  ...[
    { props: { width: 'B2' } },
    { props: { width: 'A1' } },
    { props: { width: 'A1' } }
  ]
}

const langs = {
  proto: Block,
  props: {
    flexAlign: 'flex-start center',
    gap: 'Z'
  },

  childProto: {
    proto: [Text, Block],
    props: {
      padding: '0 Z 0 0'
    }
    // class: {
    //   show: (element, state) => state.actives === parseInt(element.key) ? { opacity: 1, display: 'block' } : { opacity: 0, display: 'none' }
    // },
    // on: {
    //   click: (event, element, state) => {
    //     state.update(state.actives = parseInt(element.key))

    //     // element.parent.update({ props: { flexFlow: 'column-reverse' } })
    //   }
    // }
  },
  ...[
    {
      // on: {
      //   click: (event, element, state) => {
      //     element.parent.update({ props: { flexFlow: 'column' } })
      //   }
      // },
      props: { text: 'eng' }
    },

    {
      props: { text: 'rus' }
      // on: {
      //   click: (event, element, state) => {
      //     element.parent.update({ props: { flexFlow: 'column-reverse' } })
      //   }
      // }
    }
  ]
}

const book = {
  img: {
    proto: [Img, Block],
    props: {
      src: LOGO_PNG,
      boxSize: ''
    }
  }
}

const call = {
  style: {
    // border: '2px solid red',
    height: 'fit-content',
    transform: 'scale(.97)'
  },
  img: {
    proto: [Img, Block],
    style: { display: 'block' },
    props: {
      boxSize: 'B B',
      src: PHONE_PNG
    }
  }
}

export default {
  tag: 'header',
  style,
  proto: [Block, Flex],
  props: {
    flexAlign: 'flex-start center',
    gap: 'D1',
    padding: 'D 0 0 0'
  },

  check,

  menuIcon,
  call,
  langs
  // book
}

// const langLinks = {
//   tag: 'nav',
//   proto: [Block, Flex],
//   style: {
//     flexFlow: 'column',
//     paddingTop: '20px',
//     '&:hover > a': { visibility: 'visible' }
//   },
//   childProto: {
//     proto: [Link, Text],
//     props: { size: 'A2' },
//     style: {
//       color: 'rgba(243, 231, 219, 1)',
//       cursor: 'pointer',
//       opacity: '.65',
//       transition: 'all .6s ease-in-out'
//     }
//   },
//   ...[
//     { text: 'EN', style: { '&:hover': { opacity: 1 } } },
//     {
//       text: 'RUS',
//       style: {
//         visibility: 'hidden',
//         '&:hover': { opacity: 1 }
//       }
//     }
//   ]

// }

// const call = {
//   proto: [SVG, Block],
//   src: PHONE_SVG,
//   props: { width: 'A2', height: 'A2' },
//   style: {
//     cursor: 'pointer',
//     opacity: '.85',
//     '&:hover': { opacity: 1 }
//   }
// }

// const book = {
//   proto: [Flex, Block, Link],
//   props: { gap: 'Z', padding: 'Z' },
//   style: {
//     flexFlow: 'column',
//     alignItems: 'center',
//     cursor: 'pointer',
//     background: 'black',
//     marginTop: `${120 / 16}em`,
//     '> *': { opacity: '1' },
//     '&:hover > *': { opacity: 1 }
//   },
//   logo: {
//     proto: [Img, Block],
//     props: {
//       src: LOGO_PNG,
//       width: 'B2',
//       height: 'C'
//     }
//   },
//   span: {
//     proto: Text,
//     props: { text: 'BOOK' },
//     style: {
//       display: 'block',
//       textOrientation: 'upright',
//       writingMode: 'vertical-rl',
//       letterSpacing: '3px',
//       color: 'rgba(243, 231, 219, .85)',
//       fontSize: '20px'
//     }
//   }
// }

// export default {
//   tag: 'header',
//   proto: [Block, Flex],
//   props: {
//     height: 'D2',
//     padding: '0 C'
//   },
//   style,

//   },
//   hmburgerMenuIcon: {
//     tag: 'label',
//     attr: { for: 'toggle' },
//     proto: menuIcon,
//     style: { zIndex: '30' }
//   },
//   // menu: {
//   //   tag: 'aside',
//   //   proto: SideMenu
//   // },
//   nav: {
//     tag: 'nav',
//     proto: [Flex, Block],
//     props: { gap: 'B2' },
//     style: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//       height: 0
//     },
//     childProto: {
//       proto: Block
//     },
//     ...[
//       { proto: langLinks },
//       { proto: call },
//       { proto: book }

//     ]
//   }
// }
