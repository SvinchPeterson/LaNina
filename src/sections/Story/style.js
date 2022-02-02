'use strict'

export default {
  boxSizing: 'border-box',
  padding: '0 100px',
  '> section': {
    minHeight: `${700 / 16}em`,
    flex: 1,
    position: 'relative',

    '> span': {
      flex: 1,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      filter: 'grayscale(50%) brightness(35%)'
    },

    '> p': {
      flex: 1,
      position: 'relative',
      '> span': {
        fontFamily: 'Avenir Next',
        position: 'absolute',
        top: 0,
        left: '-400px',
        padding: '100px',
        background: 'rgba(243, 231, 219, 1)',
        boxShadow: '-50px 50px 100px 20px rgba(243, 231, 219, .2)',
        lineHeight: '35px',
        color: 'rgba(0,0, 0, .4)'
      }
    }

  }
}
