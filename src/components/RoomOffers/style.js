'use strict'

const styleHeader = {
  h5: {
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '6px',
    color: 'rgba(0, 0, 0, .4)'
  },

  button: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    span: {
      display: 'block',
      borderRadius: '20px',
      background: 'rgba(0, 0, 0, .3)'
    }
  }
}

const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '10px',
  '> span': { color: 'rgba(0, 0, 0, .3)' }
}

export default {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  bottom: 0,
  zIndex: 50,
  background: 'rgba(243, 231, 219, 1)',

  '> header': styleHeader,
  '> div': styleOffers
}
