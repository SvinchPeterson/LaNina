'use strict'
import { keyframes } from '@emotion/css'

import { TitleCaption } from '../../components'
import SOLOLAKI_JPG from '../../assets/images/sololaki/entrence2.jpg'

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
  proto: TitleCaption,
  props: {
    position: 'absolute',
    top: '35%',
    right: '20%',
    height: `${135 / 16}em`,
    '@mobileL': {
      top: '40%',
      right: '50%'
    },
    '@mobileM': { height: `${90 / 16}em` },
    '@mobileXS': { height: `${80 / 16}em` },

    css: {
      whiteSpace: 'nowrap',
      minWidth: 'fit-content',
      '@media only screen and (max-width: 768px)': { transform: 'translate(50%, -50%)' },

      '&:after': {
        content: '""',
        width: '0',
        height: '100%',
        position: 'absolute',
        right: `${10 / 16}em`,
        top: `${-30 / 16}em`,
        boxShadow: '0px 0px 150px 40px rgba(0, 0, 0, .75)',
        transform: 'rotate(35deg)',
        zIndex: '10'
      }
    },

    title: {
      fontWeight: '100',
      fontSize: `${90 / 16}em`,
      css: {
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

      '@mobileM': {
        padding: '0 0 0 0',
        margin: 'auto 0 0 0'
      },
      '@mobileXS': { fontSize: 'A' },
      css: {
        animationName: animCaption,
        animationDuration: '4s',
        animationTimingFunction: 'cubic-bezier(.17,.67,.83,.67)',
        marginTop: 'auto'
      }
    }
  }
}

const image = {
  props: {
    boxSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    css: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
      animationName: animImage,
      animationDelay: '.1s',
      animationDuration: '3s',
      animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)',
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
      backgroundAttachment: 'fixed',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        display: 'block',
        background: 'radial-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .8))',
        animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
      },
      '&:after': {
        content: '""',
        width: `${100 / 16}em`,
        height: '100%',
        display: 'block',
        position: 'absolute',
        right: '0',
        top: '0',
        animationTimingFunction: 'cubic-bezier(.17,.61,.3,.71)'
      },
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
  background: 'radial-gradient(rgba(0 ,0 , 0, .8), rgba(0 , 0, 0, .95))',
  css: {
    overflow: 'hidden',
    '&:before': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5))',
      position: 'absolute',
      zIndex: '30',
      bottom: '0',
      pointerEvent: 'none'

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
      zIndex: '30',
      pointerEvent: 'none'
    }
  }
}

export const banner = {
  tag: 'section',
  props,
  attr: { id: 'banner' },

  image,
  title
}
