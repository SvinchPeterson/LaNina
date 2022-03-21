'use strict'

const styleNavButtons = {
  position: 'absolute',
  right: '100px',
  bottom: '0px',
  // background: 'rgba(0, 0, 0, .05)',
  borderRadius: '30px',
  button: {
    background: 'transparent',
    transition: 'all .4s ease-in-out',
    '&:hover': {
      '> img': { opacity: '.5' }
    }
  },
  '> button > img': {
    display: 'block',
    width: '35px',
    opacity: '.3'
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
