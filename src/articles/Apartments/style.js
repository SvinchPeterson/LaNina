'use strict'

import ORNAMENS_PNG from '../../assets/images/sololaki/ornaments.png'

export default {
  marginTop: `${200 / 16}em`,
  // border: '10px solid red',

  '> header': {
    border: '8px solid blue',
    minHeight: `${550 / 16}em`,
    // backgroundImage: 'radial-gradient(rgba(42, 81, 61, .25), rgba(42, 81, 61, .5)), url(' + ORNAMENS_PNG + ')',
    backgroundImage: 'url(' + ORNAMENS_PNG + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center left 200px',
    backgroundRepeat: 'no-repeat'
  },
  '> header > div': {
    border: '8px solid green',
    minHeight: `${550 / 16}em`,
    minWidth: '100%'
  }
}

// export default {
//   border: '5px solid red',
//   background: 'rgba(42, 81, 61, .8)',
//   '> header': {
//     minHeight: `${550 / 16}em`,
//     overflow: 'hidden',
//     position: 'relative',
//     overflowY: 'auto',
//     // background: 'rgba(42, 81, 61, .8)',
//     backgroundAttachment: 'fixed'
//   },
//   '> header > div': {
//     minHeight: `${550 / 16}em`,
//     maxWidth: '100%',
//     overflowY: 'auto',
//     // '@media only screen and (max-width: 1225px)': {
//     //   position: 'absolute',
//     //   right: '300px'

//     // },
//     // left: '-200px',
//     // '@media only screen and (max-width: 1225px)': {
//     //   // padding: '0 200px',
//     //   width: '100%',
//     //   '> a': { minWidth: '600px' }
//     // },

//     '> a': {
//       flex: 1
//     }
//   },

//   '> section': {
//     position: 'relative',
//     boxSizing: 'border-box',
//     // marginTop: '100px',
//     // minHeight: '850px',
//     '> div': {
//       width: '100%'
//     }
//   }
// }
