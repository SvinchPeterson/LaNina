'use strict'

import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'
export const styleHeader = {
  backgroundImage: 'url(' + ORNAMENT_PNG + ')',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  '> div': {
    width: '100%',
    overflowX: 'auto',
    scrollBehavior: 'smooth'
  }
}

export const styleNavButtons = {
  '> button': {
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    opacity: '.85',
    '&:hover': { opacity: 1 }
    // border: '3px solid rgba(168, 98, 63, 1)'
    // background: 'rgba(244, 233, 217, .65)'
    // background: 'rgba(168, 98, 63, 1)'
  }
}
export default {
  border: '5px solid red',
  '> section': {
    minHeight: '700px',
    border: '10px solid green'

  }
}

// import ORNAMENT_PNG from '../../assets/images/sololaki/ornaments.png'

// export default {
//   marginTop: `${200 / 16}em`,
//   '> header': {
//     minHeight: `${700 / 16}em`,
//     overflow: 'hidden',
//     position: 'relative',
//     overflowY: 'auto',
//     backgroundImage: 'url(' + ORNAMENT_PNG + ')',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center center',
//     backgroundAttachment: 'fixed',
//     '@media only screen and (max-width: 1225px)': {
//       backgroundAttachment: 'initial'
//     }
//   },
//   '> header > div': {
//     minHeight: `${550 / 16}em`,
//     maxWidth: '100%',
//     overflowY: 'auto',

//     '> a': {
//       flex: 1,
//       minWidth: '800px'
//     }
//   },

//   '> section': {
//     position: 'relative',
//     boxSizing: 'border-box',
//     '> div': {
//       width: '100%'
//     }
//   }
// }
