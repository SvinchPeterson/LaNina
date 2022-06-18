'use strict'
import { Text, Box, Link } from '@symbo.ls/symbols'
import { Book } from '../Book'
import { MenuButton } from '../MenuButton'

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

// const call = {
//   proto: [Link, Box],
//   props: {
//     flexAlign: 'center center',
//     position: 'relative',
//     href: 'tel:571017170'
//   },
//   image: {
//     proto: [Img, Box],
//     props: {
//       src: PHONE_PNG,
//       boxSize: 'A2 A2'
//     },
//     style: {
//       width: '100%',
//       height: '100%'
//     }
//   },
//   numb: {
//     tag: 'span',
//     proto: [Text, Box],
//     props: {
//       text: '+995 571 017 170',
//       color: 'orange2',
//       fontSize: 'B',
//       position: 'absolute',
//       padding: '0 0 0 Z',
//       bottom: '-55px'
//     },
//     style: {
//       opacity: 0,
//       whiteSpace: 'nowrap',
//       '@media only screen and (max-width: 768px)': {
//         right: 0,
//         fontSize: '16px'
//       }
//     }
//   },
//   style: {
//     cursor: 'pointer',
//     '&:hover > span': { opacity: 1 }
//   }
// }

const container = {
  tag: 'header',
  proto: Box,
  props: {
    position: 'fixed',
    top: '0',
    flexAlign: 'center space-between',
    padding: 'C D 0 D',
    gap: 'E',
    display: 'none',
    width: '100%',
    '@mobileL': { display: 'flex' },
    '@mobileM': {
      padding: 'B B 0 B'
    }
  },

  style: {
    zIndex: 500,
    boxShadow: '0px 0px 3px px rgba(0, 0, 0, .5)',
    mixBlendMode: 'difference',
    '@media only screen and (max-width: 480px)': {
      gap: `${95 / 16}em`
    },
    '@media only screen and (max-width: 330px)': { gap: `${85 / 16}em` }
  }
}

export const HeaderMobile = {
  proto: container,
  Book,
  MenuButton
}

export const Header = {
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
    mixBlendMode: 'difference',
    '@media only screen and (max-width: 768px)': {
      display: 'none'
    }
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
      on: {
        click: (event, element, state) => {
          state.update({ activeMenuItem: element.key, activeMenu: false })
        }
      },
      class: {
        show: (element, state) => state.activeMenuItem === element.key
          ? { opacity: 1 }
          : { }
      },
      style: {
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 900,
        opacity: '.7',
        zIndex: '30',
        '&:hover': {
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
