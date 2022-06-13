'use strict'
import { Box, Text } from '@symbo.ls/symbols'

import { opacity, positionOpacity2, letterSpacing2 } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
import SOLOLAKI_TABLET_JPG from '../../assets/images/sololaki/sololaki-tablet.jpg'

// const image = {
//   proto: Box,
//   props: {
//     position: 'absolute',
//     boxSize: '100% 100%',
//     top: '0',
//     left: '0'
//   },
//   style: {
//     boxSizing: 'border-box',
//     backgroundSize: 'cover',
//     // animationName: positionOpacity2,
//     // animationDuration: '2s',
//     // animationTimingFunction: 'ease-in-out',
//     position: 'relative',
//     backgroundPosition: 'center',
//     '@media only screen and (min-width: 1225px)': {
//       backgroundAttachment: 'fixed',
//       backgroundImage: 'url(' + SOLOLAKI_JPG + ')'
//     },
//     '@media only screen and (max-width: 1024px)': {
//       animation: 'none',
//       backgroundPosition: 'left'
//     },
//     '@media only screen and (max-width: 1225px)': {
//       backgroundImage: 'url(' + SOLOLAKI_JPG + ')'
//     },
//     '@media only screen and (max-width: 768px)': {
//       backgroundImage: 'url(' + SOLOLAKI_TABLET_JPG + ')'
//     },
//     '&:before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       background: 'linear-gradient(rgba(42, 81, 61, 1), rgba(42, 81, 61, 1))',
//       opacity: '.5'
//     }
//   }

// }

// const heading = {
//   proto: Box,
//   props: {
//     flexFlow: 'column',
//     flexAlign: 'flex-start center',
//     position: 'absolute',
//     padding: '0 0 E E',
//     gap: '0'
//   },
//   style: {
//     '@media only screen and (max-width: 768px)': {
//       padding: `0 0 ${50 / 16}em ${50 / 16}em`
//     },
//     '@media only screen and (max-width: 480px)': {
//       padding: `0 0 ${100 / 16}em 0`,
//       alignSelf: 'center'
//     }
//   },

//   title: {
//     proto: [Text, Box],
//     text: 'BB Residence',
//     props: {
//       color: 'cream 1',
//       fontWeight: '200',
//       fontSize: 'F'
//     },
//     style: {
//       whiteSpace: 'nowrap'
//     }
//   },
//   caption: {
//     proto: [Text, Box],
//     props: {
//       text: 'SOLOLAKI',
//       fontSize: 'A',
//       color: 'gold .85',
//       padding: '0 0 0 W2',
//       fontWeight: '900'
//     },
//     style: {
//       letterSpacing: '8px',
//       marginTop: '0px',
//       marginLeft: '0px'
//     }
//   }
// }

// const paragraph = {
//   tag: 'p',
//   proto: [Text, Box],
//   props: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     color: 'cream 1'
//   },
//   style: {
//     fontSize: '15px',
//     transform: 'translate(-50%, -50%)',
//     textTransform: 'uppercase',
//     fontWeight: 900,
//     letterSpacing: '5px',
//     whiteSpace: 'nowrap',
//     animationName: letterSpacing2,
//     animationDuration: '1.5s',
//     animationTimingFunction: 'ease-in-out',
//     '@media only screen and (max-width: 768px)': {
//       display: 'flex',
//       flexFlow: 'column',
//       fontSize: '16px',
//       lineHeight: `${23 / 16}em`,
//       textAlign: 'center'
//     },
//     '@media only screen and (max-width: 380px)': {
//       fontSize: '14px'

//     }
//   },
//   span: { text: 'where ordinary,' },
//   span2: { tag: 'span', text: 'becomes extraordinary' }
// }

// ----------------------------------------
const heading = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '40%',
    right: '10%',
    transform: 'translate(50%, -50%)'
  },
  span: {
    proto: [Text, Box],
    props: {
      text: 'sololaki',
      fontSize: 'A',
      color: 'orange2 .85',
      position: 'absolute',
      right: 'A2',
      top: '35px'
    },
    style: {
      alignSelf: 'flex-end',
      textTransform: 'uppercase',
      fontWeight: 900,
      marginBottom: '20px',
      letterSpacing: '12px'
    }
  },
  h1: {
    proto: [Text, Box],
    props: {
      text: 'BB Residence',
      color: 'gold',
      margin: '0'
      // fontSize: 'L'
    },
    style: {
      fontWeight: 100,
      letterSpacing: '-3px',
      fontSize: `${120 / 16}em`
    }
  }
}

const image = {
  proto: Box,
  props: {
    boxSize: '60% 100%',
    position: 'absolute',
    margin: '0 auto',
    bottom: '0',
    left: '0'
  },
  style: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // borderTopRightRadius: '300px',
    '@media only screen and (min-width: 1225px)': {
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')'
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      // background: 'linear-gradient(rgba(244, 233, 217, 0), rgba(244, 233, 217, .5))'
      background: 'linear-gradient(rgba(60,84, 72, .25), rgba(60,84, 72, 1))'
    }
  }
}
const container = {
  proto: Box,
  props: {
    boxSize: '100% 100%',
    position: 'relative',
    flexAlign: 'flex-start flex-end',
    flexFlow: 'column'
  },
  style: {
    overflow: 'hidden',
    // borderTopRightRadius: '300px',
    // animationName: opacity,
    // animationDuration: '3s',
    // animationTimingFunction: 'linear',
    margin: '0 auto',
    background: 'radial-gradient(rgba(60,84, 72, .8), rgba(60,84, 72, 1))'
    // border: '10px solid red'
  }
}

export const banner = {
  proto: container,

  image,
  heading
  // paragraph
}
