'use strict'

import { Box, Img } from 'smbls'

import UP_ARROW_PNG from '../../assets/icons/up-arrows2.png'
import DOWN_ARROW_PNG from '../../assets/icons/down-arrow2.png'
import LEFT_ARROW_PNG from '../../assets/icons/left-arrows2.png'
import RIGHT_ARROW_PNG from '../../assets/icons/right-arrows.png'

export const NavButtons = {
  extend: Box,
  props: {
    position: 'absolute',
    top: '63%',
    right: `-B2`,
    flexFlow: 'column',
    gap: 'A',
    '@tabletL': { right: '-C' }
  },
  style: {
    transform: 'translate(50%, -50%)',
    '> button': { cursor: 'pointer' }
  },

  childExtend: {
    extend: Box,
    tag: 'button',
    props: { padding: 'A Z' },
    style: {
      border: 'none',
      background: 'none',
      '> img': {
        opacity: '.7',
        '@media only screen and (max-width: 1366px)': { opacity: 1 }
      },
      '&:hover > img': { opacity: '1' }
    }
  },
  ...[
    {
      style: {
        borderTopLeftRadius: `${25 / 16}em`,
        borderTopRightRadius: `${25 / 16}em`,
        borderBottom: 'none !important',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '40%',
          height: '1.5px',
          background: 'rgba(245, 245, 245, .5)',
          bottom: `${-10 / 16}em`,
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      },
      image: {
        extend: [Img, Box],
        props: {
          src: UP_ARROW_PNG,
          boxSize: '- A2',
          '@tabletL': { boxSize: '- B2' }
        },
        style: { transition: 'opacity .15s ease-in-out' }
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
      style: {
        borderBottomLeftRadius: `${25 / 16}em`,
        borderBottomRightRadius: `${25 / 16}em`,
        borderTop: 'none !important'
      },
      image: {
        extend: [Img, Box],
        props: {
          src: DOWN_ARROW_PNG,
          boxSize: '- A2',
          '@tabletL': { boxSize: '- B2' }
        },
        style: { transition: 'opacity .15s ease-in-out' }
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

export const NavButtons2 = {
  extend: Box,
  props: {
    height: '0',
    position: 'absolute',
    left: `50%`,
    flexFlow: 'row',
    flexAlign: 'center space-between',
    gap: 'B'
  },
  style: {
    // width: '100%',
    zIndex: '200',
    transform: 'translate(-50%, -50%)'
  },

  childExtend: {
    extend: Box,
    tag: 'button',
    props: {
      flexAlign: 'center center',
      background: 'green2 0'
    },
    style: {
      backdropFilter: 'blur(.5px)',
      cursor: 'pointer'
    },
    image: {
      extend: [Img, Box],
      props: {
        boxSize: '- A',
        '@tabletL': { boxSize: '- B' },
        '@mobileL': { boxSize: '- A1' }
      }
    }
  },
  ...[
    {
      props: { padding: 'C B1 C A' },
      style: {
        borderTopRightRadius: `${80 / 16}em`,
        borderBottomRightRadius: `${80 / 16}em`,
        border: 'none'
      },
      image: {
        extend: [Img, Box],
        props: { src: LEFT_ARROW_PNG }
      }
    },

    {
      props: { padding: 'C A C B1' },
      style: {
        borderTopLeftRadius: `${80 / 16}em`,
        borderBottomLeftRadius: `${80 / 16}em`,
        border: 'none'
      },
      image: {
        extend: [Img, Box],
        props: { src: RIGHT_ARROW_PNG }
      }
    }
  ]
}
