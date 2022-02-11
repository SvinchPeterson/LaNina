'use strict'
import { heightGallery } from '../../animations'

export default {
  '> header': {
    minHeight: `${550 / 16}em`,

    '> a': { flex: 1 }
  },

  '> section': {
    position: 'relative',
    boxSizing: 'border-box',
    marginTop: '100px',
    '> div': {
      boxSizing: 'border-box',
      padding: '0px 50px',
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0
    }

  }
}

// export default {
// '> section': {

//   // minHeight: `${400 / 16}em`,
//   // display: 'grid',
//   // gridTemplateColumns: 'repeat(3, 1fr)',
//   // position: 'relative',
//   // // border: '10px solid red',

//   // input: {
//   //   position: 'absolute',
//   //   transform: 'translate(-50%, -50%)',
//   //   opacity: 1,
//   //   top: '700px'
//   // },
//   // label: {
//   //   // border: '10px solid blue'
//   // },
//   // '> div': {
//   //   // border: '10px solid blue',
//   //   height: 0,
//   //   gridRowStart: 2,
//   //   gridColumnStart: 1,
//   //   gridColumnEnd: 'span 3',
//   //   marginTop: '100px',
//   //   transition: 'all 1s ease-in-out',
//   //   display: 'flex',
//   //   // display: 'none',
//   //   position: 'relative',
//   //   '&::before': {
//   //     content: '""',
//   //     position: 'absolute',
//   //     width: '100%',
//   //     height: '10px',
//   //     // background: 'red',
//   //     top: '0',
//   //     zIndex: '40'
//   //     // boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 1)'
//   //   }

//   // },
//   // '> div > nav': {
//   //   flex: 1,
//   //   // height: '0',
//   //   display: 'flex',
//   //   justifyContent: 'center',
//   //   background: 'radial-gradient(rgba(0, 0, 0, .9), rgba(0, 0, 0, .9))',
//   //   overflow: 'hidden',
//   //   transition: 'all 3s ease-in-out',
//   //   position: 'relative',
//   //   border: '5px solid yellow'
//   // },
//   // 'input:checked + label + div': {
//   //   height: `${750 / 16}em`
//   //   // width: '100%'
//   //   // display: 'block'
//   // },
//   // 'input:checked + label + div > nav': {
//   //   height: '100%'
//   // },

//   // '> div > nav > div': {
//   //   flex: '1',
//   //   display: 'flex',
//   //   // position: 'absolute',
//   //   // top: 0,
//   //   // left: 0,
//   //   // minWidth: '100%',
//   //   // minHeight: '100%',
//   //   boxShadow: 'inset 4px 4px 5px 2px rgba(0, 0, 0, .4)',
//   //   '> span': {
//   //     // border: '5px solid red',
//   //     boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .6)'
//   //     // '&:hover': {
//   //     //   backgroundPosition: 'bottom left',
//   //     //   transform: 'scale(1.05)'
//   //     // }
//   //   }
//   // },

//   // 'input:checked + label > div': {
//   //   transform: 'scale(.9)',
//   //   boxShadow: '0px 0px 0px 0px red',
//   //   filter: 'grayscale(100%) brightness(30%)',
//   //   backgroundAttachment: 'fixed',
//   //   backgroundPosition: 'center right -100px',
//   //   transition: 'all .5s ease-in-out'
//   // },

//   // 'input:checked + label > img': { opacity: 1, transform: 'scale(.9)' },
//   // 'input:checked + label::after': {
//   //   opacity: 0
//   // },

//   // 'label:hover > div': {
//   //   backgroundPosition: 'bottom left',
//   //   transform: 'scale(1.05)',
//   //   transition: 'all 1s ease-in-out'
//   // },
//   // 'label:hover::after': {
//   //   opacity: 1,
//   //   transform: 'scale(1.2)'
//   // },
//   // '> div > nav > button': {
//   //   position: 'absolute',
//   //   top: '45%',
//   //   cursor: 'pointer',
//   //   background: 'transparent',
//   //   border: 'none'
//   // },
//   // '> div > nav > button > img': {
//   //   width: `${30 / 16}em`
//   // },

//   // '> div > nav > div > span': {
//   //   minHeight: '100%',
//   //   flex: 1,
//   //   backgorundOrigin: 'border-box',
//   //   backgroundSize: 'cover',
//   //   backgroundRepeat: 'no-repeat',
//   //   backgroundAttachment: 'fixed',
//   //   backgroundPosition: 'center',
//   //   filter: 'grayscale(50%)'
//   // },

//   // 'input:checked + label': {
//   //   boxShadow: 'inset 1px 1px 5px 1px rgba(0, 0, 0, .4)'
//   // }
// }
// }
