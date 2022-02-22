'use strict'
import { heightGallery } from '../../animations'

export default {
  '> header': {
    minHeight: `${550 / 16}em`,
    overflow: 'hidden',

    '> a': { flex: 1 }
  },

  '> section': {
    position: 'relative',
    boxSizing: 'border-box',
    // marginTop: '100px',
    // minHeight: '850px',
    '> div': {
      // boxSizing: 'border-box',
      // padding: '0px 50px',
      // position: 'absolute',
      // width: '100%',
      // top: 0,
      // left: 0
    }
  }
}
