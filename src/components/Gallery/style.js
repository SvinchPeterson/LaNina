'use strict'

const styleImage = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  transition: 'all 1s ease-in-out',
  backgroundAttachment: 'fixed',
  filter: 'brightness(80%) grayscale(20%)'
}

export default {
  flex: 1,
  position: 'relative',
  boxSizing: 'border-box',
  // padding: '100px',

  '> span': styleImage
}
