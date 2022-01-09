'use strict'

export default {
  border: '10px solid red',
  '> section': {
    border: '10px solid green',
    '> img': {
      border: '10px solid yellow'
    },
    '> div': {
      border: '10px solid blue',
      '> h6': {
        border: '5px solid purple'
      },
      '> p': {
        border: '5px solid orangered'
      }
    }
  }
}
