'use strict'
import { Box, Text } from '@symbo.ls/symbols'
import { Header, Menu } from '../../components'
import { opacity, zoomiIn } from '../../animations'
import { Residence } from '../../articles'

import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'
import SOLOLAKI_MOBILE_JPG from '../../assets/images/sololaki/sololaki-mobile.jpg'

const banner = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    flexAlign: 'flex-start flex-end',
    flexFlow: 'column',
    padding: '0 0 D D',
    position: 'relative'
  },
  style: {
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'linear',
    boxSizing: 'border-box',
    backgroundSize: 'cover',
    '@media only screen and (min-width: 1225px)': {
      backgroundAttachment: 'fixed',
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .8)), url(' + SOLOLAKI_JPG + ')'
    },
    '@media only screen and (max-width: 1225px)': {
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .8)), url(' + SOLOLAKI_TABLET_JPG + ')'
    },
    '@media only screen and (max-width: 768px)': {
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .8)), url(' + SOLOLAKI_MOBILE_JPG + ')'
    }
  },
  heading: {
    proto: Box,
    props: {
      flexFlow: 'column',
      flexAlign: 'flex-start flex-end'
    },
    title: {
      proto: [Text, Box],
      text: 'BB residence',
      props: {
        color: 'cream',
        size: 'F'
      },
      style: {
        letterSpacing: '-2.5px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      }
    },
    caption: {
      proto: [Text, Box],
      props: {
        text: 'SOLOLAKI',
        // size: 'B',
        color: 'orange'
      },
      style: {
        fontWeight: 700,
        letterSpacing: '10px',
        marginTop: '-2px',
        marginLeft: '2px'
      }
    }
  },
  p: {
    proto: [Text, Box],
    props: {
      text: 'where ordinary, becomes extraordinary',
      size: 'B',
      position: 'absolute',
      top: '50%',
      left: '50%',
      color: 'cream .75'
    },
    style: {
      transform: 'translate(-50%, -50%)',
      textTransform: 'uppercase',
      fontWeight: 500,
      letterSpacing: '5px',
      whiteSpace: 'nowrap'
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
  state: {
    activeMenu: true,
    activeMenuItem: 0
  },

  proto: container,
  banner,
  Header,
  Menu,
  Residence

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
