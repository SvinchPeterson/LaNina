'use strict'

import { scaleSololakiBanner, zoomIn, letterSpacingIn, verticalMove, opacity, paddingOpacity } from '../../animations'

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
    paddingLeft: `${400 / 22}em`,
    animationName: verticalMove,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out',
    '@media only screen and (max-width: 1024px)': {
      paddingLeft: 0,
      animationName: opacity
    }
  }
}

export const styleBook = {
  textDecoration: 'none',
  position: 'fixed',
  animationDuration: '1.5s',
  animationTimingFunction: 'ease-in-out',
  borderTopRightRadius: '100px',
  borderBottomRightRadius: `100px`,
  '@media only screen and (min-width: 1024px)': {
    animationName: paddingOpacity
  },
  left: 0,
  bottom: '45%',
  padding: `${40 / 19}em ${40 / 19}em ${40 / 19}em ${20 / 19}em`,
  zIndex: 400,
  backdropFilter: 'blur(6px) brightness(100%)',
  background: 'rgba(42, 81, 61, .5)',
  color: 'rgba(244, 233, 217, .65)',
  fontSize: `${19 / 16}em`,
  lineHeight: '25px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontWeight: '500',
  textOrientation: ' upLeft',
  '&:hover': { color: 'rgba(244, 233, 217, 1)' },
  '&:hover > img': { opacity: 1 },
  '> img': {
    width: `${45 / 19}em`,
    opacity: '.65',
    animationName: opacity,
    animationDuration: '2s',
    animationTimingFunction: 'ease-in-out'
  },

  '@media only screen and (max-width: 1024px)': {
    bottom: 0,
    fontSize: `${40 / 16}em`,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: `${40 / 19}em ${40 / 19}em ${20 / 19}em ${40 / 19}em`,
    borderBottomRightRadius: `0`,
    borderTopLeftRadius: `150px`,
    borderTopRightRadius: '150px',
    gap: '10px'
  }

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
