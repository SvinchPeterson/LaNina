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
