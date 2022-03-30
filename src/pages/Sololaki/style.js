'use strict'

import { scaleSololakiBanner, zoomIn, letterSpacingIn, verticalMove, opacity } from '../../animations'

import BANNER_JPG from '../../assets/images/sololaki/banner.jpg'
import BANNER_MOBILE_JPG from '../../assets/images/sololaki/banner-mobile.jpg'
import { cream } from '../../colors'

export const styleBanner = {
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  backgroundImage: 'url(' + BANNER_JPG + ')',
  backgroundSize: 'cover',
  animationName: scaleSololakiBanner,
  animationDuration: '3s',
  animationTimingFunction: 'ease-in-out',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  transition: 'background-position 1s ease-in-out',
  '&:hover': { backgroundPosition: 'center center' },
  '@media only screen and (max-width: 1024px)': {
    backgroundImage: 'url(' + BANNER_MOBILE_JPG + ')',
    backgroundPosition: 'center center',
    fontSize: '26px'
  },

  '> caption': {
    whiteSpace: 'no-wrap',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: 'rgba(244, 233, 217, .65)',
    fontSize: `${60 / 16}em`,
    lineHeight: `1em`,
    animationName: zoomIn,
    animationDuration: '3s',
    animationTiminFunction: 'ease-in-out',

    '> span': {
      fontSize: `${42 / 60}em`,
      textTransform: 'capitalize',
      letterSpacing: '2px',
      animationName: letterSpacingIn,
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out',
      fontWeight: 500
    }
  },

  '> p': {
    fontSize: `${22 / 16}em`,
    fontStyle: 'italic',
    color: 'rgba(168, 98, 63, 1)',
    paddingLeft: `${400 / 20}em`,
    animationName: verticalMove,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    '@media only screen and (max-width: 1024px)': {
      paddingLeft: 0,
      animationName: opacity
    }
  }

  // '> span': {
  //   // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .5), rgba(0, 0, 0, .7)), url(' + COVER_JPG + ')',
  //   backgroundImage: 'url(' + COVER_JPG + ')',
  //   backgroundSize: 'cover',
  //   flex: 1,
  //   animationName: scaleSololakiBanner,
  //   animationDuration: '3s',
  //   animationTimingFunction: 'ease-in-out',
  //   backgroundAttachment: 'fixed',
  //   transition: 'all 2s ease-in-out',
  //   backgroundRepeat: 'no-repeat',
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   '@media only screen and (min-width: 1225px)': {
  //     '&:hover': {
  //       backgroundPosition: 'center center'
  //       // transition: 'all 2s ease-in-out'
  //     }
  //   }
  // },
  // '> caption': {
  //   fontWeight: '700',
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   zIndex: '100',
  //   transform: 'translate(-50%, -50%) scale(1)',
  //   color: 'rgba(244, 233, 217, .75)',
  //   fontSize: `${60 / 16}em`,
  //   textTransform: 'uppercase',
  //   animationName: zoomInB,
  //   animationDuration: '3s',
  //   animationTiminFunction: 'ease-in-out',
  //   whiteSpace: 'nowrap',
  //   pointerEvents: 'none',
  //   '> span': {
  //     fontSize: `${30 / 50}em`,
  //     textTransform: 'capitalize',
  //     animationName: letterSpacingIn,
  //     animationDuration: '1s',
  //     animationTimingFunction: 'ease-in-out',
  //     letterSpacing: '2px'

  //   },
  //   '@media only screen and (max-width: 480px)': {
  //     fontSize: `${40 / 16}em`
  //   }
  // },
  // '> p': {
  //   position: 'absolute',
  //   top: '60%',
  //   left: '50%',
  //   pointerEvents: 'none',
  //   color: 'rgba(168, 98, 63, 1)',
  //   fontSize: `${18 / 16}em`,
  //   fontFamily: 'DejaVu Sans',
  //   animationName: verticalMove,
  //   animationDuration: '1.5s',
  //   animationTimingFunction: 'ease-in-out',
  //   whiteSpace: 'nowrap',
  //   fontStyle: 'italic',
  //   '@media only screen and (max-width: 1024px)': {
  //     transform: 'translate(-50%, -50%)'
  //   },
  //   '@media only screen and (max-width: 480px)': {
  //     fontSize: `${16 / 16}em`,
  //     boxSizing: 'border-box'
  //   },
  //   '@media only screen and (max-width: 370px)': {
  //     fontSize: `${14 / 16}em`
  //   }

  // }
}

export default {
  flex: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  position: 'relative',
  background: cream,
  scrollBehavior: 'smooth',
  behavior: 'smooth',
  margin: '0 auto',
  boxSizing: 'border-box'
}
