'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

export default {
  // background: 'rgba(42, 81, 61, .8)',
  marginTop: '200px',
  '> header': {
    minHeight: `${550 / 16}em`,
    overflow: 'hidden',
    position: 'relative',
    overflowY: 'auto',
    backgroundImage: 'url(' + ORNAMENT_PNG + ')',
    backgroundSize: 'cover',
    // backgroundPosition: 'center center',
    // backgroundColor: 'rgba(42, 81, 61, 1)',
    // backgroundBlendMode: 'screen',
    // background: 'rgba(42, 81, 61, .8)',
    backgroundAttachment: 'fixed'
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
      flex: 1,
      minWidth: '800px'
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
