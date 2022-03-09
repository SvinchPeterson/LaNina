'use strict'

export default {
  // border: '5px solid red',
  '> header': {
    minHeight: `${550 / 16}em`,
    overflow: 'hidden',
    position: 'relative',
    overflowY: 'auto'
  },
  '> header > div': {
    minHeight: `${550 / 16}em`,
    maxWidth: '100%',
    overflowY: 'auto',
    // '@media only screen and (max-width: 1225px)': {
    //   position: 'absolute',
    //   right: '300px'

    // },
    // left: '-200px',
    // '@media only screen and (max-width: 1225px)': {
    //   // padding: '0 200px',
    //   width: '100%',
    //   '> a': { minWidth: '600px' }
    // },

    '> a': {
      flex: 1
    }
  },

  '> section': {
    position: 'relative',
    boxSizing: 'border-box',
    // marginTop: '100px',
    // minHeight: '850px',
    '> div': {
      width: '100%'
    }
  }
}
