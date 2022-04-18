'use strict'
import { brightness } from '../../animations'
import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki2.jpg'

export const styleBanner = {
  backgroundImage: 'linear-gradient(rgba(42, 81, 61, .25), rgba(0, 0, 0, .5)),url(' + SOLOLAKI_JPG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  animationName: brightness,
  animationDuration: '1s',
  animationTimingFunction: 'ease-in-out',
  '> div': {
    textTransform: 'uppercase'
  },
  h3: { letterSpacing: `${5 / 23}em` },
  p: {
    fontWeight: '300',
    letterSpacing: `${1.5 / 20}em`
  },

  '@media only screen and (max-width: 1225px)': {
    fontSize: `${30 / 16}em`,
    backgroundAttachment: 'initial',
    p: {
      fontWeight: 500,
      fontSize: `${30 / 30}em`,
      paddingTop: `${50 / 30}em`,
      color: '#FFD1BA'
    }
  }
}

export default {
  flex: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  scrollBehavior: 'smooth',
  animationName: brightness,
  animationDuration: '1s',
  animationTimingFunction: 'ease-in-out'
}

// import { scaleSololakiBanner, zoomIn, letterSpacingIn, verticalMove, opacity, paddingOpacity } from '../../animations'

// import SOLOLAKI_JPG from '../../assets/images/sololaki/sololaki.jpg'
// import BANNER_MOBILE_JPG from '../../assets/images/sololaki/banner-mobile.jpg'

// export const styleBanner = {
//   width: '100%',
//   height: '100%',
//   boxSizing: 'border-box',
//   position: 'relative',
//   overflow: 'hidden',
//   // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25),rgba(42, 81, 61, 1)),url(' + SOLOLAKI_JPG + ')',
//   backgroundImage: 'linear-gradient(rgba(42, 81, 61, .45),rgba(0, 0, 0, .65)),url(' + SOLOLAKI_JPG + ')',
//   backgroundSize: 'cover',
//   animationName: scaleSololakiBanner,
//   animationDuration: '3s',
//   animationTimingFunction: 'ease-in-out',
//   backgroundAttachment: 'fixed',
//   backgroundRepeat: 'no-repeat',
//   transition: 'background-position 1s ease-in-out',
//   '&:hover': { backgroundPosition: 'center center' },
//   '@media only screen and (max-width: 1225px)': {
//     backgroundImage: 'url(' + BANNER_MOBILE_JPG + ')',
//     backgroundPosition: 'center center',
//     fontSize: '26px',
//     backgroundAttachment: 'initial'
//   },

//   '> caption': {
//     whiteSpace: 'no-wrap',
//     textTransform: 'uppercase',
//     fontWeight: 700,
//     color: 'rgba(244, 233, 217, .85)',
//     fontSize: `${60 / 16}em`,
//     lineHeight: `1em`,
//     animationName: zoomIn,
//     animationDuration: '3s',
//     animationTiminFunction: 'ease-in-out',

//     '> span': {
//       fontSize: `${30 / 60}em`,
//       textTransform: 'uppercase',
//       letterSpacing: '2px',
//       animationName: letterSpacingIn,
//       animationDuration: '1.5s',
//       animationTimingFunction: 'ease-in-out',
//       fontWeight: 500
//     }
//   },

//   '> p': {
//     fontSize: `${22 / 16}em`,
//     fontStyle: 'italic',
//     color: 'rgba(168, 98, 63, 1)',
//     paddingLeft: `${400 / 22}em`,
//     animationName: verticalMove,
//     animationDuration: '2s',
//     animationTimingFunction: 'ease-in-out',
//     '@media only screen and (max-width: 1024px)': {
//       paddingLeft: 0
//       // animationName: opacity
//     }
//   }
// }

// export const styleBook = {
//   textDecoration: 'none',
//   position: 'fixed',
//   animationDuration: '1.5s',
//   animationTimingFunction: 'ease-in-out',
//   borderTopRightRadius: '100px',
//   borderBottomRightRadius: `100px`,
//   '@media only screen and (min-width: 1024px)': {
//     animationName: paddingOpacity
//   },
//   left: 0,
//   bottom: '45%',
//   padding: `${40 / 19}em ${40 / 19}em ${40 / 19}em ${20 / 19}em`,
//   zIndex: 400,
//   backdropFilter: 'blur(6px) brightness(100%)',
//   background: 'rgba(42, 81, 61, .75)',
//   color: 'rgba(244, 233, 217, .65)',
//   fontSize: `${19 / 16}em`,
//   lineHeight: '25px',
//   textTransform: 'uppercase',
//   cursor: 'pointer',
//   fontWeight: '500',
//   textOrientation: ' upLeft',
//   '&:hover': { color: 'rgba(244, 233, 217, 1)' },
//   '&:hover > img': { opacity: 1 },
//   '> img': {
//     width: `${45 / 19}em`,
//     opacity: '.85',
//     animationName: opacity,
//     animationDuration: '2s',
//     animationTimingFunction: 'ease-in-out'
//   },

//   '@media only screen and (max-width: 1024px)': {
//     bottom: 0,
//     fontSize: `${40 / 16}em`,
//     left: '50%',
//     transform: 'translateX(-50%)',
//     padding: `${40 / 19}em ${40 / 19}em ${20 / 19}em ${40 / 19}em`,
//     borderBottomRightRadius: `0`,
//     borderTopLeftRadius: `150px`,
//     borderTopRightRadius: '150px',
//     gap: '10px'
//   }

// }

// export default {
//   flex: 1,
//   overflowX: 'hidden',
//   overflowY: 'auto',
//   position: 'relative',
//   scrollBehavior: 'smooth',
//   behavior: 'smooth',
//   margin: '0 auto',
//   boxSizing: 'border-box'
// }
