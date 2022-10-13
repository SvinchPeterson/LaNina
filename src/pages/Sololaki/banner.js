'use strict'
import { keyframes } from '@emotion/css'

import { TitleCaption } from '../../components'
import SOLOLAKI_JPG from '../../assets/images/residence/sololaki/residencee.jpg'

export const animTitle = keyframes`
  from {
    height: 0;
    opacity: 0;
    transform: scale(.9);
  }
  to {
   height: 100px;
   opacity: 1;
   transform: scale(1);
  }
`
export const animTitle2 = keyframes`
  from {
    height: 0;
    opacity: 0;
    transform: scale(.9);
  }
  to {
   height: 65px;
   opacity: 1;
   transform: scale(1);
  }
`

export const animCaption = keyframes`
  from {
    letter-spacing: 8.5px;
    opacity: 0;
  }
  to {
    letter-spacing: 10px;
    opacity: 1;
  }
`

export const animImage = keyframes`
  from {
    background-position: top left;,
    opacity: 0;

  }
  to {
    background-position: bottom left;
    opacity: 1;
  }
`

export const animImage2 = keyframes`
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
`

export const animAfter = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
const title = {
  extend: TitleCaption,
  props: {
    position: 'absolute',
    top: '35%',
    right: '20%',
    height: `${135 / 16}em`,
    '@mobileL': {
      top: '40%',
      right: '50%',
      transform: 'translate(50%, -50%)'
    },
    '@mobileM': { height: `${90 / 16}em` },
    '@mobileXS': { height: `${80 / 16}em` },

    style: {
      minWidth: 'fit-content'
    },

    title: {
      fontWeight: '400',
      fontSize: 'H',
      style: {
        whiteSpace: 'nowrap',
        textShadow: '1px -1px 1px rgba(0, 0, 0, 1)',
        overflow: 'hidden',
        animationName: animTitle,
        animationDuration: '2.3s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)',
        animationDelay: '0s',
        '@media only screen and (max-width: 560px)': { animationName: animTitle2 }
      },
      '@mobileM': {
        fontSize: 'G',
        fontWeight: '900',
        height: `${65 / 48}em`
      },
      '@mobileXS': { fontSize: 'F' }
    },

    caption: {
      padding: '0 C 0 0',
      color: 'cream2',
      style: {
        animationName: animCaption,
        animationDuration: '2.3s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.83,.67)',
        marginTop: 'auto'
      },
      '@mobileM': {
        padding: '0 0 0 0',
        margin: 'auto 0 0 0'
      },
      '@mobileXS': { fontSize: 'A' }
    }
  }
}

const image = {
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom left',
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      display: 'block',
      background: 'radial-gradient(rgba(0, 0, 0, .45), rgba(0, 0, 0, .7))'
    },
    style: {
      backgroundRepeat: 'no-repeat',
      animationName: animImage,
      animationDelay: '.1s',
      animationDuration: '3s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)',
      backgroundAttachment: 'fixed',
      '@media only screen and (max-width: 1366px)': {
        backgroundAttachment: 'initial',
        animationName: animImage2,
        animationDelay: '-1s',
        animationDuration: '8s'
      }
    }
  }
}

const props = {
  minWidth: '100%',
  minHeight: '100%',
  position: 'relative',
  padding: '0 0 F2 0',
  background: 'radial-gradient(rgba(0 ,0 , 0, .8), rgba(0 , 0, 0, .95))',
  style: {
    overflow: 'hidden',
    ':before': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .45))',
      position: 'absolute',
      zIndex: '30',
      bottom: '0',
      pointerEvents: 'none'
    },
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
      opacity: '0',
      position: 'absolute',
      animationName: animAfter,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out',
      // zIndex: '30',
      pointerEvens: 'none'
    }
  }
}

export const banner = {
  tag: 'section',
  props,
  attr: { id: 'banner' },

  image
  // title
}
