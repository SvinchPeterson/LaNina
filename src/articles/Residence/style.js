'use strict'

import BB_JPG from '../../assets/images/sololaki/BB.jpg'
import ENTRENCE_JPG from '../../assets/images/sololaki/entrence.jpg'

export const styleResidence = {
  backgroundImage: 'url(' + BB_JPG + ')',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  minHeight: `${700 / 16}em`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'top left 100px',
  p: {
    maxWidth: `${850 / 16}em`,
    letterSpacing: '.8px',
    fontWeight: 300,
    lineHeight: `${28 / 16}em`,
    boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)'
  }
}

export default {

}

// export const styleResidenceOrigin = {
//   position: 'relative',
//   minHeight: `${650 / 16}em`,
//   boxSizing: 'border-box',
//   paddingLeft: `${80 / 16}em`,
//   // backgroundImage: 'url(' + GREEN_LANINA_JPG + ')',
//   backgroundSize: 'contain',
//   backgroundRepeat: 'no-repeat',
//   transition: 'all 1s ease-in-out',
//   backgroundPosition: 'bottom 100px left 80px',
//   '@media only screen and (max-width: 1225px)': {
//     backgroundPosition: 'center center',
//     paddingLeft: 0,
//     backgroundSize: 'cover'
//     // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .25)), url(' + GREEN_LANINA_JPG + ')'
//   },

//   '> p': {
//     background: 'rgba(244, 233, 217, 1)',
//     color: 'rgba(0, 0, 0, .25)',
//     fontSize: `${15 / 16}em`,
//     maxWidth: `${800 / 15}em`,
//     boxShadow: '0px 0px 75px 0px rgba(244, 233, 217, .55)',
//     lineHeight: `${28 / 15}em`,
//     overflow: 'hidden',
//     fontWeight: 500,
//     '@media only screen and (max-width: 1225px)': {
//       background: 'transparent',
//       color: 'rgba(244, 233, 217, .85)',
//       boxShadow: 'none',
//       alignSelf: 'center',
//       fontSize: `${16 / 15}em`,
//       padding: `${60 / 26}em`,
//       backdropFilter: 'blur(1px)',
//       lineHeight: `${26 / 16}em`
//     }
//   }
// }

// export const styleEntrence = {
//   minHeight: `${700 / 16}em`,
//   // backgroundImage: 'url(' + ENTRENCE_JPG + ')',
//   transition: 'all 1s ease-in-out',
//   boxSizing: 'border-box',
//   backgroundPosition: 'bottom 100px right',
//   backgroundSize: 'cover',
//   '&:hover': { backgroundPosition: 'bottom 50px right' },

//   '@media only screen and (max-width: 1225px)': {
//     backgroundAttachment: 'initial',
//     backgroundPosition: 'initial'
//   },
//   '> p': {
//     maxWidth: 'fit-content',
//     fontSize: `${15 / 16}em`,
//     fontWeight: 500,
//     background: 'rgba(244, 233, 217, 1)',
//     img: {
//       width: `${20 / 16}em`
//     },
//     '@media only screen and (max-width: 1225px)': {
//       fontSize: `${18 / 15}em`,
//       minWidth: `100%`,
//       boxSizing: 'border-box',
//       padding: `${100 / 18}em ${0 / 18}em ${0 / 18}em ${100 / 18}em`,
//       marginBottom: '-150px'
//     }
//   }
// }

// export default {
//   // border: '8px solid red',
//   '> section': {
//     backgroundAttachment: 'fixed',
//     backgroundRepeat: 'no-repeat',
//     '@media only screen and (max-width: 1225px)': { backgroundAttachment: 'initial' },
//     '> p': {
//       letterSpacing: '.7px'
//     }
//   }
// }
