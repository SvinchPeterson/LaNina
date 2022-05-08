'use strict'

import { Box, Img } from '@symbo.ls/symbols'

// import UP_ARROW_PNG from '../../assets/icons/up-arrowCream.png'
import UP_ARROW_PNG from '../../assets/icons/up-arrows2.png'
import DOWN_ARROW_PNG from '../../assets/icons/down-arrow2.png'
import LEFT_ARROW_PNG from '../../assets/icons/left-arrowCream.png'
import RIGHT_ARROW_PNG from '../../assets/icons/right-arrowCream.png'

export const navButtons = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '63%',
    right: `${80 / 16}em`,
    flexFlow: 'column',
    gap: 'W'
  },
  style: {
    transform: 'translate(50%, -50%)',
    '> button': { cursor: 'pointer' }
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      padding: 'A1 Z2'
    },
    style: {
      border: 'none',
      // background: 'radial-gradient(rgba(42, 81, 61, .15),rgba(42, 81, 61, .25))',
      background: 'radial-gradient(rgba(42, 81, 61, .5),rgba(42, 81, 61, .7))',
      backdropFilter: 'blur(10px)',
      // background: 'radial-gradient(rgba(168, 98, 63, .15), rgba(168, 98, 63, .25))',
      // border: '1.5px solid rgba(168, 98, 63, 1)',
      // '&:hover': { background: 'radial-gradient(rgba(244, 233, 217, .35), rgba(168, 98, 63, .45))' },
      '> img': { opacity: '1' }
    }
  },
  ...[
    {
      style: {
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: UP_ARROW_PNG,
          boxSize: 'B '
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
      style: {
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px'
      },
      image: {
        proto: [Img, Box],
        props: {
          src: DOWN_ARROW_PNG,
          boxSize: 'B '
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

      // on: {
      //   click: (event, element, state) => {
      //     const { activeImage } = state
      //     state.update({
      //       activeImage: activeImage === (element.parent.parent.gallery.length + 1) ? 0 : activeImage + 1
      //     })
      //     if (activeImage === element.parent.gallery.length) {
      //       state.update({
      //         activeImage: activeImage === element.parent.gallery.length - 2
      //       })
      //     }
      //   }
      // }
    }
  ]
}

export const navButtons2 = {
  proto: Box,
  props: {
    position: 'absolute',
    top: '57%',
    left: `50%`,
    flexFlow: 'row',
    flexAlign: 'center space-between',
    gap: 'B',
    padding: ''
  },
  style: {
    zIndex: '200',
    transform: 'translate(-50%, -50%)',
    display: 'none',
    height: 0,
    width: '101%',
    '@media only screen and (max-width: 1225px)': {
      display: 'flex'
    }
  },

  childProto: {
    proto: Box,
    tag: 'button',
    props: {
      flexAlign: 'center center'
    },
    style: {
      // background: 'radial-gradient( rgba(168, 98, 63, 1), rgba(168, 98, 63, 1))',
      background: 'radial-gradient(rgba(42, 81, 61, .55),rgba(42, 81, 61, .65))',
      backdropFilter: 'blur(0px)',
      cursor: 'pointer'
    },
    image: {
      proto: [Img, Box],
      props: { boxSize: 'A1' }
    }
  },
  ...[
    {
      props: { padding: 'C2 C C2 A' },
      style: {
        borderTopRightRadius: '70px',
        borderBottomRightRadius: '70px',
        border: 'none'
        // border: '1.5px solid rgba(168, 98, 63, 1)',
        // borderLeft: 'none'
      },
      image: {
        proto: [Img, Box],
        props: { src: LEFT_ARROW_PNG }
      }
    },

    {
      props: { padding: 'C2 A C2 C' },
      style: {
        borderTopLeftRadius: '70px',
        borderBottomLeftRadius: '70px',
        // border: '2px solid rgba(168, 98, 63, 1)',
        // borderRight: 'none'
        border: 'none'
      },
      image: {
        proto: [Img, Box],
        props: { src: RIGHT_ARROW_PNG }
      }
    }
  ]
}
