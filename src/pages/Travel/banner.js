'use strict'
import { keyframes } from '@emotion/css'

import { banner } from '../Sololaki/banner'

import TBILISI_JPG from '../../assets/images/travel/tbilisi.jpg'

export const animCaption = keyframes`
  from {
    letter-spacing: 1px;
    opacity: 0;
  }
  to {
    letter-spacing: .5px;
    opacity: 1;
  }
`

export const travelBanner = {
  extend: banner,
  props: {
    background: 'none'
  },

  image: {
    props: {
      backgroundImage: 'url(' + TBILISI_JPG + ')',
      ':before': {
        background: 'radial-gradient(rgba(30, 40, 49, .5), rgba(30, 40, 49, .8))'
      }
    }

  },

  title: {
    props: {
      left: '15%',
      right: 'initial',
      '@mobileL': {
        right: 'initial',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      },
      '@mobileM': { height: `${110 / 16}em` },
      '@mobileXS': { height: `${110 / 16}em` },

      title: {
        text: 'BB TRAVEL',
        '@mobileXS': { fontSize: '' }
      },
      caption: {
        fontSize: 'Z',
        padding: '0',
        text: 'We Know better our country than anyone here.',
        fontWeight: '400',
        style: {
          letterSpacing: '.5px',
          animationName: animCaption,
          fontStyle: 'italic'
        },
        '@mobileXS': { fontSize: 'Z' }
      }
    }
  }
}
