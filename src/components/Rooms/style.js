'use strict'

const styleNavButtons = {
  position: 'absolute',
  top: '50%',
  right: '70px',
  transform: 'translate(50%, -50%)',
  zIndex: 200,
  height: 'fit-content',

  // background: 'rgba(0, 0, 0, .05)',
  background: 'radial-gradient(rgba(244, 233, 217, .25), rgba(244, 233, 217, .5))',
  border: '2px solid rgba(168, 98, 63, .75)',
  borderRadius: '30px',
  // border: '5px solid red',
  button: {
    background: 'transparent',
    transition: 'all .4s ease-in-out',
    '&:hover': {
      '> img': { opacity: '1' }
    }
  },
  '> button > img': {
    display: 'block',
    width: '35px',
    opacity: '.65'
  }
}
export default {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  padding: '0px 0px 60px 0px',
  borderTop: '5px solid rgba(168, 98, 63, 1)',
  '> aside': {
    display: 'none'
  },
  '> span': styleNavButtons
}
