'use strict'
import { Box, Text, Img, Link } from '@symbo.ls/symbols'
import { Header } from '../../components'
import { opacity } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'

const banner = {
  proto: Box,
  props: {
    boxSize: '100% 100%'
  },
  style: {
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    '@media only screen and (min-width: 1225px)': {
      backgroundAttachment: 'fixed',
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .65)), url(' + SOLOLAKI_JPG + ')',
      backgroundSize: 'cover'
    }
  }
}

const container = {
  proto: Box,
  props: { background: 'green' },
  style: {
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'auto'

  }
}
export default {
  proto: container,
  banner

}

// import { Header, Menu } from '../../components'

// import { Residence, Apartments, Wine, Location } from '../../articles'

// import style, { styleBanner } from './style'

// const book = {
//   proto: [Link, Box],
//   style: {
//     '@media only screen and (min-width: 1225px)': {
//       borderTopRightRadius: `${80 / 16}em`,
//       borderBottomRightRadius: `${80 / 16}em`,
//       top: '43%'
//     },
//     '@media only screen and (max-width: 1225px)': {
//       bottom: 0,
//       left: '50%',
//       transform: 'translate(-50%, 0%)',
//       fontSize: `${30 / 16}em`,
//       padding: `${60 / 30}em ${100 / 30}em ${30 / 30}em ${100 / 30}em`,
//       borderTopRightRadius: `${80 / 16}em`,
//       borderTopLeftRadius: `${80 / 16}em`

//     },
//     zIndex: 10,
//     cursor: 'pointer',
//     textDecoration: 'none'
//   },
//   props: {
//     position: 'fixed',
//     background: 'green',
//     flexFlow: 'column',
//     padding: 'B C B A2',
//     href: `https://www.airbnb.com/users/404104381/listings?fbclid=IwAR3RqnCcBkIXwGaJauHmAlgdNYGa9ASOcUMk7ph2i1XBqDG0DqvOMx7XnrM`,
//     target: '_blank'
//   },
//   ook: {
//     proto: [Text, Box],
//     props: {
//       text: 'ook',
//       size: 'C',
//       color: 'cream'
//     },
//     style: { textTransform: 'uppercase' }
//   }
// }

// export const banner = {
//   proto: Box,
//   class: [styleBanner],
//   props: {
//     boxSize: '100% 100%',
//     flexAlign: 'center center',
//     flexFlow: 'column',
//     gap: 'B'
//   },

//   heading: {
//     proto: Box,
//     props: {
//       flexFlow: 'column',
//       flexAlign: 'center flex-start',
//       color: 'cream',
//       gap: 'Z'
//     },

//     h1: {
//       proto: Text,
//       props: {
//         text: 'bb residence',
//         size: 'H'
//       }
//     },
//     h3: {
//       proto: Text,
//       props: {
//         text: 'sololaki',
//         size: 'D'
//       }
//     }
//   },

//   p: {
//     proto: [Text, Box],
//     props: {
//       text: 'where ordinary, becomes extraordinary',
//       size: 'B',
//       color: 'orange2'
//     }
//   }
// }

// export default {
//   state: {
//     activeLang: 0,
//     activeMenu: true,
//     activeMenuItem: 0,
//     activeTab: 0,
//     offers: true,
//     activeImage: 0
//   },

//   proto: Box,
//   style,
//   props: {
//     background: 'cream',
//     position: 'relative'
//   },

//   banner,
//   Header,
//   Menu,
//   book,

//   Residence,
//   Apartments,
//   Wine,
//   Location
// }
