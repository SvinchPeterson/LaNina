'use strict'

export const styleSectionLinks = {
  '> a': {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': { color: 'rgba(168, 98, 63, 1)' }
  }
}

export const styleSocialMedia = {
  '> a': {
    cursor: 'pointer',
    opacity: '.75'
  },
  '> a:hover': { opacity: 1 }
}

export default {
  zIndex: 100,
  boxSizing: 'border-box',
  background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
  backdropFilter: 'blur(8px)',
  transition: 'opacity .5s ease-in-out'
}

// const styleSectionLinks = {
//   transition: 'all .7s linear',
//   boxSizing: 'border-box',
//   zIndex: 0,
//   flex: 1,
//   '> a': {
//     textTransform: 'uppercase',
//     letterSpacing: '2px',
//     cursor: 'pointer',
//     transformOrigin: 'left',
//     transition: 'all .3s linear',
//     textDecoration: 'none',
//     fontWeight: 500,
//     '&:hover': {
//       color: 'rgba(168, 98, 63, .65)',
//       letterSpacing: '2.2px'
//     }
//   },

//   '@media only screen and (max-width: 1225px)': {
//     flexFlow: 'column',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingRight: 0,
//     paddingTop: '200px'
//   }
// }

// const styleSocialMedia = {
//   transition: 'all .5s linear',
//   transitionDelay: '.4s',
//   minWidth: '100%',
//   alignSelf: 'center',
//   flex: 1,

//   '> a': {
//     cursor: 'pointer',
//     opacity: '.55',
//     transition: 'all .3s linear',
//     '&:hover': {
//       opacity: '1'
//     },
//     '> img': {
//       width: `${26 / 16}em`
//     }
//   },

//   '@media only screen and (max-width: 1024px)': {
//     alignItems: 'center'
//   }
// }

// export default {
//   background: 'radial-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7))',
//   backdropFilter: 'blur(5px)',
//   position: 'fixed',
//   width: '100%',
//   height: '100%',
//   top: 0,
//   left: 0,
//   transition: 'all .5s linear',
//   zIndex: 200,
//   boxSizing: 'border-box',
//   border: '5px solid red',
//   '@media only screen and (max-width: 1225px)': { fontSize: '26px' },

//   '> nav': styleSectionLinks,
//   '> div': styleSocialMedia
// }
