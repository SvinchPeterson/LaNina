'use strict'
import { Block, Flex, Img, Link, Text } from '@rackai/symbols'

import { Logo } from '../../components'
import { logoB } from '../../components/Logo'

import RUSTAVELI_LOAD_JPG from '../../assets/images/coverPage/rustaveliDark.jpg'
import SOLOLAKI_LOAD_JPG from '../../assets/images/coverPage/sololakiDark.jpg'

import RUSTAVELI_HOVER_JPG from '../../assets/images/coverPage/rustaveliHover.jpg'
import SOLOLAKI_HOVER_JPG from '../../assets/images/coverPage/sololakiHover.jpg'

import style, { styleLink, styleLogo } from './style'

// const logo = {
//   proto: Logo,
//   style: {
//     position: 'absolute',
//     top: '45%',
//     left: '50%',
//     transform: 'translate(-50%, -50%) scale(1.4)',
//     zIndex: 400,
//     pointerEvents: 'none',
//     opacity: 0.75,
//     '@media only screen and (min-width: 1225px)': {
//       animationName: coverLogoAnimation,
//       animationDuration: '2s',
//       animationTimingFunction: 'ease-in-out'
//     },
//     '@media only screen and (max-width: 1225px)': {
//       opacity: 0
//     }
//   }
// }
// const logo2 = {
//   proto: logoB,
//   style: {
//     position: 'absolute',
//     zIndex: '400',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%) scale(1)',
//     opacity: 0,
//     '@media only screen and (max-width: 1225px)': {
//       opacity: 1,
//       animationName: coverLogoAnimation2,
//       animationDuration: '2s',
//       animationTimingFunction: 'ease-in-out'
//     }
//   }
// }

// const link = {
//   proto: [Link, Flex],
//   image: {}
// }

// const heading = {
//   tag: 'h3',
//   proto: [Block, Flex],

//   style: {
//     background: 'rgba(0, 0, 0, 0)',
//     alignItems: 'center',
//     opacity: 1,
//     transition: 'all 1s ease-in-out',
//     position: 'absolute',
//     '@media only screen and (min-width: 1225px)': {
//       width: '150px',
//       height: '220px',
//       top: '65%'
//       // position: 'absolute'
//     },
//     '@media only screen and (max-width: 1225px)': {
//       width: '50%',
//       height: '85%',
//       background: 'radial-gradient(rgba(42, 81, 61, .6), rgba(42, 81, 61, 1))'
//     },
//     '@media only screen and (max-width: 768px)': {
//       width: '75%'
//     },
//     '@media only screen and (max-width: 480px)': {
//       width: '90%'
//     },
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       opacity: 0.65,
//       zIndex: 400,
//       color: 'rgba(244, 233, 217, 1)',
//       fontSize: '16px',
//       letterSpacing: '2px',
//       textTransform: 'uppercase',
//       transition: 'all 1s ease-in-out',
//       '@media only screen and (max-width: 1225px)': {
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         fontSize: '40px',
//         letterSpacing: '.5px'
//       }
//     }
//   },

//   span: {
//     proto: Block,
//     style: {
//       width: '0px',
//       height: '80px',
//       background: 'radial-gradient(rgba(42, 81, 61, 1), rgba(42, 81, 61, 1))',
//       opacity: 0,
//       display: 'block',
//       transition: 'all .8s ease-in-out'
//       // display: 'none'
//     }
//   }
// }

// const sololaki = {
//   proto: link,
//   props: { href: '/Sololaki' },
//   style: {
//     '@media only screen and (min-width: 1225px)': {
//       '> div': { borderRight: '0px solid rgba(0, 0, 0, 0)' },
//       '&:hover': {
//         '> div': { borderRight: '0px solid black' },
//         '> h3::before': {
//           right: '25px'
//         }
//       }
//     }
//   },

//   image: {
//     style: {
//       backgroundImage: 'radial-gradient(rgba(244, 233, 217, .5), rgba(42, 81, 61, 1)),url(' + SOLOLAKI_JPG + ')',

//       '@media only screen and (max-width: 1225px)': {
//         backgroundPosition: 'top left'
//       }
//     }
//   },

//   heading: {
//     proto: heading,
//     style: {
//       '@media only screen and (min-width: 1225px)': {
//         right: '0'
//       },
//       '@media only screen and (max-width: 1225px)': {
//         borderTopLeftRadius: '400px',
//         borderTopRightRadius: '400px',
//         bottom: 0

//       },
//       '&::before': {
//         content: '"sololaki"',
//         '@media only screen and (min-width: 1225px)': {
//           right: '15px'
//         }
//       },
//       '> span': {
//         marginLeft: 'auto',
//         borderTopLeftRadius: '100px',
//         borderBottomLeftRadius: '100px'
//       }
//     }
//   }

// }
// const underConstruction = {
//   proto: Text,
//   props: {
//     text: 'under construction'
//   }
// }

// const rustaveli = {
//   proto: link,
//   style: {
//     '> div': { borderLeft: '0px solid rgba(0, 0, 0, 1)' },
//     '@media only screen and (min-width: 1225px)': {
//       '&:hover': {
//         '> h3::before': {
//           '@media only screen and (min-width: 1225px)': {
//             left: '25px'
//           }
//         },
//         '~ span': {
//           opacity: 1
//         }
//       }
//     }
//   },

//   image: {
//     style: {
//       backgroundImage: 'radial-gradient(rgba(244, 233, 217, .5), rgba(42, 81, 61, 1)),url(' + RUSTAVELI_JPG + ')'
//     }
//   },

//   heading: {
//     proto: heading,
//     style: {
//       '@media only screen and (min-width: 1225px)': {
//         borderTopRightRadius: '500px',
//         borderBottomRightRadius: '500px',
//         opacity: 1
//       },
//       '@media only screen and (max-width: 1225px)': {
//         borderBottomLeftRadius: '400px',
//         borderBottomRightRadius: '400px',
//         top: 0
//       },
//       '&::before': {
//         content: '"rustaveli"',
//         '@media only screen and (min-width: 1225px)': {
//           left: '15px'
//         }
//       },
//       '> span': {
//         '@media only screen and (min-width: 1225px)': {
//           borderTopRightRadius: '300px',
//           borderBottomRightRadius: '300px',
//           marginRight: 'auto'
//         }
//       }
//     },
//     underConstruction
//   }
// }

const Sololaki = {
  proto: Link,
  class: [styleLink],
  style: {
    backgroundImage: 'radial-gradient(rgba(244, 233, 217, .2), rgba(42, 81, 61, .3), rgba(0, 0, 0, .8)),url(' + SOLOLAKI_LOAD_JPG + ')',
    '&:hover': {
      backgroundPosition: 'top left -100px',
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .2), rgba(42, 81, 61, .3), rgba(0, 0, 0, .6)),url(' + SOLOLAKI_HOVER_JPG + ')'
    }
  }
}

const Rustaveli = {
  proto: Link,
  class: [styleLink],
  style: {
    backgroundImage: 'radial-gradient(rgba(244, 233, 217, .2), rgba(42, 81, 61, .3), rgba(0, 0, 0, .8)), url(' + RUSTAVELI_LOAD_JPG + ')',
    '&:hover': {
      backgroundPosition: 'top left 100px',
      backgroundImage: 'radial-gradient(rgba(244, 233, 217, .2), rgba(42, 81, 61, .3), rgba(0, 0, 0, .6)), url(' + RUSTAVELI_HOVER_JPG + ')'
    }
  }
}
const logo = {
  proto: Logo,
  style: styleLogo
}
export default {
  proto: [Block],
  props: { flexFlow: 'row' },
  style,

  Sololaki,
  Rustaveli,
  logo

  // logo,
  // logo2,
  // sololaki,
  // rustaveli
}
