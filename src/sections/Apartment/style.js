'use strict'

export default {
  position: 'relative',
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
    gridTemplateColumns: 'repeat(3, 320px)',
    flexWrap: 'wrap',
    gap: '50px',
    position: 'relative',

    input: {
      position: 'absolute',
      // bottom: '-200px',
      display: 'none',
      transform: 'translate(-50%, -50%)'
      // top: '70%',
      // left: '50%'

      // left: 0
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
      display: 'flex'
    },
    article: {
      height: '800px',
      width: '100%',
      gridRowStart: 2,
      gridColumnEnd: 'span 3',
      display: 'none'
    }

  }
}
