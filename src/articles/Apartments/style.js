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

export const styleRooms = {
  border: '10px solid green',
  // flex: 1,
  // minHeight: `${700 / 16}em`,
  '> div': {
    // border: '10px solid orange'
    transition: 'all 3s ease-in-out'
  },
  '> div > div': {
    // border: '10px solid black',
    flex: 1,
    position: 'relative'
  },
  '> div > div > span': {
    // border: '10px solid yellow',
    position: 'absolute',
    width: '100%',
    height: '100%'

  }
}

export default {
  border: '5px solid red'
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
