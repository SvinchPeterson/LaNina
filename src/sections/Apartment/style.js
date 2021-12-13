'use strict'
import { displays, positions } from '../../animations'

export default {
  // position: 'relative',
  h4: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .55)',
    letterSpacing: '10px',
    fontWeight: '500'
  },
  '> section': {
    minHeight: '400px',
    margin: '25px 0',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    flexWrap: 'wrap',
    position: 'relative',
    input: {
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '850px',
      opacity: 0
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

    'input:checked + label + article': {
      display: 'block'
    },
    article: {
      height: '750px',
      width: '100%',
      gridRowStart: 2,
      gridColumnEnd: 'span 3',
      marginTop: '100px',
      display: 'none'
    },
    'article > section': {
      transition: 'all 2s ease-in-out',
      position: 'relative'
      // opacity: 0
    },
    'input:checked + label + article > section': {
      animationName: displays,
      animationDuration: '2s',
      transition: 'all 2s ease-in-out'
    }

  }
}
