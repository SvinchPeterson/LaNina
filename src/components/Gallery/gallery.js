import { Box, Link, Img } from 'smbls'
import { keyframes } from '@emotion/css'
import { NavigationArrows } from '../NavigationArrows'
import LEFT_ARROW_PNG from '../../assets/icons/left-arrows2.png'
import RIGHT_ARROW_PNG from '../../assets/icons/right-arrows.png'
import BACK_PNG from '../../assets/icons/arrowBack.png'

export const opacities = keyframes`
  from {
    opacity: 0;
    transform: scale(.95);
  }
  to {
   opacity: 1;
   transform: scale(1);
  }
`

const back = {
  proto: Link,
  props: {
    gap: 'Z',
    position: 'absolute',
    top: '-C',
    left: 'A',
    href: '#apartments',
    color: 'cream2',
    flexAlign: 'center center',
    padding: 'Z',
    css: {
      textDecoration: 'none',
      '&:hover > span': { opacity: '1' },
      '&:hover > img': { opacity: '1' }
    }
  },

  // class: {
  //   show: (element, state) => state.activeTab
  //     ? {
  //       opacity: 1,
  //       transition: 'opacity 1.8s ease-in-out .8s'
  //     }
  //     : { opacity: 0 },
  //   show2: (element, state) => state.back
  //     ? {
  //       visibility: 'visible'
  //     }
  //     : { visibility: 'hidden' }
  // },

  on: {
    click: (event, element, state) => {
      state.update({ activeTab: false })
    }
  },

  icon: {
    proto: Img,
    props: {
      boxSize: '- A1',
      src: BACK_PNG,
      css: {
        opacity: '.65',
        transition: 'opacity .1s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  },
  span: {
    props: {
      text: 'APARTMENTS',
      fontSize: 'Y',
      '@tabletL': {
        fontSize: 'Z'
      },
      css: {
        letterSpacing: '1px',
        opacity: '.7',
        transition: 'opacity .15s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  }
}

const book = {
  proto: Link,
  props: {
    color: 'cream2',
    position: 'absolute',
    padding: 'Z A',
    fontSize: 'Z',
    width: 'fit-content',
    top: '-C1',
    right: 'B',
    css: {
      zIndex: '30',
      textDecoration: 'none',
      textTransform: 'uppercase',
      '&:hover > span': { opacity: 1 }
    }
  },
  attr: { target: '_blank' },
  span: {
    proto: Box,
    text: 'BOOK',
    props: {
      css: {
        opacity: '.7',
        transition: 'opacity .1s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  }
}

const navArrows = {
  proto: NavigationArrows,
  props: {
    margin: '0 0 -D 0',
    gap: 'B',
    css: {
      zIndex: '40',
      alignSelf: 'flex-end',
      '&:before': {
        height: '70%',
        background: 'radial-gradient(rgba(248, 241, 227, .8), rgba(248, 241, 227, .35))'
      }
    }
  },
  ...[
    {
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage + 1
          })
          if (activeImage >= 8) {
            state.update({ activeImage: 0 })
          }
        }
      },
      props: { arrow: { src: LEFT_ARROW_PNG } }
    },

    {
      on: {
        click: (event, element, state) => {
          const { activeImage } = state
          state.update({
            activeImage: activeImage - 1
          })
          if (activeImage <= 0) {
            state.update({ activeImage: 8 })
          }
        }
      },
      props: { arrow: { src: RIGHT_ARROW_PNG } }
    }
  ]
}

export const Gallery = {
  proto: Box,

  props: {
    position: 'relative',
    boxSize: 'H I',
    margin: '0 D 0 auto',
    flexAlign: 'flex-start center',
    css: { alignSelf: 'center' }
  },

  back,
  book,
  navArrows,
  imageContainer: {
    style: { transition: 'all 3s ease-in-out' },
    class: {
      show: (element, state) => state.activeTab === element.key
        ? {
          trasform: 'scale(1)',
          opacity: 1
          // animationName: opacities,
          // animationDuration: '.6s',
          // animationTimingFunction: 'cubic-bezier(.17,.67,.99,1)'
        }

        : {
          trasform: 'scale(.95)',
          opacity: 1
        }
    }
  }
}
