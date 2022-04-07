'use strict'
export const styleCheck = {
  display: 'none',
  '&:checked ~ label > div:first-child': { width: '50%' },
  '&:checked ~ label > div:last-child': { width: '100%' }

}
export const styleMenuIcon = {
  cursor: 'pointer',
  '> div': { transition: 'width .5s ease-in-out' }
}
export const styleLangs = {
  textTransform: 'uppercase',
  width: `${200 / 16}em`,
  '> div': { cursor: 'pointer' },
  '> div:hover': { opacity: 1, fontWeight: 700 }
}

export const styleCall = {
  cursor: 'pointer',
  '> span': {
    opacity: 0,
    whiteSpace: 'nowrap'
  },
  '&:hover > span': { opacity: 1 }
}
export default {
  boxSizing: 'border-box',
  zIndex: 1000
}
// const styleCheck = {
//   display: 'none',

//   '&:checked ~ label': {
//     padding: `20px`
//   },
//   '&:checked ~ label > div:first-child': { width: `${10 / 16}em` },
//   '&:checked ~ label > div:last-child': { width: `${30 / 16}em` },
//   '&:checked ~ label > div': { opacity: 1 }

// }

// const styleMenuIcon = {
//   cursor: 'pointer',
//   transition: 'all .2s linear',
//   borderRadius: '100%',
//   '&:hover > div': { opacity: 1 },
//   '> div': {
//     width: '100%',
//     height: `${5 / 16}em`,
//     transition: 'width .5s ease-in-out',
//     borderRadius: '30px',
//     opacity: 1
//   }
// }

// const styleLangs = {
//   textTransform: 'uppercase',
//   transition: 'all .3s ease-in-out',
//   cursor: 'pointer',
//   height: 'fit-content',
//   fontWeight: 500,
//   '> a:hover': { color: 'rgba(244, 233, 217, .85)' },
//   '@media only screen and (max-width: 768px)': { top: '200px' }
// }

// const styleCall = {
//   opacity: 1,
//   cursor: 'pointer',
//   display: 'block',
//   borderRadius: '100%',
//   background: 'radial-gradient(rgba(244, 233, 217, 0), rgba(244, 233, 217, 0))',
//   transition: 'all .2s ease-in-out',
//   position: 'relative',

//   '&:hover': { opacity: 0.85 },
//   '&:hover::after': { opacity: 0.85 },

//   '&::after': {
//     content: '"+995 571 017 170"',
//     disply: 'block',
//     position: 'absolute',
//     top: `${10 / 18}em`,
//     left: `${50 / 18}em`,
//     width: '180px',
//     pointerEvents: 'none',

//     fontSize: `${18 / 16}em`,
//     fontWeight: 500,
//     opacity: 0,
//     transition: 'all .3s ease-in-out',
//     '@media only screen and (max-width: 1024px)': {
//       top: `${45 / 18}em`,
//       left: `-${120 / 18}em`
//     }
//   }
// }

// export default {
//   width: '100%',
//   position: 'fixed',
//   height: 'fit-content',
//   top: '0px',
//   zIndex: 1000,
//   boxSizing: 'border-box',
//   // mixBlendMode: 'difference',
//   padding: `30px 0`,
//   border: '4px solid red',
//   '@media only screen and (max-width: 1225px)': {
//     fontSize: '30px'
//   },

//   '> input': styleCheck,
//   '> label': styleMenuIcon,
//   '> span': styleCall,
//   '> div': styleLangs
// }
