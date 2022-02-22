'use strict'

const styleNavButtons = {
  position: 'absolute',
  right: '100px',
  bottom: '-5px',
  // background: 'rgba(0, 0, 0, .05)',
  borderRadius: '30px',
  button: {
    // background: 'transparent',
    // padding: '10px',
    borderRadius: '100%',
    border: '1.7px solid rgba(0, 0, 0, 0)',
    background: 'radial-gradient(rgba(0, 0, 0, 0), rgba(247, 239, 230, 0))',
    transition: 'all .4s ease-in-out',
    '&:hover': {
      // border: '1.7px solid rgba(0, 0, 0, .1)',
      // background: 'radial-gradient(rgba(0, 0, 0, .1), rgba(247, 239, 230, 0))',
      '> img': {
        opacity: '.7'
      }

    }
  },
  '> button > img': {
    display: 'block',
    width: '35px',
    // height: '20px',

    opacity: '.4'
  }
}
export default {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  padding: '120px 0px 60px 0px',
  '> aside': {
    display: 'none'
  },
  '> span': styleNavButtons
}
