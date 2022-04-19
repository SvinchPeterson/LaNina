'use strict'
import { Box, Link, Text } from '@symbo.ls/symbols'

import { Logo, Logo2 } from '../../components'

const PropsLogo = {
  props: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  style: {
    transform: 'translate(-50%, -50%)'
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

const link = {
  proto: [Link, Box],
  style: {
    border: '3px solid red',
    flex: 1
  }
}

const sololaki = {
  proto: link
}

const rustaveli = {
  proto: link
}

const Container = {
  proto: Box,
  props: {
    flexFlow: 'row',
    boxSize: '100% 100%'
  },
  style: {
    position: 'relative'
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
