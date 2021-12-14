'use strict'
import { displays, movingPhotos, clickEffect } from '../../animations'

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
      opacity: 0
    },
    'input:checked + label > div': {
      transform: 'scale(.9)',
      boxShadow: '0px 0px 0px 0px red',
      filter: 'grayscale(100%) brightness(30%)',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center right -100px'
    },
    'input:checked + label > img': { opacity: 1, transform: 'scale(.9)' },
    'input:checked + label::after': {
      opacity: 0
    },
    'label:hover > div': {
      backgroundPosition: 'bottom left',
      transform: 'scale(1.05)'
    },
    'label:hover::after': {
      opacity: 1,
      transform: 'scale(1.2)'
    },
    'label > div': {
      transition: 'all .8s ease-in-out'
    },
    'label::after': {
      content: '"Ballerina"',
      color: 'black',
      fontSize: '16px',
      position: 'absolute',
      bottom: '-60px',
      fontFamily: 'Avenir Next',
      letterSpacing: '4px',
      opacity: 0,
      transitionDelay: '.5s',
      transition: 'all 1s ease-in-out'
    },

    '> div': {
      height: `${750 / 16}em`,
      gridRowStart: 2,
      gridColumnEnd: 'span 3',
      marginTop: '100px',
      display: 'none'
    },

    '> div > nav': {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      background: 'radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9))',
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
      flex: '1',
      display: 'flex',
      position: 'relative'
    },

    '> div > nav > div > span': {
      minHeight: '100%',
      flex: 1,
      backgorundOrigin: 'border-box',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      filter: 'grayscale(50%)'
    },

    'input:checked + label': {
      boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .4)'
    }

  }
}
