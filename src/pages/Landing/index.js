'use strict'
import { Box, Link, Text, Flex } from '@symbo.ls/symbols'

import { Logo, Logo2 } from '../../components'

import { brightness } from '../../animations'

import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/CoverPage/sololaki-tablet.jpg'
import RUSTAVELI_TABLET_JPG from '../../assets/images/CoverPage/rustaveli-tablet.jpg'
import SOLOLAKI_MOBILE_JPG from '../../assets/images/CoverPage/sololaki-mobile.jpg'
import RUSTAVELI_MOBILE_JPG from '../../assets/images/CoverPage/rustaveli-mobile.jpg'

const PropsLogo = {
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  style: {
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none'
  }
}

const logo = {
  proto: [Logo, PropsLogo],
  style: {
    '@media only screen and (max-width: 1225px)': { display: 'none' }
  }
}

const logo2 = {
  proto: [Logo2, PropsLogo],
  style: {
    '@media only screen and (min-width: 1225px)': { display: 'none' }
  }
}

const heading = {
  tag: 'h4',
  proto: [Text, Box],
  props: { color: 'cream .75' },

  style: {
    textTransform: 'uppercase',
    '@media only screen and (min-width: 1225px)': {
      transition: 'font-weight .8s ease-in-out, letter-spacing .8s ease-in-out',
      fontWeight: 500,
      letterSpacing: '2px'
    },
    '@media only screen and (max-width: 1225px)': {
      fontSize: '2em',
      color: 'rgba(244, 233, 217, 1)',
      fontWeight: 700
    }
  }
}
const underConstruction = {
  tag: 'span',
  proto: [Text, Box],
  text: 'under construction',
  props: {
    color: 'orange3',
    position: 'absolute'
  },
  style: {
    whiteSpace: 'nowrap',
    display: 'block',
    '@media only screen and (min-width: 1225px)': {
      fontSize: `${14 / 16}em`,
      paddingTop: `${3 / 14}em`,
      opacity: 0
    },
    '@media only screen and (max-width: 1225px)': { fontSize: `${16 / 32}em` },
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}

const link = {
  proto: [Link, Box, Flex],
  style: {
    flex: 1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxSizing: 'border-box',
    '@media only screen and (min-width: 1225px)': {
      paddingBottom: `${100 / 16}em`,
      transition: 'flex .8s ease-in-out, background-position .8s ease-in-out',
      backgroundAttachment: 'fixed',
      alignItems: 'flex-end',
      animationName: brightness,
      animationDuration: '2s',
      animationTimingFunction: 'ease-in-out',
      '&:hover': { flex: 8 },
      '&:hover > h4': {
        color: 'rgba(244, 233, 217, 1)',
        fontWeight: 700,
        letterSpacing: '2.5px'
      }
    },
    '@media only screen and (max-width: 1225px)': {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

  heading: { proto: heading }
}

const sololaki = {
  proto: link,
  style: {
    '@media only screen and (min-width: 1225px)': {
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .85)) ,url(' + SOLOLAKI_JPG + ')',
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .75)) ,url(' + SOLOLAKI_JPG + ')',
      justifyContent: 'flex-end',
      paddingRight: `${10 / 16}em`,
      '&:hover': {
        // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .05), rgba(0, 0, 0, .35)) ,url(' + SOLOLAKI_JPG + ')',
        backgroundImage: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .35)) ,url(' + SOLOLAKI_JPG + ')',
        backgroundPosition: 'center left -100px'
      }
    },

    '@media only screen and (max-width: 1225px)': {
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .45)) ,url(' + SOLOLAKI_TABLET_JPG + ')',
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .65)), url(' + SOLOLAKI_TABLET_JPG + ')'
    },
    '@media only screen and (max-width: 768px)': {
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .45)) ,url(' + SOLOLAKI_MOBILE_JPG + ')'
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .15), rgba(42, 81, 61, .65)), url(' + SOLOLAKI_MOBILE_JPG + ')'
    }
  },
  heading: {
    text: 'sololaki'
  }
}

const rustaveli = {
  proto: link,
  style: {
    '@media only screen and (min-width: 1225px)': {
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .85)), url(' + RUSTAVELI_JPG + ')',
      backgroundImage: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .75)), url(' + RUSTAVELI_JPG + ')',
      paddingLeft: `${10 / 16}em`,
      '&:hover': {
        // backgroundImage: 'linear-gradient(rgba(0, 0, 0, .05), rgba(0, 0, 0, .35)) ,url(' + RUSTAVELI_JPG + ')',
        backgroundImage: 'linear-gradient(rgba(42, 81, 61, .1), rgba(42, 81, 61, .35)), url(' + RUSTAVELI_JPG + ')',
        backgroundPosition: 'center left 100px'
      },
      '&:hover > h4 > span': {
        opacity: 1,
        transition: 'opacity .5s ease-in-out'
      }
    },

    '@media only screen and (max-width: 1225px)': {
      // backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, .1), rgba(0, 0, 0, .45)), url(' + RUSTAVELI_TABLET_JPG + ')'
      backgroundImage: 'linear-gradient(to top, rgba(42, 81, 61, .15), rgba(42, 81, 61, .65)), url(' + RUSTAVELI_TABLET_JPG + ')'
    },
    '@media only screen and (max-width: 768px)': {
      // backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, .1), rgba(0, 0, 0, .45)), url(' + RUSTAVELI_MOBILE_JPG + ')'
      backgroundImage: 'linear-gradient(to top, rgba(42, 81, 61, .15), rgba(42, 81, 61, .65)), url(' + RUSTAVELI_MOBILE_JPG + ')'
    }
  },
  heading: {
    text: 'rustaveli',
    props: { position: 'relative' },
    underConstruction
  }
}
const Container = {
  proto: [Box, Flex],
  props: {
    boxSize: '100% 100%',
    background: 'green'
  },
  style: {
    position: 'relative',
    border: '1px solid black',
    overflow: 'hidden',
    '@media only screen and (max-width: 1225px)': {
      flexFlow: 'column'

    }
  }
}
export default {
  proto: Container,

  sololaki,
  rustaveli,
  logo,
  logo2
}

// import { Box, Link, Text } from '@symbo.ls/symbols'

// import { zoomInCoverLogo } from '../../animations'

// import { Logo, Logo2 } from '../../components'
// // import SOLOLAKI_JPG from '../../assets/images/CoverPage/sololaki.jpg'
// // import RUSTAVELI_JPG from '../../assets/images/CoverPage/rustaveli.jpg'
// import SOLOLAKI_JPG from '../../assets/images/CoverPage/solo.jpg'
// import RUSTAVELI_JPG from '../../assets/images/CoverPage/rus.jpg'

// import style, { styleLink, styleLogo, styleHeading, styleUnderConstruction } from './style'

// const logo = {
//   proto: Logo,
//   props: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%'
//   },
//   class: [styleLogo],
//   style: {
//     '@media only screen and (min-width: 1225px)': {
//       opacity: 1,
//       animationName: zoomInCoverLogo,
//       animationDuration: '1.2s',
//       animationTimingFunction: 'ease-in-out'
//     },
//     '@media only screen and (max-width: 1366px)': {
//       transform: 'translate(-50%, -50%) scale(1.1)'
//     },
//     '@media only screen and (min-width: 1680px)': {
//       transform: 'translate(-50%, -50%) scale(1.5)'
//     },
//     '@media only screen and (min-width: 1920px)': {
//       transform: 'translate(-50%, -50%) scale(1.7)'
//     },
//     '@media only screen and (min-width: 2200px)': {
//       transform: 'translate(-50%, -50%) scale(2)'
//     }

//   }
// }

// const logo2 = {
//   proto: Logo2,
//   props: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%'
//   },
//   class: [styleLogo],
//   style: {
//     '@media only screen and (max-width: 1225px)': {
//       opacity: 1,
//       transform: 'translate(-50%, -50%) scale(2)'
//     },
//     '@media only screen and (max-height: 1100px)': {
//       transform: 'translate(-50%, -50%) scale(1.3)'
//     },
//     '@media only screen and (max-height: 700px)': {
//       transform: 'translate(-50%, -50%) scale(1)'
//     }

//   }
// }

// const link = {
//   proto: [Link, Box],
//   class: [styleLink]
// }
// const Heading = {
//   tag: 'h4',
//   proto: [Text, Box],
//   class: [styleHeading]
// }

// const Sololaki = {
//   proto: link,
//   props: { href: '/Sololaki' },
//   style: {
//     backgroundImage: 'linear-gradient(rgba(0, 0, 0, .35), rgba(0, 0, 0, .65)),url(' + SOLOLAKI_JPG + ')',
//     '@media only screen and (min-width: 1225px)': {
//       cursor: 'pointer',
//       alignItems: 'flex-end',
//       justifyContent: 'flex-end',
//       '&:hover': {
//         backgroundPosition: 'top left -100px',
//         backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .25)),url(' + SOLOLAKI_JPG + ')'
//         // boxShadow: '-75px 0px 30px 0px rgba(0, 0, 0, .25)'
//       }
//     },
//     '@media only screen and (max-height: 700px) and (max-width: 1225px)': {
//       alignItems: 'flex-start',
//       paddingTop: `${60 / 16}em`
//     }
//   },

//   heading: {
//     proto: Heading,
//     props: {
//       text: 'sololaki'
//     },

//     style: {
//       '@media only screen and (min-width: 1255px)': {
//         borderTopLeftRadius: `${40 / 16}em`,
//         borderBottomLeftRadius: `${40 / 16}em`,
//         padding: `${26 / 16}em ${10 / 16}em ${26 / 16}em ${26 / 16}em`
//       }
//     }
//   }
// }

// const Rustaveli = {
//   proto: link,
//   style: {
//     backgroundImage: 'linear-gradient(rgba(0, 0, 0, .35), rgba(0, 0, 0, .65)), url(' + RUSTAVELI_JPG + ')',
//     '@media only screen and (min-width: 1255px)': {
//       alignItems: 'flex-end',
//       justifyContent: 'flex-start',
//       '&:hover': {
//         backgroundPosition: 'top left 100px',
//         backgroundImage: 'linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .25)), url(' + RUSTAVELI_JPG + ')'
//         // boxShadow: '75px 0px 75px 0px rgba(0, 0, 0, .25)'
//       }
//     },
//     '@media only screen and (max-height: 700px) and (max-width: 1225px)': {
//       alignItems: 'flex-end',
//       paddingBottom: `${60 / 16}em`
//     }
//   },

//   heading: {
//     proto: Heading,
//     props: {
//       text: 'rustaveli',
//       position: 'relative'
//     },
//     style: {
//       '@media only screen and (min-width: 1225px)': {
//         borderTopRightRadius: `${40 / 16}em`,
//         borderBottomRightRadius: `${40 / 16}em`,
//         padding: `${26 / 16}em ${26 / 16}em ${26 / 16}em ${10 / 16}em`
//       },
//       '@media only screen and (max-width: 1225px)': {
//         display: 'flex',
//         flexFlow: 'column-reverse',
//         alignItems: 'center',
//         gap: `${50 / 50}em`

//       }
//     }
//   }
// }

// export default {
//   proto: Box,
//   props: {
//     position: 'relative'
//   },
//   style,

//   Sololaki,
//   Rustaveli,
//   logo,
//   logo2
// }
