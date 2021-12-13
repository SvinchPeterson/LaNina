'use strict'
import { displays } from '../../animations'

export default {
  border: '15px solid red',
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
    border: '12px solid green',

    input: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '900px',
      opacity: 0
    },

    '> div': {
      height: `${750 / 16}em`,
      gridRowStart: 2,
      gridColumnEnd: 'span 3',
      marginTop: '100px',
      display: 'none',
      border: '10px solid yellow'
    },

    '> div > nav': {
      border: '8px solid orange',
      height: '100%',
      flex: 1,
      overflow: 'hidden',
      margin: '0 auto',
      position: 'relative'
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
      border: '6px solid blue',
      height: '100%'
    },

    '> div > nav > div > span': {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      filter: 'grayscale(50%)',
      boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .6)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },

    'input:checked + label': {
      boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .4)',
      '> img:last-child': { opacity: 1 },
      '> img:first-child': {
        transform: 'scale(.92)',
        boxShadow: 'none',
        filter: 'grayscale(100%) brightness(30%)'
      }
    },

    'input:checked + label + div': {
      display: 'block'
    },

    'div > section': {
      transition: 'all 2s ease-in-out',
      position: 'relative'
    },
    'input:checked + label + div > nav': {
      animationName: displays,
      animationDuration: '2s',
      transition: 'all 2s ease-in-out'
    }

  }
}
