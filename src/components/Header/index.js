'use strict'
import { Text, Box, Img, Link } from '@symbo.ls/symbols'
import { Logo3 } from '../../components/Logo'
import { Book } from '../Book'

import PHONE_PNG from '../../assets/icons/phone2.png'

const menuIcon = {
  // tag: 'label',
  // attr: { for: 'toggle' },
  proto: Box,
  style: {
    cursor: 'pointer',
    '> div': {
      transition: 'width .3s ease-in-out',
      '@media only screen and (max-width: 1225px)': { transition: 'width .1s ease-in-out' }
    }
  },
  props: {
    flexFlow: 'column',
    boxSize: 'B2 A1',
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
      background: 'cream',
      round: 'C'
    },
    style: { height: '3px' }

  },
  ...[
    {
      // props: { boxSize: '100% W' },
      class: {
        show: (element, state) => state.activeMenu === false
          ? {
            width: '50%'
          }
          : { width: '100%' }
      }
    },
    {
      style: { width: '50%' }
    },
    {
      class: {
        show: (element, state) => state.activeMenu === false
          ? {
            width: '100%'
          }
          : { width: '50%' }
      }
    }
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
      boxSize: 'A2 A2'
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
      fontSize: 'B',
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
    href: 'https://www.airbnb.com/users/show/404104381',
    target: '_blank'
  },
  style: { cursor: 'pointer' },
  logo: {
    proto: Logo3,
    props: {
      boxSize: 'B B'
    }
  }
}

const container = {
  tag: 'header',
  proto: Box,
  props: {
    position: 'fixed',
    top: '0',
    left: '50%',
    flexAlign: 'center center',
    // padding: 'Z B Z1 B',
    padding: 'Z A2',
    gap: 'E'
  },

  style: {
    zIndex: 500,
    width: 'fit-content',
    transform: 'translate(-50%, 0%)',
    borderBottomLeftRadius: '28px',
    borderBottomRightRadius: '28px',
    background: 'radial-gradient(rgba(42, 81, 61, .65),rgba(60,84, 72, .75))',
    boxShadow: '0px 0px 3px px rgba(0, 0, 0, .5)',
    backdropFilter: 'blur(5px)',
    '@media only screen and (max-width: 480px)': {
      gap: `${95 / 16}em`
    },
    '@media only screen and (max-width: 330px)': { gap: `${85 / 16}em` }
  }
}

export const Header = {
  proto: container,

  menuIcon,
  book,
  call
}

export const Header2 = {
  tag: 'nav',
  proto: Box,
  props: {
    position: 'fixed',
    width: '100%',
    top: '0',
    left: '0',
    flexAlign: 'center space-between',
    padding: 'B2 D B D',
    gap: 'C'
  },
  style: {
    zIndex: '100',
    mixBlendMode: 'difference'
  },
  Book,
  links: {
    proto: Box,
    props: {
      flexAlign: 'center center',
      gap: 'C'
    },
    childProto: {
      proto: [Link, Text, Box],
      props: {
        color: 'white',
        fontSize: 'Z'
      },
      style: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 900,
        opacity: '.7',
        zIndex: '30',
        // textShadow: '2px 2px white',
        '&:hover': {
          // color: '#FFCEA8',
          opacity: 1
        }
      }
    },
    ...[
      { props: { text: 'residence', href: '#residence' } },
      { props: { text: 'apartments', href: '#apartments' } },
      { props: { text: 'wine', href: '#wine' } },
      { props: { text: 'location', href: '#location' } }
    ]
  }
}
