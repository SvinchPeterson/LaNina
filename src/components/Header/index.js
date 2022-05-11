'use strict'
import { Text, Box, Img, Link } from '@symbo.ls/symbols'
import { Logo3 } from '../../components/Logo'

import PHONE_PNG from '../../assets/icons/phone2.png'

const menuIcon = {
  tag: 'label',
  attr: { for: 'toggle' },
  proto: Box,
  style: {
    cursor: 'pointer',
    '> div': { transition: 'width .3s ease-in-out' }
  },
  props: {
    flexFlow: 'column',
    boxSize: 'B1 A1',
    flexAlign: 'flex-start space-between'
  },
  on: {
    click: (event, element, state) => {
      state.activeMenu
        ? state.update({ activeMenu: false, activeMenuItem: null })
        : state.update({ activeMenu: true })
    }
  },

  childProto: {
    proto: Box,
    props: {
      boxSize: '60% W',
      background: 'cream',
      round: 'C'
    }

  },
  ...[
    {
      class: {
        show: (element, state) => state.activeMenu === false
          ? { width: '100%' }
          : { width: '60%' }
      }
    },
    {},
    {}
  ]
}

// const langs = {
//   proto: Box,
//   class: [styleLangs],
//   props: {
//     flexAlign: 'center center',
//     gap: 'A'
//   },
//   style: {
//     textTransform: 'uppercase',
//     width: `${200 / 16}em`,
//     '> div': { cursor: 'pointer' },
//     '> div:hover': { opacity: 1, fontWeight: 700 }
//   },
//   childProto: {
//     proto: [Text, Box],
//     on: {
//       click: (event, element, state) => {
//         state.update({ activeLang: element.key })
//         console.log(state.activeLang, element.key)
//       }
//     },

//     class: {
//       show: (element, state) => state.activeLang === element.key
//         ? { color: 'rgba(244, 233, 217, 1)', fontWeight: 700 }
//         : { color: 'rgba(244, 233, 217, .85)', fontWeight: 500 }
//     }
//   },
//   ...[
//     { props: { text: 'geo' } },
//     { props: { text: 'eng' } },
//     { props: { text: 'rus' } }
//   ]
// }

const call = {
  proto: [Link, Box],
  props: {
    flexAlign: 'center center',
    position: 'relative',
    href: 'tel:571017170'
  },
  image: {
    proto: [Img, Box],
    props: {
      src: PHONE_PNG,
      boxSize: 'A1 A1'
    },
    style: {
      width: '100%',
      height: '100%'
    }
  },
  numb: {
    tag: 'span',
    proto: [Text, Box],
    props: {
      text: '+995 571 017 170',
      color: 'orange2',
      size: 'B',
      position: 'absolute',
      padding: '0 0 0 Z',
      bottom: '-55px'
    },
    style: {
      opacity: 0,
      whiteSpace: 'nowrap',
      '@media only screen and (max-width: 768px)': {
        right: 0,
        fontSize: '16px'
      }
    }
  },
  style: {
    cursor: 'pointer',
    '&:hover > span': { opacity: 1 }
  }
}

const book = {
  proto: [Link, Box, Text],
  props: {
    flexFlow: 'column',
    flexAlign: 'center center',
    color: 'cream',
    href: ''
  },
  style: { cursor: 'pointer' },
  logo: {
    proto: Logo3,
    props: {
      boxSize: 'B B'
    }
  },
  span: {
    proto: Text,
    props: {
      // text: 'ook'
    },
    style: {
      textTransform: 'uppercase',
      fontSize: `${13 / 16}em`,
      marginLeft: '-2.5px',
      fontWeight: '500',
      letterSpacing: '-2px'
    }
  }
}

const container = {
  tag: 'header',
  proto: Box,
  props: {
    position: 'fixed',
    top: '0px',
    left: '50%',
    flexAlign: 'center center',
    padding: 'Z2 B',
    gap: 'E'
  },

  style: {
    zIndex: 500,
    width: 'fit-content',
    transform: 'translate(-50%, 0%)',
    borderBottomLeftRadius: '31px',
    borderBottomRightRadius: '31px',
    background: 'radial-gradient(rgba(42, 81, 61, .75),rgba(42, 81, 61, .85))',
    boxShadow: '0px 0px 3px px rgba(0, 0, 0, .5)',
    backdropFilter: 'blur(5px)',
    '@media only screen and (max-width: 480px)': {
      gap: `${90 / 16}em`

    }
  }
}

export const Header = {
  proto: container,

  menuIcon,
  book,
  call
}
