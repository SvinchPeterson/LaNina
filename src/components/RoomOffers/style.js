'use strict'

const styleHeader = {
  // border: '2px solid green',
  h5: {
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1.7px',
    wordSpacing: '6.2px',
    color: 'rgba(0, 0, 0, .4)'

  },

  button: {
    background: 'transparent',
    // border: '1.5px solid rgba(0, 0, 0, .1)',
    cursor: 'pointer',
    borderRadius: '30px',
    '&:hover > img': {
      background: 'rgba(0, 0, 0, .5)'
    },
    // background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .0))',

    img: {
      display: 'block',
      borderRadius: '30px',
      width: '30px',
      height: '3px',
      background: 'radial-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4))'

    }
  }
}

const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: '0px',
  columnGap: '45px',
  transition: 'all .3s linear',
  // border: '2px solid blue',

  '> span': {
    color: 'rgba(0, 0, 0, .25)',
    transition: 'all .3s ease-in-out',
    fontSize: '14.5px',
    letterSpacing: '.8',
    fontWeight: 500
  }
}

export default {
  fontFamily: 'Avenir Next',
  position: 'absolute',
  bottom: '-12px',
  zIndex: 50,
  // background: 'rgba(243, 231, 219, 1)',
  background: 'rgba(247, 239, 230, 1)',
  overflow: 'hidden',
  boxSizing: 'border-box',
  // border: '2px solid red',

  '> header': styleHeader,
  '> div': styleOffers
}
