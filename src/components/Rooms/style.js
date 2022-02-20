'use strict'

const styleNavButtons = {
  position: 'absolute',
  right: '20px',
  top: '42%',
  // border: '2px solid red',
  background: 'rgba(0, 0, 0, .05)',
  borderRadius: '30px',
  border: '1px solid rgba(0, 0, 0, .05)',
  '&:hover': {
    background: 'rgba(0, 0, 0, .03)'
  },
  button: {
    background: 'transparent'
  },
  '> button > img': {
    display: 'block',
    width: '25px',
    height: '15px',
    opacity: '.3'
  }

}
export default {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  // padding: '50px 80px',
  '> aside': {
    display: 'none'
  },
  '> span': styleNavButtons
}
