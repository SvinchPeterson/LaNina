'use strict'

import { Box, Text } from '@symbo.ls/symbols'

import { Header, Menu } from '../../components'

import style, { styleBanner } from './style'

const states = {
  state: {
    activeLang: 0
  }
}

export const banner = {
  proto: Box,
  class: [styleBanner],
  props: {
    boxSize: '100% 100%',
    flexAlign: 'center center',
    flexFlow: 'column',
    gap: 'B'
  },

  heading: {
    proto: Box,
    props: {
      flexFlow: 'column',
      flexAlign: 'center flex-start',
      color: 'cream',
      gap: 'Z'
    },

    h1: {
      proto: Text,
      props: {
        text: 'bb residence',
        size: 'H'
      }
    },
    h3: {
      proto: Text,
      props: {
        text: 'sololaki',
        size: 'D'
      }
    }
  },

  p: {
    proto: [Text, Box],
    props: {
      text: 'where ordinary, becomes extraordinary',
      size: 'C',
      color: 'orange2'
    }
  }
}

export default {
  states,
  proto: Box,
  style,
  props: {
    background: 'cream',
    position: 'relative'
  },

  banner,
  Header,
  Menu
}

// import { Residence, Apartments, Location, Wine } from '../../articles'
// import { paddingOut, opacity } from '../../animations'

// import { Header, Menu } from '../../components'

// import { logoPng } from '../../components/Logo'

// import style, { styleBanner, styleBook } from './style'

// const book = {
//   proto: [Block, Link],
//   class: [styleBook],
//   props: {
//     flexFlow: 'column',
//     flexAlign: 'flex-start flex-start',
//     href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
//     target: '_blank'
//   },

//   logo: { proto: logoPng },
//   text: 'ook'
// }

// const banner = {
//   proto: [Block],
//   style: styleBanner,
//   props: {
//     flexFlow: 'column',
//     flexAlign: 'center center',
//     gap: 'A'
//   },

//   caption: {
//     proto: [Text, Block],
//     props: {
//       flexFlow: 'column',
//       flexAlign: 'center center'
//     },
//     text: 'bb residence',
//     span: {
//       proto: Text,
//       props: { text: 'sololaki' }
//     }
//   },

//   p: {
//     proto: Text,
//     props: { text: '"Where ordinary, becomes extraordinary"' }
//   }
// }

// export default {
//   proto: Block,
//   style,
//   state: {
//     active: true,
//     activeLink: 0,
//     activeImage: 0,
//     offers: true,
//     activeBallerina: true,
//     activeRedBrick: true,
//     activeYellowCouch: true,
//     activeTab: true,

//     activeLang: 0,
//     activeMenuLink: 0
//   },

//   // book,
//   banner,
//   Header,
//   Menu,

//   Residence,
//   Apartments,
//   Wine,
//   Location
// }
