'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import LOGO_BIG_PNG from '../../assets/icons/logoBig.png'

import { positionOpacity, letterSpacing3, opacity } from '../../animations'

const heading = {
  tag: 'h1',
  proto: [Text, Box],
  props: {
    text: 'BB Hospitality'
    // color: 'orange3 1'
  },
  style: {
    fontSize: '70px',
    fontWeight: '300',
    animationName: letterSpacing3,
    animationDuration: '1.8s',
    animationTimingFunction: 'ease-in-out',
    letterSpacing: '0px',
    color: '#DCBB8C'
  }
}

const links = {
  proto: Box,
  props: {
    flexAlign: 'center center',
    gap: 'A',
    padding: '0 B 0 0'
  },
  childProto: {
    proto: [Link, Text, Box],
    props: {
      size: 'Z',
      padding: 'A B',
      round: 'B',
      background: 'cream .25',
      color: 'cream'
    },
    style: {
      // border: '2px solid red',
      textTransform: 'uppercase',
      fontWeight: 900,
      textDecoration: 'none'
      // color: 'rgba(244, 233, 217, 1)'
    }
  },
  ...[
    {
      props: {
        text: 'residence',
        href: '/Sololaki'
      },
      style: { '&:hover': { background: 'rgba(244, 233, 217, .45)' } }
    },
    {
      props: { text: 'travel' },
      style: {
        position: 'relative',
        '&:before': {
          content: '"soon"',
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontWeight: 400,
          textTransform: 'lowercase',

          color: '#EC8551'
        }
      }
    }
  ]

}

const Container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'relative'
  },
  style: {
    overflowY: 'auto',
    backgroundImage: 'url(' + LOGO_BIG_PNG + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    animationName: positionOpacity,
    animationDuration: '1.8s',
    animationTimingFunction: 'ease-in-out'
    // backgroundAttachment: 'fixed'
  },
  content: {
    proto: Box,
    props: {
      position: 'absolute',
      top: '40%',
      right: '15%',
      transform: 'translate(-50%, -50%)',
      flexFlow: 'column',
      gap: 'C',
      flexAlign: 'flex-end center'
    },
    style: {
      animationName: opacity,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out'
    },
    heading,
    links
  }
}
export default {
  proto: Container
}

// import { opacity, positionOpacity, letterSpacing2 } from '../../animations'

// import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
// import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'
// import SOLOLAKI_TABLET_JPG from '../../assets/images/CoverPage/sololaki-tablet.jpg'
// import RUSTAVELI_TABLET_JPG from '../../assets/images/CoverPage/rustaveli-tablet.jpg'
// import SOLOLAKI_MOBILE_JPG from '../../assets/images/CoverPage/sololaki-mobile.jpg'
// import RUSTAVELI_MOBILE_JPG from '../../assets/images/CoverPage/rustaveli-mobile.jpg'

// const PropsLogo = {
//   props: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%'
//   },
//   style: {
//     transform: 'translate(-50%, -50%)',
//     pointerEvents: 'none'
//   }
// }

// const logo = {
//   proto: [Logo, PropsLogo],
//   style: {
//     '@media only screen and (max-width: 1225px)': { display: 'none' }
//   }
// }

// const logo2 = {
//   proto: [Logo2, PropsLogo],
//   style: {
//     '@media only screen and (min-width: 1225px)': { display: 'none' }
//   }
// }

// export const title = {
//   tag: 'h4',
//   proto: [Text, Box],
//   props: {
//     color: 'cream 1'
//   },

//   style: {
//     textTransform: 'uppercase',
//     zIndex: 2,
//     fontWeight: 900,
//     '@media only screen and (min-width: 1225px)': {
//       transition: 'font-weight .8s ease-in-out, letter-spacing .8s ease-in-out, border .8s ease-in-out',
//       fontSize: `${15 / 16}em`,
//       letterSpacing: '5px',
//       animationName: letterSpacing2,
//       animationDuration: '2s',
//       animationTimingFunction: 'ease-in-out'
//     },
//     '@media only screen and (max-width: 1225px)': {
//       fontSize: `${42 / 16}em`,
//       color: 'rgba(244, 233, 217, 1)',
//       letterSpacing: '-1px'
//     }
//   }
// }
// const underConstruction = {
//   tag: 'span',
//   proto: [Text, Box],
//   text: 'under construction',
//   props: {
//     position: 'absolute'
//   },
//   style: {
//     color: '#FFC99C',
//     whiteSpace: 'nowrap',
//     display: 'block',
//     letterSpacing: '1px',
//     fontWeight: 700,
//     '@media only screen and (min-width: 1225px)': {
//       fontSize: `${13 / 16}em`,
//       paddingTop: `${3 / 13}em`,
//       opacity: 0
//     },
//     '@media only screen and (max-width: 1225px)': {
//       fontSize: `${14 / 42}em`,
//       marginLeft: '2px',
//       letterSpacing: '2.8px'
//     }
//   }
// }

// const link = {
//   proto: [Link, Box, Flex],
//   style: {
//     flex: 1,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     boxSizing: 'border-box',
//     animationName: positionOpacity,
//     animationDuration: '1.8s',
//     animationTimingFunction: 'ease-in-out',
//     textDecoration: 'none',
//     position: 'relative',

//     '@media only screen and (min-width: 1225px)': {
//       paddingBottom: `${100 / 16}em`,
//       transition: 'flex .8s ease-in-out, background-position .8s ease-in-out',
//       backgroundAttachment: 'fixed',
//       alignItems: 'flex-end',
//       '&:after': {
//         content: "''",
//         width: '100%',
//         height: '100%',
//         position: 'absolute',
//         opacity: 0,
//         background: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .55))',
//         top: 0,
//         left: 0,
//         transition: 'opacity 1s ease-in-out'
//       },
//       '&:hover:after': { opacity: '1' },
//       '&:hover:before': {
//         opacity: 0
//       },
//       '&:hover': { flex: 8 }
//     },
//     '@media only screen and (max-width: 1225px)': {
//       alignItems: 'center',
//       justifyContent: 'center'
//     }
//   },

//   title
// }

// const sololaki = {
//   proto: link,
//   props: { href: '/Sololaki' },
//   style: {
//     '&:before': {
//       content: "''",
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       background: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, .75))',
//       top: 0,
//       left: 0,
//       transition: 'opacity 1s ease-in-out'
//     },
//     '@media only screen and (min-width: 1225px)': {
//       backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
//       justifyContent: 'flex-end',
//       paddingRight: `${10 / 16}em`,
//       '&:hover': {
//         backgroundPosition: 'center left -100px'
//       }
//     },

//     '@media only screen and (max-width: 1225px)': {
//       backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')'

//     },

//     '@media only screen and (max-width: 768px)': {
//       backgroundImage: 'url(' + SOLOLAKI_MOBILE_JPG + ')'
//     }
//   },
//   title: {
//     text: 'sololaki'
//   }
// }

// const rustaveli = {
//   proto: link,
//   style: {
//     '&:before': {
//       content: "''",
//       width: '100%',
//       height: '100%',
//       position: 'absolute',
//       background: 'linear-gradient(rgba(42, 81, 61, .35), rgba(42, 81, 61, .75))',
//       top: 0,
//       left: 0,
//       transition: 'opacity 1s ease-in-out',
//       '@media only screen and (max-width: 1024px)': {
//         background: 'linear-gradient(to top, rgba(42, 81, 61, .35), rgba(42, 81, 61, .75))'
//       }
//     },
//     '@media only screen and (min-width: 1225px)': {
//       backgroundImage: 'url(' + RUSTAVELI_JPG + ')',
//       paddingLeft: `${10 / 16}em`,
//       '&:hover': {
//         backgroundPosition: 'center left 100px'
//       },
//       '&:hover > h4 > span': {
//         opacity: 1,
//         transition: 'opacity .5s ease-in-out'
//       }
//     },

//     '@media only screen and (max-width: 1225px)': {
//       backgroundImage: 'url(' + RUSTAVELI_TABLET_JPG + ')'
//     },
//     '@media only screen and (max-width: 768px)': {
//       backgroundImage: 'url(' + RUSTAVELI_MOBILE_JPG + ')'
//     }
//   },
//   title: {
//     text: 'rustaveli',
//     props: { position: 'relative' },
//     underConstruction
//   }
// }

// const Container = {
//   proto: [Box, Flex],
//   props: {
//     boxSize: '100% 100%',
//     background: 'green'
//   },
//   style: {
//     position: 'relative',
//     border: '1px solid black',
//     overflow: 'hidden',
//     boxSizing: 'border-box',
//     animationName: opacity,
//     animationDuration: '2s',
//     animationTimingFunction: 'ease-in-out',
//     '@media only screen and (max-width: 1024px)': {
//       flexFlow: 'column'
//     }
//   }
// }
// export default {
//   proto: Container,

//   sololaki,
//   rustaveli,
//   logo,
//   logo2
// }
