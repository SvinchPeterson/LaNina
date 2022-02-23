'use strict'

const styleService = {
  fontFamily: 'Avenir Next',
  // border: '2px solid red',
  h4: {
    textTransform: 'uppercase',
    fontWeight: 700,
    letterSpacing: '1.4px',
    opacity: '.55'
    // border: '2px solid blue'
  },
  p: {
    // border: '5px solid green',
    maxWidth: '400px',
    fontWeight: 500,
    opacity: '.25',
    letterSpacing: '.25px',
    fontSize: '15px'

  }

}

export default {
  '> div': styleService
}
