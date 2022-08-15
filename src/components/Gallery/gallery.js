import { Box, Link, Img } from 'smbls'
import { keyframes } from '@emotion/css'

import { NavigationArrows, NavigationVerticalArrows } from '../NavigationArrows'
import { AmenitiesResponsive } from '../AmenitiesResponsive'
import { ApartmentDescription } from '../ApartmentDescription'

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

const amenities = {
  proto: AmenitiesResponsive,
  props: {
    display: 'none',
    '@tabletL': { display: 'block' }
  }
}

const description = {
  proto: ApartmentDescription,
  props: {
    position: 'absolute',
    top: '-C2',
    display: 'none',
    '@tabletL': { display: 'flex' },
    '@mobileM': {
      top: '100%',
      bottom: '0'
    },
    css: {
      '@media only screen and (max-height: 800px)': {
        top: '-60px'
      }
    }
  }
}

export const back = {
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
    '@tabletL': {
      right: '102%',
      top: '40%'
    },
    '@mobileL': {
      top: '80%',
      left: '0',
      padding: 'A'
    },
    css: {
      zIndex: '30',
      textDecoration: 'none',
      textTransform: 'uppercase',
      '&:hover > span': { opacity: 1 },
      '@media only screen and (max-width: 1366px)': {
        writingMode: 'vertical-rl',
        textOrientation: 'upright'
      },
      '@media only screen and (max-width: 768px)': {
        writingMode: 'initial',
        textOrientation: 'initial',
        backdropFilter: 'blur(10px)'
      }
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
    '@tabletL': {
      display: 'none'
    },
    '@mobileL': {
      display: 'flex',
      margin: 'auto',
      width: '100%'
    },
    css: {
      zIndex: '40',
      alignSelf: 'flex-end',
      '&:before': {
        height: '70%',
        background: 'radial-gradient(rgba(248, 241, 227, .8), rgba(248, 241, 227, .35))',
        '@media only screen and (max-width: 768px)': { display: 'none' }
      }
    }
  },
  childProto: {
    props: {
      '@mobileL': {
        background: 'green2',
        flexAlign: 'center center',
        boxSize: 'E2 D1'
      },
      css: {
        borderRadius: '0px',
        '@media only screen and (max-width: 768px)': {
          opacity: 1
        }
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
      props: {

        arrow: {
          src: LEFT_ARROW_PNG,
          '@mobileL': { boxSize: 'B2 ' }
        }
      },
      style: {
        '@media only screen and (max-width: 1366px)': {
          borderTopRightRadius: '100px',
          borderBottomRightRadius: '100px',
          paddingRight: '20px'
        }
      }
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
      props: {
        arrow: {
          src: RIGHT_ARROW_PNG,
          '@mobileL': { boxSize: 'B2 ' }
        }
      },
      style: {
        '@media only screen and (max-width: 1366px)': {
          borderTopLeftRadius: '100px',
          borderBottomLeftRadius: '100px',
          paddingLeft: '20px'
        }
      }
    }
  ]
}

const navVerticalArrows = {
  proto: NavigationVerticalArrows,
  props: {
    display: 'none',
    '@tabletL': {
      display: 'flex',
      position: 'absolute',
      top: '50%',
      right: '-D1'
    },
    '@mobileL': { display: 'none' },
    css: {
      '@media only screen and (max-width: 1366px)': { transform: 'translate(-50%, -50%)' }
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
      }
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
      }
    }
  ]
}

export const Gallery = {

  props: {
    position: 'relative',
    boxSize: 'H I',
    margin: '0 D 0 auto',
    flexAlign: 'flex-start center',
    '@tabletS': {
      boxSize: 'G1 H2'
    },
    '@mobileL': { width: '100%' },
    '@mobileS': { boxSize: 'G 100%' },
    css: {
      alignSelf: 'center',
      '@media only screen and (max-height: 800px)': {
        // maxHeight: '250px'
      }
    }
  },

  ba: {
    proto: back,
    props: {
      '@tabletL': { display: 'none' }
    }

  },
  book,
  navArrows,
  navVerticalArrows,
  imageContainer: {
    style: { transition: 'all 3s ease-in-out' },
    class: {
      show: (element, state) => state.activeTab === element.key
        ? {
          trasform: 'scale(1)',
          opacity: 1
        }

        : {
          trasform: 'scale(.95)'
        }
    }
  },
  description,
  amenities
}
