'use strict'
import { keyframes } from '@emotion/css'

import { TitleCaption } from '../../components'
import SOLOLAKI_JPG from '../../assets/images/sololaki/entrence2.jpg'

export const animTitle = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
   height: 100px;
   opacity: 1;
  }
`

export const animCaption = keyframes`
  from {
    letter-spacing: 9px;
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
    right: '20.5%',
    height: `${120 / 16}em`,
    '@mobileM': {
      top: '40%',
      right: '0',
      left: '50%'
    },
    css: {
      whiteSpace: 'nowrap',
      minWidth: 'fit-content',
      '@media only screen and (max-width: 560px)': { transform: 'translate(-50%, -50%)' }
    },

    title: {
      css: {
        overflow: 'hidden',
        animationName: animTitle,
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        animationDelay: '.4s',
        '@media only screen and (max-width: 560px)': { textTransform: '' }
      },
      '@mobileM': {
        fontSize: 'F',
        fontWeight: '900'
        // fontWeight: '200'
      }
    },

    caption: {
      padding: '0 B 0 0',
      '@mobileM': {
        padding: '0 0 0 0',
        margin: 'auto 0 0 0'
      },
      css: {
        animationName: animCaption,
        animationDuration: '6s',
        animationDelay: '.4s',
        animationTimingFunction: 'ease-in-out',
        marginTop: 'auto',
        '@media only screen and (max-width: 560px)': {
          alignSelf: 'center'
        }
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
      animationDuration: '5s',
      animationTimingFunction: 'ease-in-out',
      backgroundImage: 'url(' + SOLOLAKI_JPG + ')',
      backgroundAttachment: 'fixed',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        display: 'block',
        background: 'radial-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .85))',
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
    '&:after': {
      content: '""',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0 , 0, 0, 1), rgba(0, 0, 0, 1))',
      opacity: '0',
      position: 'absolute',
      animationName: animAfter,
      animationDuration: '3s',
      animationTimingFunction: 'ease-in-out'
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
