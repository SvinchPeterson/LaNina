'use strict'
import { displays } from '../../animations'

export default {
  // border: '15px solid red',
  h4: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .55)',
    letterSpacing: '10px',
    fontWeight: '500'
  },
  '> section': {
    minHeight: `${400 / 16}em`,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    position: 'relative',
    // border: '12px solid green',

    input: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '650px',
      opacity: 0
    },

    '> div': {
      height: `${750 / 16}em`,
      gridRowStart: 2,
      gridColumnEnd: 'span 3',
      marginTop: '100px',
      display: 'none'
      // border: '10px solid yellow'
    },

    '> div > nav': {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      background: 'radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9))',
      // boxShadow: 'inset 5px 10px 14px 12px rgba(0, 0, 0, .6)',
      // border: '8px solid orange',
      overflow: 'hidden',
      position: 'relative',
      '&::before': {
        content: '""',
        width: '100%',
        height: `${5 / 16}em`,
        background: 'red',
        position: 'absolute',
        zIndex: '20',
        top: 0,
        left: 0,
        boxShadow: 'inset 5px 10px 14px 12px rgba(0, 0, 0, .6)'
      }
    },
    '> div > nav > button': {
      position: 'absolute',
      top: '45%',
      cursor: 'pointer',
      background: 'transparent',
      border: 'none'
    },
    '> div > nav > button > img': {
      width: `${30 / 16}em`
    },

    '> div > nav > div': {
      flex: '.9',
      display: 'flex',
      position: 'relative'
      // boxShadow: 'inset 5px 10px 14px 12px red'
      // border: '6px solid blue'
    },

    '> div > nav > div > span': {
      // position: 'absolute',
      // top: 0,
      // left: 0,
      minHeight: '100%',
      flex: 1,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      filter: 'grayscale(50%)'
      // boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .6)'
    },

    'input:checked + label': {
      boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .4)',
      '> img': { opacity: 1 },
      '> div': {
        transform: 'scale(.9)',
        boxShadow: 'none',
        filter: 'grayscale(100%) brightness(30%)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain'
        // backgroundPosition: 'top'
      }
    },

    'input:checked + label + div': {
      display: 'flex'
    },

    'div > section': {
      transition: 'all 2s ease-in-out',
      position: 'relative'
    },
    'input:checked + label + div > nav': {
      animationName: displays,
      animationDuration: '1s',
      transition: 'all 3s ease-in-out'
    }

  }
}
