import { Box, Link, Img, Flex } from 'smbls'
import { keyframes } from '@emotion/css'

import { NavHorizontalArrowsCream, NavVerticalArrowsCream } from '../NavigationArrows'
import { AmenitiesResponsive } from '../AmenitiesResponsive'
import { ApartmentDescription } from '../ApartmentDescription'

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
  extend: AmenitiesResponsive,
  props: {
    display: 'none !important',
    '@tabletL': { display: 'block !important' }
  }
}

const description = {
  extend: ApartmentDescription,
  props: {
    position: 'absolute',
    top: '-C2',
    display: 'none',
    '@tabletL': { display: 'flex' },
    '@mobileM': {
      top: '100%',
      bottom: '0'
    },
    style: {
      '@media only screen and (max-height: 800px)': { top: '-60px' }
    }
  }
}

export const back = {
  extend: [Link, Flex],
  props: {
    gap: 'Z',
    margin: '-B2 auto - -',
    href: '#apartments',
    color: 'cream2',
    align: 'center center',
    padding: 'Z',
    '@tabletL': {
      position: 'absolute',
      background: 'green2',
      padding: 'Z1 A',
      top: 'B1',
      left: '0'
    },
    style: {
      color: 'rgba(248, 241, 227, 1) !important',
      textDecoration: 'none',
      borderBottomRightRadius: '6px',
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
    extend: Img,
    props: {
      boxSize: '- A1',
      src: BACK_PNG,
      style: {
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
      style: {
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
  extend: Link,
  props: {
    color: 'cream2',
    position: 'absolute',
    padding: 'Z A',
    fontSize: 'Z',
    width: 'fit-content',
    top: '-C',
    right: 'B',

    '@tabletL': {
      right: '102%',
      top: '40%'
    },

    '@mobileL': {
      bottom: '80%',
      top: '100%',
      left: 'Z',
      padding: 'A'
    },

    style: {
      zIndex: '30',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: ' rgba(248, 241, 227, 1) !important',
      '&:hover > span': { opacity: 1 },
      '@media only screen and (max-width: 1366px)': {
        writingMode: 'vertical-rl',
        textOrientation: 'upright'
      },
      '@media only screen and (max-width: 768px)': {
        writingMode: 'initial',
        textOrientation: 'initial'
        // backdropFilter: 'blur(10px)'
      }
    }
  },

  attr: { target: '_blank' },
  span: {
    extend: Box,
    text: 'BOOK',
    props: {
      style: {
        opacity: '.7',
        transition: 'opacity .1s ease-in-out',
        '@media only screen and (max-width: 1366px)': {
          opacity: 1
        }
      }
    }
  }
}

const navHorizontalArrows = {
  extend: NavHorizontalArrowsCream,
  props: {
    margin: '- A2 -C -',
    alignSelf: 'flex-end',
    '@tabletL': { display: 'none' },
    '@mobileL': {
      display: 'flex',
      alignSelf: 'center',
      minWidth: '101%',
      margin: '0',
      ':after': { display: 'none' }
    }
  },

  childExtend: {
    props: {
      '@mobileL': {
        background: 'green2',
        padding: 'A2 A1'
      }
    }
  },
  ...[
    {
      props: {
        '@mobileL': {
          style: { borderTopRightRadius: '10px', borderBottomRightRadius: '10px' }
        }
      },
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
      props: {
        '@mobileL': {
          style: { borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }
        }
      },
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

const navVerticalArrows = {
  extend: NavVerticalArrowsCream,
  props: {
    display: 'none',
    '@tabletL': {
      display: 'flex',
      alignSelf: 'center',
      margin: '- -D - auto'
    },
    '@mobileL': { display: 'none' },
    style: {
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
  extend: Flex,

  props: {
    position: 'relative',
    boxSize: 'H I',
    margin: '0 D 0 auto',
    align: 'flex-start center',
    '@tabletS': { boxSize: 'G1 H2' },
    '@mobileL': { width: '100%' },
    '@mobileS': { boxSize: 'G 100%' },
    style: { alignSelf: 'center' }
  },

  ba: {
    extend: back,
    props: {}
  },

  book,
  navHorizontalArrows,
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
