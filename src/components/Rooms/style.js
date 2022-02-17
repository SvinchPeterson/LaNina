'use strict'

const styleNavButtons = {
  position: 'absolute',
  right: '20px',
  top: '45%',
  button: {
    background: 'transparent'
  },
  '> button > img': {
    display: 'block',
    width: '30px',
    height: '15px',
    opacity: '.8'
  }

}
export default {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  padding: '50px 80px',
  '> aside': {
    display: 'none'
  },
  '> span': styleNavButtons
}
