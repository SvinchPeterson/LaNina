'use strict'
import { Block, Img, Text, Flex, Link, Shape, SVG } from '@rackai/symbols'

import style from './style'

import PHONE_SVG from '../../assets/phoneRight.svg'
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
  proto: Block,
  props: {
    flexFlow: 'column',
    gap: 'Y',
    padding: 'Z1'
  },
  on: {
    click: (event, element, state) => {
      state.active ? state.update({ active: false }) : state.update({ active: true })
      // class. (element, state) => state.actives ? { opacity: 1, display: 'block' } : { opacity: 0, display: 'none' }
      // element.style.update({ background: 'radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, .0))', padding: '30px 20px' })
      // element.update({ style: { border: '3px solid red' } })
    }

  },

  childProto: {
    proto: [Block, Shape],
    props: {
      round: 'A'
    }
  },
  ...[
    { props: { width: 'A2' } },
    { props: { width: 'A2' } },
    { props: { width: 'A2' } }
  ]
}

const langs = {
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'flex-start center',
    gap: 'A'
  },

  childProto: {
    proto: [Text, Block],
    props: {
      padding: '0 0 A 0'
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
      props: { text: 'en' }
    },

    {
      props: { text: 'ru' }
      // on: {
      //   click: (event, element, state) => {
      //     element.parent.update({ props: { flexFlow: 'column-reverse' } })
      //   }
      // }
    }
  ]
}

const book = {
  tag: 'button',
  proto: Block,
  props: {
    flexFlow: 'column',
    flexAlign: 'center flex-start',
    gap: 'A'
  },
  img: {
    proto: [Img, Block],
    props: {
      src: LOGO_PNG,
      boxSize: ''
    }
  },
  h5: {
    proto: Text,
    props: {
      text: 'book',
      size: 'E'
    }
  }
}

const call = {
  proto: [SVG, Block],
  src: PHONE_SVG,
  props: {
    boxSize: 'A2 A2'
  },
  on: {
    click: (event, element, state) => {
      // state.active ? state.update({ active: false }) : state.update({ active: true })
      element.update({ style: { padding: '20px', borderRadius: '100%', background: 'radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, .0))' } })
    }

  },
  style: {
    opacity: '.7',
    cursor: 'pointer',
    display: 'block',
    padding: '20px',
    borderRadius: '100%',
    background: 'transparent',
    border: '1px solid rgba(243, 231, 219, 0)',
    // background: 'radial-gradient(rgba(243, 231, 219, .12), rgba(243, 231, 219, .0))',
    '&:hover': {
      opacity: '1',
      border: '1px solid rgba(243, 231, 219, .1)',
      background: 'radial-gradient(rgba(243, 231, 219, .1), rgba(243, 231, 219, .0))'
    }
  }
}

const book2 = {
  tag: 'button',
  proto: [Block, Text],
  props: {
    text: 'book',
    size: 'B'
    // padding: 'Z A Z A'
  }
}

export default {
  tag: 'header',
  style,
  proto: [Block, Flex],
  props: {
    flexAlign: 'center center',
    gap: 'F',
    padding: 'D 0 0 0'
  },

  check,

  menuIcon,
  book2,
  // langs,
  call,
  langs
  // book
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
