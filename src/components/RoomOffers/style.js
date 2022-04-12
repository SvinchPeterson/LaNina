'use strict'

export const styleHeader = {
  textTransform: 'uppercase',
  letterSpacing: '.5px',
  '> button': {
    background: 'transparent',
    opacity: '.55'
  }
}
export const styleOffers = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: `${10 / 16}em`,
  columnGap: `${60 / 16}em`,
  fontWeight: '400',
  letterSpacing: '.5px',
  '> span': {
    fontSize: `${15 / 16}em`
  }
}

export default {
  boxSizing: 'border-box',
  borderTop: '5px solid rgba(168, 98, 63, 1)'

}
// const styleHeader = {
//   // border: '2px solid green',
//   h5: {
//     fontWeight: 700,
//     textTransform: 'uppercase',
//     letterSpacing: '1.3px',
//     wordSpacing: '6.2px',
//     color: 'rgba(0, 0, 0, .45)',
//     fontSize: `${15 / 16}em`

//   },

//   button: {
//     background: 'transparent',
//     // border: '1.5px solid rgba(0, 0, 0, .1)',
//     cursor: 'pointer',
//     borderRadius: '30px',
//     '&:hover > img': {
//       background: 'rgba(0, 0, 0, .5)'
//     },
//     // background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(0, 0, 0, .0))',

//     img: {
//       display: 'block',
//       borderRadius: '30px',
//       width: '30px',
//       height: '3px',
//       background: 'rgba(0, 0, 0, .3)'

//     }
//   }
// }

// const styleOffers = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(2, 1fr)',
//   rowGap: '0px',
//   columnGap: '0px',
//   transition: 'all .3s linear',
//   // border: '2px solid blue',

//   '> span': {
//     color: 'rgba(0, 0, 0, .3)',
//     transition: 'all .3s ease-in-out',
//     fontSize: '14.5px',
//     letterSpacing: '.8',
//     fontWeight: 500,
//     height: 'fit-content'
//     // border: '1px solid red'
//   }
// }

// export default {
//   zIndex: 50,
//   // borderTop: '5px solid rgba(168, 98, 63, 1)',
//   border: '5px solid red',
//   overflow: 'hidden',
//   boxSizing: 'border-box',

//   '> header': styleHeader,
//   '> div': styleOffers
// }
