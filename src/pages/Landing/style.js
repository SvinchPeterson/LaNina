'use strict'

export const styleLink = {
  border: '10px solid green',
  flex: 1
}
export default {
  border: '10px solid red',
  flex: 1,
  boxSizing: 'border-box'
}

// import { brightness, coverLogoAnimation, coverLogoAnimation2 } from '../../animations'

// export const styleLink = {
//   flex: 1,
//   transition: 'flex 1s ease-in-out, background-image 1s ease-in-out, background-position 1s ease-in-out',
//   overflow: 'hidden',
//   backgroundRepeat: 'no-repeat',
//   position: 'relative',
//   backgroundSize: 'cover',
//   textDecoration: 'none',
//   color: 'rgba(244, 233, 217, 1)',
//   display: 'flex',

//   '@media only screen and (min-width: 1225px)': {
//     backgroundAttachment: 'fixed',
//     animationName: brightness,
//     animationDuration: '1.5s',
//     animationTimingFunction: 'ease-in-out',
//     '&:hover': { flex: 8 },
//     '&:hover > h3': { color: 'rgba(244, 233, 217, 1)' }
//   },

//   '@media only screen and (max-width: 1225px)': {
//     backgroundPosition: 'bottom center',
//     justifyContent: 'center',
//     alignItems: 'center',

//     '> h3': {
//       fontSize: `${65 / 18}em`,
//       color: 'rgba(244, 233, 217, .85)'
//     },
//     '> h3 > span': {
//       fontSize: `30px`,
//       top: '120%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)'
//     }
//   }
// }

// export const styleLogo = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%) scale(1.4)',
//   zIndex: 400,
//   pointerEvents: 'none',
//   opacity: 1,

//   '@media only screen and (min-width: 1225px)': {
//     animationName: coverLogoAnimation,
//     animationDuration: '1.5s',
//     animationTimingFunction: 'ease-in-out'
//   },
//   '@media only screen and (max-width: 1225px)': { opacity: 0 }
// }

// export const styleLogo2 = {
//   position: 'absolute',
//   zIndex: '400',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%) scale(1)',
//   opacity: 0,
//   pointerEvents: 'none',

//   '@media only screen and (max-width: 1225px)': {
//     opacity: 1,
//     animationName: coverLogoAnimation2,
//     animationDuration: '2s',
//     animationTimingFunction: 'ease-in-out',
//     transform: 'translate(-50%, -50%) scale(1.3)'
//   }
// }

// export const styleheading = {
//   textTransform: 'uppercase',
//   letterSpacing: '.7px',
//   color: 'rgba(244, 233, 217, 1)',
//   position: 'relative',
//   transition: 'color 1s ease-in-out',

//   '> span': {
//     textTransform: 'lowercase',
//     position: 'absolute',
//     whiteSpace: 'nowrap',
//     top: '25px',
//     left: '15px',
//     color: '#DD7C4C',
//     opacity: '.85'
//   }
// }

// export default {
//   flex: 1,
//   boxSizing: 'border-box',
//   animationName: brightness,
//   animationDuration: '2s',
//   animationTimingFunction: 'ease-in-out',
//   display: 'flex',
//   overflow: 'hidden',

//   '@media only screen and (max-width: 1225px)': { flexFlow: 'column' }
// }
