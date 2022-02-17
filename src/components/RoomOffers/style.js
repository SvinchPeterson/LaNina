'use strict'

const styleHeader = {
  h5: {
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    wordSpacing: '6px',
    color: 'rgba(0, 0, 0, .3)'
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
  rowGap: '12px',
  columnGap: '50px',
  transition: 'all .3s linear',

  '> span': {
    color: 'rgba(0, 0, 0, .3)',
    transition: 'all .3s ease-in-out',
    fontSize: '15px'
  }
}

export default {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  bottom: '30px',
  zIndex: 50,
  background: 'rgba(243, 231, 219, 1)',
  overflow: 'hidden',
  boxSizing: 'border-box',

  '> header': styleHeader,
  '> div': styleOffers
}
