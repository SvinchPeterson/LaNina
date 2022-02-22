'use strict'

const styleService = {
  fontFamily: 'Avenir Next',
  // border: '2px solid red',
  h4: {
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: '2px',
    opacity: '.55'
    // border: '2px solid blue'
  },
  p: {
    // border: '5px solid green',
    maxWidth: '400px',
    fontWeight: 500,
    opacity: '.35',
    letterSpacing: '.25px'
  }

}

export default {
  '> div': styleService
}
