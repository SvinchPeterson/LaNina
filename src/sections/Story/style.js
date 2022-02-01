'use strict'

export default {
  boxSizing: 'border-box',
  // paddingTop: '300px',
  border: '10px solid red',
  // background: 'black',
  // overflowX: 'hidden',
  '> section': {
    border: '10px solid blue',
    minHeight: `${700 / 16}em`,
    flex: 1,
    '> span': {
      border: '10px solid yellow',
      flex: 1,
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    },
    '> p': {
      border: '10px solid green',
      position: 'relative',
      flex: 1,
      '> span': {
        background: 'white',
        border: '10px solid purple',
        position: 'absolute',
        top: '50%',
        left: '-200px',
        transform: 'translate(-10%, -50%)'

      }
    }
  }
}
